import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Cog,
  Cpu,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import blueprintFlowVisual from "@/assets/insight-blueprint-flow.svg";

const insightHighlights = [
  {
    label: "STEP 01｜整える",
    value: "48時間で判断材料を提示",
    caption: "AIが資金・粗利・人材のギャップを数値化。",
  },
  {
    label: "STEP 02｜読み解く",
    value: "AI × 診断士のハイブリッド診断",
    caption: "暗黙知とデータを融合し、経営構造を読み解く。",
  },
  {
    label: "STEP 03｜前に進む",
    value: "会議1回で意思決定まで完了",
    caption: "判断に必要な要素を“経営者の言葉”で整理して提示。",
  },
];

const expertiseFusion = [
  {
    label: "AI",
    icon: Cpu,
    description: "先行指標を抽出し、数字の揺らぎを可視化。",
  },
  {
    label: "診断士",
    icon: Users,
    description: "現場の暗黙知を言語化し、意思決定の視座をそろえる。",
  },
  {
    label: "エンジニア",
    icon: Cog,
    description: "仕組みに落とし込み、判断が巡るオペレーションを構築。",
  },
];

const blueprintSignals = [
  {
    label: "粗利改善シミュレーション",
    value: "数％台の余地を即座に可視化",
    caption: "再投資余力を算出し、経営会議の討議時間を圧縮",
  },
  {
    label: "資金繰り先読み",
    value: "先数カ月を俯瞰",
    caption: "AIが需給差を週次で警告し、融資交渉の準備を前倒し",
  },
  {
    label: "変革推進チーム",
    value: "部署横断で同期",
    caption: "現場ヒアリングで制約条件を棚卸し、意思決定を統一",
  },
];

const blueprintAssurances = [
  {
    title: "因果整合",
    metric: "Causality Trace",
    description: "粗利・資金・現場指標の相関を色と位置で重ね、判断の根拠を可視化。",
  },
  {
    title: "論点同期",
    metric: "Agenda Sync",
    description: "AIが抽出した争点を診断士が重み付けし、意思決定者の視座を統一。",
  },
  {
    title: "実装耐性",
    metric: "Execution Fit",
    description: "部門別の制約条件と投資余地を同一レイヤーで示し、即時の合意形成に接続。",
  },
];

const rootCauseNarrative = [
  {
    badge: "Pattern 01",
    title: "数字を見ているのに、現場の想いが届かない",
    narrative:
      "経営会議で原価やKPIを確認しても、社員が動かない。──それは“数字の意味”が現場に伝わっていないから。AIが数値の構造を可視化し、診断士が“なぜ動かないか”を言語化する。",
    diagnosis: "診断士視点の要因：KPIの選定が現場と乖離し、動機形成が不十分。",
    outcome: "結果：意思決定リードタイム +2週間／行動量が半減。",
  },
  {
    badge: "Pattern 02",
    title: "資料を更新しても、未来が見えない",
    narrative:
      "報告資料づくりが目的化し、「なぜ」「どの順で」「何を変えるか」が抜けていく。──形式ではなく、経営構造を動かすシナリオ設計が必要です。AIがシミュレーションを提示し、診断士が優先順位を明確化。",
    diagnosis: "診断士視点の要因：情報整理が“伝達”で止まり、“設計”になっていない。",
    outcome: "結果：再説明工数 1.7倍／次週以降の修正が恒常化。",
  },
  {
    badge: "Pattern 03",
    title: "将来像が描けず、投資のタイミングを逃す",
    narrative:
      "明文化されないまま時間だけが過ぎ、資金繰りと人材配置が後手に回る。──AIが複数シナリオを提示し、診断士が“判断の自信”を設計します。",
    diagnosis: "診断士視点の要因：投資判断の「前提と仮説」が曖昧。",
    outcome: "結果：投資判断が3か月遅延／会議数1.5倍。",
  },
];

const recoveryDesignPhases = [
  {
    phase: "準備期",
    focus: "会議設計",
    shift: "月次報告から判断会議へ",
    anchor: "会議準備38h→短縮",
  },
  {
    phase: "設計期",
    focus: "シナリオ設計",
    shift: "AI×診断士で再生方針を可視化",
    anchor: "48hで見取り図提示",
  },
  {
    phase: "実行期",
    focus: "意思決定の速度",
    shift: "部門横断で動く会議体へ",
    anchor: "意思決定リードタイム▲45%",
  },
];

const proofMetrics = [
  {
    label: "粗利率",
    value: "+3.2pt",
    caption: "粗利率： +3.2pt 改善",
  },
  {
    label: "意思決定リードタイム",
    value: "▲45%",
    caption: "意思決定リードタイム： ▲45％",
  },
  {
    label: "資金調達力",
    value: "+1.8億円",
    caption: "資金調達力： +1.8億円（キャッシュ創出効果）",
  },
];

const trustSignals = [
  "福岡の主要金融機関との共同検証とレビュー実績",
  "再生案件に特化した経営会議ファシリテーション",
  "製造・卸・サービス業の意思決定伴走実績",
];

const InsightSpotlight = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-[#f4f8ff] py-24 text-[#0b1f3f]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.12),_transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.95fr]">
          <div className="mx-auto w-full max-w-2xl space-y-12 lg:max-w-none">
            <ScrollReveal variant="fade-up" className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
                創和の使命
              </span>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                迷いを力に変え、次の一手を“選び切れる経営者”を増やす。
              </h2>
              <div className="space-y-5 text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
                <p>
                  経営の現場では、「次の手を打ちたいのに、何から決めていいかわからない」──そんな“判断の迷い”が、日々のエネルギーを奪っていきます。
                </p>
                <p>
                  創和経営コンサルティングは、経営改善に精通した中小企業診断士の知見と、機械学習エンジニアの技術、生成AIの解析力を融合。情熱を“仕組みに変える舞台”を整え、経営者が堂々と判断し、行動できる状態をつくります。
                </p>
                <p>
                  整える → 読み解く → 前に進む。その連続を支えるために、経営の迷いを感情とデータの両面から捉え、意思決定が止まる瞬間を48時間で抜け出すシナリオをご用意します。
                </p>
              </div>
              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {expertiseFusion.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/12 bg-white/85 p-4 shadow-[0_18px_45px_rgba(11,31,63,0.1)]"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0584c6]/30 bg-[#0584c6]/10">
                        <Icon className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
                      </span>
                      <div className="space-y-1 text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">{item.label}</p>
                        <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="grid gap-4 sm:grid-cols-3">
              {insightHighlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#0b1f3f]/12 bg-white/95 p-5 shadow-[0_18px_45px_rgba(11,31,63,0.12)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">
                    {item.label}
                  </div>
                  <p className="mt-3 text-2xl font-bold text-[#0584c6]">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#1e3359]/75">{item.caption}</p>
                  <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-[#0584c6]/30 bg-[#0584c6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]/90">
                    Logic Map
                  </span>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="space-y-6">
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-semibold text-[#0b1f3f]">
                  判断が止まる時間を、成長の時間に変える。
                </h3>
                <p className="text-sm leading-relaxed text-[#1e3359]/75 md:text-base">
                  AIが抽出した経営データをもとに、現場の“リアル”と照らし合わせて整理します。数字に現れない違和感をすくい上げ、対話の土台を共有することで、意思決定の足並みをそろえます。
                </p>
                <p className="text-sm leading-relaxed text-[#1e3359]/75 md:text-base">
                  診断士が暗黙知を読み解き、エンジニアが仕組みに落とし込む。数字と現場の間にある「モヤモヤ」を、48時間で見える形に変換します。
                </p>
                <p className="text-sm leading-relaxed text-[#1e3359]/75 md:text-base">
                  AIだけでは経営は変わらない──「数値を診るAI」「構造を読む診断士」「仕組みをつくるエンジニア」が一体となり、会社全体を再現性のある経営へ導きます。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {blueprintSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-5 shadow-[0_15px_45px_rgba(11,31,63,0.08)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">
                      {signal.label}
                      <ArrowUpRight className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-3xl font-bold text-[#0584c6]">{signal.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#1e3359]/75">{signal.caption}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#1e3359]/60">
                {trustSignals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-2 shadow-sm"
                  >
                    <BadgeCheck className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                    {signal}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal
            variant="fade-up"
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-[32px] border border-[#0b1f3f]/12 bg-white/95 p-8 shadow-[0_25px_65px_rgba(5,25,58,0.16)]">
              <div className="absolute -top-10 right-8 hidden rounded-2xl bg-[#0584c6] px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-lg lg:flex">
                Blueprint Insight
              </div>
              <figure className="space-y-7">
                <div className="relative overflow-hidden rounded-3xl border border-[#0b1f3f]/10 bg-[#f5f9ff]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1f3f]/5 via-transparent to-[#0584c6]/20 mix-blend-multiply" aria-hidden="true" />
                  <img
                    src={blueprintFlowVisual}
                    alt="因果関係とタイムラインを俯瞰できる経営デザインのインフォグラフィック"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/70">
                    <BarChart3 className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
                    Dual Coding Framework
                  </div>
                  <ul className="grid gap-3 text-sm leading-relaxed text-[#1e3359]/75">
                    <li className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-[#f7faff] p-4">
                      <Lightbulb className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                      AIが市場データ・社内ログ・財務指標を同期し、先行指標の変化を色面で示します。
                    </li>
                    <li className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-white p-4">
                      <Target className="mt-1 h-4 w-4 flex-shrink-0 text-[#0b1f3f]" aria-hidden="true" />
                      診断士が現場ヒアリングで制約条件を言語化し、優先仮説とリスクを一枚で可視化します。
                    </li>
                    <li className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-white p-4">
                      <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                      交渉資料・行動計画・資金計画を連動させ、次会議での意思決定をシミュレーションできます。
                    </li>
                  </ul>
                  <div className="grid gap-4 rounded-3xl border border-[#0b1f3f]/10 bg-[#f2f7ff] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">Executive Proof Points</p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {blueprintAssurances.map((item) => (
                        <div key={item.metric} className="flex flex-col gap-2 rounded-2xl border border-white/50 bg-white/80 p-4 text-left shadow-[0_12px_32px_rgba(11,31,63,0.08)]">
                          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{item.title}</span>
                          <p className="text-lg font-semibold text-[#0584c6]">{item.metric}</p>
                          <p className="text-xs leading-relaxed text-[#1e3359]/70">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <ScrollReveal variant="fade-up" className="space-y-4">
              <div className="flex items-start gap-3">
                <Quote className="mt-1 h-5 w-5 text-[#0584c6]" aria-hidden="true" />
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">Executive Narrative</p>
                  <h2 className="text-2xl font-semibold leading-relaxed text-[#0b1f3f]">
                    経営が止まるのは、やる気が足りないからではない。<br className="hidden lg:block" />“設計がずれている”からだ。
                  </h2>
                </div>
              </div>
                <p className="text-sm leading-relaxed text-[#1e3359]/70">
                  数字を追っても、会議を増やしても、なぜか利益が戻らない。それは多くの会社が
                  <span className="font-semibold text-[#0b1f3f]">「判断・行動・設計」</span>
                  が噛み合っていないから。AIと経営改善の専門家が、その“ずれ”を48時間で特定し、再び歯車を動かします。
                </p>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rootCauseNarrative.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  variant="fade-up"
                  className="flex h-full flex-col gap-5 rounded-3xl border border-[#0b1f3f]/10 bg-gradient-to-br from-[#f6f7fb] via-[#eef1f7] to-[#e4e8f2] p-6 text-left shadow-[0_24px_60px_rgba(11,31,63,0.1)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0b1f3f]/10 bg-white/60 text-sm font-semibold text-[#0584c6]">
                        0{index + 1}
                      </span>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/50">{item.badge}</span>
                        <h3 className="text-lg font-semibold leading-snug text-[#0b1f3f]">{item.title}</h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0584c6]">
                      AI×診断士
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.narrative}</p>
                  <div className="mt-auto space-y-3 rounded-2xl border border-white/40 bg-white/70 p-4 text-sm text-[#0b1f3f]">
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
                        <Target className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />診断士視点
                      </span>
                      <p className="leading-relaxed text-[#1e3359]/75">{item.diagnosis}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
                        <TrendingUp className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />構造が生む結果
                      </span>
                      <p className="leading-relaxed text-[#1e3359]/75">{item.outcome}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[36px] border border-[#0b1f3f]/10 bg-gradient-to-br from-white via-[#f6f9ff] to-[#e9f3ff] p-10">
            <ScrollReveal variant="fade-up" className="space-y-6">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Quote className="mt-1 h-5 w-5 text-[#0584c6]" aria-hidden="true" />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">Recovery Blueprint</p>
                    <h3 className="text-xl font-semibold leading-relaxed text-[#0b1f3f]">
                      再生の起点：「設計を変える」と、すべてが噛み合う
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#1e3359]/70">
                  フェーズごとに変えるべき焦点を定め、48時間で“再生の見取り図”を提示します。以降の会議は「何をやるか」ではなく「なぜそう動くか」で進むようになります。
                </p>
              </div>
                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(11,31,63,0.08)]">
                <div className="grid grid-cols-[1.1fr_1fr_1.3fr_1fr] gap-3 bg-[#0584c6]/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/70">
                  <span>フェーズ</span>
                  <span>変えるべき焦点</span>
                  <span>48時間後に見える変化</span>
                  <span>KPIアンカー</span>
                </div>
                <div className="divide-y divide-[#0b1f3f]/10 text-sm text-[#0b1f3f]">
                  {recoveryDesignPhases.map((row) => (
                    <div key={row.phase} className="grid grid-cols-[1.1fr_1fr_1.3fr_1fr] gap-3 px-5 py-4">
                      <span className="font-semibold text-[#0b1f3f]">{row.phase}</span>
                      <span className="text-[#1e3359]/75">{row.focus}</span>
                      <span className="text-[#1e3359]/75">{row.shift}</span>
                      <span className="font-semibold text-[#0584c6]">{row.anchor}</span>
                    </div>
                  ))}
                </div>
              </div>
                <div className="grid gap-4 rounded-3xl border border-[#0584c6]/25 bg-[#0584c6]/10 p-6 text-[#0b1f3f]">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold leading-relaxed">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                  <span>
                    48時間で“再生の見取り図”を提示。AIが数字の構造を解析し、診断士が判断の筋道を描く。経営改善は、AIの分析ではなく“診断士の設計”で動き出します。
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {proofMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/60 bg-white/85 p-4 text-center shadow-[0_15px_35px_rgba(5,40,85,0.1)]"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{metric.label}</div>
                      <div className="mt-2 text-2xl font-bold text-[#0584c6]">{metric.value}</div>
                      <div className="mt-1 text-xs text-[#1e3359]/70">{metric.caption}</div>
                    </div>
                  ))}
                </div>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">
                    あなたの会社にも「止まらない経営設計図」を。
                  </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="経営は「戦略」ではなく「連続する判断」。"
        description="判断を迷わず進められるように――私たちは、経営者の思考と情熱を“動く経営設計図”に変えます。"
        ctaLabel="48時間で“経営の霧”を晴らす"
        ctaId="insight-blueprint"
      />
    </section>
  );
};

export default InsightSpotlight;
