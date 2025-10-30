import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Gauge,
  LineChart,
  PiggyBank,
  Radar,
  ShieldCheck,
  Sparkle,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import solutionIllustration from "@/assets/strategy-planning.jpg";
import representativePhoto from "@/assets/representative.jpg";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

const phases = [
  {
    month: "Day0-7",
    headline: "ZENダイアグノスティックで現在地を特定",
    bullets: [
      "財務・販売・在庫・人員データを棚卸しし、AI学習に必要な粒度を整備",
      "経営陣・幹部ヒアリングで判断の制約とKPI仮説を棚卸し",
      "粗利とキャッシュのギャップ、判断リードタイムのボトルネックを定量化",
    ],
    deliverable: "ZENナビゲーションボードの初期設計と意思決定ログの雛形",
  },
  {
    month: "Week2-5",
    headline: "シグナル×シナリオを共創し運用ルールを定義",
    bullets: [
      "生成AIが粗利・在庫・キャッシュのシナリオを生成し、専門家が補正",
      "会議体・タスクボード・教育コンテンツを整備し、運用ルールを標準化",
      "金融機関・投資家への説明資料をテンプレート化し、ガバナンスを整備",
    ],
    deliverable: "週次ZENナビゲーションボード・AIワークフロー・運用ガイドライン",
  },
  {
    month: "Week6-10",
    headline: "改善サイクルを定着させ拡張フェーズへ",
    bullets: [
      "週次レビューでKPI進捗とリスクを監視し、AIが打ち手の優先度を更新",
      "教育プログラムと社内トレーナー育成で、AI活用が自走できる状態に",
      "金融機関との対話や施策検証を伴走し、成果の再現性と拡張計画を設計",
    ],
    deliverable: "改善定着マニュアル・AI活用プレイブック・キャッシュシナリオ",
  },
];

const readinessOptions = [
  {
    value: "diagnosis",
    label: "まずは現在地の可視化から",
    recommended: 0,
    description: "粗利・キャッシュ・人員のギャップを棚卸しし、AI活用に必要なデータ条件と意思決定課題を整理します。",
  },
  {
    value: "design",
    label: "AIと運用ルールを一体で設計したい",
    recommended: 1,
    description: "シグナル設計と会議体の整備を同時進行し、ZENナビゲーションボードで再現性を高めます。",
  },
  {
    value: "rollout",
    label: "定着と横展開まで伴走してほしい",
    recommended: 2,
    description: "週次レビューと教育プログラムで改善サイクルを固定化し、部門展開と金融機関連携まで支援します。",
  },
];

const services = [
  {
    icon: Workflow,
    title: "ZENエグゼクティブ伴走PMO",
    tagline: "判断と実行の共創",
    metrics: ["意思決定リードタイム▲52%", "経営会議満足度+88%"],
    description:
      "生成AIが提示するシナリオを経営判断に組み込み、施策の優先順位と実行を支援。ZENナビゲーションボードと意思決定ログで全員が同じ地図を共有します。",
    outputs: ["週次レビューとエグゼクティブファシリテーション", "AI連動タスクボード運用", "KPI・キャッシュ進捗サマリー"],
  },
  {
    icon: BrainCircuit,
    title: "AI活用デザイン＆教育",
    tagline: "ユースケースの共創",
    metrics: ["PoC成功率94%", "教育セッション満足度4.8/5"],
    description:
      "営業・製造・管理など部門別にAI活用テーマを設計。プロンプト・テンプレート・評価指標を共創し、現場が成果を語れるまで伴走します。",
    outputs: ["ユースケース設計とROI試算", "運用ガイドラインと教育プログラム", "Slack/Teams連携の自動化フロー"],
  },
  {
    icon: LineChart,
    title: "管理会計・KPIリインベント",
    tagline: "数字の翻訳と合意形成",
    metrics: ["粗利率+6.2pt", "在庫回転+28%"],
    description:
      "部門別・案件別の利益構造を可視化し、ZENと連動したKPI体系を整備。意思決定に必要な因果関係と感度分析を提供します。",
    outputs: ["ダッシュボードと帳票テンプレート", "KPIレビュー手順書", "施策シナリオの感度分析"],
  },
  {
    icon: PiggyBank,
    title: "キャッシュ＆ガバナンス設計",
    tagline: "資金余力と信用を守る",
    metrics: ["運転資金余力+3.5ヶ月", "面談準備時間▲60%"],
    description:
      "資金繰り表とキャッシュフローモデルを自動化し、金融機関や投資家との対話資料を整備。条件交渉とモニタリングを前倒しにします。",
    outputs: ["キャッシュフロー予測テンプレート", "金融機関面談サマリー", "投資判断の意思決定ログ"],
  },
];

type Phase = (typeof phases)[number];
type Service = (typeof services)[number];

const causalityMap = [
  {
    stage: "Signal",
    title: "外部指数と現場兆候",
    description:
      "原材料・需要・金融指標を走査し、粗利とキャッシュに効くシグナルを抽出。現場ヒアリングと突合して優先順位を整理。",
    metric: "平均27件/月のシグナル（例）",
    icon: Radar,
  },
  {
    stage: "Insight",
    title: "ZENの因果分析",
    description:
      "粗利・在庫・人員指標の因果パスを推定し、感度分析で最重要ポイントを特定。判断材料が揃い議論が収束します。",
    metric: "改善インパクト14本の比較（例）",
    icon: Gauge,
  },
  {
    stage: "Action",
    title: "意思決定と実装",
    description:
      "専門家が打ち手・担当者・期日を設計し、AIが進捗とリスクを監視。週次レビューで改善サイクルを固定化します。",
    metric: "判断リードタイム▲52%（例）",
    icon: Target,
  },
];

const resultHighlights = [
  {
    label: "改善サイクル",
    value: 3.1,
    suffix: "倍",
    helper: "意思決定更新スピード（例）",
    tone: "primary",
  },
  {
    label: "キャッシュ余力前倒し",
    value: 42,
    suffix: "日前",
    helper: "資金ショック検知のリードタイム（例）",
    tone: "secondary",
  },
  {
    label: "AI提案採択率",
    value: 87,
    suffix: "%",
    helper: "経営会議で採択されたAI提案（例）",
    tone: "accent",
  },
];

const trustStack = [
  "経営革新等認定支援機関",
  "Google Cloud Partner",
  "SME DX Award 2024",
];

const PhaseCard = ({ phase, index, isActive }: { phase: Phase; index: number; isActive: boolean }) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.25 });

  return (
    <article
      ref={ref}
      className={cn(
        "relative flex h-full flex-col gap-5 rounded-[28px] border p-6 transition-all duration-700 ease-out",
        isActive ? "border-primary/40 bg-primary/10 shadow-lg shadow-primary/20" : "border-muted/20 bg-white/95",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-transform duration-300",
          isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground",
        )}
      >
        {index + 1}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{phase.month}</p>
        <h3 className="mt-3 text-xl font-bold text-foreground md:text-2xl">{phase.headline}</h3>
      </div>
      <ul className="space-y-3">
        {phase.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground transition-transform duration-300 hover:translate-x-1"
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full",
                isActive ? "bg-primary" : "bg-muted",
              )}
            />
            {bullet}
          </li>
        ))}
      </ul>
      <div className={cn("mt-auto rounded-2xl border p-4 transition-colors duration-300", isActive ? "border-secondary/50 bg-secondary/10" : "border-secondary/20 bg-secondary/5")}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground/80">納品物</p>
        <p className="mt-2 text-sm text-muted-foreground">{phase.deliverable}</p>
      </div>
      {index < phases.length - 1 && (
        <span className="absolute right-[-16px] top-14 hidden h-0.5 w-8 bg-gradient-to-r from-primary/40 to-accent/60 lg:block" aria-hidden="true" />
      )}
    </article>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.2 });

  return (
    <article
      ref={ref}
      className={cn(
        "flex h-full flex-col gap-6 rounded-[28px] border border-primary/10 bg-white/95 p-8 shadow-card transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-center gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 text-primary">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{service.tagline}</p>
          <h3 className="mt-2 text-2xl font-bold text-foreground md:text-[28px]">{service.title}</h3>
        </div>
      </div>
      <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {service.metrics.map((metric) => (
          <div
            key={metric}
            className="rounded-2xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm font-semibold text-accent shadow-sm"
          >
            {metric}
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-muted to-transparent" aria-hidden="true" />
      <ul className="space-y-3">
        {service.outputs.map((output) => (
          <li key={output} className="flex items-start gap-3 text-base text-muted-foreground">
            <span aria-hidden="true" className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
            {output}
          </li>
        ))}
      </ul>
    </article>
  );
};

const SolutionSection = () => {
  const [readiness, setReadiness] = useState(readinessOptions[0].value);

  const activePhaseIndex = useMemo(() => {
    const matched = readinessOptions.find((option) => option.value === readiness);
    return matched?.recommended ?? 0;
  }, [readiness]);

  const { ref: solutionImageRef, style: solutionImageStyle } = useParallax<HTMLDivElement>({ intensity: 0.3, maxTranslate: 26 });
  const { ref: imageRevealRef, isVisible: imageVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="fade-in-section section-spacing bg-white">
      <div className="layout-shell space-y-16 lg:space-y-20">
        <div className="balanced-grid lg:items-center">
          <div
            ref={imageRevealRef}
            className={cn(
              "order-2 overflow-hidden rounded-[36px] border border-primary/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-elegant transition-all duration-700 ease-out lg:order-1",
              imageVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <div ref={solutionImageRef} style={solutionImageStyle} className="relative will-change-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-slate-900/40" aria-hidden="true" />
              <img
                src={solutionIllustration}
                alt="生成AIと専門家が経営改善の意思決定ボードを設計する様子"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute -left-24 top-16 hidden h-56 w-56 rounded-full bg-primary/20 blur-3xl lg:block" aria-hidden="true" />
              <div className="absolute left-6 top-6 max-w-[240px] rounded-3xl border border-white/20 bg-white/85 p-4 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">ZEN LIVE PREVIEW</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">意思決定キャンバスのライブプレビュー</p>
                <p className="mt-1 text-xs text-muted-foreground">粗利・キャッシュ・需要・人員を同じ画面で同期し、次の一手をワンタップで共有。</p>
              </div>
              <div className="absolute bottom-6 right-6 flex flex-col gap-3 rounded-[28px] border border-primary/30 bg-white/90 p-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                  ZEN METRICS
                </div>
                <div className="flex flex-wrap gap-3">
                  {resultHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className={cn(
                        "flex flex-col rounded-2xl border px-3 py-2",
                        highlight.tone === "primary"
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : highlight.tone === "secondary"
                            ? "border-secondary/40 bg-secondary/10 text-secondary"
                            : "border-accent/40 bg-accent/10 text-accent",
                      )}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.28em]">{highlight.label}</span>
                      <span className="text-2xl font-extrabold leading-tight">{highlight.value}{highlight.suffix}</span>
                      <span className="text-[0.7rem] font-medium text-slate-600">{highlight.helper}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 space-y-7 lg:order-2 lg:max-w-[64ch]">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              解決策
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="space-y-4 text-balance">
              <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.8rem]">
                専門家と生成AIが経営改善サイクルを共創し、利益とキャッシュを同時に伸ばす
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                ZEN Strategic Navigatorは、生成AIのスピードと専門家の判断力を掛け合わせ、週次で経営計画をアップデート。改善サイクル3.1倍／キャッシュ余力+42日前倒し／会議資料作成▲68%（例）を狙う実行基盤を整えます。
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">因果性</strong>：AIが粗利・キャッシュ・現場指標の因果を可視化し、証跡付きで提示。<br />
                <strong className="font-semibold text-foreground">論理性</strong>：専門家が意思決定フレームとガバナンスを整備し、判断プロセスを標準化。<br />
                <strong className="font-semibold text-foreground">納得性</strong>：会議資料・タスク・レポートを同じトーンで設計し、現場と経営陣の理解速度を揃えます。
              </p>
            </div>

            <div className="grid gap-4 rounded-[32px] border border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">因果チェーン</p>
              <div className="grid gap-3 md:grid-cols-3">
                {causalityMap.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.stage} className="flex flex-col gap-2 rounded-2xl border border-primary/15 bg-white/90 p-4 shadow-card">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">{item.stage}</span>
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                      <p className="text-[0.7rem] font-semibold text-primary/80">{item.metric}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-[32px] border border-secondary/20 bg-white/95 p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
                  <img src={representativePhoto} alt="担当コンサルタントの写真" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary/80">Photo Testimonial</p>
                  <p className="text-sm font-semibold text-foreground">「ZENでAIと専門家が同じ画面にいることで、役員会の議論が短く深くなりました。判断の背景を語れるようになり、金融機関との対話も前倒しできています。」</p>
                  <p className="text-xs text-muted-foreground">卸売業 / 年商12.4億円 / 代表取締役談（例）</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {trustStack.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[0.7rem] font-medium text-secondary">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 rounded-[32px] border border-primary/15 bg-white/95 p-7 shadow-card lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                <Sparkle className="h-4 w-4" aria-hidden="true" />
                貴社の現在地を選択
              </span>
              <p className="text-lg font-semibold text-foreground">最適なフェーズをハイライトします。</p>
            </div>
            <Select value={readiness} onValueChange={setReadiness}>
              <SelectTrigger className="w-full rounded-2xl border-primary/30 bg-white/90 text-left text-base font-medium text-foreground">
                <SelectValue placeholder="現在の状況を選択" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-primary/20 bg-white">
                {readinessOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-sm text-foreground">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {readinessOptions.find((option) => option.value === readiness)?.description}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-8 right-8 top-8 h-1 bg-gradient-to-r from-primary via-secondary to-accent" aria-hidden="true" />
            <div className="relative grid gap-6 lg:grid-cols-3">
              {phases.map((phase, index) => (
                <PhaseCard key={phase.month} phase={phase} index={index} isActive={index === activePhaseIndex} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
