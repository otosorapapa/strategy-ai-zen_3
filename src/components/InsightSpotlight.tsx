import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Lightbulb,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import strategyPlanningVisual from "@/assets/problem-infographic.svg";

const rootCauseNarrative = [
  {
    title: "兆しは見えても座標軸が共有されない",
    description:
      "原価や人件費の波がダッシュボードで可視化されず、部門ごとの判断軸がバラバラなまま。決裁までの遅延が資金の歪みを拡大させます。",
  },
  {
    title: "説明資料づくりにエネルギーを奪われる",
    description:
      "現場確認→資料作成→再説明がループし、未来の仮説づくりに十分な時間が残らない。銀行対応が優先され、攻めの議論が途切れます。",
  },
  {
    title: "納得感のある未来像が描けない",
    description:
      "改善策は点で存在しても、人・数字・現場が同じ未来を語れない。設計図の欠如が、変革の初速と組織の納得度を下げてしまいます。",
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

const hopeStatements = [
  {
    title: "Before",
    description: "月次報告が終わるころには次の危機が迫り、社員は疲弊したまま。",
    metric: "会議再設計前",
  },
  {
    title: "Intervention",
    description: "生成AIと診断士がボトルネックを構造化し、優先仮説を厳選。",
    metric: "短期集中診断",
  },
  {
    title: "After",
    description: "資金・人材・案件が一枚の設計図で同期し、次の一手が明文化。",
    metric: "迅速な実装フェーズ",
  },
];

const trustSignals = [
  "福岡の主要金融機関とレビュー実績",
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
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal variant="fade-up" className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
                意思決定が鈍る本質
              </span>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                経営の灯が揺らぐ理由は、情熱ではなく「未来を指し示す設計図」の不在にある
              </h2>
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
                <p>
                  再生案件で出会う経営者は、誰もが挑戦を続けています。それでも資金繰りが乱れ、人が疲弊していくのは、次の四半期を描く共通キャンバスが欠けているから。月次資料づくりに追われる間に、未来を読む時間が削られてしまうのです。
                </p>
                <p>
                  私たちが存在する理由は、経営者がもう一度、胸を張って自社の判断力と可能性を語れる環境を用意すること。生成AIが抽出する兆しと診断士が積み上げた経験知を重ね、再び前に進むためのストーリーと座標軸を描き出します。
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {blueprintSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="group relative overflow-hidden rounded-2xl border border-[#0b1f3f]/10 bg-white/80 p-5 shadow-[0_15px_45px_rgba(11,31,63,0.08)] transition-transform duration-300 hover:-translate-y-1"
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
                  className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/70 px-4 py-2 shadow-sm"
                >
                  <BadgeCheck className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                  {signal}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="relative rounded-[32px] border border-[#0b1f3f]/12 bg-white/90 p-8 shadow-[0_25px_65px_rgba(5,25,58,0.12)]"
          >
            <div className="absolute -top-10 right-8 hidden rounded-2xl bg-[#0584c6] px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-lg lg:flex">
              Blueprint Insight
            </div>
            <figure className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-[#0b1f3f]/10 bg-[#f5f9ff]">
                <img
                  src={strategyPlanningVisual}
                  alt="再生シナリオの全体図を俯瞰するインフォグラフィック"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
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
              </div>
            </figure>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <ScrollReveal variant="fade-up" className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
                <Quote className="h-5 w-5" aria-hidden="true" />
                よくある失速パターン
              </div>
              <p className="text-sm text-[#1e3359]/70">
                現場ヒアリングと財務診断から抽出された「再生が止まる瞬間」の兆候です。どれか一つでも該当すれば、設計図の再構築が急務です。
              </p>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {rootCauseNarrative.map((item) => (
                <ScrollReveal
                  key={item.title}
                  variant="fade-up"
                  className="flex h-full flex-col gap-4 rounded-3xl border border-[#0b1f3f]/12 bg-white/90 p-6 shadow-[0_20px_50px_rgba(11,31,63,0.08)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1f3f]/8 text-[#0b1f3f]">
                    <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-8 rounded-[36px] border border-[#0b1f3f]/10 bg-gradient-to-br from-white via-[#f0f5ff] to-[#e3f2ff] p-10">
            <ScrollReveal variant="fade-up" className="space-y-6">
              <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                  共に描く希望
                </div>
                <p className="text-sm text-[#1e3359]/70">
                  「再生の設計図」が整うと、判断の根拠と行動が一体化し、次の会議を待たずに動けるようになります。
                </p>
              </div>
              <ul className="grid gap-4 md:grid-cols-3">
                {hopeStatements.map((statement) => (
                  <li
                    key={statement.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-[#0b1f3f]/10 bg-white/70 p-5 text-sm leading-relaxed text-[#1e3359]/80"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">
                      {statement.title}
                      <TrendingUp className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                    </div>
                    <p className="text-base font-semibold text-[#0b1f3f]">{statement.metric}</p>
                    <p>{statement.description}</p>
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl border border-[#0584c6]/30 bg-[#0584c6]/10 p-6 text-sm font-semibold text-[#0b1f3f]">
                <div className="flex items-start gap-3">
                  <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                  <span>
                    48時間の初期診断で「歪みの見取り図」を提示し、2週目から再生シナリオと優先施策の比較検証を開始します。資金調達・人材再配置・販管費最適化を一つのタイムラインにまとめ、意思決定を加速させます。
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSpotlight;
