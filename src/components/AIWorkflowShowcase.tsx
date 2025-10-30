import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import strategyPlanning from "@/assets/strategy-planning.jpg";
import growthChart from "@/assets/growth-chart.jpg";
import {
  ActivitySquare,
  AlarmClock,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Database,
  FileText,
  LineChart,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const flowSteps = [
  {
    icon: ActivitySquare,
    title: "① 現状診断",
    description:
      "財務・販売・在庫・人員のデータを棚卸しし、外部環境スナップショットと合わせて経営の現在地を可視化。意思決定リードタイムや粗利構造のボトルネックを定量化します。",
    output: "現状診断レポート／外部環境スナップショット",
    inputs: ["会計・販売・在庫・人員", "取引条件・需給・競争データ"],
    chain: [
      { label: "Cause", text: "分断された数値・現場メモ・市場指標を統合" },
      { label: "AI Insight", text: "粗利とキャッシュを左右する要因を抽出" },
      { label: "Action", text: "改善余地と優先度を意思決定ボードに反映" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "② 仮説設計",
    description:
      "中小企業診断士が意思決定フレームを設計。粗利率・在庫回転・キャッシュ残高に効く仮説を立て、検証するKPIとリスク指標を定義します。",
    output: "意思決定フレーム／検証すべき仮説リスト",
    inputs: ["診断ヒアリング", "経営課題マップ"],
    chain: [
      { label: "Cause", text: "経営課題とデータの因果を整理" },
      { label: "AI Insight", text: "仮説ごとの期待インパクトを試算" },
      { label: "Action", text: "検証優先順位とマイルストーンを設定" },
    ],
  },
  {
    icon: Database,
    title: "③ 生成AI分析",
    description:
      "生成AIが粗利・需要・資金を同時に分析し、差異要因と感度を提示。警戒ラインやチャンスを週次でアラートします。",
    output: "AI分析ダッシュボード／差異要因レポート",
    inputs: ["部門別KPI", "キャッシュフロー推移"],
    chain: [
      { label: "Cause", text: "粗利・在庫・受注の偏りを特定" },
      { label: "AI Insight", text: "シナリオ別の確率とインパクトを算定" },
      { label: "Action", text: "優先施策と必要リソースを提示" },
    ],
  },
  {
    icon: BarChart3,
    title: "④ 経営計画",
    description:
      "粗利・資金計画・人員計画を一つの意思決定モデルで再構築。生成AIが数値計画のドラフトと施策ストーリーを作成し、専門家が整合性をチェックします。",
    output: "経営計画ドラフト／意思決定ボード",
    inputs: ["AI差異分析", "投資・資金条件"],
    chain: [
      { label: "Cause", text: "計画値と実績差を是正するレバーを選定" },
      { label: "AI Insight", text: "粗利・キャッシュの波及を可視化" },
      { label: "Action", text: "優先施策・資金使途・KPIを確定" },
    ],
  },
  {
    icon: Target,
    title: "⑤ 実行管理",
    description:
      "週次の意思決定ボードと月次KPIレポートを運用。会議体・タスクボード・金融機関連携資料を生成AIが自動更新し、実行の抜け漏れを防ぎます。",
    output: "月次KPIレポート／意思決定ボード",
    inputs: ["会議ログ", "現場タスク進捗"],
    chain: [
      { label: "Cause", text: "会議・現場のアクションを紐付け" },
      { label: "AI Insight", text: "KPI進捗と資金影響を同時に監視" },
      { label: "Action", text: "遅延タスクと代替案を提示" },
    ],
  },
  {
    icon: AlarmClock,
    title: "⑥ 検証・改善",
    description:
      "AIが施策ごとの成果とリスクを検証し、次の改善仮説を提案。四半期ごとに戦略レビューを実施し、投資案件への展開も支援します。",
    output: "検証レポート／改善ロードマップ",
    inputs: ["施策実績", "市場・競争アップデート"],
    chain: [
      { label: "Cause", text: "施策の成果差を要因分解" },
      { label: "AI Insight", text: "改善余地と新規機会を算出" },
      { label: "Action", text: "次の四半期計画と投資判断に反映" },
    ],
  },
];

const alertScenarios = [
  {
    label: "粗利が2週連続で計画比-8%",
    detail: "AIが対象案件と値引き履歴を抽出し、即改善案を提示",
    improvement: "改善までのリードタイム 5日→1日",
  },
  {
    label: "翌月のキャッシュ残高が危険水域",
    detail: "資金繰りシナリオを再計算し、借入・投資計画の調整案を提示",
    improvement: "資金ショック検知を30日前倒し",
  },
  {
    label: "生成AIが経営計画書の初稿を自動生成",
    detail: "部門別数値と現場ヒアリングを反映したドラフトを30分で作成",
    improvement: "会議資料作成時間 210分→70分",
  },
];

const insightHighlights = [
  {
    icon: Workflow,
    title: "因果性が可視化された意思決定フレーム",
    description:
      "売上・粗利・在庫の連動を1枚の図に同期。施策ごとの因果チェーンを明確にし、経営会議の論点が迷子になりません。",
  },
  {
    icon: LineChart,
    title: "論理性を担保するシナリオ比較",
    description:
      "AIがベースラインと攻めのシナリオを週次で並列比較。キャッシュインパクトとリスク指標を同じフレームで提示します。",
  },
  {
    icon: FileText,
    title: "納得性を引き出す実行レポート",
    description:
      "経営陣・現場・金融機関への説明資料を自動生成。判断の背景と根拠を文章と数値でセットにして提供します。",
  },
];

const executiveSnapshots = [
  {
    image: dashboardPreview,
    title: "AIコントロールタワー",
    metric: "週次レビュー10分",
    caption:
      "部門横断のKPI・粗利感度・キャッシュ残高を一画面で把握。重要指標だけをハイライトし視線誘導を最適化。",
  },
  {
    image: strategyPlanning,
    title: "因果マップ＆施策ボード",
    metric: "仮説立案×3倍速",
    caption:
      "課題→介入→成果を3コマで整理。優先すべきレバーを矢印で示し、経営陣の合意形成を加速します。",
  },
  {
    image: growthChart,
    title: "成長シナリオの比較",
    metric: "キャッシュ確度+18%",
    caption:
      "投資・保守シナリオを色面で孤立化。推奨プランを視覚的にアンカーし、資金調達の説明資料としても活用可能。",
  },
];

const impactMetrics = [
  {
    label: "社長の意思決定時間削減",
    value: 72,
    suffix: "%削減",
    description: "AIが論点と根拠データを先回りで整理",
  },
  {
    label: "会議準備時間を1/3に短縮",
    prefix: "1/",
    value: 3,
    suffix: "",
    description: "経営計画書・ダッシュボード・議事録を自動生成",
  },
  {
    label: "キャッシュ創出シナリオ",
    value: 12,
    suffix: "本",
    description: "優先順位付きの増収・資金繰り改善策を提示",
  },
];

const executiveBriefPoints = [
  {
    title: "因果が見えるAIレポート",
    detail: "粗利・キャッシュの差異要因と根拠データを1枚に整理。経営陣は意思決定論点を10分で把握できます。",
  },
  {
    title: "経営判断の証跡を自動保存",
    detail: "採択した施策と却下理由を記録し、次回会議での検証や金融機関への説明資料として再利用。",
  },
  {
    title: "現場との合意形成を加速",
    detail: "Slack/Teamsと連携し、現場アクション・KPI・オーナーを即共有。判断の納得感を高めます。",
  },
];

const decisionGuardrails = [
  {
    title: "データ品質の自動監査",
    detail: "会計・販売データの欠損や異常値を検知し、意思決定に使う前提条件を数値でチェック。",
  },
  {
    title: "リスクシナリオの検証",
    detail: "粗利・資金繰りの最悪ケースを同時試算し、投資判断に必要なダウンサイドも可視化。",
  },
  {
    title: "経営会議のガバナンス",
    detail: "議事録・タスク・KPIを紐付けて保存。社長不在時も判断プロセスを追跡できます。",
  },
];

const AIWorkflowShowcase = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-slate-950 py-14 text-slate-50 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-3 sm:px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div className="space-y-10">
            <ScrollReveal className="space-y-8" variant="fade">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                <div className="space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/80">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    生成AIの活用イメージ
                  </span>
                  <h2 className="text-balance text-3xl font-bold leading-snug text-white md:text-4xl">
                    <span className="serif-accent">AIが「次に取るべき打ち手」を図解で提示し、社長の意思決定を週単位で前倒し</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-200">
                    売上とキャッシュフローのデータを自動分析し、危険信号やチャンスを数字と文章で提示。公式デモサイト「furumachi-smec.lognowa.com」で紹介しているワークフローを、貴社のデータに最短2週間で適用します。
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-primary">
                      年商5,000万円〜15億円の企業に最適化
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-slate-100">
                      因果性×論理性×納得感を両立
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
                  <img
                    src={dashboardPreview}
                    alt="生成AIが提示するダッシュボードのサンプル"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-primary/40 bg-slate-950/80 px-5 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">AI DECISION CONTROL</p>
                      <p className="mt-1 text-sm text-slate-100/90">意思決定の根拠データと打ち手を同時提示</p>
                    </div>
                    <div className="rounded-xl bg-primary/25 px-3 py-1 text-right">
                      <p className="text-lg font-bold text-white">72%削減</p>
                      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-primary/80">社長の判断時間</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {insightHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs leading-relaxed text-slate-200/80">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <div className="relative grid gap-6 pl-4 before:absolute before:left-4 before:top-9 before:h-[calc(100%-3rem)] before:w-px before:bg-gradient-to-b before:from-primary/10 before:via-primary/40 before:to-transparent before:content-[''] lg:grid-cols-2 lg:gap-8 lg:pl-0 lg:before:hidden">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal
                    key={step.title}
                    className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/40"
                    variant="fade-up"
                  >
                    <span className="absolute -left-9 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-slate-950/90 text-sm font-semibold uppercase tracking-[0.28em] text-primary shadow-[0_0_15px_rgba(59,130,246,0.35)] lg:static lg:h-11 lg:w-11 lg:self-start">
                      {index + 1}
                    </span>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200/90">{step.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {step.inputs.map((input) => (
                        <span
                          key={input}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-100/90"
                        >
                          {input}
                        </span>
                      ))}
                    </div>
                    <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:grid-cols-3">
                      {step.chain.map((chainItem) => (
                        <div key={chainItem.text} className="space-y-2">
                          <span className="inline-flex items-center gap-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary/70">
                            {chainItem.label}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <p className="text-[0.8rem] leading-relaxed text-slate-200/90">{chainItem.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-slate-100">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary/90">
                        <Target className="h-4 w-4" aria-hidden="true" />
                        経営インパクト
                      </span>
                      <p className="text-sm font-semibold text-white/90">{step.output}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <div className="grid gap-5 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-inner sm:grid-cols-3">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2 text-center">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={1500}
                    className="mx-auto inline-flex items-center justify-center rounded-2xl bg-primary/20 px-4 py-3 text-3xl font-black text-primary shadow-[0_8px_20px_rgba(59,130,246,0.35)]"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300">{metric.label}</p>
                  <p className="text-[0.8rem] leading-relaxed text-slate-300/80">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-inner">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">意思決定の納得感を担保するガードレール</h3>
                    <p className="text-xs text-slate-200/80">AIが提案する打ち手を経営者が安心して採択できるよう、検証ポイントを仕組み化しています。</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary/80">
                  LOGIC × TRUST
                </span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {decisionGuardrails.map((guardrail) => (
                  <div key={guardrail.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-semibold text-white">{guardrail.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-200/80">{guardrail.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ScrollReveal
              className="space-y-5 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent p-6 shadow-inner"
              variant="fade-up"
            >
              <div className="flex items-start gap-3 text-left">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <LineChart className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">AIダッシュボードのハイライト</h3>
                  <p className="text-sm text-slate-200">
                    デュアル・コーディングで「数字」と「ストーリー」を同期。読み始めて15秒で意思決定の全体像が掴めます。
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {executiveSnapshots.map((snapshot) => (
                  <figure
                    key={snapshot.title}
                    className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_18px_36px_rgba(15,23,42,0.35)]"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={snapshot.image}
                        alt={`${snapshot.title}のビジュアル`}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-primary">
                        {snapshot.metric}
                      </span>
                    </div>
                    <figcaption>
                      <p className="text-sm font-semibold text-white">{snapshot.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-200/80">{snapshot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-4 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-inner" variant="fade-up">
              <div className="flex items-start gap-3 text-left">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <PlayCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">経営者向けエグゼクティブ・ブリーフ</h3>
                  <p className="text-sm text-slate-200/90">30分相談では、AIが生成した因果マップと対策シナリオを3枚のスライドで共有します。</p>
                </div>
              </div>
              <div className="space-y-3">
                {executiveBriefPoints.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-white">
                      <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                      {point.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-200/80">{point.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="space-y-4 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-white/0 p-6 shadow-inner" variant="fade-up">
              <div className="flex items-center gap-3 text-left">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <ActivitySquare className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">AIが検知するリアルタイムアラート例</h3>
                  <p className="text-sm text-slate-200">
                    危険信号が出た瞬間にSlack/Teamsへ通知し、意思決定のための材料と推奨アクションを添えてお届けします。
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {alertScenarios.map((scenario) => (
                  <div key={scenario.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_32px_rgba(15,23,42,0.18)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{scenario.label}</p>
                        <p className="mt-1 text-xs text-slate-200/80">{scenario.detail}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary">
                        <AlarmClock className="h-4 w-4" aria-hidden="true" />
                        {scenario.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowShowcase;
