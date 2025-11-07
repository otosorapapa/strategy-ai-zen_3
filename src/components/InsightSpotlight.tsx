import {
  ArrowRight,
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
import SectionMicroCta from "@/components/SectionMicroCta";
import blueprintFlowVisual from "@/assets/insight-blueprint-flow.svg";
import executiveStrategyMeeting from "@/assets/executive-strategy-meeting.jpg";

const insightHighlights = [
  {
    label: "因果の見取り図",
    value: "48時間で提示",
    caption: "資金・現場・市場の歪みを一本化し、判断の論点を同期",
  },
  {
    label: "設計図化プロセス",
    value: "AI × 診断士",
    caption: "定量と定性を統合し、合意形成の摩擦を削減",
  },
  {
    label: "合意形成スピード",
    value: "会議1回で決定",
    caption: "前提共有をテンプレート化し、論点議論に即移行",
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

const rootCauseNarrative = [
  {
    badge: "Pattern 01",
    title: "兆しは見えても座標軸が共有されない",
    description:
      "原価や人件費の波がダッシュボードで可視化されず、部門ごとの判断軸がバラバラなまま。決裁までの遅延が資金の歪みを拡大させます。",
    metric: "判断リードタイム +2週間",
    signal: "月次会議が“数字合わせ”で終わり、次の一手が宙に浮く",
  },
  {
    badge: "Pattern 02",
    title: "説明資料づくりにエネルギーを奪われる",
    description:
      "現場確認→資料作成→再説明がループし、未来の仮説づくりに十分な時間が残らない。銀行対応が優先され、攻めの議論が途切れます。",
    metric: "再説明工数 1.7倍",
    signal: "説明資料の更新が週次化し、現場の改善議論が後回しに",
  },
  {
    badge: "Pattern 03",
    title: "納得感のある未来像が描けない",
    description:
      "改善策は点で存在しても、人・数字・現場が同じ未来を語れない。設計図の欠如が、変革の初速と組織の納得度を下げてしまいます。",
    metric: "再投資判断が停滞 3カ月",
    signal: "未来シナリオの定義が曖昧で、合意形成に追加会議が必要",
  },
];

const hopeStatements = [
  {
    title: "Before",
    description: "月次報告が終わるころには次の危機が迫り、社員は疲弊したまま。",
    metric: "会議再設計前",
    kpi: "会議準備 38h/週",
  },
  {
    title: "Intervention",
    description: "生成AIと診断士がボトルネックを構造化し、優先仮説を厳選。",
    metric: "短期集中診断",
    kpi: "48hで歪みの見取り図",
  },
  {
    title: "After",
    description: "資金・人材・案件が一枚の設計図で同期し、次の一手が明文化。",
    metric: "迅速な実装フェーズ",
    kpi: "決裁リードタイム ▲45%",
  },
];

const proofMetrics = [
  {
    label: "粗利率",
    value: "+3.2pt",
    caption: "設計図再構築後6カ月平均（例）",
  },
  {
    label: "交渉リードタイム",
    value: "▲45%",
    caption: "主要金融機関との折衝スピード",
  },
  {
    label: "再投資余力",
    value: "+1.8億円",
    caption: "キャッシュ創出原資を可視化",
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
          <div className="space-y-10">
            <ScrollReveal variant="fade-up" className="space-y-4">
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
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="grid gap-4 sm:grid-cols-3">
              {insightHighlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-2xl border border-[#0b1f3f]/12 bg-white/95 p-5 shadow-[0_18px_45px_rgba(11,31,63,0.12)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">
                    {item.label}
                  </div>
                  <p className="mt-3 text-2xl font-bold text-[#0584c6]">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#1e3359]/75">{item.caption}</p>
                  <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-[#0584c6]/30 bg-[#0584c6]/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#0584c6]/90">
                    Logic Map
                  </span>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="space-y-6">
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
            className="relative rounded-[32px] border border-[#0b1f3f]/12 bg-white/95 p-8 shadow-[0_25px_65px_rgba(5,25,58,0.16)]"
          >
            <div className="absolute -top-10 right-8 hidden rounded-2xl bg-[#0584c6] px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-lg lg:flex">
              Blueprint Insight
            </div>
            <figure className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#0b1f3f]/10 bg-[#f5f9ff]">
                <img
                  src={blueprintFlowVisual}
                  alt="再生シナリオの全体図を俯瞰するタイムラインインフォグラフィック"
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

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16">
          <div className="relative overflow-hidden rounded-[36px] border border-[#0b1f3f]/12 bg-gradient-to-br from-white via-[#f4f8ff] to-[#e7f2ff] p-8 shadow-[0_28px_70px_rgba(8,34,76,0.14)]">
            <div className="pointer-events-none absolute -left-24 top-16 hidden h-40 w-40 rounded-full bg-[#0584c6]/10 blur-3xl lg:block" aria-hidden="true" />
            <ScrollReveal variant="fade-up" className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0584c6]/20 bg-white/70 px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#0584c6]">
                <Quote className="h-4 w-4" aria-hidden="true" />
                Causality Diagnostics
              </div>
              <h3 className="text-2xl font-semibold text-[#0b1f3f] md:text-[1.75rem]">
                再生が鈍化するパターンを、因果の筋道で可視化
              </h3>
              <p className="text-sm leading-relaxed text-[#1e3359]/75">
                現場ヒアリングと財務診断で蓄積した事例から、「なぜ意思決定が遅れるのか」を再現性のあるシグナルに分解。数字と現場感の双方から納得できる論点整理を提示します。
              </p>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {rootCauseNarrative.map((item) => (
                <ScrollReveal
                  key={item.title}
                  variant="fade-up"
                  className="relative flex h-full flex-col gap-5 rounded-[30px] border border-[#0b1f3f]/10 bg-white/90 p-6 shadow-[0_24px_60px_rgba(10,32,70,0.12)] backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0584c6]/20 bg-[#0584c6]/10 text-sm font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                      {item.badge.split(" ")[1]}
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/55">{item.badge}</span>
                      <h4 className="mt-1 text-lg font-semibold text-[#0b1f3f]">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
                  <div className="grid gap-2 rounded-2xl border border-[#0584c6]/25 bg-[#eef5ff] p-4 text-sm text-[#0b1f3f]">
                    <div className="flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                      <TrendingUp className="h-4 w-4" aria-hidden="true" />
                      Leading Signal
                    </div>
                    <p className="text-base font-semibold text-[#0584c6]">{item.metric}</p>
                    <p className="text-[#1e3359]/75">{item.signal}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <ScrollReveal
              variant="fade-up"
              className="relative overflow-hidden rounded-[36px] border border-[#0b1f3f]/12 bg-[#081a35] shadow-[0_26px_70px_rgba(5,23,54,0.2)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.32),_transparent_65%)] mix-blend-screen" aria-hidden="true" />
              <img
                src={executiveStrategyMeeting}
                alt="生成AIと診断士が経営会議で設計図を共有している様子"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#081a35]/40 via-[#0b1f3f]/30 to-transparent" aria-hidden="true" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
                Causality Studio
              </div>
              <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl border border-white/20 bg-white/85 px-4 py-3 text-sm font-medium text-[#0b1f3f] shadow-lg">
                会議1回で意思決定を揃える「設計図ワークショップ」の臨場感をそのままに。
              </div>
              <div className="absolute right-6 top-6 rounded-2xl border border-white/25 bg-[#0584c6]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-lg">
                Blueprint Session
              </div>
            </ScrollReveal>

            <ScrollReveal
              variant="fade-up"
              className="space-y-8 rounded-[36px] border border-[#0b1f3f]/12 bg-gradient-to-br from-white via-[#f3f7ff] to-[#e5f0ff] p-10 shadow-[0_24px_65px_rgba(9,32,72,0.15)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                  共に描く希望
                </div>
                <p className="text-sm text-[#1e3359]/70">
                  「再生の設計図」が整うと、判断の根拠と行動が一体化し、次の会議を待たずに動けるようになります。
                </p>
              </div>
              <ol className="grid gap-5 md:grid-cols-3">
                {hopeStatements.map((statement, index) => (
                  <li
                    key={statement.title}
                    className="group relative flex flex-col gap-4 rounded-[28px] border border-[#0b1f3f]/10 bg-white/90 p-5 text-sm leading-relaxed text-[#1e3359]/80 shadow-[0_20px_55px_rgba(11,31,63,0.12)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0584c6]/30 bg-[#0584c6]/10 text-sm font-semibold text-[#0584c6]">
                          0{index + 1}
                        </span>
                        <div>
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{statement.title}</span>
                          <p className="text-base font-semibold text-[#0b1f3f]">{statement.metric}</p>
                        </div>
                      </div>
                      {index < hopeStatements.length - 1 && (
                        <ArrowRight className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
                      )}
                    </div>
                    <p>{statement.description}</p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0584c6]/20 bg-[#eef5ff] px-3 py-1 text-xs font-semibold text-[#0584c6]">
                      KPI Anchor｜{statement.kpi}
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid gap-4 rounded-[28px] border border-[#0584c6]/25 bg-[#0584c6]/10 p-6 text-[#0b1f3f]">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                  <span>
                    48時間の初期診断で「歪みの見取り図」を提示し、2週目から再生シナリオと優先施策の比較検証を開始します。資金調達・人材再配置・販管費最適化を一つのタイムラインにまとめ、意思決定を加速させます。
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {proofMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/60 bg-white/90 p-4 text-center shadow-[0_15px_35px_rgba(5,40,85,0.1)]"
                    >
                      <div className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{metric.label}</div>
                      <div className="mt-2 text-2xl font-bold text-[#0584c6]">{metric.value}</div>
                      <div className="mt-1 text-xs text-[#1e3359]/70">{metric.caption}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="設計図の骨子を、無料相談で実際のテンプレに重ね合わせ"
        description="因果マップや会議テンプレートのサンプルを使いながら、現状の資料とのギャップと補うべきアウトラインを可視化します。"
        ctaId="insight-blueprint"
      />
    </section>
  );
};

export default InsightSpotlight;
