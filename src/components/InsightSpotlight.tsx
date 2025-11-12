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
import SectionMicroCta from "@/components/SectionMicroCta";
import blueprintFlowVisual from "@/assets/insight-blueprint-flow.svg";

const insightHighlights = [
  {
    label: "因果解析 & AI診断",
    value: "48時間で“判断材料”を可視化",
    caption: "AIが財務・人材・在庫の歪みを抽出。診断士が経営構造を翻訳し、即判断できる資料に。",
  },
  {
    label: "設計（AI × 診断士）",
    value: "AIが“数字を読み”、診断士が“意味を読む”",
    caption: "経営改善の暗黙知と機械学習を融合。定性・定量の両輪で次の一手を設計。",
  },
  {
    label: "合意（会議1回で決定）",
    value: "会議1回で“再生方針”を確定",
    caption: "議論の迷走を防ぎ、全員の意志を同じ方向へ。判断が早い会社は再生も早い。",
  },
];

const blueprintSignals = [
  {
    label: "粗利改善シミュレーション",
    value: "利益の“取りこぼし”を見える化",
    caption: "AIが限界利益構造を再設計。診断士が価格・人員・在庫の最適点を提示。",
  },
  {
    label: "資金繰り先読み",
    value: "資金ショートを“先読みで回避”",
    caption: "AIが数か月先の資金危機を警告。金融機関との対話資料を即生成。",
  },
  {
    label: "変革推進チーム",
    value: "“部門間の温度差”を消す経営",
    caption: "AIが部門別KPIを同期。診断士が現場との意思決定を橋渡しし、変革が進む。",
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
    title: "数字に映る想いが全社へ届かない",
    description:
      "原価や人件費の波が点で管理され、チームごとに優先順位がぶれてしまう。決裁の遅れが将来資金の歪みを呼び、守るべき価値まで霞みます。",
    metric: "判断リードタイム +2週間",
    signal: "会議後に追加ヒアリングが常態化し、行動が翌月へ持ち越される",
  },
  {
    badge: "Pattern 02",
    title: "語りたい未来より資料更新が先行する",
    description:
      "現場確認→資料作成→再説明の往復が続き、未来の構想に割く時間が消えていく。金融機関との調整に追われ、攻めの議論が止まります。",
    metric: "再説明工数 1.7倍",
    signal: "説明資料の修正が週次化し、改善の議論が夜間対応にずれ込む",
  },
  {
    badge: "Pattern 03",
    title: "明文化された未来像が揃わない",
    description:
      "改善施策は揃っていても、人・数字・現場の視点が交わらず、語る未来に一体感が宿らない。実行に踏み切る勇気が薄れ、変革の初速が鈍ります。",
    metric: "再投資判断が停滞 3カ月",
    signal: "未来シナリオの定義が曖昧で、合意形成のために追加会議が発生",
  },
];

const hopeStatements = [
  {
    title: "停滞期",
    description: "月次報告が終わるころには次の危機が迫り、社員の熱量が削がれたまま。",
    metric: "会議再設計前",
    kpi: "会議準備 38h/週",
  },
  {
    title: "設計フェーズ",
    description: "生成AIと診断士がボトルネックを多面的に構造化し、未来を描く核となる仮説を厳選。",
    metric: "短期集中診断",
    kpi: "48hで歪みの見取り図",
  },
  {
    title: "実行フェーズ",
    description: "資金・人材・案件が一枚の設計図で同期し、次の一手が誰でも語れる形で整う。",
    metric: "迅速な実装フェーズ",
    kpi: "決裁リードタイム ▲45%",
  },
];

const proofMetrics = [
  {
    label: "粗利率",
    value: "+3.2pt",
    caption: "設計図再構築後6カ月の代表例",
  },
  {
    label: "交渉リードタイム",
    value: "▲45%",
    caption: "主要金融機関との折衝スピード改善例",
  },
  {
    label: "再投資余力",
    value: "+1.8億円",
    caption: "キャッシュ創出原資の可視化例",
  },
];

const trustSignals = [
  "AI×診断士×機械学習エンジニアの共闘体制",
  "48時間で再生ボードと判断材料を提示",
  "金融機関と共有できる再生資料の整備実績",
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
                情熱を力に変える舞台を整え、経営者が堂々と次の一手を選び取れる状態をつくる
              </h2>
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
                <p>
                  粗利の揺らぎや採用の停滞を把握していても、判断材料が点在すれば意思決定は霧の中に置き去りになります。資料を整えるだけで一日が終わり、「次の一手」を示せない状態が続くと再投資のチャンスはすぐに失われます。
                </p>
                <p>
                  創和経営コンサルティングは、AI×診断士×機械学習エンジニアの三位一体で経営の霧を晴らします。生成AIが読み取った兆しに診断士の現場ヒアリングを重ね、経営会議で語るべき筋道と実行の段取りを一本化。判断が速い会社は再生も速いという前提で、意思決定を前に進める共闘者として伴走します。
                </p>
                <p>
                  まずは業界・競合・外部環境・顧客・コスト・商品サービスを同時に分析し、生成AIが抽出したシグナルを基に専用の経営管理アプリとダッシュボードを設計。初回48時間で「再生ボード」と優先仮説を提示し、最新データを取り込みながら意思決定の先見性を高めます。
                </p>
                <p>
                  計画策定後も中小企業診断士が伴走し、現場と経営が同じ道筋で動けるようサイクルを整えます。国の補助金を活用した支援にも精通しており、攻めと守りの判断を前向きに語れる舞台を整備します。
                </p>
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
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
                <Quote className="h-5 w-5" aria-hidden="true" />
                よくある失速パターン
              </div>
              <p className="text-sm text-[#1e3359]/70">
                現場ヒアリングと財務診断から抽出された「再生が止まる瞬間」の兆候です。どれか一つでも該当すれば、設計図の再構築が急務です。
              </p>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {rootCauseNarrative.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  variant="fade-up"
                  className="flex h-full flex-col gap-5 rounded-3xl border border-[#0b1f3f]/12 bg-white/95 p-6 shadow-[0_24px_60px_rgba(11,31,63,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0584c6]/30 bg-[#0584c6]/10 text-sm font-semibold text-[#0584c6]">
                        0{index + 1}
                      </span>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">{item.badge}</span>
                        <h3 className="mt-1 text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-[#0584c6]/25 bg-[#f0f6ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0584c6]">
                      Leading Signal
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
                  <div className="mt-auto grid gap-2 rounded-2xl border border-[#0584c6]/20 bg-[#f0f6ff] p-4 text-sm text-[#0b1f3f]">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                      <TrendingUp className="h-4 w-4" aria-hidden="true" />
                      {item.metric}
                    </div>
                    <p className="text-[#1e3359]/75">{item.signal}</p>
                  </div>
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
              <div className="grid gap-6 md:grid-cols-3">
                {hopeStatements.map((statement, index) => (
                  <div
                    key={statement.title}
                    className="flex h-full flex-col gap-5 rounded-3xl border border-[#0b1f3f]/12 bg-white/85 p-6 text-sm leading-relaxed text-[#1e3359]/80 shadow-[0_20px_55px_rgba(11,31,63,0.12)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#0584c6]/30 bg-[#0584c6]/10 text-sm font-semibold text-[#0584c6]">
                      0{index + 1}
                    </span>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{statement.title}</span>
                      <p className="text-base font-semibold text-[#0b1f3f]">{statement.metric}</p>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-[#1e3359]/75">{statement.description}</p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#0584c6]/20 bg-[#f0f6ff] px-3 py-1 text-xs font-semibold text-[#0584c6]">
                      KPI Anchor｜{statement.kpi}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 rounded-3xl border border-[#0584c6]/25 bg-[#0584c6]/10 p-6 text-[#0b1f3f]">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                  <span>
                    48時間の初期診断で未来の兆候と「歪みの見取り図」を示し、2週目から再生シナリオと優先施策の比較検証へ進みます。資金調達・人材再配置・販管費の見直しを一つの進行表に束ね、判断の速さと確かさを引き上げます。
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="未来の設計図を、無料相談で自社の判断軸に重ねる"
        description="因果マップや会議用テンプレートのサンプルを並べ、自社資料とのずれと補うべき要点を可視化。次の会議で堂々と語れる骨子を一緒に描きます。"
        ctaId="insight-blueprint"
      />
    </section>
  );
};

export default InsightSpotlight;
