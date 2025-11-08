import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  FileText,
  LineChart,
  PiggyBank,
  Sparkles,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import aiCommandCenter from "@/assets/ai-technology.jpg";

const features = [
  {
    icon: BrainCircuit,
    title: "AI分析",
    description:
      "議事録・販売・会計データを生成AIが解析し、粗利とキャッシュの異常値をリアルタイム通知。経営課題ごとの解決シナリオと期待利益まで提示します。",
    narrative: "因果の仮説をAIが即時に生成し、人が確認する二重監査フロー。",
    metric: { label: "利益創出までのリードタイム", value: "-45%" },
    insights: [
      { label: "因果性", detail: "粗利とキャッシュの相関を自動学習し、要因と影響額を同じ画面で表示。" },
      { label: "論理性", detail: "仮説→検証→改善のロジックをテンプレ化し、打ち手の採択理由を記録。" },
      { label: "デザイン性", detail: "CxO視点のインタラクションで重要指標が一目で追える情報設計。" },
      { label: "スマート性", detail: "異常検知からSlack通知まで自動でつなぎ、高速に判断が回せます。" },
      { label: "納得性", detail: "経営陣レビュー用の根拠資料が同時生成され、会議で即承認が得られます。" },
    ],
  },
  {
    icon: LineChart,
    title: "管理会計ノウハウ",
    description:
      "部門別KPIとキャッシュドライバーを整備し、生成AIが提案する打ち手を定量評価。数字が共通言語になり、議論が戦略に直結します。",
    narrative: "KPIの定義と感度を明文化し、意思決定の論理を全員で共有。",
    metric: { label: "粗利改善シナリオ自動提案", value: "12本" },
    insights: [
      { label: "因果性", detail: "部門KPIとキャッシュドライバーを連動させ、粗利インパクトを因数分解。" },
      { label: "論理性", detail: "意思決定フローを管理会計ロジックに沿って数式化し、再現性を確保。" },
      { label: "デザイン性", detail: "スコアカードUIでボトルネックが色分けされ、対策優先度が直感で把握。" },
      { label: "スマート性", detail: "自動で目標乖離を検知し、改善アクションのROIを算出。" },
      { label: "納得性", detail: "数値背景とシナリオ比較を同時に提示し、関係者が同じ根拠で議論。" },
    ],
  },
  {
    icon: PiggyBank,
    title: "資金繰り改善",
    description:
      "入出金予定を自動同期し、生成AIが複数の投資・資金繰りシナリオをシミュレーション。資金ショートの確率や投資余力が一目で分かります。",
    narrative: "資金ショート要因を分解し、余力を意思決定に反映する設計。",
    metric: { label: "キャッシュ予測誤差", value: "-60%" },
    insights: [
      { label: "因果性", detail: "入出金と受発注データを連携し、キャッシュ変動の原因を時系列で追跡。" },
      { label: "論理性", detail: "資金ショート確率と要因寄与度を分解し、対処の優先順位を明示。" },
      { label: "デザイン性", detail: "バンクビューに近いUIで警戒ゾーンが色分けされ、次の意思決定が迷わない。" },
      { label: "スマート性", detail: "借入条件や為替を自動反映し、複数シナリオをワンクリックで比較。" },
      { label: "納得性", detail: "リアルタイムの余力指標が提示され、投資判断の説明責任を果たせます。" },
    ],
  },
  {
    icon: FileText,
    title: "金融機関連携",
    description:
      "金融機関ごとの論点に沿って決算説明のストーリーを整理し、面談資料や議事メモを自動生成。借入条件や約定確認のフォローが効率化されます。",
    narrative: "対外説明のロジックを標準化し、交渉の再現性を担保。",
    metric: { label: "面談準備と議事作成時間", value: "-40%" },
    insights: [
      { label: "因果性", detail: "決算・事業計画・キャッシュデータを紐づけ、面談論点を因果ストーリー化。" },
      { label: "論理性", detail: "金融機関ごとの審査ロジックに沿った資料構成で交渉の根拠を明確化。" },
      { label: "デザイン性", detail: "投資家向けスライド仕様で視覚と数字が揃い、説得力ある体験を提供。" },
      { label: "スマート性", detail: "面談後のTODOや約定管理を自動通知し、抜け漏れのないフォロー体制。" },
      { label: "納得性", detail: "交渉結果とKPI変化を記録し、経営陣が合意形成しやすいログを残せます。" },
    ],
  },
];

const quickBenefits = [
  {
    title: "経営会議準備",
    before: { value: 210, unit: "分/週" },
    after: { value: 90, unit: "分/週" },
    description:
      "AIが議題と抜け漏れをキャッシュインパクトまで整理。経営陣は確認と意思決定に集中できます。",
  },
  {
    title: "資金繰り更新",
    before: { value: 120, unit: "分/週" },
    after: { value: 35, unit: "分/週" },
    description:
      "入出金と借入条件を自動照合し、AIがキャッシュリスクの発生源と対処を提案。更新作業が一回で完了。",
  },
  {
    title: "レポート共有",
    before: { value: 180, unit: "分/月" },
    after: { value: 40, unit: "分/月" },
    description:
      "テンプレートに沿って生成AIが経営会議・金融機関向け資料を同時作成。現場への展開までストーリー化。",
  },
];

const outcomeHighlights = [
  {
    label: "利益設計",
    description:
      "生成AIが顧客・商品別の粗利シナリオを自動生成し、攻めの投資を意思決定できる状態を確立",
  },
  {
    label: "リスク制御",
    description:
      "キャッシュ不足の確率と要因を可視化し、数値根拠付きで予防策をその場で確定",
  },
  {
    label: "戦略実行",
    description:
      "AIが行動計画と進捗レビューを提示し、現場が自律的にスピードを持って動けるように",
  },
];

const caseStats = [
  { label: "粗利率", value: "+7.0pt", subLabel: "19% → 26%" },
  { label: "キャッシュ余力", value: "+3.5ヶ月", subLabel: "運転資金の改善" },
  { label: "意思決定速度", value: "2.5倍", subLabel: "経営会議がデータ完結" },
];

const decisionTimeline = [
  {
    phase: "WEEK 1",
    title: "経営課題の因果マッピング",
    detail:
      "営業日報・受発注・会計データをクレンジングし、AIが学習する因果チャートを構築。意思決定で使う指標と閾値を合意形成",
  },
  {
    phase: "WEEK 3",
    title: "AI×管理会計の実装",
    detail:
      "粗利インパクトとキャッシュ変動を一枚のダッシュボードで連動表示。経営会議のアジェンダが自動生成され、根拠資料も同時出力",
  },
  {
    phase: "WEEK 6",
    title: "現場定着と高速検証",
    detail:
      "AIが提案する打ち手をプロジェクト管理と連動させ、週次でROI・リスクをレビュー。成果が出た施策はテンプレ化して全社展開",
  },
];

const automationFlow = [
  {
    step: "1",
    phase: "Discovery Sprint",
    title: "課題の棚卸し",
    detail:
      "エグゼクティブワークショップで売上停滞・資金繰り不安・時間不足を分解し、AIが学習すべきデータ粒度と整備優先度を決定",
    deliverable: "経営課題マップとAI学習データ構成案",
    icon: Sparkles,
  },
  {
    step: "2",
    phase: "Design & Modeling",
    title: "AI×管理会計設計",
    detail:
      "主要KPIとキャッシュドライバーを同時に整備し、AI分析から導かれるシナリオを定量評価する管理会計フレームを実装",
    deliverable: "管理会計KPIアーキテクチャと自動化シナリオ",
    icon: LineChart,
  },
  {
    step: "3",
    phase: "Operation & Scale",
    title: "成果の定着",
    detail:
      "週次レビューで粗利・キャッシュ変動と打ち手の効果を検証し、AIが示す改善案を現場オペレーションへ継続展開",
    deliverable: "成果ダッシュボードと運用プレイブック",
    icon: PiggyBank,
  },
];

const causalityHighlights = [
  {
    title: "因果が読める意思決定土台",
    description:
      "販売・会計・議事録をAIが一枚のダッシュボードに統合し、粗利やキャッシュの変動要因をリアルタイムに分解。異常値の原因が数値のまま追えるようになります。",
  },
  {
    title: "判断の論理を共有",
    description:
      "AIが施策ごとのインパクトとリスクを比較し、採用基準を管理会計フレームに沿って可視化。経営陣と現場が同じ根拠で議論できる状態をつくります。",
  },
  {
    title: "実行と検証の高速化",
    description:
      "打ち手をプロジェクト化し、週次で進捗と効果を自動レビュー。効果が薄い施策は即座に差し替え、勝ち筋へ資源を集中投下できます。",
  },
];

const confidenceMetrics = [
  {
    value: 7.2,
    decimals: 1,
    prefix: "+",
    suffix: "pt",
    label: "粗利率の中央値が向上",
  },
  {
    value: 120,
    prefix: "-",
    suffix: "分/週",
    label: "意思決定準備の削減時間",
  },
  {
    value: 92,
    suffix: "%",
    label: "AI提案の採択率",
  },
];

const BeforeAfterCard = ({
  item,
  index,
}: {
  item: (typeof quickBenefits)[number];
  index: number;
}) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.25 });

  return (
    <article
      ref={ref}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-white via-secondary/5 to-white p-6 shadow-card transition-all duration-700 ease-out"
      style={{ transform: isVisible ? "translateY(0)" : "translateY(14px)", opacity: isVisible ? 1 : 0, transitionDelay: `${index * 90}ms` }}
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-secondary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-70" aria-hidden="true" />
      <div className="flex items-center justify-between gap-3 text-secondary-foreground">
        <p className="text-lg font-semibold tracking-tight">{item.title}</p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.26em] text-secondary-foreground/80">
          <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
          -{item.before.value - item.after.value}分
        </span>
      </div>

      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4 rounded-2xl border border-secondary/30 bg-white/90 p-4 shadow-inner">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Before</span>
          <p className="text-2xl font-semibold text-muted-foreground">
            <AnimatedCounter value={item.before.value} suffix={item.before.unit} duration={800} />
          </p>
        </div>
        <div className="space-y-1 text-right">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/90">After</span>
          <p className="text-2xl font-semibold text-primary">
            <AnimatedCounter value={item.after.value} suffix={item.after.unit} duration={800} />
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-secondary-foreground/80">{item.description}</p>
    </article>
  );
};

const AIBenefitsSection = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-gradient-to-b from-white via-slate-50/75 to-white py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-10">
            <ScrollReveal className="space-y-6" variant="fade">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-base font-semibold uppercase tracking-[0.32em] text-primary">
                <BrainCircuit className="h-4 w-4" aria-hidden="true" />
                CxOのための生成AI運用基盤
              </span>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold leading-snug text-foreground md:text-4xl">
                  <span className="serif-accent">利益構造を読み解き、判断と実行を同じ画面で完結させる</span>
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  年商5,000万円〜10億円未満の企業で繰り返し磨かれたナレッジをもとに、生成AIが利益とキャッシュの因果を分解。社長がその場で納得し、現場が迷わず動ける意思決定インフラを提供します。
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <div className="flex flex-col gap-3 rounded-3xl border border-primary/15 bg-white/80 p-6 shadow-card md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">CAUSALITY DESIGN</p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground md:text-[2.1rem]">
                    因果を読み解く三層ロジックで納得と実行を同時に生む
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:max-w-sm">
                  AIが因果仮説を提示し、人が論理と現場の整合性を検証。経営者の判断がストーリーとして共有され、部門横断で動ける体制をつくります。
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {causalityHighlights.map((item, index) => (
                  <ScrollReveal
                    key={item.title}
                    delay={index * 90}
                    className="relative flex h-full flex-col gap-4 rounded-3xl border border-primary/10 bg-gradient-to-br from-white via-primary/5 to-white p-6 shadow-card"
                  >
                    <span className="inline-flex w-max items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      STEP {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
                    {index < causalityHighlights.length - 1 && (
                      <span className="absolute -right-10 top-1/2 hidden h-px w-16 -translate-y-1/2 bg-gradient-to-r from-primary/40 to-accent/50 md:block" aria-hidden="true" />
                    )}
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <ScrollReveal
            className="relative overflow-hidden rounded-[2.2rem] border border-secondary/30 bg-white/80 shadow-2xl"
            variant="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-primary/15" aria-hidden="true" />
            <img
              src={aiCommandCenter}
              alt="AI指揮センターで粗利とキャッシュ指標を俯瞰しながら経営会議を行う様子"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-x-6 bottom-6 space-y-4 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.38em] text-secondary-foreground/70">導入3ヶ月の指標</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {confidenceMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-white/90 p-4 text-center shadow-inner">
                    <p className="text-3xl font-bold text-secondary">
                      <AnimatedCounter
                        value={metric.value}
                        decimals={metric.decimals}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </p>
                    <p className="mt-2 text-sm font-medium text-secondary-foreground/80">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-start">
          <div className="space-y-8">
            <ScrollReveal className="rounded-[2.4rem] border border-primary/15 bg-gradient-to-br from-white via-primary/8 to-white p-8 shadow-[0px_42px_120px_-48px_rgba(18,52,120,0.35)]">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-primary shadow-sm">CASE STUDY</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 py-1 text-primary/80 shadow-sm">
                  地方製造業 / 従業員180名
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-3 py-1 text-primary/70 shadow-sm">
                  年商6.8億円・九州拠点
                </span>
              </div>
              <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-semibold leading-tight text-foreground">地方製造業での導入ストーリー</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      営業日報・受発注・会計の3データをAIがリアルタイム照合し、粗利インパクトとキャッシュ変動を先読み。翌朝には顧客別の提案書と投資対効果が自動生成され、社長は採用すべきシナリオを選ぶだけ。粗利率は19%から26%へ改善し、役員会は攻めの投資案件を議論する時間を再設計できました。
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {caseStats.map((stat, index) => (
                      <ScrollReveal
                        key={stat.label}
                        delay={index * 70}
                        className="flex h-full flex-col gap-2 rounded-2xl border border-primary/20 bg-white/90 p-4 shadow-inner"
                      >
                        <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.28em] text-primary/70">
                          <span>{stat.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        </div>
                        <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.subLabel}</p>
                      </ScrollReveal>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-white/90 p-5 shadow-inner">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">成果サマリー</p>
                    <div className="mt-4 space-y-4">
                      {outcomeHighlights.map((item, index) => (
                        <ScrollReveal
                          as="div"
                          key={item.label}
                          delay={index * 80}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 rounded-full bg-primary/15 p-1 text-primary">
                            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">{item.label}</p>
                            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="rounded-2xl border border-primary/20 bg-white/90 p-5 shadow-inner">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">導入プロセス</p>
                    <ol className="mt-4 space-y-4">
                      {decisionTimeline.map((item, index) => (
                        <ScrollReveal
                          as="li"
                          key={item.phase}
                          delay={index * 90}
                          className="flex gap-4 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/8 via-white to-white p-4 shadow-sm"
                        >
                          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-primary/12 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            {item.phase}
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-primary/90">{item.title}</p>
                            <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                          </div>
                        </ScrollReveal>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5 text-sm leading-relaxed text-primary/80 shadow-inner">
                    CEOコメント：「AIが粗利とキャッシュの因果を説明してくれるので、役員会が数字で納得し、攻めの意思決定に踏み切れた。」
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 rounded-3xl border border-primary/20 bg-primary/10 p-6 shadow-card sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">VALUE PROOF</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">CxOが重視する4つの仕組み</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-xs">
                  因果性・論理性・説明責任を備えたAI運用を標準装備。数字で納得し、現場が動ける状態を数週間でつくります。
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <ScrollReveal
                      key={feature.title}
                      delay={index * 90}
                      className="group relative flex h-full flex-col gap-7 overflow-hidden rounded-[2.4rem] border border-primary/10 bg-white/95 p-8 shadow-[0px_42px_120px_-48px_rgba(18,52,120,0.6)] ring-1 ring-inset ring-white/60 backdrop-blur"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                      <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-[110px]" aria-hidden="true" />
                      <div className="relative z-10 flex flex-col gap-7">
                        <div className="flex flex-wrap items-start justify-between gap-5">
                          <div className="flex items-center gap-4">
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/12 text-primary shadow-inner ring-1 ring-primary/25">
                              <Icon className="h-7 w-7" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">CAUSAL LOGIC</p>
                              <h3 className="mt-2 text-2xl font-semibold text-foreground">{feature.title}</h3>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80 shadow-sm">
                              因果連動テンプレ
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-primary shadow-sm">
                              即時検証
                              <ArrowDownRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                          <div className="space-y-5">
                            <div className="rounded-2xl border border-primary/12 bg-white/95 p-5 shadow-inner">
                              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">Executive Summary</p>
                              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                            </div>
                            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/8 via-white to-accent/10 p-5 text-primary/90 shadow-inner">
                              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">論理シナリオ</p>
                              <p className="mt-2 text-sm leading-relaxed">{feature.narrative}</p>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-4 rounded-[1.8rem] border border-primary/10 bg-white/92 p-5 shadow-inner ring-1 ring-primary/10">
                            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-primary/60">
                              <span>成果指標</span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold tracking-[0.32em] text-white shadow-lg">
                                REAL-TIME
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{feature.metric.label}</p>
                              <p className="mt-3 text-4xl font-bold text-primary">{feature.metric.value}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                          {feature.insights.map((insight) => (
                            <div
                              key={insight.label}
                              className="rounded-2xl border border-primary/10 bg-white/92 p-4 text-left shadow-inner transition-shadow duration-500 group-hover:shadow-lg"
                            >
                              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">{insight.label}</p>
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{insight.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <ScrollReveal className="rounded-3xl border border-secondary/30 bg-white/85 p-7 shadow-card" variant="fade">
              <h3 className="text-2xl font-semibold text-secondary-foreground">数字でわかる即効メリット</h3>
              <p className="mt-2 text-base text-secondary-foreground/80">
                生成AIが全社データを横断し、意思決定に必要なレポートとアクションを同時生成。削減できる時間と増える価値を、経営陣が一目で評価できます。
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {quickBenefits.map((item, index) => (
                  <BeforeAfterCard key={item.title} item={item} index={index} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="rounded-3xl border border-primary/20 bg-white/92 p-8 shadow-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-semibold text-foreground">AI活用のステップ</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  因果の解像度と経営判断のスピードを両立させるための導入〜定着プロセス。各ステップで成果物と意思決定フレームを可視化し、投資対効果を明確にします。
                </p>
              </div>
              <div className="relative mt-8">
                <div className="pointer-events-none absolute left-10 right-10 top-11 hidden h-px bg-gradient-to-r from-primary/20 via-primary/40 to-accent/30 md:block" aria-hidden="true" />
                <div className="grid gap-6 md:grid-cols-3">
                  {automationFlow.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <ScrollReveal
                        key={item.step}
                        delay={index * 120}
                        className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-white/95 p-6 shadow-[0_30px_60px_-40px_rgba(15,53,104,0.45)] transition-transform duration-500 hover:-translate-y-1"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-white to-accent/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                        <div className="absolute -right-10 -top-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
                        <div className="relative flex flex-col gap-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-lg font-semibold text-white shadow-lg">
                                {item.step}
                                {index < automationFlow.length - 1 && (
                                  <span className="pointer-events-none absolute right-[-46px] top-1/2 hidden h-px w-16 -translate-y-1/2 bg-gradient-to-r from-primary/40 via-primary/30 to-accent/40 md:block" aria-hidden="true" />
                                )}
                              </span>
                              <div className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">{item.phase}</p>
                                <h4 className="text-[1.05rem] font-semibold text-foreground">{item.title}</h4>
                              </div>
                            </div>
                            <span className="hidden rounded-full border border-primary/20 bg-white/80 p-3 text-primary md:inline-flex">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          </div>
                          <p className="text-base leading-relaxed text-muted-foreground">{item.detail}</p>
                          <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-4 py-3 shadow-inner">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Deliverable</p>
                            <p className="mt-1 text-sm font-semibold text-primary/90">{item.deliverable}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
