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
    label: "意思決定の起点",
    value: "視界を360°に",
    caption: "財務・現場・市場の因果関係を示し、議論の序盤から全員の視点をそろえます",
  },
  {
    label: "未来像の解像度",
    value: "48時間で再構築",
    caption: "AIが兆しを抽出し、診断士が現場ヒアリングで裏付け。迷いのない進路を描きます",
  },
  {
    label: "行動への推進力",
    value: "会議1回で共有",
    caption: "更新済みの根拠資料を即座に展開し、その場で次の一手へ踏み出せる空気を整えます",
  },
];

const blueprintSignals = [
  {
    label: "粗利と原価のひずみ",
    value: "即時に可視化",
    caption: "確度の高いシナリオを提示し、討議を解決策の選択に集中させます",
  },
  {
    label: "資金需要の先読み",
    value: "先数カ月を監視",
    caption: "入出金ギャップを週次で把握し、対応策を前倒しで決定できます",
  },
  {
    label: "変革チームの連携",
    value: "部署横断で同期",
    caption: "現場の制約と強みを整理し、全員が胸を張って語れる方針を形にします",
  },
];

const blueprintAssurances = [
  {
    title: "判断材料の整合性",
    metric: "Trace Map",
    description: "粗利・資金・現場指標を一つの画面で重ね、決断の根拠が明快にたどれます。",
  },
  {
    title: "議題の同期",
    metric: "Agenda Link",
    description: "AIが抽出した論点を診断士が評価し、経営会議の焦点を瞬時に共有します。",
  },
  {
    title: "実行力の維持",
    metric: "Action Fit",
    description: "部門ごとの条件と投資余地を並べ、決まった方針がそのまま行動につながります。",
  },
];

const rootCauseNarrative = [
  {
    badge: "兆候 01",
    title: "危機感は共有されても軸が揃わない",
    description:
      "原価や人員の変化が個別に管理され、会議では感覚と数字が噛み合わないまま。判断が遅れるほど資金と信頼の負担が膨らみます。",
    metric: "判断リードタイムが延伸",
    signal: "月次会議が数値確認で終わり、次の打ち手が動き出さない",
  },
  {
    badge: "兆候 02",
    title: "説明資料の更新に追われてしまう",
    description:
      "現場ヒアリングと資料作成を繰り返し、未来の戦略設計に集中できない。関係者への説明に時間を奪われ、前向きな議論が止まります。",
    metric: "再説明工数が跳ね上がる",
    signal: "資料更新が週次化し、現場の改善提案が先送りに",
  },
  {
    badge: "兆候 03",
    title: "未来像への確信が育たない",
    description:
      "点在する改善策をつなぐ設計図がなく、人材と数字と現場が同じ景色を語れない。推進力が落ち、決断が後ろ倒しになります。",
    metric: "再投資判断が滞留",
    signal: "シナリオが曖昧で、追加の合意形成に時間を要する",
  },
];

const hopeStatements = [
  {
    title: "導入前",
    description: "月次報告を終えるころには次の不安が押し寄せ、社内に疲労が蓄積している状態。",
    metric: "会議再設計前",
    kpi: "準備時間が肥大化",
  },
  {
    title: "初動支援",
    description: "生成AIと診断士がボトルネックを構造化し、優先すべき仮説を磨き上げます。",
    metric: "短期集中診断",
    kpi: "48時間で見取り図を提示",
  },
  {
    title: "実装段階",
    description: "資金・人材・案件が一枚の設計図でつながり、次の一手が明文化された状態へ。",
    metric: "迅速な実装フェーズ",
    kpi: "決裁リードタイムが短縮",
  },
];

const proofMetrics = [
  {
    label: "粗利改善の実感",
    value: "数％台の伸長例",
    caption: "設計図を再構築した企業が共通して語る変化",
  },
  {
    label: "交渉準備の速さ",
    value: "意思決定が加速",
    caption: "主要な打ち合わせが未来志向で進むように",
  },
  {
    label: "再投資の余地",
    value: "創出原資を可視化",
    caption: "先の手を打つための余裕を取り戻す",
  },
];

const trustSignals = [
  "福岡の主要金融機関と磨いた再生ノウハウ",
  "現場目線で意思決定を導く経営会議ファシリテーション",
  "製造・卸・サービス業を跨いだ伴走経験",
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
                地域企業の挑戦を途切れさせず、経営者が堂々と未来を語れる舞台を整える
              </h2>
              <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
                <p>
                  私たちが向き合うのは、努力を重ねても成果が追いつかず、社員の視線が不安に傾きかける瞬間です。その場面で揺らがない道しるべを示すことが、創和経営コンサルティングの原点です。
                </p>
                <p>
                  そこで提供するのが、生成AIの先読みと中小企業診断士の分析を融合した経営改善・事業再生の設計図。財務・現場・顧客の動きを同じ座標で捉え、次に進む理由を社内外に示せるようにします。
                </p>
                <p>
                  継続的なモニタリングで外部環境の変化を捉え、貴社専用にカスタマイズした経営管理アプリやダッシュボードで意思決定を支えます。策定後も伴走し、描いた計画が迅速に実行へ移るまで寄り添います。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="grid gap-4 sm:grid-cols-3">
              {insightHighlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#0b1f3f]/12 bg-white/95 p-5 shadow-[0_18px_45px_rgba(11,31,63,0.12)] transition-transform duration-300 hover:-translate-y-1"
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
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{item.title}</span>
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
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">{item.badge}</span>
                        <h3 className="mt-1 text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-[#0584c6]/25 bg-[#f0f6ff] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#0584c6]">
                      Leading Signal
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
                  <div className="mt-auto grid gap-2 rounded-2xl border border-[#0584c6]/20 bg-[#f0f6ff] p-4 text-sm text-[#0b1f3f]">
                    <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
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
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{statement.title}</span>
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
                    48時間の初期診断で「歪みの見取り図」を提示し、2週目から再生シナリオと優先施策の比較検証を開始します。資金調達・人材再配置・販管費最適化を一つのタイムラインにまとめ、意思決定を加速させます。
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {proofMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/60 bg-white/85 p-4 text-center shadow-[0_15px_35px_rgba(5,40,85,0.1)]"
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
