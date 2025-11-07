import { useEffect, useId, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileCheck2,
  Loader2,
  MessageCircleQuestion,
  ShieldCheck,
  Timer,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { submitContactFormToWordPress } from "@/lib/wordpress";
import { cn } from "@/lib/utils";

const requestOptions = [
  {
    value: "consultation",
    title: "無料相談で危機の芽を言語化",
    description:
      "経営者と共に市場変化と社内の兆候を読み解き、“再生シナリオ”の骨子と優先仮説メモを当日に提示。次の対話で迷いなく語れる論点を整えます。",
    badge: "無料相談",
  },
  {
    value: "diagnostic",
    title: "AI診断で勝ち筋を抽出",
    description:
      "粗利・資金・人材の主要指標をAIが整理し、診断士が行動順序と外部リスクをコメントしたレポートを短期間でお届け。意思決定の拠り所を確かめます。",
    badge: "AI診断",
  },
  {
    value: "subsidy",
    title: "補助金活用の勝算を判断",
    description:
      "経営改善計画策定支援補助金の要件整理からスケジュール設計、申請書ドラフトの段取りまで一気通貫で支援。金融機関との連携実績を基に準備物と照合します。",
    badge: "補助金",
  },
  {
    value: "materials",
    title: "資料で未来像を共有",
    description:
      "再生シナリオの全体像、成果事例、金融機関連携のテンプレートをまとめた資料を即時にダウンロード。社内外へ堂々と示せる内容だけを厳選しています。",
    badge: "資料DL",
  },
] as const;

const responseSpeedOptions = [
  {
    value: "immediate",
    label: "至急｜48H以内に返答が欲しい",
    description: "決裁や金融機関対応が迫っているので、最短で仮説メモを受け取りたい",
  },
  {
    value: "this-month",
    label: "今月中に方向性を確定したい",
    description: "次の経営会議までに再生シナリオと補助金の可否を整理したい",
  },
  {
    value: "research",
    label: "情報収集中・資料で検討したい",
    description: "社内での検討材料として資料や成功事例を優先的に確認したい",
  },
] as const;

const bookingMetrics = [
  {
    icon: Timer,
    value: "即日伴走",
    label: "最短返信",
    helper: "無料相談の希望日時と準備物をその日のうちにご案内",
  },
  {
    icon: ShieldCheck,
    value: "主要指標",
    label: "AI診断",
    helper: "粗利・資金・人材のズレを一括把握",
  },
  {
    icon: Building2,
    value: "補助金対応",
    label: "計画策定",
    helper: "経営改善計画策定支援補助金の計画書作成まで支援",
  },
];

const engagementTimeline = [
  {
    icon: CalendarClock,
    phase: "Day 0",
    title: "45分の初回相談で危機の芽と伸ばす領域を棚卸し",
    deliverable: "再生仮説メモと資金繰り耐性チェックリストを当日共有",
  },
  {
    icon: Timer,
    phase: "48H以内",
    title: "AI診断で粗利・資金・人材の焦点を色分け",
    deliverable: "優先アクション案と外部ショックへの備えをまとめたヒートマップレポート",
  },
  {
    icon: FileCheck2,
    phase: "Week 2",
    title: "金融機関・社内へ共有し実行ロードマップを確定",
    deliverable: "銀行説明シナリオと週次レビューの進め方テンプレートを提供",
  },
];

const companySizeOptions = [
  { value: "~1億円", label: "年商 1億円未満" },
  { value: "1-5億円", label: "年商 1〜5億円" },
  { value: "5-10億円", label: "年商 5〜10億円" },
  { value: "10-30億円", label: "年商 10〜30億円" },
  { value: "30億円以上", label: "年商 30億円以上" },
];

const sampleSummary = [
  "再生シナリオのサンプル3枚と、銀行共有用テンプレート付き",
  "粗利・キャッシュ・人材の改善ストーリーを色分けしたダッシュボード例",
  "意思決定ログと週次レビューのチェックリストを同梱",
];

const caseStudyHighlights = [
  {
    stat: "+12%",
    label: "粗利改善",
    description: "6ヶ月で主要製品ラインの粗利率が12%向上し、回復シナリオを社内で堂々と共有",
  },
  {
    stat: "45日",
    label: "資金繰り安定",
    description: "銀行交渉を3回実施し、運転資金枠を45日延長。仕入れの停止リスクを解消",
  },
  {
    stat: "1.8x",
    label: "会議生産性",
    description: "週次会議の意思決定速度が1.8倍に。現場との共有資料数を半減",
  },
];

const faqShortcuts = [
  {
    href: "#faq-section",
    label: "無料相談で得られるもの",
    description: "48時間診断の流れを確認",
  },
  {
    href: "#faq-section",
    label: "データ準備の不安",
    description: "紙・Excelでも開始できる理由",
  },
  {
    href: "#faq-section",
    label: "補助金申請の進め方",
    description: "要件整理と書類準備の流れ",
  },
];

const contactValuePoints = [
  "翌営業日に“再生仮説メモ”と優先アクション案をメールで共有",
  "銀行説明用の論点シートと交渉Q&Aテンプレを提供",
  "補助金活用の意向を伺い、必要書類リストとスケジュールを併せて提示",
  "週次レビューの進め方サンプルと必要データ一覧を事前送付",
];

const trustReassurances = [
  "福岡銀行・北九州銀行など主要行との協働実績",
  "再生案件の平均CV回復率 180%（過去3年）",
  "中小企業庁登録診断士チームが直接対応し補助金申請も伴走",
];

const testimonialVideo = {
  url: "https://www.youtube.com/embed/2Xc9gXyf2G4?rel=0",
  title: "地域金融機関との共創インタビュー",
  description:
    "福岡の地方銀行・企業再生部門とのディスカッションを収録。合意形成を加速させる資料構成と、AIを交えた意思決定プロセスの実際を語っています。",
  highlights: [
    "銀行稟議で評価された“因果が見える”レポート構成",
    "週次レビューで交渉準備が1/2になった実例",
    "データ共有の安全性とステークホルダー連携の進め方",
  ],
};

const trustBoardEntries = [
  {
    category: "金融機関",
    logoLabel: "福岡銀行",
    comment: "再生計画の前提が金融庁ガイドラインと整合しており、稟議の指摘事項が半減。貸出継続判断を後押しできた。",
    endorsement: "2023年 地域金融共創アワード 優秀賞",
  },
  {
    category: "自治体",
    logoLabel: "福岡県",
    comment: "産業振興課との連携で人材再配置プログラムを共同実施。ダッシュボードでKPIを共有し、議会報告にも活用。",
    endorsement: "2024年 DXパートナー公式採択",
  },
  {
    category: "補助金",
    logoLabel: "経営改善計画策定支援補助金",
    comment: "採択された企業の平均投資回収期間が14ヶ月。資料テンプレが監査法人レビューでも高評価。",
    endorsement: "累計20件超採択／審査員推奨コメント獲得",
  },
];

const CTASection = () => {
  const { toast } = useToast();
  const formId = useId();
  const [requestType, setRequestType] = useState<(typeof requestOptions)[number]["value"]>("consultation");
  const [companySize, setCompanySize] = useState<string | undefined>();
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseSpeed, setResponseSpeed] = useState<(typeof responseSpeedOptions)[number]["value"]>(
    responseSpeedOptions[0].value,
  );
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const totalSteps = 2;
  const stepProgress = Math.round((currentStep / totalSteps) * 100);
  const remainingTimeLabel = currentStep === 1 ? "残り約40秒" : "残り約20秒";

  const selectedRequest = requestOptions.find((option) => option.value === requestType) ?? requestOptions[0];
  const selectedResponseSpeed =
    responseSpeedOptions.find((option) => option.value === responseSpeed) ?? responseSpeedOptions[0];
  const isStepTwo = currentStep === 2;

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("cta-progress-change", {
        detail: { step: currentStep },
      }),
    );
  }, [currentStep]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currentStep === 1) {
      setCurrentStep(2);
      toast({
        title: "あと少しで送信できます",
        description: "メールアドレスなど必要最低限の情報をご入力いただくと、仮説メモの準備が完了します。",
      });
      return;
    }

    if (!consent) {
      toast({
        title: "利用規約への同意が必要です",
        description: "お問い合わせの前に同意にチェックを入れてください。",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionResult = await submitContactFormToWordPress({
        company,
        name,
        email,
        companySize,
        requestType,
        requestTypeLabel: selectedRequest.title,
        message: `【希望フォロー速度】${selectedResponseSpeed.label}${message ? `\n${message}` : ""}`,
        consent,
      });

      if (!submissionResult.success) {
        throw new Error(submissionResult.message || "送信に失敗しました");
      }

      toast({
        title: "送信が完了しました",
        description: "担当より速やかにご連絡いたします。",
      });

      setCompany("");
      setName("");
      setEmail("");
      setCompanySize(undefined);
      setMessage("");
      setResponseSpeed(responseSpeedOptions[0].value);
      setConsent(false);
      setRequestType("consultation");
      setCurrentStep(1);
    } catch (error) {
      console.error("Failed to submit contact form", error);
      toast({
        title: "送信できませんでした",
        description: error instanceof Error ? error.message : "時間をおいて再度お試しください。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="cta-section"
      className="fade-in-section bg-gradient-to-b from-[#031024] via-[#071c3c] to-[#031024] py-20 text-white"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Action｜45分で再生シナリオを受け取る
          </span>
          <h2 id="cta-heading" className="text-3xl font-bold leading-tight md:text-4xl">
            粗利・資金・人材の打ち手を45分で整理し、2週間で実行フェーズへ
          </h2>
          <p className="mx-auto max-w-3xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            PASフレームで痛点を深掘りしたうえで、AI診断と専門家の伴走によりSolutionへ橋渡し。補助金活用シミュレーションや金融機関との合意形成資料まで揃え、どの会議でも迷わず意思決定できる状態を設計します。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-8 rounded-[28px] border border-white/12 bg-white/5 p-6 shadow-[0_28px_75px_rgba(3,14,32,0.55)] backdrop-blur"
        >
          <div className="space-y-4 text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/85">
              Trust Board
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-semibold text-white md:text-2xl">第三者が認める信頼性と成果の裏付け</h3>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/70">金融機関・自治体・補助金の声</p>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-200/85">
              連携先からの推薦コメントと受賞歴を公開。ロゴ付きの証跡を用意し、社内決裁や金融機関への説明にそのまま添付いただけます。
            </p>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {trustBoardEntries.map((entry) => (
              <div
                key={entry.logoLabel}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-left text-sm leading-relaxed text-slate-100/90"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                    {entry.category}
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {entry.logoLabel}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{entry.comment}</p>
                <div className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/85">
                  <Award className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  <span className="normal-case tracking-normal text-slate-100/90">{entry.endorsement}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 grid gap-6 rounded-[28px] border border-white/12 bg-white/10 p-6 text-left shadow-[0_30px_80px_rgba(3,14,32,0.55)] backdrop-blur lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
        >
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/85">
              診断レポート サンプルで確認
            </p>
            <h3 className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
              3分で「どんな成果物が届くか」を確認できる資料セットを即ダウンロード
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200/85">
              {sampleSummary.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-[24px] border border-cyan-300/30 bg-cyan-500/10 p-6 text-white">
            <div className="space-y-2 text-sm leading-relaxed text-slate-100/90">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/90">ダウンロード特典</p>
              <p>
                銀行説明用スライド、週次レビュー議事録テンプレ、KPIダッシュボードのハイライトをまとめています。社内展開や決裁準備にそのまま活用いただけます。
              </p>
            </div>
            <Button
              type="button"
              variant="cta"
              size="lg"
              className="w-full justify-center rounded-full text-sm font-bold interactive-cta"
              data-cta-id={`${TERTIARY_CTA.id}-cta-highlight`}
              onClick={() => window.open(TERTIARY_CTA.href, "_blank", "noreferrer")}
            >
              {TERTIARY_CTA.label}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/85">PDF &amp; デモ画面セット</p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-8 grid gap-6 rounded-[28px] border border-white/12 bg-white/5 p-6 shadow-[0_25px_70px_rgba(3,14,32,0.5)] backdrop-blur lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <div className="aspect-video w-full overflow-hidden rounded-[20px] border border-white/15 bg-black/70 shadow-lg">
            <iframe
              src={testimonialVideo.url}
              title={testimonialVideo.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 text-sm leading-relaxed text-slate-200/85">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/85">金融機関の声</p>
              <h3 className="text-xl font-semibold text-white md:text-2xl">{testimonialVideo.title}</h3>
              <p>{testimonialVideo.description}</p>
            </div>
            <ul className="space-y-2">
              {testimonialVideo.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">3分で合意形成の裏側を確認</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_rgba(3,14,32,0.6)]"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {bookingMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center">
                    <Icon className="mx-auto h-6 w-6 text-cyan-200" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">{metric.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{metric.helper}</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-6 text-left text-slate-200/85">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                <CalendarClock className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                導入タイムライン（平均所要 2週間）
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {engagementTimeline.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.phase} className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                        <span>{item.phase}</span>
                        <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs leading-relaxed text-slate-200/75">{item.deliverable}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">選択中のメニュー</p>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{selectedRequest.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{selectedRequest.description}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {requestOptions.map((option) => {
                  const isSelected = option.value === requestType;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setRequestType(option.value)}
                      aria-pressed={isSelected}
                      className={cn(
                        "group flex h-full flex-col justify-between rounded-2xl border px-4 py-3 text-left text-xs font-semibold transition",
                        isSelected
                          ? "border-cyan-300/60 bg-cyan-500/15 text-white"
                          : "border-white/15 bg-white/5 text-slate-200/80 hover:border-cyan-200/40 hover:text-white",
                      )}
                    >
                      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-200/80">{option.badge}</span>
                      <span className="mt-1 block text-[0.95rem] leading-snug">{option.title}</span>
                      <span
                        className={cn(
                          "mt-3 inline-flex items-center gap-2 text-[0.7rem] font-semibold",
                          isSelected
                            ? "text-cyan-100"
                            : "text-cyan-100/70 group-hover:text-cyan-50",
                        )}
                      >
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        {isSelected ? "選択中" : "クリックして選択"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/85">
              <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              初回相談では、粗利・キャッシュ・人材のギャップと優先施策を整理し、行動順序と金融機関への伝え方まで含めた“再生の設計図”をドラフトとしてお渡しします。次のステークホルダー面談で堂々と話せる根拠をご用意します。
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200/85">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">送信前にご確認ください</p>
              <ul className="mt-3 space-y-2">
                {contactValuePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="rounded-[32px] border border-white/10 bg-white p-8 text-[#0b1f3f] shadow-[0_30px_80px_rgba(5,20,45,0.25)]"
          >
            <div className="space-y-6">
              <div className="space-y-4 rounded-[28px] border border-[#0b1f3f]/10 bg-[#f4f8ff] p-6 text-[#1e3359]/85">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/70">
                  <CheckCircle2 className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                  Case Study Digest
                </div>
                <h3 className="text-xl font-semibold text-[#0b1f3f]">直近12ヶ月の再生成功パターン</h3>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {caseStudyHighlights.map((item) => (
                    <li key={item.label} className="rounded-2xl border border-[#0b1f3f]/10 bg-white/70 p-4 shadow-sm">
                      <p className="text-2xl font-bold text-[#0b1f3f]">{item.stat}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{item.label}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[#1e3359]/80">{item.description}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {faqShortcuts.map((shortcut) => (
                    <a
                      key={shortcut.label}
                      href={shortcut.href}
                      className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/15 bg-white px-4 py-2 text-xs font-semibold text-[#0b1f3f] transition hover:border-[#0584c6]/60 hover:text-[#0584c6]"
                    >
                      <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
                      <span className="text-left">
                        {shortcut.label}
                        <span className="block text-[0.7rem] font-normal text-[#1e3359]/70">{shortcut.description}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-[#eef4ff] p-4 text-sm text-[#1e3359]/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
                      STEP {currentStep} / {totalSteps}
                    </span>
                    <span className="font-semibold text-[#0b1f3f]">
                      {isStepTwo ? "詳細ヒアリング" : "目的と緊急度の選択"}
                    </span>
                  </div>
                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-[#d1dcf5]"
                    role="progressbar"
                    aria-label="フォーム入力の進捗"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={stepProgress}
                  >
                    <div
                      className="h-full rounded-full bg-[#0584c6] transition-all duration-500"
                      style={{ width: `${stepProgress}%` }}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/60">
                    所要時間 約60秒｜STEP1はタップのみ、STEP2で必要情報入力（{remainingTimeLabel}）
                  </p>
                  <p className="text-xs leading-relaxed">
                    {isStepTwo
                      ? "頂いた情報を基に、仮説メモと優先アクション案、補助金活用時の準備物リストを整えてご連絡します。"
                      : "メニューとフォロー速度をタップすると、次のステップでメールアドレス等の入力に進みます。"}
                  </p>
                </div>

                {!isStepTwo ? (
                  <>
                    <div className="rounded-2xl border border-[#0b1f3f]/10 bg-white p-4 text-sm text-[#1e3359]/85 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
                        まずはクリックで目的と緊急度を共有
                      </p>
                      <p className="mt-2 text-sm">
                        2つの質問にタップで回答すると、必要な資料と仮説メモの準備が始まります。まだ検討段階でもお気軽にお選びください。
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-[#0b1f3f]">関心のあるメニュー</Label>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {requestOptions.map((option) => {
                          const isSelected = option.value === requestType;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setRequestType(option.value)}
                              aria-pressed={isSelected}
                              className={cn(
                                "flex h-full flex-col gap-2 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                                isSelected
                                  ? "border-[#0584c6] bg-[#eef6ff] text-[#0b1f3f] shadow-sm"
                                  : "border-[#d1dcf5] bg-white text-[#1e3359]/80 hover:border-[#0584c6]/60 hover:text-[#0b1f3f]",
                              )}
                            >
                              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                                {option.badge}
                              </span>
                              <span>{option.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-semibold text-[#0b1f3f]">希望するフォロー速度</Label>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {responseSpeedOptions.map((option) => {
                          const isSelected = option.value === responseSpeed;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setResponseSpeed(option.value)}
                              aria-pressed={isSelected}
                              className={cn(
                                "flex h-full flex-col gap-1 rounded-2xl border px-4 py-3 text-left text-xs transition",
                                isSelected
                                  ? "border-[#0584c6] bg-[#e6f6ff] text-[#0b1f3f] shadow-sm"
                                  : "border-[#d1dcf5] bg-white text-[#1e3359]/80 hover:border-[#0584c6]/60 hover:text-[#0b1f3f]",
                              )}
                            >
                              <span className="text-[0.75rem] font-semibold">{option.label}</span>
                              <span className="text-[0.7rem] text-[#1e3359]/70">{option.description}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full justify-center rounded-full bg-[#0584c6] py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(5,132,198,0.35)] transition hover:bg-[#0aa3e0]"
                      data-cta-id={`${PRIMARY_CTA.id}-form-step1`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        次へ（{remainingTimeLabel}）
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="rounded-2xl border border-[#0b1f3f]/10 bg-[#f6f9ff] p-4 text-sm text-[#1e3359]/80">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">確認済みの情報</p>
                      <dl className="mt-2 grid gap-2 md:grid-cols-2">
                        <div>
                          <dt className="text-xs text-[#0b1f3f]/60">メール</dt>
                          <dd className="text-sm font-semibold text-[#0b1f3f]">{email}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#0b1f3f]/60">会社規模</dt>
                          <dd className="text-sm font-semibold text-[#0b1f3f]">
                            {companySize
                              ? companySizeOptions.find((option) => option.value === companySize)?.label ?? companySize
                              : "未選択"}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#0b1f3f]/60">会社名</dt>
                          <dd className="text-sm font-semibold text-[#0b1f3f]">{company}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#0b1f3f]/60">お名前</dt>
                          <dd className="text-sm font-semibold text-[#0b1f3f]">{name}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#0b1f3f]/60">選択メニュー</dt>
                          <dd className="text-sm font-semibold text-[#0b1f3f]">{selectedRequest.title}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-[#0b1f3f]/60">希望フォロー速度</dt>
                          <dd className="text-sm font-semibold text-[#0b1f3f]">{selectedResponseSpeed.label}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${formId}-email`} className="text-sm font-semibold text-[#0b1f3f]">
                        メールアドレス <span className="text-[#0584c6]">*</span>
                      </Label>
                      <Input
                        id={`${formId}-email`}
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="例）info@example.jp"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-[#0b1f3f]">
                        会社規模 <span className="text-[#0584c6]">*</span>
                      </Label>
                      <Select value={companySize} onValueChange={(value) => setCompanySize(value)}>
                        <SelectTrigger className="h-11 rounded-xl border-[#d1dcf5] bg-white text-left text-sm text-[#0b1f3f]">
                          <SelectValue placeholder="年商規模を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          {companySizeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${formId}-company`} className="text-sm font-semibold text-[#0b1f3f]">
                        会社名 <span className="text-[#0584c6]">*</span>
                      </Label>
                      <Input
                        id={`${formId}-company`}
                        required
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        placeholder="例）株式会社〇〇"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${formId}-name`} className="text-sm font-semibold text-[#0b1f3f]">
                        ご担当者名 <span className="text-[#0584c6]">*</span>
                      </Label>
                      <Input
                        id={`${formId}-name`}
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="例）山田 太郎"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`${formId}-message`} className="text-sm font-semibold text-[#0b1f3f]">
                        共有したい課題・現状
                      </Label>
                      <Textarea
                        id={`${formId}-message`}
                        rows={4}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="直近の課題や実現したい姿、関係者の状況、補助金活用の有無などをご記入ください"
                      />
                      <p className="text-xs text-[#1e3359]/70">
                        補助金を利用予定の場合は希望時期や金融機関との進捗もお知らせください。要件に沿った計画書ドラフトをご用意します。
                      </p>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-[#f2f7ff] p-4 text-sm leading-relaxed text-[#1e3359]/80">
                      <Checkbox
                        id={`${formId}-consent`}
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(Boolean(checked))}
                      />
                      <Label htmlFor={`${formId}-consent`} className="cursor-pointer">
                        お問い合わせ内容は利用規約およびプライバシーポリシーに基づき管理されます。内容に同意のうえ、送信してください。
                      </Label>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 justify-center rounded-full border border-[#0b1f3f]/20 bg-white py-4 text-sm font-semibold text-[#0b1f3f] hover:border-[#0584c6] hover:text-[#0584c6]"
                        onClick={() => setCurrentStep(1)}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                          戻って修正する
                        </span>
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 justify-center rounded-full bg-[#0584c6] py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(5,132,198,0.35)] transition hover:bg-[#0aa3e0]"
                        data-cta-id={`${PRIMARY_CTA.id}-form`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                            送信中...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            {PRIMARY_CTA.label}
                            <ArrowRight className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </Button>
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-[#f6f9ff] p-4 text-xs text-[#1e3359]/80">
                      <AlertCircle className="mt-0.5 h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                      <p>
                        送信後は代表または専門チームより迅速にご連絡します。お急ぎの方はお電話（092-231-2920）でも承ります。
                      </p>
                    </div>
                  </>
                )}
              </form>

              <div className="rounded-[28px] border border-[#0b1f3f]/10 bg-[#f6f9ff] p-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
                <div className="flex flex-col gap-3 text-left normal-case tracking-normal text-[#1e3359]/80">
                  {trustReassurances.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-[#1e3359]">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
