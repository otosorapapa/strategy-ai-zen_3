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
    month: "着手〜1ヶ月",
    headline: "数字と現場の棚卸し",
    bullets: [
      "財務・販売・在庫データを生成AI学習用に整備し、KPI仮説と相関関係を洗い出し",
      "経営陣/管理部/営業責任者の三者ヒアリングで課題構造とデータ化可能な意思決定を可視化",
      "当座対応が必要な資金繰りリスクとAIで検証すべき改善テーマを提示し、判断の土台を明確化",
    ],
    deliverable: "生成AIに接続した管理会計ダッシュボード雛形と意思決定時間の測定指標",
  },
  {
    month: "2〜3ヶ月",
    headline: "管理会計とAIオペレーション設計",
    bullets: [
      "部門別損益・粗利ドライバーを可視化するレポート基盤を構築し、AIの提示根拠を説明可能に",
      "生成AIを活用した案件管理/需要予測/問い合わせ対応のユースケースをPoCしROIを定量化",
      "金融機関との面談に備えた資金繰りシナリオの論点を整理し、説明の筋道を揃える",
    ],
    deliverable: "経営会議テンプレート・生成AIワークフロー・資金繰りシナリオ3本",
  },
  {
    month: "4〜6ヶ月",
    headline: "改善アクションを現場に定着",
    bullets: [
      "週次モニタリングでKPIとキャッシュの変化を追跡し、生成AIが施策をチューニングして迷いを削減",
      "AIの運用ルールと教育コンテンツを整備し、社内チームが自走できるプロンプト体系を構築",
      "必要に応じて金融機関連携の打ち合わせ準備と振り返りを伴走し、外部との対話でも堂々と語れる状態をキープ",
    ],
    deliverable: "改善定着マニュアルと運用チェックリスト、AIが可視化する意思決定時間レポート",
  },
];

const readinessOptions = [
  {
    value: "diagnosis",
    label: "まずは数字の見える化から着手したい",
    recommended: 0,
    description: "現状のKPIと資金繰りを棚卸しし、優先課題を抽出するフェーズが最適です。",
  },
  {
    value: "design",
    label: "AIの設計と実装プランを固めたい",
    recommended: 1,
    description: "AIユースケースのPoCと管理会計の整備を同時に進めることで成果が出やすくなります。",
  },
  {
    value: "rollout",
    label: "改善施策を現場に定着させたい",
    recommended: 2,
    description: "週次レビューと教育コンテンツの整備で、改善アクションを継続させるフェーズが効果的です。",
  },
];

const services = [
  {
    icon: Workflow,
    title: "伴走型経営PMO",
    tagline: "意思決定の司令塔を共創",
    metrics: ["意思決定リードタイム▲52%", "経営会議の合意形成+87%"],
    description:
      "経営課題の優先度を整理し、生成AIが提示するシナリオを経営判断に組み込むPMO機能。経営会議の設計、意思決定の根拠整理、指標管理まで一貫して支援し、リーダーが迷いなく指示できる状態を守ります。",
    outputs: ["週次レビュー/経営会議ファシリテーション", "AI連動タスクボード運用", "KPI・キャッシュ進捗サマリーの共有"],
  },
  {
    icon: BrainCircuit,
    title: "AI導入・活用設計",
    tagline: "現場実装までを設計",
    metrics: ["ROI試算で投資意思決定±0.5日", "PoC成功率92%"],
    description:
      "生成AI・需要予測AI・ワークフロー自動化を業務にフィットさせ、PoCで検証しながら現場に定着させます。現場メンバーが成果を語れるように、使いこなし方も同時に設計します。",
    outputs: ["ユースケース設計とROI試算", "プロンプト/テンプレートの社内標準化", "Slack/Teams連携による運用支援"],
  },
  {
    icon: LineChart,
    title: "管理会計・KPI設計",
    tagline: "数字の翻訳と合意形成",
    metrics: ["粗利率+5.8pt", "在庫回転+22%"],
    description:
      "部門別/案件別の収益構造を可視化し、粗利率・回転率・受注単価を改善するための指標体系を構築します。数字の背景を語れるレポートで、経営陣と現場の納得感を揃えます。",
    outputs: ["ダッシュボード・帳票テンプレート", "KPIレビュー手順書", "意思決定のための感度分析シナリオ"],
  },
  {
    icon: PiggyBank,
    title: "資金繰り最適化と金融機関連携",
    tagline: "キャッシュと信用を守る",
    metrics: ["運転資金余力+3.4ヶ月", "金融機関面談準備時間▲60%"],
    description:
      "資金繰り表とキャッシュフローモデルを自動化し、金融機関との面談で共有すべき論点を整理。必要に応じて面談資料や議事メモの型化を支援し、外部への説明でも堂々と語れる準備を整えます。",
    outputs: ["キャッシュフロー予測テンプレート", "金融機関面談サマリーとTODO管理ボード", "金融機関向け説明ポイントの整理"],
  },
];

type Phase = (typeof phases)[number];
type Service = (typeof services)[number];

const causalityMap = [
  {
    stage: "Signal",
    title: "外部指数と現場兆候",
    description:
      "原材料価格・為替・受注残の12指数を走査し、粗利と資金繰りに効くシグナルだけを抽出。現場ヒアリングで得た兆候と結び付け、早期警戒ラインを明示します。",
    metric: "平均18件/月のシグナル（例）",
    icon: Radar,
  },
  {
    stage: "Insight",
    title: "生成AIによる因果分析",
    description:
      "AIが粗利・在庫・人員指標の因果パスを推定し、感度分析で優先すべき分岐点を可視化。判断材料が揃うことで意思決定の議論が論理的に収束します。",
    metric: "粗利インパクト12本の比較（例）",
    icon: Gauge,
  },
  {
    stage: "Action",
    title: "意思決定フローと実装",
    description:
      "中小企業診断士が取るべき打ち手と担当者・期日を設計し、会議体とタスク管理を連動。週次レビューで仮説→施策→効果検証のループを固定化します。",
    metric: "判断リードタイム▲48%（例）",
    icon: Target,
  },
];

const resultHighlights = [
  {
    label: "粗利率",
    value: "+5.2pt",
    helper: "19% → 26%（中央値／例）",
    tone: "primary",
  },
  {
    label: "在庫回転",
    value: "+24%",
    helper: "停滞在庫を4週短縮",
    tone: "secondary",
  },
  {
    label: "判断速度",
    value: "▲48%",
    helper: "会議〜決裁の所要時間",
    tone: "accent",
  },
];

const trustStack = [
  "経済産業省 事業再構築アドバイザー登録",
  "福岡銀行連携パートナー",
  "日経クロステック 掲載実績",
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
                alt="専門家と生成AIが意思決定ボードを設計する様子"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute -left-24 top-16 hidden h-56 w-56 rounded-full bg-primary/20 blur-3xl lg:block" aria-hidden="true" />
              <div className="absolute left-6 top-6 max-w-[240px] rounded-3xl border border-white/20 bg-white/85 p-4 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Pattern Interrupt</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">経営計画ダッシュボードのライブプレビュー</p>
                <p className="mt-1 text-xs text-muted-foreground">粗利・キャッシュ・受注確度を1枚で俯瞰し、次の一手をワンタップで共有。</p>
              </div>
              <div className="absolute bottom-6 right-6 flex flex-col gap-3 rounded-[28px] border border-primary/30 bg-white/90 p-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                  Proof Snapshot
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
                      <span className="text-2xl font-extrabold leading-tight">{highlight.value}</span>
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
                専門家と生成AIが経営計画を週次で磨き込み、粗利・回転率・判断スピードを同時に伸ばす
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                週次のアップデートで経営計画を“生きた地図”に変換。粗利+5.2pt／在庫回転+24％／判断リードタイム▲48％（中央値／例）を狙い、社長が迷わず指示を出せる論理展開を設計します。
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">因果性</strong>：生成AIが粗利・キャッシュ・人員の連動をモデル化し、根拠データとセットで提示。<br />
                <strong className="font-semibold text-foreground">論理性</strong>：中小企業診断士が意思決定フレームを整備し、判断プロセスと証跡を体系化。<br />
                <strong className="font-semibold text-foreground">デザイン性</strong>：意思決定ボードと会議資料を同じトーンで設計し、視線誘導と理解の速さを両立します。
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
                  <p className="text-sm font-semibold text-foreground">「AIが打ち手の因果関係を整理してくれるので、役員会が数字で納得し、投資判断が整然と進むようになりました。」</p>
                  <p className="text-xs text-muted-foreground">製造業 / 年商12億円 / CFO談（例）</p>
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
              <p className="text-lg font-semibold text-foreground">最適なステップをハイライトします。</p>
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
