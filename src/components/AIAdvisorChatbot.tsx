import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { Bot, MessageSquareReply, Send, Sparkles } from "lucide-react";

type ResponseMode = "summary" | "detail" | "action";

type ContextSelections = {
  companySize?: string;
  industry?: string;
  priority?: string;
};

type AssistantResponse = {
  headline: string;
  intro: string;
  focusAreas: string[];
  actionSteps: string[];
  supportMenu: string[];
  followUps: string[];
  toneLabel: string;
  servicePitch: string;
};

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  assistantDetails?: AssistantResponse;
};

const quickPrompts = [
  "年商5億・サービス業。資金繰りの見直しを相談したい",
  "AIで売上管理のダッシュボード化を進めたい",
  "毎週の経営会議資料づくりを自動化する方法は？",
  "多拠点運営で情報が分断。90日で改善するには？",
];

const planHighlights = [
  {
    label: "30分のヒアリングで課題を棚卸し",
    description:
      "AIレポートのデモと粗利・キャッシュのボトルネックを同時に整理します。",
  },
  {
    label: "90日で意思決定ワークフローを定着",
    description:
      "管理会計・AIダッシュボード・実行会議体を一気通貫で伴走。",
  },
  {
    label: "資金調達と投資判断もサポート",
    description:
      "資金繰り予測と成長投資シナリオを可視化し、投資意思決定を後押し。",
  },
];

const responseModeOptions: { id: ResponseMode; label: string; description: string }[] = [
  {
    id: "summary",
    label: "要点",
    description: "重要ポイントを2〜3項目で即時に把握できます。",
  },
  {
    id: "detail",
    label: "詳細",
    description: "背景や評価基準を含めた丁寧な解説を返答します。",
  },
  {
    id: "action",
    label: "実行",
    description: "90日以内で進めるアクションプランを提示します。",
  },
];

const companySizeOptions = [
  "〜1億円",
  "1〜3億円",
  "3〜7億円",
  "7〜10億円未満",
];

const industryOptions = [
  "製造",
  "IT・SaaS",
  "サービス",
  "小売・EC",
  "専門職・士業",
];

const priorityOptions = [
  "キャッシュ改善",
  "売上拡大",
  "業務効率化",
  "AI導入・統合",
];

const priorityFocusMap: Record<string, string> = {
  キャッシュ改善: "資金繰りとキャッシュ創出",
  売上拡大: "売上成長と利益率改善",
  業務効率化: "意思決定時間の削減と自動化",
  "AI導入・統合": "生成AI活用とデータ統合",
};

const responseModeLabels: Record<ResponseMode, string> = {
  summary: "重点サマリー",
  detail: "詳細プラン",
  action: "実行ロードマップ",
};

const focusAreaActions: Record<string, Record<ResponseMode, string[]>> = {
  "資金繰りとキャッシュ創出": {
    summary: [
      "13週先までのキャッシュフローをAIで予測し、資金ショートの兆候が出る週を特定します。",
      "入出金ギャップを可視化し、支払いサイト調整や前倒し入金の打ち手を比較します。",
    ],
    detail: [
      "月次BS/PLデータを取り込み、キャッシュ変動要因をAIがランキングします。",
      "資金ショートが懸念される週には、支出削減・入金前倒し・短期調達の3案を提示します。",
      "金融機関との対話に使える資金繰りレポート案を並行して準備します。",
    ],
    action: [
      "Week1-2: 入出金データを接続し、13週ローリング予測と感度分析を構築。",
      "Week3-6: 粗利改善と固定費最適化のシナリオ比較で優先施策を確定。",
      "Week7-12: 金融機関連携と週次モニタリングを定例化し、改善効果を追跡。",
    ],
  },
  "売上成長と利益率改善": {
    summary: [
      "主要顧客・チャネル別に粗利インパクトを算出し、優先度の高いセグメントを特定します。",
      "営業プロセスのボトルネックをAIが抽出し、勝ち筋仮説の検証順序を整理します。",
    ],
    detail: [
      "受注率・単価・解約率を分解し、粗利貢献が大きい施策を優先順位付きで提示します。",
      "商談ログを解析し、勝ちパターンをテンプレート化してチームに共有します。",
      "実績差異レビューを定例化し、施策の効果検証を週次でフォローします。",
    ],
    action: [
      "Week1-3: 売上データとパイプライン情報を接続し、粗利ドライバー分析を実施。",
      "Week4-6: 優先セグメント向けの価値提案とオファー改善をABテスト。",
      "Week7-12: 商談レビューと勝ち筋フィードバックを自動レポート化し、定着支援。",
    ],
  },
  "意思決定時間の削減と自動化": {
    summary: [
      "週次レポート・会議資料を自動生成し、意思決定までの準備時間を短縮します。",
      "意思決定に必要なKPIを可視化し、確認フローをワンクリックに統一します。",
    ],
    detail: [
      "各部署のレポートフォーマットを統合し、AIでハイライトと差分解説を生成します。",
      "経営会議のアジェンダをテンプレート化し、意思決定ログを自動記録します。",
      "自動化で創出された時間を活用する優先プロジェクトを提案します。",
    ],
    action: [
      "Week1-2: 現行レポートと会議体を棚卸しし、テンプレートとAIプロンプトを設計。",
      "Week3-5: データ接続とワークフロー自動化を構築し、試行運用を開始。",
      "Week6-10: 定例会議での活用トレーニングと意思決定ログの可視化を定着化。",
    ],
  },
  "生成AI活用とデータ統合": {
    summary: [
      "会計・販売・Excelのデータを統合し、共通ダッシュボードで数値の一元管理を実現します。",
      "生成AIがアクションプランとToDoを提案し、各部門の議論を加速させます。",
    ],
    detail: [
      "主要システムと連携し、データクレンジングと指標定義を標準化します。",
      "部門別のユースケースを棚卸しし、優先順位の高いAIワークフローを実装します。",
      "セキュリティ・権限設計を整備し、運用ルールと教育コンテンツを提供します。",
    ],
    action: [
      "Week1-3: 利用中システムとデータ粒度を確認し、統合アーキテクチャを確定。",
      "Week4-7: 優先業務のAIワークフローを構築し、KPI連動のダッシュボードを公開。",
      "Week8-12: 定例レビューと運用体制のドキュメント化を支援し、内製化を促進。",
    ],
  },
};

const supportMenuLibrary: Record<string, string[]> = {
  "資金繰りとキャッシュ創出": [
    "資金繰りAIシミュレーションテンプレート",
    "金融機関向けハイライトレポートのドラフト",
    "キャッシュドライバー診断ワークショップ",
  ],
  "売上成長と利益率改善": [
    "粗利改善ダッシュボードのサンプル",
    "商談レビュー用ジェネレーティブノート",
    "施策優先度マトリクスと効果検証シート",
  ],
  "意思決定時間の削減と自動化": [
    "経営会議アジェンダのAIテンプレート",
    "自動レポート生成ワークフローの設計書",
    "部門横断の意思決定ログ管理シート",
  ],
  "生成AI活用とデータ統合": [
    "データ統合ロードマップと役割分担表",
    "プロンプト設計と権限管理のガイドライン",
    "AI活用トレーニングコンテンツのひな型",
  ],
};

const followUpSuggestions: Record<string, string[]> = {
  "資金繰りとキャッシュ創出": [
    "資金繰りシミュレーションの前提条件はどう設定すべき？",
    "銀行交渉で有利になる資料の作り方を教えて",
  ],
  "売上成長と利益率改善": [
    "粗利インパクトが大きい施策の試算方法は？",
    "営業プロセスごとのKPIをどうモニタリングする？",
  ],
  "意思決定時間の削減と自動化": [
    "週次会議のアジェンダ例をもう少し詳しく知りたい",
    "自動化に使うデータの整備レベルを確認したい",
  ],
  "生成AI活用とデータ統合": [
    "既存システムとの連携で注意すべきセキュリティ要件は？",
    "AI活用を社内で浸透させる研修方法は？",
  ],
};

const defaultSupportMenu = [
  "30分相談で現状データと意思決定フローを棚卸し",
  "AIレポートと管理会計テンプレートのサンプル共有",
  "優先課題に合わせた90日ロードマップの設計",
];

const defaultFollowUps = [
  "直近の粗利推移やキャッシュ状況を教えてください",
  "意思決定に時間がかかっている業務はありますか？",
  "理想とする意思決定スピードや体制を教えてください",
];

const defaultActionSteps = [
  "現状の課題や数値の推移を可能な範囲で教えてください。",
  "重要なKPI・意思決定プロセス・データ連携状況を整理しましょう。",
  "優先度の高いテーマから90日プランを一緒に設計します。",
];

const servicePitchLibrary: Record<string, string> = {
  "資金繰りとキャッシュ創出":
    "Strategy AIアドバイザリーでは、13週キャッシュ予測と資金繰り改善の伴走支援をご提供します。30分相談で現状を可視化し、必要に応じて仮診断レポートをご用意します。",
  "売上成長と利益率改善":
    "当社のレベニューオペレーション支援は、AIダッシュボードと商談レビューの設計を通じて粗利改善を90日で加速します。優先テーマは30分相談や仮診断で整理しましょう。",
  "意思決定時間の削減と自動化":
    "Strategy AIの伴走プログラムなら、会議体設計と自動レポート基盤の構築をセットで支援し、意思決定スピードを高めます。チャット内容をもとに30分相談をご案内します。",
  "生成AI活用とデータ統合":
    "生成AIとデータ統合の専門チームが、業務ユースケース設計から内製化トレーニングまで一気通貫で伴走します。仮診断レポートや資料ダウンロードでロードマップを具体化しましょう。",
};

const defaultServicePitch =
  "Strategy AIアドバイザリーが生成AIと管理会計の専門家チームで90日伴走します。30分相談・仮診断・資料DLのいずれからでも具体的な支援内容をご提案可能です。";

const unique = <T,>(items: T[]): T[] => Array.from(new Set(items.filter(Boolean)));

const detectFocusAreas = (message: string, context: ContextSelections) => {
  const focus: string[] = [];

  if (/(資金|キャッシュ|cash|資金繰り)/i.test(message)) {
    focus.push("資金繰りとキャッシュ創出");
  }
  if (/(売上|sales|成長|受注|単価|粗利)/i.test(message)) {
    focus.push("売上成長と利益率改善");
  }
  if (/(時間|会議|レポート|資料|業務|承認)/i.test(message)) {
    focus.push("意思決定時間の削減と自動化");
  }
  if (/(ai|自動化|分析|ダッシュボード|データ統合|kpi)/i.test(message.toLowerCase())) {
    focus.push("生成AI活用とデータ統合");
  }

  const contextFocus = context.priority ? priorityFocusMap[context.priority] : undefined;
  if (contextFocus) {
    focus.push(contextFocus);
  }

  return unique(focus);
};

const extractRevenueDetail = (message: string) => {
  const revenueMatch = message.match(/(年商|売上|売上高)[^\d]*(\d+(?:\.\d+)?)(兆|億|万)?/);
  if (!revenueMatch) {
    return null;
  }

  const [, , value, unit] = revenueMatch;
  const unitLabel =
    unit === "兆" ? "兆円" : unit === "億" ? "億円" : unit === "万" ? "万円" : "円";
  return `年商${value}${unitLabel}規模と理解しました。`;
};

const extractHeadcountDetail = (message: string) => {
  const headcountMatch = message.match(/(社員|従業員|メンバー)[^\d]*(\d{1,4})/);
  if (!headcountMatch) {
    return null;
  }

  const [, , value] = headcountMatch;
  return `チーム規模は概ね${value}名想定で進めます。`;
};

const extractTimelineDetail = (message: string) => {
  const timelineMatch = message.match(/(\d{1,2})\s*(週|週間|か月|ヶ月|月)/);
  if (!timelineMatch) {
    return null;
  }

  const [, value, unit] = timelineMatch;
  return `${value}${unit}以内の実行を想定してプランニングします。`;
};

const createContextPrompt = (context: ContextSelections) => {
  const segments: string[] = [];
  if (context.companySize) {
    segments.push(`年商${context.companySize}`);
  }
  if (context.industry) {
    segments.push(`${context.industry}の事業`);
  }

  const intro = segments.length ? `${segments.join("・")}です。` : "";
  const priority = context.priority ? `優先したいテーマは「${context.priority}」です。` : "";

  return [intro, priority].filter(Boolean).join(" ");
};

const buildResponse = (
  message: string,
  mode: ResponseMode,
  context: ContextSelections,
): AssistantResponse => {
  const focusAreas = detectFocusAreas(message, context);
  const toneLabel = responseModeLabels[mode];

  if (!focusAreas.length) {
    return {
      headline: "状況をもう少し教えてください",
      intro:
        "売上や粗利の推移、意思決定に時間がかかっている業務、活用したいデータなどを教えていただけると提案の精度が高まります。",
      focusAreas,
      actionSteps: defaultActionSteps,
      supportMenu: defaultSupportMenu,
      followUps: defaultFollowUps,
      toneLabel,
      servicePitch: defaultServicePitch,
    };
  }

  const introParts = unique([
    createContextPrompt(context),
    extractRevenueDetail(message),
    extractHeadcountDetail(message),
    extractTimelineDetail(message),
  ]);

  if (focusAreas.length) {
    introParts.push(`特に${focusAreas.join("・")}にフォーカスした提案です。`);
  }

  const actionSteps = unique(
    focusAreas.flatMap((area) => focusAreaActions[area]?.[mode] ?? []),
  );
  const supportMenu = unique(
    focusAreas.flatMap((area) => supportMenuLibrary[area] ?? []),
  );
  const followUps = unique(
    focusAreas.flatMap((area) => followUpSuggestions[area] ?? []),
  );
  const servicePitch =
    focusAreas
      .map((area) => servicePitchLibrary[area])
      .find((pitch): pitch is string => Boolean(pitch)) ?? defaultServicePitch;

  return {
    headline: `${focusAreas[0]}を軸にした${toneLabel}`,
    intro: introParts.join(" "),
    focusAreas,
    actionSteps: actionSteps.length ? actionSteps : defaultActionSteps,
    supportMenu: supportMenu.length ? supportMenu : defaultSupportMenu,
    followUps: followUps.length ? followUps : defaultFollowUps,
    toneLabel,
    servicePitch,
  };
};

const AIAdvisorChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "こんにちは。生成AIと管理会計を組み合わせて、意思決定時間の削減とキャッシュ改善を支援しています。回答スタイルを切り替えながら、貴社の規模や課題を教えていただけますか？",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [responseMode, setResponseMode] = useState<ResponseMode>("summary");
  const [contextSelections, setContextSelections] = useState<ContextSelections>({});
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) {
      return;
    }

    const isNearBottom =
      container.scrollHeight - (container.scrollTop + container.clientHeight) <= 24;

    if (isNearBottom) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isThinking]);

  const contextPrompt = useMemo(
    () => createContextPrompt(contextSelections),
    [contextSelections],
  );

  const latestPlan = useMemo(() => {
    const latestAssistant = [...messages]
      .reverse()
      .find((message) => message.role === "assistant" && message.assistantDetails);

    return latestAssistant?.assistantDetails ?? null;
  }, [messages]);

  const selectedMode = useMemo(
    () => responseModeOptions.find((option) => option.id === responseMode) ?? responseModeOptions[0],
    [responseMode],
  );

  const appendToInput = (snippet: string) => {
    setInput((previous) => {
      if (!snippet) {
        return previous;
      }
      if (!previous) {
        return snippet;
      }
      if (previous.includes(snippet)) {
        return previous;
      }
      return `${previous}\n${snippet}`;
    });
  };

  const applyContextToInput = () => {
    if (!contextPrompt) {
      return;
    }
    appendToInput(contextPrompt);
  };

  const resetContext = () => {
    setContextSelections({});
  };

  const sendMessage = (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isThinking) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: trimmed,
    };

    setMessages((previous) => [...previous, userMessage]);
    setIsThinking(true);

    const contextSnapshot = { ...contextSelections };
    const modeSnapshot = responseMode;

    setTimeout(() => {
      const response = buildResponse(trimmed, modeSnapshot, contextSnapshot);
      const composedContent = [
        response.headline,
        response.intro,
        "",
        ...response.actionSteps.map((step, index) => `${index + 1}. ${step}`),
        "",
        `Strategy AIからのご提案: ${response.servicePitch}`,
      ];

      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: composedContent.join("\n"),
        assistantDetails: response,
      };

      setMessages((previous) => [...previous, assistantMessage]);
      setIsThinking(false);
    }, 600);
  };

  const submitCurrentInput = () => {
    const currentInput = input;
    setInput("");
    sendMessage(currentInput);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitCurrentInput();
    }
  };

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitCurrentInput();
  };

  const handleQuickPrompt = (prompt: string) => {
    setInput("");
    sendMessage(prompt);
  };

  const handleFollowUpSuggestion = (suggestion: string) => {
    appendToInput(suggestion);
  };

  const scrollToCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="ai-chatbot"
      className="fade-in-section bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40 py-14 md:py-20"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <Bot className="h-4 w-4" aria-hidden="true" />
            AIコンシェルジュ
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold text-slate-900 md:text-4xl">
            生成AIチャットが最適なサービスプランと活用ステップをその場で提案
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            会社規模・業種・現状の課題を入力すると、AIが優先順位付きの提案を返答します。回答スタイルを切り替えたり、ヒアリング補助を使うことで、より柔軟なシミュレーションが可能です。
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <Card className="border-primary/15 bg-white/95 shadow-card">
              <CardHeader>
                <CardTitle className="text-left text-2xl font-bold text-slate-900">
                  AIコンシェルジュの使い方
                </CardTitle>
                <CardDescription className="text-left text-base leading-relaxed">
                  課題を送信すると、生成AIが優先的に解決すべき領域と伴走プランの流れを提示します。回答スタイルを切り替えると、要点・詳細・実行ロードマップを即座に比較できます。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                {planHighlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-inner">
                    <p className="text-sm font-semibold text-primary">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
                {latestPlan && latestPlan.focusAreas.length > 0 && (
                  <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-left text-sm text-primary">
                    <p className="font-semibold">最新の入力から抽出された注力テーマ</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {latestPlan.focusAreas.map((area) => (
                        <Badge key={area} variant="secondary" className="rounded-full bg-white/90 text-primary shadow-sm">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    {latestPlan.intro && (
                      <p className="rounded-xl bg-white/80 p-3 text-xs text-primary/80 shadow-inner">
                        {latestPlan.intro}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3">
                {quickPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/20 text-sm font-semibold text-primary hover:bg-primary/10"
                    onClick={() => handleQuickPrompt(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </CardFooter>
            </Card>

            <Card className="border-primary/15 bg-white/95 shadow-card">
              <CardHeader>
                <CardTitle className="text-left text-xl font-bold text-slate-900">
                  ヒアリング補助で状況を整理
                </CardTitle>
                <CardDescription className="text-left text-sm leading-relaxed">
                  会社規模・業種・優先テーマを選ぶと、入力欄にまとめて差し込めます。自由入力と組み合わせてご活用ください。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="context-company-size" className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    会社規模
                  </Label>
                  <Select
                    value={contextSelections.companySize}
                    onValueChange={(value) =>
                      setContextSelections((previous) => ({ ...previous, companySize: value }))
                    }
                  >
                    <SelectTrigger id="context-company-size" className="rounded-xl border-primary/30 bg-white/80">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {companySizeOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="context-industry" className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    業種
                  </Label>
                  <Select
                    value={contextSelections.industry}
                    onValueChange={(value) =>
                      setContextSelections((previous) => ({ ...previous, industry: value }))
                    }
                  >
                    <SelectTrigger id="context-industry" className="rounded-xl border-primary/30 bg-white/80">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="context-priority" className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    優先テーマ
                  </Label>
                  <Select
                    value={contextSelections.priority}
                    onValueChange={(value) =>
                      setContextSelections((previous) => ({ ...previous, priority: value }))
                    }
                  >
                    <SelectTrigger id="context-priority" className="rounded-xl border-primary/30 bg-white/80">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {contextPrompt && (
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 text-xs text-primary">
                    <p className="font-semibold">入力プレビュー</p>
                    <p className="mt-2 leading-relaxed">{contextPrompt}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary/30 text-primary hover:bg-primary/10"
                  disabled={!contextPrompt}
                  onClick={applyContextToInput}
                >
                  入力欄に反映
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-muted-foreground hover:bg-slate-100"
                  disabled={!contextPrompt}
                  onClick={resetContext}
                >
                  選択をクリア
                </Button>
              </CardFooter>
            </Card>

            <div className="rounded-3xl border border-primary/20 bg-white/95 p-5 text-left shadow-elegant">
              <h3 className="text-xl font-bold text-slate-900">
                チャットで整理した内容をもとに、30分相談や仮診断でさらに具体化できます。
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                チャットログは専任コンサルタントが確認し、事前に粗利・キャッシュの分析観点を準備します。気になる論点はお気軽にお送りください。
              </p>
              <Button
                variant="cta"
                size="lg"
                className="mt-5 interactive-cta"
                onClick={scrollToCta}
                data-cta-attention="chatbot-cta"
                data-cta-attention-delay="300"
              >
                30分相談を予約してチャット内容を共有
              </Button>
            </div>
          </div>

          <Card className="border-sky-200/70 bg-white/95 shadow-elegant">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex flex-row items-start justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-2 text-2xl font-bold text-slate-900">
                    <MessageSquareReply className="h-6 w-6 text-sky-500" aria-hidden="true" />
                    AIチャット
                  </CardTitle>
                  <CardDescription className="text-sm">
                    気になる課題を入力すると、生成AIが優先アクションと支援内容を提案します。
                  </CardDescription>
                </div>
                <Sparkles className="h-6 w-6 text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <ToggleGroup
                  type="single"
                  value={responseMode}
                  onValueChange={(value) => value && setResponseMode(value as ResponseMode)}
                  className="grid grid-cols-3 gap-2 rounded-2xl border border-sky-200/80 bg-sky-50/60 p-1"
                >
                  {responseModeOptions.map((option) => (
                    <ToggleGroupItem
                      key={option.id}
                      value={option.id}
                      className={cn(
                        "rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 transition-colors data-[state=on]:bg-white data-[state=on]:text-sky-600 data-[state=on]:shadow-sm",
                      )}
                    >
                      {option.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
                <p className="mt-2 text-xs text-muted-foreground">{selectedMode.description}</p>
              </div>
            </CardHeader>
            <CardContent className="flex h-[480px] flex-col justify-between gap-4">
              <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80">
                <div ref={messagesContainerRef} className="h-full space-y-4 overflow-y-auto p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", {
                        "justify-end": message.role === "user",
                        "justify-start": message.role === "assistant",
                      })}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm transition-transform duration-300",
                          message.role === "assistant"
                            ? "bg-white text-slate-900 shadow-primary/20"
                            : "bg-gradient-to-r from-sky-500 to-emerald-500 text-white",
                        )}
                      >
                        {message.role === "assistant" && message.assistantDetails ? (
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                                {message.assistantDetails.toneLabel}
                              </span>
                              {message.assistantDetails.focusAreas.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {message.assistantDetails.focusAreas.map((area) => (
                                    <Badge
                                      key={area}
                                      variant="secondary"
                                      className="rounded-full bg-sky-50 text-sky-700"
                                    >
                                      {area}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="text-base font-semibold text-slate-900">
                              {message.assistantDetails.headline}
                            </p>
                            {message.assistantDetails.intro && (
                              <p className="text-sm text-muted-foreground">
                                {message.assistantDetails.intro}
                              </p>
                            )}
                            {message.assistantDetails.actionSteps.length > 0 && (
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                  推奨アクション
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-slate-900">
                                  {message.assistantDetails.actionSteps.map((step) => (
                                    <li key={step} className="flex gap-2">
                                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" aria-hidden="true" />
                                      <span>{step}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {message.assistantDetails.supportMenu.length > 0 && (
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                  伴走メニューの例
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                                  {message.assistantDetails.supportMenu.map((item) => (
                                    <li key={item}>・{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {message.assistantDetails.servicePitch && (
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                  Strategy AIからのご提案
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-900">
                                  {message.assistantDetails.servicePitch}
                                </p>
                              </div>
                            )}
                            {message.assistantDetails.followUps.length > 0 && (
                              <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                                  次の質問候補
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {message.assistantDetails.followUps.map((suggestion) => (
                                    <Button
                                      key={suggestion}
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      className="rounded-full border border-slate-200 bg-white/60 px-3 text-xs text-slate-600 hover:bg-slate-100"
                                      onClick={() => handleFollowUpSuggestion(suggestion)}
                                    >
                                      {suggestion}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          message.content.split("\n").map((line) => (
                            <p key={line} className="mb-1 last:mb-0">
                              {line}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                  {isThinking && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="h-4 w-4 animate-pulse text-primary" aria-hidden="true" />
                      AIが提案を作成しています…
                    </div>
                  )}
                </div>
              </div>

              <form onSubmit={submitMessage} className="space-y-3">
                <Textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="例：年商8億の製造業です。粗利率が低下しており、キャッシュの見通しと改善施策を知りたい"
                  className="resize-none rounded-2xl border-primary/20 bg-white/90 text-sm focus-visible:ring-primary"
                  rows={3}
                  disabled={isThinking}
                />
                <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
                  <span>入力内容は社外に共有されません。チャット後に相談を予約すると内容を引き継げます。</span>
                  <Button type="submit" variant="cta" size="sm" className="interactive-cta px-6 py-2 text-sm font-semibold">
                    <Send className="mr-1 h-4 w-4" aria-hidden="true" />
                    送信
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisorChatbot;
