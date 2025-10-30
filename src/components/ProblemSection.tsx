import {
  AlertTriangle,
  ArrowUpRight,
  BrainCircuit,
  CalendarClock,
  DollarSign,
  LineChart,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import problemInfographic from "@/assets/problem-infographic.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { cn } from "@/lib/utils";

type PainPoint = {
  title: string;
  quote: string;
  reasons: string[];
  risk: string;
  focus: string;
  icon: React.ComponentType<{ className?: string }>;
  priority?: number;
};

type StoryFlowItem = {
  stage: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  copy: string;
  metrics: string[];
};

type ExecutiveSignal = {
  label: string;
  metric: string;
  note: string;
  icon: React.ComponentType<{ className?: string }>;
};

const pains: PainPoint[] = [
  {
    title: "数字と現場の時間軸が噛み合わない",
    quote: "粗利とキャッシュの動きが説明できず、会議が確認と棚卸しだけで終わってしまいます。",
    reasons: [
      "粗利・在庫・入出金が部門ごとに更新タイミングもフォーマットもバラバラ",
      "週次会議で使う資料が属人化し、意思決定までに複数版のエクセルが乱立",
      "AIに学習させる条件が定まらず、差異要因やリスクの説明がその場しのぎになっている",
    ],
    risk: "計画と実行のズレを検知できず、利益機会と資金余力が同時に失われる",
    focus: "ZENが粗利・在庫・キャッシュの因果をAIで同時分析し、意思決定キャンバスで差異と打ち手を提示",
    icon: DollarSign,
    priority: 5,
  },
  {
    title: "生成AIの成果が経営に伝わらない",
    quote: "チャットで試してはいるが、会議で使えるレベルに昇華できず活用が止まります。",
    reasons: [
      "ユースケースごとにプロンプトと評価指標がバラバラで、成果の定義が曖昧",
      "AIが提案した打ち手の根拠データが整理されず、意思決定ログに残らない",
      "教育コンテンツや運用ガイドが不足し、リスク管理の観点で本格導入が進まない",
    ],
    risk: "AI投資のROIが見えず、現場のやり切り感と経営陣の信頼が低下する",
    focus: "専門家がユースケースと評価指標を共創し、AI提案を証跡付きで判断ログへ接続",
    icon: BrainCircuit,
    priority: 4,
  },
  {
    title: "キャッシュと投資の判断が後ろ倒し",
    quote: "資金繰りの波形を揃えられず、投資計画と借入調達のタイミングが噛み合いません。",
    reasons: [
      "資金計画がExcelで手作業更新、シナリオ比較に2〜3日かかる",
      "取引条件や在庫の変化がキャッシュモデルに反映されるまでタイムラグが大きい",
      "金融機関や投資家向けの説明資料が属人化し、交渉のたびにゼロベースで作り直している",
    ],
    risk: "資金ショックの前倒し検知ができず、投資判断・金融交渉の主導権を失う",
    focus: "ZENがキャッシュ波形と投資シナリオをAIで更新し、意思決定ボードと金融資料を同時生成",
    icon: CalendarClock,
    priority: 4,
  },
  {
    title: "人材・組織の連携が追いつかない",
    quote: "改善施策が属人化し、幹部が判断材料をまとめるだけで疲弊しています。",
    reasons: [
      "スキルマップと評価指標が可視化されず、AIによる習熟診断ができない",
      "会議資料と現場タスクが連動せず、改善活動の再現性が上がらない",
      "離職兆候やエンゲージメントデータが点在し、人材リスクの早期察知ができない",
    ],
    risk: "キーパーソンの離脱と施策停滞で、改善スピードと士気が低下する",
    focus: "AIが個別最適化した教育プランと連携タスクを提示し、自走できるチーム体制を整える",
    icon: Users,
  },
  {
    title: "金融機関・投資家との対話が遅延",
    quote: "資料づくりに追われ、決算説明や条件交渉が後手に回ります。",
    reasons: [
      "財務ストーリーと資金計画が部署ごとに散在し、最新データを共有できない",
      "モニタリング項目の履歴が残らず、過去の合意事項の説明に時間がかかる",
      "面談ログと改善施策が連携せず、AIで交渉材料を抽出する仕組みがない",
    ],
    risk: "信用評価が下がり、追加融資や投資判断のタイミングを逃す",
    focus: "ZENが金融機関向け資料と交渉ログを標準化し、対話サイクルを高速化",
    icon: AlertTriangle,
  },
];

const executiveSignals: ExecutiveSignal[] = [
  {
    label: "意思決定リードタイム",
    metric: "+9日（例）",
    note: "資料準備と確認が二重化し、判断が後ろ倒しになる",
    icon: CalendarClock,
  },
  {
    label: "粗利とキャッシュの乖離",
    metric: "▲23%",
    note: "粗利は積み上がるのにキャッシュ残高が減少し、投資判断が止まる",
    icon: DollarSign,
  },
  {
    label: "AI提案の採択率",
    metric: "38%→87%",
    note: "AIの成果指標が定義されず、試行止まりで現場に定着しない",
    icon: BrainCircuit,
  },
  {
    label: "金融機関との対話時間",
    metric: "▲40%",
    note: "面談準備が属人化し、説明資料の更新に追われる",
    icon: ShieldCheck,
  },
];

const PainAccordionItem = ({ pain, index }: { pain: PainPoint; index: number }) => {
  const Icon = pain.icon;
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.3 });

  return (
    <AccordionItem
      ref={ref}
      value={`pain-${index}`}
      className={cn(
        "overflow-hidden rounded-[32px] border border-primary/15 bg-gradient-to-br from-white via-white to-secondary/10 shadow-card transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <AccordionTrigger className="px-6 py-6 hover:no-underline focus:outline-none">
        <div className="flex w-full flex-col gap-5 text-left sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-start">
            <span className="inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary/80">
                <span>CAUSE → EFFECT</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold leading-snug text-foreground lg:text-[1.75rem]">{pain.title}</h3>
              <p className="text-base italic text-muted-foreground">"{pain.quote}"</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-2xl border border-primary/20 bg-white/80 px-4 py-3 text-left shadow-sm sm:w-56">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">優先度</span>
            <span className="text-lg font-bold text-primary">{pain.priority ?? index + 1}</span>
            <span className="text-xs text-muted-foreground">判断遅延コストを数値化</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-muted/20 bg-white/95 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">原因の分解</p>
              <ul className="mt-4 space-y-3">
                {pain.reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-primary/10 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">直近12ヶ月のリスク像</p>
              <p className="mt-4 text-base leading-relaxed text-primary/90">{pain.risk}</p>
            </div>
          </div>
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">推奨アクション</p>
            <p className="text-base font-semibold leading-relaxed text-foreground">{pain.focus}</p>
            <div className="mt-auto rounded-xl border border-accent/40 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
              初期診断で適用可能なAIワークフロー
            </div>
          </div>
        </div>
        <footer className="mt-6 flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>年商1〜50億円規模の経営者ヒアリングから抽出</span>
          <span>クリックで詳細を閉じる</span>
        </footer>
      </AccordionContent>
    </AccordionItem>
  );
};

const storyFlow: StoryFlowItem[] = [
  {
    stage: "現状",
    icon: AlertTriangle,
    headline: "判断材料が分断され迷いが生まれる",
    copy:
      "粗利とキャッシュの差異要因が整理できず、AI活用も試行止まり。会議は確認作業で終わり、判断が後ろ倒しになります。",
    metrics: ["意思決定リードタイム+9日（例）", "AI投資のROIが不透明"],
  },
  {
    stage: "変革",
    icon: BrainCircuit,
    headline: "ZENが経営シグナルを共創",
    copy:
      "専門家が意思決定キャンバスを設計し、生成AIが粗利・在庫・キャッシュの因果を可視化。週次でシナリオと推奨アクションを提示します。",
    metrics: ["改善サイクル3.1倍（例）", "キャッシュ余力+42日前倒し（例）"],
  },
  {
    stage: "成果",
    icon: TrendingUp,
    headline: "同じタイムラインで動ける経営チームに",
    copy:
      "週次のZENナビゲーションボードと運用ルールが整い、AI提案の採択率が向上。金融機関や投資家への説明も一本化されます。",
    metrics: ["AI提案採択率87%（例）", "金融機関面談準備▲40%（例）"],
  },
];

const ProblemSection = () => {
  return (
    <section className="fade-in-section section-spacing bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60">
      <div className="layout-shell space-y-16 lg:space-y-20">
        <div className="balanced-grid--reverse lg:items-start xl:items-center">
          <div className="space-y-8 lg:pr-16">
            <span className="inline-flex items-center rounded-full bg-highlight/20 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.3em] text-highlight-foreground">
              ZENが解きほぐす課題
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              生成AI×専門家×経営改善で乗り越える<br />5つの経営ボトルネック
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg lg:max-w-[62ch]">
              データと現場の情報が分断されたままでは、生成AIも成果を出せません。ZEN Strategic Navigatorが伴走してきた企業から共通して見えたボトルネックを整理しました。改善の順番を決めるヒントとしてご活用ください。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {executiveSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.label}
                    className="group flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-colors duration-500 hover:border-primary/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{signal.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{signal.metric}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{signal.note}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 text-sm text-muted-foreground shadow-sm">
              <LineChart className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="font-semibold text-foreground">ZENナビゲーションで因果とタイミングを同時に管理</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:inline-flex" />
              <span>経営会議の準備時間▲68%（例）</span>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/60 shadow-elegant">
            <div className="pointer-events-none absolute -left-24 top-24 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              ZEN SIGNAL MAP
            </div>
            <img
              src={problemInfographic}
              alt="生成AIと専門家が経営判断までの因果を結ぶマップ"
              className="relative w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="relative flex flex-col gap-3 border-t border-slate-200/60 bg-white/90 px-6 py-5 text-left">
              <p className="text-sm font-semibold text-foreground">外部シグナル→粗利・キャッシュ→意思決定ログをZENが一枚で同期。</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-[0.28em] text-slate-500">
                  TRUST
                </span>
                <span>専門家ヒアリング60社分のパターン（例）</span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:inline-flex" />
                <span>週次で更新されるZENナビゲーションダッシュボード</span>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-primary/15 bg-white/95 p-10 shadow-card">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3 text-left md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                  NARRATIVE VISUALIZATION
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">課題→変革→成果を3つのフレームで直感把握</h3>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm text-primary/80">
                <LineChart className="h-4 w-4" aria-hidden="true" />
                KPIを一枚で確認し、会議前の視点合わせが5分で完了（例）
              </div>
            </div>
            <div className="relative mt-4 grid gap-6 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[8%] right-[8%] top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
              {storyFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.stage}
                    className="relative flex h-full flex-col gap-4 rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-highlight via-accent to-primary text-base font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{item.stage}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-highlight/20 text-highlight-foreground">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">{item.headline}</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                      </div>
                    </div>
                    <div className="mt-auto rounded-2xl border border-primary/25 bg-primary/5 p-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">注目KPI</span>
                      <ul className="mt-3 space-y-2 text-sm text-primary/90">
                        {item.metrics.map((metric) => (
                          <li key={metric} className="flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {pains.map((pain, index) => (
            <PainAccordionItem key={pain.title} pain={pain} index={index} />
          ))}
        </Accordion>

        <div className="rounded-[36px] border border-highlight/30 bg-gradient-to-r from-highlight/20 via-white to-accent/10 p-10 text-center shadow-card">
          <p className="text-xl font-semibold leading-relaxed text-foreground">
            初回相談では生成AIの活用余地とデータ整備状況を30分で診断し、専門家と共に粗利・キャッシュ・需要を同期するステップを描きます。因果マップと意思決定ボードのサンプルをもとに、貴社に適した改善ロードマップを提案します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
