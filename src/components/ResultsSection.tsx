import {
  TrendingUp,
  DollarSign,
  Target,
  Quote,
  LineChart,
  Timer,
  ArrowRight,
  ArrowLeft,
  Workflow,
  BrainCircuit,
  CheckCircle2,
  BarChart3,
  Layers,
  Gauge,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import executiveDashboard from "@/assets/dashboard-preview.jpg";
import strategicBlueprint from "@/assets/strategy-planning.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

const results = [
  {
    icon: TrendingUp,
    industry: "建材卸（年商9.2億円）",
    company: "K.M.社",
    logoInitials: "KM",
    person: "代表取締役 Y.H.さま",
    challenge: "商談情報が担当者の頭にあり、粗利の高い案件ほど値引きで失注。",
    approach: "営業日報と受発注データをAIが学習し、顧客属性×提案シナリオを標準化。",
    outcome: "3ヶ月で粗利率が19%→26%（+7pt／例）に改善し、意思決定リードタイムが5日→2日（例）に短縮。",
    improvement: "+7pt",
    duration: "着手から13週",
    metricLabel: "粗利率",
    beforeValue: 19,
    afterValue: 26,
    unit: "%",
    chartMax: 30,
    quote: "属人化していた見積の根拠が数字で共有できるようになり、決裁の席で堂々と判断を伝えられるようになりました。",
    roiLabel: "受注単価 +14%／判断リードタイム▲60%",
    roiClass: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: DollarSign,
    industry: "食品製造（年商8.5億円）",
    company: "T.F.社",
    logoInitials: "TF",
    person: "代表取締役 Y.A.さま",
    challenge: "需要予測のばらつきで過剰在庫と欠品が同時発生、廃棄コストが増加。",
    approach: "POS・受注・天候データをAIが予測モデル化し、週次の生産計画を自動生成。",
    outcome: "在庫回転率は1.1→2.1倍（+28%／例）、廃棄コストは55%削減（例）。週次レポートで需給の変動を先読み。",
    improvement: "+1.0倍",
    duration: "導入4ヶ月",
    metricLabel: "在庫回転率",
    beforeValue: 1.1,
    afterValue: 2.1,
    unit: "倍",
    chartMax: 2.5,
    quote: "AIの提案理由が日本語で表示されるので、現場が納得して修正でき、会議での議論が誇れる内容になりました。",
    roiLabel: "廃棄コスト -55%",
    roiClass: "bg-sky-100 text-sky-700",
  },
  {
    icon: Target,
    industry: "建設業（年商9.8億円）",
    company: "S.K.社",
    logoInitials: "SK",
    person: "代表取締役 T.R.さま",
    challenge: "原価進捗が月末にしか分からず、金融機関への説明資料作成に追われていた。",
    approach: "工程管理と会計をリアルタイム連携し、AIが出来高と原価乖離を自動判定。",
    outcome: "見積原価乖離率を18%→6%（▲12pt／例）に抑制し、資料作成時間を70%削減（例）。金融機関説明も週次で先回り。",
    improvement: "▲12pt",
    duration: "6ヶ月伴走",
    metricLabel: "原価乖離率",
    beforeValue: 18,
    afterValue: 6,
    unit: "%",
    chartMax: 20,
    quote: "キャッシュの見通しが早期に分かり、社外との対話でも自信を持って攻めに転じられました。",
    roiLabel: "資料作成 -70%",
    roiClass: "bg-amber-100 text-amber-700",
  },
  {
    icon: LineChart,
    industry: "アパレルEC（年商5.4億円）",
    company: "H.N.社",
    logoInitials: "HN",
    person: "代表取締役 M.I.さま",
    challenge: "広告チャネルごとのROIが不透明で、在庫と広告の両面でムダな投資が発生。",
    approach: "販売・広告・顧客データを統合し、AIがLTV予測にもとづく入札調整を自動化。",
    outcome: "広告ROIが1.4→2.6倍（例）に改善し、在庫過多商品を30%圧縮（例）。AIが次週の需要を先読みし、判断を前倒し。",
    improvement: "+1.2倍",
    duration: "ローンチ後3ヶ月",
    metricLabel: "広告ROI",
    beforeValue: 1.4,
    afterValue: 2.6,
    unit: "倍",
    chartMax: 3,
    quote: "AIの入札調整結果が説明付きで提示され、チーム連携がスムーズになり、意思決定の場で胸を張れるようになりました。",
    roiLabel: "ROI 2.6倍／在庫30%圧縮",
    roiClass: "bg-violet-100 text-violet-700",
  },
];

const decisionImpacts = [
  {
    label: "経営会議準備",
    before: 210,
    after: 90,
    unit: "分/週",
    impact: "論点整理をAIが前倒し",
    reduction: "▲57%",
    description: "生成AIが会議の論点・損益とキャッシュへの波及・推奨シナリオを事前に組み立て、経営陣は例外確認と意思選択に集中",
  },
  {
    label: "資金繰り更新",
    before: 120,
    after: 35,
    unit: "分/週",
    impact: "資金警戒アラートを自動化",
    reduction: "▲71%",
    description: "入出金予測と借入条件を自動同期し、AIがキャッシュリスクの確率と優先すべき打ち手を提示するため承認プロセスだけで完了",
  },
  {
    label: "レポート共有",
    before: 180,
    after: 40,
    unit: "分/月",
    impact: "経営レポートを共通言語化",
    reduction: "▲78%",
    description:
      "公式デモサイト「furumachi-smec.lognowa.com」で共有しているテンプレートを基盤に、生成AIが数値の意図と意思決定の示唆をストーリー仕立てで解説",
  },
];

const decisionInsights = [
  {
    icon: CheckCircle2,
    title: "因果で並ぶ論点と前提",
    description: "粗利・キャッシュ・現場KPIをリンクさせ、意思決定の材料をひと目で確認",
  },
  {
    icon: BarChart3,
    title: "可視化と納得を両立",
    description: "AIが生成する証拠データに経営陣コメントを残し、ガバナンスを保ったまま即断",
  },
  {
    icon: Layers,
    title: "シナリオの多層比較",
    description: "最良・標準・ワーストのキャッシュフローを同時提示し、投資配分を最適化",
  },
];

const aggregateHighlights = [
  {
    label: "平均粗利率改善",
    value: 6.7,
    suffix: "pt",
    description: "生成AIが案件別粗利と在庫を照合し、勝ち筋の価格戦略を提案",
    decimals: 1,
    icon: TrendingUp,
    accent: "from-emerald-400/30 to-emerald-500/10",
  },
  {
    label: "年間削減した単純作業",
    value: 1200,
    suffix: "時間",
    description: "レポート作成と会議アジェンダを自動化し、意思決定に専念",
    icon: Clock3,
    accent: "from-sky-400/25 to-sky-500/10",
  },
  {
    label: "平均ROI",
    value: 2.3,
    suffix: "倍",
    description: "マーケ・営業・製造のAIシナリオ検証で投資対効果を最大化",
    decimals: 1,
    icon: Gauge,
    accent: "from-violet-400/25 to-violet-500/10",
  },
];

const trustSignals = [
  "中小企業庁 伴走支援パートナー",
  "SME DX Award 2024 受賞",
  "Google Cloud Partner",
];

const cumulativeBulletPoints = [
  "営業：粗利率 +6.7pt（中央値）",
  "管理：年1,200時間の単純作業を削減",
  "投資：ROI 2.3倍でキャッシュを先読み",
];

const cumulativeCapitalGain = {
  label: "キャッシュ創出（中央値）",
  value: 1.4,
  suffix: "億円",
  description: "3ヶ月伴走プログラムの実績値",
};

const ResultCard = ({ result, index }: { result: (typeof results)[number]; index: number }) => {
  const Icon = result.icon;
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.25 });

  const beforeDecimals = Number.isInteger(result.beforeValue) ? 0 : result.beforeValue.toString().split(".")[1]?.length ?? 0;
  const afterDecimals = Number.isInteger(result.afterValue) ? 0 : result.afterValue.toString().split(".")[1]?.length ?? 0;
  const beforeHeight = Math.max((result.beforeValue / result.chartMax) * 100, 12);
  const afterHeight = Math.max((result.afterValue / result.chartMax) * 100, 18);
  const beforeLabel = `${result.beforeValue}${result.unit}`;
  const afterLabel = `${result.afterValue}${result.unit}`;
  const impactHeadline = `${result.metricLabel} ${beforeLabel} → ${afterLabel}`;

  return (
    <Card
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/70 bg-card/95 p-8 shadow-card transition-all duration-700 ease-out",
        "hover:-translate-y-1 hover:shadow-elegant",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-18%] h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 blur-3xl opacity-80 transition-opacity duration-700 group-hover:opacity-100"
      />
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/80 text-primary font-bold text-xl shadow-inner">
              {result.logoInitials}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary/80 mb-1">{result.industry}</p>
              <h3 className="text-2xl font-bold text-foreground mb-1">{result.company}</h3>
              <p className="text-base text-muted-foreground">{result.person}</p>
            </div>
          </div>
          <div className="inline-flex items-center justify-center self-start rounded-xl bg-primary/10 p-4 text-primary shadow-sm">
            <Icon className="h-8 w-8" />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-primary/40 bg-white/80 text-primary shadow-sm">因果ロジックで意思決定を設計</Badge>
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
            KPI {result.metricLabel}
          </Badge>
          <Badge variant="outline" className="border-muted/60 bg-muted/20 text-muted-foreground">
            {result.duration}
          </Badge>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_minmax(0,0.95fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/20 bg-white/85 p-6 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Executive Summary</p>
              <p className="mt-3 text-3xl font-black text-foreground">{impactHeadline}</p>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{result.outcome}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">改善幅</p>
                  <p className="mt-2 text-2xl font-bold text-primary">{result.improvement}</p>
                  <p className="mt-2 text-xs text-primary/60">粗利構造をAIが分解し、単価と成約率を同時に改善</p>
                </div>
                <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/80">投資対効果</p>
                  <p className="mt-2 text-lg font-bold text-secondary">{result.roiLabel}</p>
                  <p className="mt-2 text-xs text-secondary/70">経営会議で納得性ある判断材料を即日共有</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-muted/40 to-primary/10 p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">因果チェーン</p>
              <p className="mt-2 text-sm text-muted-foreground">課題の構造からAIの打ち手、現場の合意形成までを3ステップで可視化。経営陣が納得する論理展開をそのまま再現できます。</p>
              <div className="mt-6 space-y-6">
                {[ 
                  {
                    label: "根本課題",
                    description: result.challenge,
                    icon: Workflow,
                    accent: "from-sky-500/25 to-sky-500/5",
                  },
                  {
                    label: "AIアプローチ",
                    description: result.approach,
                    icon: BrainCircuit,
                    accent: "from-violet-500/25 to-violet-500/5",
                  },
                  {
                    label: "実現した成果",
                    description: result.outcome,
                    icon: CheckCircle2,
                    accent: "from-emerald-500/25 to-emerald-500/5",
                  },
                ].map((step, stepIndex, array) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.label} className="flex items-start gap-4">
                      <div className="relative">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-primary shadow-sm`}>
                          <StepIcon className="h-6 w-6" />
                        </div>
                        {stepIndex < array.length - 1 && (
                          <span className="absolute left-1/2 top-full h-12 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{step.label}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-inner">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/10 p-5 text-primary">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">数値で分かる改善効果</p>
              <p className="mt-3 text-2xl font-black text-foreground">{impactHeadline}</p>
              <p className="mt-2 text-sm font-semibold text-primary/80">{result.improvement} / {result.roiLabel}</p>
              <p className="mt-2 text-xs text-primary/70">AIが案件別に粗利インパクトを示し、経営陣が即断できる材料を提供しました。</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-base font-bold uppercase tracking-wide text-muted-foreground">Before → After</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  {result.improvement}
                </span>
                <span className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold ${result.roiClass}`}>
                  {result.roiLabel}
                </span>
              </div>
            </div>
            <p className="text-lg font-semibold text-foreground">{result.metricLabel}</p>
            <div className="flex flex-col gap-5">
              <div className="flex h-56 items-end justify-around gap-6 rounded-3xl border border-muted/60 bg-white/80 p-5">
                <div className="flex h-full w-20 flex-col items-center justify-end gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Before</span>
                  <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-muted">
                    <div
                      className="w-full rounded-full bg-muted-foreground/60"
                      style={{
                        height: isVisible ? `${beforeHeight}%` : "0%",
                        transition: `height 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${0.12 + index * 0.04}s`,
                      }}
                    />
                    <span className="pointer-events-none absolute inset-x-4 bottom-4 h-1 rounded-full bg-white/60" aria-hidden="true" />
                  </div>
                  <AnimatedCounter
                    value={result.beforeValue}
                    decimals={beforeDecimals}
                    suffix={result.unit}
                    className="text-sm font-semibold text-muted-foreground"
                  />
                </div>
                <div className="flex h-full w-20 flex-col items-center justify-end gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">After</span>
                  <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-primary/10">
                    <div
                      className="w-full rounded-full bg-primary"
                      style={{
                        height: isVisible ? `${afterHeight}%` : "0%",
                        transition: `height 1s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + index * 0.05}s`,
                      }}
                    />
                    <span className="pointer-events-none absolute inset-x-4 bottom-4 h-1 rounded-full bg-primary/40" aria-hidden="true" />
                  </div>
                  <AnimatedCounter
                    value={result.afterValue}
                    decimals={afterDecimals}
                    suffix={result.unit}
                    className="text-sm font-semibold text-primary"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">意思決定まで</p>
                  <p className="mt-2 text-base font-semibold text-primary/90">週次で仮説・検証を共有</p>
                  <p className="mt-2 text-xs text-primary/60">主要KPI・打ち手・投資判断を同一ダッシュボードで同期</p>
                </div>
                <div className="rounded-2xl border border-secondary/25 bg-secondary/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/80">現場の納得感</p>
                  <p className="mt-2 text-base font-semibold text-secondary/80">AIの判断根拠を可視化</p>
                  <p className="mt-2 text-xs text-secondary/70">営業現場がシナリオを比較し、即日で価格交渉を意思決定</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-r from-white via-primary/5 to-secondary/10 p-6">
          <span className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="relative z-10">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Quote className="h-5 w-5" />
              <span className="text-sm font-bold tracking-wide uppercase">Voice</span>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">{result.quote}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ResultsSection = () => {
  const { ref: chartRef, style: chartStyle } = useParallax<HTMLDivElement>({ intensity: 0.2, maxTranslate: 16 });
  const { ref: chartRevealRef, isVisible: chartVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="fade-in-section py-14 md:py-20 bg-white" id="case-studies">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1 text-base font-semibold uppercase tracking-[0.35em] text-primary md:text-lg">
            Results
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            生成AIが意思決定時間を創出した4つのストーリー
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            公式デモサイト「furumachi-smec.lognowa.com」で紹介しているワークフローを導入し、営業・製造・建設・ECの判断スピードを高めた実例です。
            いずれの案件でもAIが選択肢と根拠を提示し、最終判断は経営陣が担うOECD推奨の協働スタイルを徹底しています。
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <div className="pointer-events-none absolute inset-y-6 left-0 hidden w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-white via-white/90 to-transparent shadow-[10px_0_40px_rgba(15,23,42,0.08)] md:flex">
            <ArrowLeft className="h-5 w-5 text-muted-foreground/70" />
          </div>
          <div className="pointer-events-none absolute inset-y-6 right-0 hidden w-16 items-center justify-center rounded-3xl bg-gradient-to-l from-white via-white/90 to-transparent shadow-[-10px_0_40px_rgba(15,23,42,0.08)] md:flex">
            <ArrowRight className="h-5 w-5 text-muted-foreground/70" />
          </div>
          <CarouselContent>
            {results.map((result, index) => (
              <CarouselItem key={result.company} className="md:basis-1/2 lg:basis-2/3 xl:basis-1/2">
                <ResultCard result={result} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6 hidden md:flex" />
          <CarouselNext className="-right-6 hidden md:flex" />
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground md:hidden">
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-white/90 px-4 py-2 shadow-sm">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium tracking-wide">スワイプで他の事例を見る</span>
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        <div
          ref={chartRevealRef}
          className={cn(
            "mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,1fr)] items-center rounded-[36px] border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-sky-50/60 p-8 shadow-card transition-all duration-700 ease-out",
            chartVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-sm">
              <Timer className="h-4 w-4" />
              TIME TO DECIDE
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">意思決定時間の短縮効果</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary/80">
                生成AIが管理会計ダッシュボードと結びつき、論点抽出・利益インパクト・資金影響をワンビューで提示。判断材料が同じ土台
                に揃うことで、経営陣は意思決定の質を落とさずに判断までの時間を圧縮できます。裏付けを揃えた説明ができるため、リーダー
                シップの信頼感を保ちながら一歩先の決断を伝えられます。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {decisionInsights.map((insight) => {
                const InsightIcon = insight.icon;
                return (
                  <div
                    key={insight.title}
                    className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-white/90 p-4 shadow-inner"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                      <InsightIcon className="h-5 w-5" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-primary/90">{insight.title}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              ref={chartRef}
              style={chartStyle}
              className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-inner"
            >
              <div
                className="pointer-events-none absolute -inset-10 bg-gradient-to-r from-primary/20 via-secondary/25 to-accent/20 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-90 animate-chart-aurora"
                aria-hidden="true"
              />
              <img
                src={executiveDashboard}
                alt="AI管理会計ダッシュボードの意思決定可視化"
                className="relative z-10 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0">
                <span
                  className="absolute bottom-[18%] left-[14%] h-14 w-14 rounded-full border border-white/60 bg-primary/40 shadow-[0_0_25px_rgba(59,130,246,0.45)] backdrop-blur-sm animate-chart-pulse"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-[36%] left-[55%] h-3 w-24 rounded-full bg-gradient-to-r from-white/70 via-white/95 to-transparent opacity-80 blur-[1px] animate-chart-sweep"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-[12%] top-[22%] h-12 w-12 rounded-full border border-white/50 bg-secondary/30 shadow-[0_0_20px_rgba(192,132,252,0.45)] backdrop-blur-[1.5px] animate-chart-pulse-delayed"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <div className="grid gap-4 md:grid-cols-3">
              {decisionImpacts.map((impact) => (
                <div
                  key={impact.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-primary/25 bg-white/95 p-6 shadow-card"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{impact.label}</p>
                    <p className="text-sm font-semibold text-primary/90">{impact.impact}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl border border-primary/15 bg-primary/5 p-3 text-muted-foreground">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/70">Before</p>
                      <AnimatedCounter value={impact.before} suffix={impact.unit} className="mt-1 text-lg font-bold text-primary/80" />
                    </div>
                    <div className="rounded-2xl border border-primary/40 bg-primary/10 p-3 text-primary">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">After</p>
                      <AnimatedCounter value={impact.after} suffix={impact.unit} className="mt-1 text-lg font-bold text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary/10 via-primary/15 to-primary/5 px-4 py-2 text-xs font-semibold text-primary">
                    <span>削減率</span>
                    <span>{impact.reduction}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{impact.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-primary/25 bg-white/90 p-6 shadow-inner">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">EXECUTIVE SUMMARY</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                主要KPIと意思決定時間は初回相談で定義し、週次レポートでモニタリング。粗利率は平均+6.7pt、キャッシュ創出は+1.4億円を達成し、意思決定のスピードと納得感を同時に引き上げています。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-primary/25 bg-gradient-to-br from-white via-sky-50 to-emerald-50/60 p-8 shadow-card">
          <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch">
            <div className="space-y-6 xl:w-[38%]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">CUMULATIVE IMPACT</p>
                <h3 className="text-3xl font-bold text-foreground md:text-4xl">生成AI導入後の累積インフォグラフィック</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                3ヶ月の伴走で創出された成長余力と時間価値をグラフィック化。投資対効果と経営インパクトを一目で把握できます。
              </p>
              <div className="rounded-3xl border border-primary/25 bg-white/95 p-6 shadow-inner">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">3部門を跨いだ意思決定の変化</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {cumulativeBulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">TRUST SIGNALS</p>
                <div className="flex flex-wrap items-center gap-3">
                  {trustSignals.map((signal) => (
                    <span
                      key={signal}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/95 px-4 py-2 text-[12px] font-semibold text-primary/80 shadow-sm"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                      <span className="tracking-normal">{signal}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative flex-1 rounded-[28px] border border-white/50 bg-white/80 p-6 shadow-inner backdrop-blur">
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
                <img
                  src={strategicBlueprint}
                  alt="戦略ダッシュボードの設計図"
                  className="h-full w-full object-cover opacity-45 mix-blend-multiply"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
                <span className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-secondary/25 blur-3xl" aria-hidden="true" />
              </div>
              <div className="relative z-10 grid gap-6">
                <div className="mx-auto flex w-full max-w-xs flex-col items-center rounded-full border border-white/70 bg-white/90 px-10 py-10 text-center shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">{cumulativeCapitalGain.label}</p>
                  <AnimatedCounter
                    value={cumulativeCapitalGain.value}
                    suffix={cumulativeCapitalGain.suffix}
                    decimals={1}
                    duration={1100}
                    className="mt-2 text-5xl font-black text-primary"
                  />
                  <p className="mt-2 text-xs text-primary/70">{cumulativeCapitalGain.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {aggregateHighlights.map((highlight, index) => {
                    const HighlightIcon = highlight.icon;
                    return (
                      <div
                        key={highlight.label}
                        className={cn(
                          "flex h-full flex-col gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-sm backdrop-blur",
                          "transition-transform duration-300 hover:-translate-y-1"
                        )}
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${highlight.accent} text-primary shadow-inner`}
                          >
                            <HighlightIcon className="h-5 w-5" />
                          </span>
                          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{highlight.label}</p>
                        </div>
                        <AnimatedCounter
                          value={highlight.value}
                          suffix={highlight.suffix}
                          decimals={highlight.decimals ?? 0}
                          duration={1100}
                          className="text-3xl font-black text-primary"
                        />
                        <p className="text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
                        <div className="mt-auto h-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" aria-hidden="true" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
