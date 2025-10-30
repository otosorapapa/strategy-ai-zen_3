import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  LineChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import representativePhoto from "@/assets/representative.jpg";

const highlightStats = [
  {
    label: "経営アラートの捕捉",
    value: "+27件/月（例）",
    detail: "粗利・キャッシュ・需要の揺らぎを同時に通知",
    icon: LineChart,
  },
  {
    label: "判断材料の更新速度",
    value: "4.2倍（例）",
    detail: "AIが意思決定ログと資料を自動リフレッシュ",
    icon: TrendingUp,
  },
  {
    label: "リスクの事前察知",
    value: "45日前（例）",
    detail: "金融・取引条件の変更を先回りで検知",
    icon: AlertTriangle,
  },
];

const impactTimeline = [
  {
    label: "DAY 0",
    headline: "外部・内部のシグナルを統合",
    detail: "生成AIが業界指数・取引条件・現場ヒアリングを束ね、経営の“現在地”を描写",
  },
  {
    label: "DAY 4",
    headline: "ZENナビゲーションキャンバスを構築",
    detail: "粗利・キャッシュ・人員の因果パスを可視化し、優先仮説を確定",
  },
  {
    label: "DAY 12",
    headline: "意思決定ログと資料を自動生成",
    detail: "採択施策・証跡・金融機関向け要約を同時に更新し、共有をワンタップ化",
  },
];

const assuranceBadges = [
  "生成AI×専門家×経営改善スタジオ", "経営革新等認定支援機関", "Google Cloud Partner"
];

const narrativeFrames = [
  {
    stage: "課題",
    kpi: "粗利率▲2.8pt",
    description: "市況変化で粗利とキャッシュが乖離。報告資料づくりが目的化していた。",
  },
  {
    stage: "介入",
    kpi: "判断時間▲52%",
    description: "生成AIが因果とシナリオを提示。専門家が論点・リスクを整理し、現場と即共有。",
  },
  {
    stage: "成果",
    kpi: "投資余力+1.8億円",
    description: "キャッシュ余力を確保しつつ成長投資へ再配分。幹部間の合意形成が高速化。",
  },
];

const InsightSpotlight = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-[#070b1d] py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-240px] h-[480px] bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.16),_transparent_58%)] blur-3xl" />

      <div className="container relative mx-auto px-3 sm:px-4">
        <ScrollReveal variant="fade-up" className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">
            ZEN SIGNAL LAB
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
            市場・資金・現場の変化を同じタイミングで掴む。ZENが描く経営シグナル設計。
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            原材料、需要、金融機関からの期待値。どれかひとつでも読み違えれば、粗利とキャッシュはすぐに揺らぎます。ZEN Strategic Navigatorは外部シグナルと社内データをリアルタイムで束ね、AIが提示した仮説を専門家が補正。<br />
            経営陣は週次で「リスク」「チャンス」「推奨アクション」を同じ画面で確認し、判断のスピードと納得感を両立できます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <ScrollReveal
            variant="fade-up"
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl"
          >
            <div className="absolute -left-20 top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />
            <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-slate-900/50 px-4 py-2 text-left">
                  <span className="text-[0.75rem] font-semibold tracking-[0.18em] text-indigo-200">ZEN SIGNAL SNAPSHOT</span>
                  <span className="text-[0.75rem] text-slate-300">外部シグナルと社内データをひとつのタイムラインに統合</span>
                </div>
                <h3 className="text-left text-2xl font-semibold leading-snug text-white md:text-[2rem]">
                  変化を前倒しで把握できる経営チームほど、粗利とキャッシュのギャップを閉じ、現場と投資家の信頼を同時に高めています。
                </h3>
                <ul className="grid gap-3 text-left text-sm leading-relaxed text-slate-300 md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-300" aria-hidden="true" />
                    <span>調達：主要仕入先の条件変更と為替をAIが照合し、粗利インパクトを即時試算（例）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-300" aria-hidden="true" />
                    <span>需要：オンライン・店舗・代理店の販売ログを比較し、需要シフトと在庫偏りを浮き彫りに（例）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-indigo-300" aria-hidden="true" />
                    <span>競争：競合の販促投資と価格変更を監視し、次に備える差別化シナリオと必要資源を提示（例）</span>
                  </li>
                </ul>

                <div className="rounded-[28px] border border-white/15 bg-slate-900/55 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.45)]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-indigo-200">ZEN PLAYBOOK</p>
                    <div className="flex items-center gap-2 text-xs text-slate-200/80">
                      <TrendingUp className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                      <span>12日で意思決定キャンバスを刷新するステップ</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-4">
                    {impactTimeline.map((milestone, index) => (
                      <div
                        key={milestone.label}
                        className="relative grid gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-4 sm:grid-cols-[92px_1fr] sm:items-start"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-indigo-200">
                            {milestone.label}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white md:text-base">{milestone.headline}</p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-200/90 md:text-sm">{milestone.detail}</p>
                        </div>
                        {index < impactTimeline.length - 1 && (
                          <ArrowRight
                            className="absolute -right-6 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-400/70 sm:block"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlightStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.25)]"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                        <Icon className="h-3.5 w-3.5 text-indigo-200" aria-hidden="true" />
                        {stat.label}
                      </div>
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="text-xs leading-relaxed text-slate-200/90">{stat.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.06] p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-100">ZEN ASSURANCE</p>
                <div className="flex flex-wrap gap-2">
                  {assuranceBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-200">IMPACT ON DECISIONS</p>
                  <p className="mt-1 text-sm text-slate-200">
                    シグナル・シナリオ・実行計画を連動させることで、判断の根拠とタイミングが揃います。資金ショックの前倒し検知と現場の納得感を同時に実現します。
                  </p>
                </div>
                <Button
                  asChild
                  variant="ctaBlue"
                  size="lg"
                  className="min-w-[220px] justify-center rounded-full px-8 py-5 text-sm font-semibold"
                >
                  <a
                    href="#offer-heading"
                    className="inline-flex items-center gap-2"
                    onClick={(event) => {
                      event.preventDefault();
                      document
                        .getElementById("offer-heading")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    3つのオファーを確認
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={120}
            className="relative flex min-h-full flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_36px_90px_rgba(15,23,42,0.55)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-slate-900/60" />
            <div className="relative flex flex-col gap-5">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
                <span>ZEN SIGNAL DASHBOARD</span>
                <span className="text-indigo-200">更新頻度：週次</span>
              </div>
              <img
                src={dashboardPreview}
                alt="粗利・キャッシュ・リスク指標を俯瞰するエグゼクティブ向けダッシュボードのモックアップ"
                className="relative w-full rounded-[24px] border border-white/10 object-cover shadow-[0_20px_55px_rgba(15,23,42,0.45)]"
              />
              <div className="grid gap-3 rounded-[20px] border border-white/10 bg-white/[0.08] p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-100">ZEN DUAL SUMMARY</p>
                <p className="text-sm text-slate-200">
                  ダッシュボードは、粗利・キャッシュ・需要を同一キャンバスで描画。数字とストーリーを併置し、役員会での即時判断と共有を後押しします。
                </p>
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">CAUSE → EFFECT</p>
                <p className="mt-2 text-sm text-slate-200">
                  外部指数・販売・在庫から粗利とキャッシュの因果パスをAIが推定。施策の期待値とリスクが一目で把握できます。
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">GOVERNANCE</p>
                <p className="mt-2 text-sm text-slate-200">
                  アクセス権限・監査ログ・再現性チェックを統合。生成AIが提示した案も専門家がレビューした証跡を残します。
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/10 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-100">BEFORE / AFTER GALLERY</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {narrativeFrames.map((frame, index) => (
                  <div
                    key={frame.stage}
                    className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-indigo-200">{frame.stage}</span>
                      <span className="text-xs font-semibold text-slate-100">{frame.kpi}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200 md:text-sm">{frame.description}</p>
                    {index < narrativeFrames.length - 1 && (
                      <ArrowRight className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-indigo-300/80 sm:block" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/10 p-5 text-left sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <img
                  src={representativePhoto}
                  alt="サービスを活用した経営者の顔写真（例）"
                  className="h-16 w-16 rounded-full border border-white/20 object-cover"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-100">EXECUTIVE COMMENT</p>
                  <p className="mt-1 text-xs text-slate-400">製造業 代表取締役（年商12億円・例）</p>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-sm leading-relaxed text-slate-200">
                  「ZENはAIのスピードと専門家の視点が同居しているので、役員会の議論が一本化されました。判断の背景を言語化でき、金融機関との面談も先回りで準備できています。」
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/40 bg-indigo-500/10 px-3 py-1 text-[0.7rem] font-semibold text-indigo-100">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  投資余力を確保しながら攻めの施策を継続
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default InsightSpotlight;
