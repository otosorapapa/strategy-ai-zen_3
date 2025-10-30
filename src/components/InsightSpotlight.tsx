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
    label: "取引条件の見直し",
    value: "+18件/月（例）",
    detail: "主要取引先からの条件変更通知が増加",
    icon: LineChart,
  },
  {
    label: "需給の乱れ",
    value: "+22%（例）",
    detail: "主要原材料の変動幅が拡大し粗利率が揺れる",
    icon: AlertTriangle,
  },
  {
    label: "競合の仕掛け",
    value: "+14件/月（例）",
    detail: "主要プレーヤーが価格と販促を同時展開",
    icon: ShieldCheck,
  },
];

const impactTimeline = [
  {
    label: "DAY 0",
    headline: "環境変化を60分で棚卸し",
    detail: "AIアナリストが取引条件・需給・競争を走査し、経営会議の論点を抽出",
  },
  {
    label: "DAY 7",
    headline: "資金と粗利の揺らぎを可視化",
    detail: "粗利率の分岐とキャッシュ創出への影響をシミュレーションし、優先施策を絞り込み",
  },
  {
    label: "DAY 21",
    headline: "意思決定ログを更新",
    detail: "調達・販売・投資の意思決定ログを証跡化し、チームへの伝達を統一",
  },
];

const assuranceBadges = [
  "経済産業省 登録情報ベース連携",
  "上場企業 CFO 経験者監修",
  "ISMS クラウド基準 準拠",
];

const narrativeFrames = [
  {
    stage: "課題",
    kpi: "粗利率▲2.6pt",
    description: "市況悪化で粗利が毀損。現場は個別判断でしのぎ、統合された打ち手がない。",
  },
  {
    stage: "介入",
    kpi: "判断時間▲48%",
    description: "AIが需給と資金繰りを同一画面で提示。調達・販売・投資の優先順位が即日で共有される。",
  },
  {
    stage: "成果",
    kpi: "投資余力+1.8億円",
    description: "資金ショックを避けつつ成長投資へ再配分。役員会での意思決定は記録付きで残り、納得感が高まる。",
  },
];

const InsightSpotlight = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-240px] h-[480px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />

      <div className="container relative mx-auto px-3 sm:px-4">
        <ScrollReveal variant="fade-up" className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-200">
            URGENCY SIGNAL
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
            変化を前倒しで掴める体制があるかどうかで、資金と成長のカーブは大きく分かれます。
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            仕入価格は四半期ごとに見直され、主要原材料のリードタイムは乱れ、粗利率と在庫が大きく振れます。競合は生成AIで決裁スピードを引き上げ、価格変更や販促を同時に仕掛けてきます。<br />
            外部シグナルと自社データを同期し、変化の前に手を打てる企業だけが、資金ショックを避けながら投資・M&amp;A・採用のチャンスを確保できます。先に構図を掴めば、経営陣はチームの前で迷いのない決断を伝えられます。
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
                  <span className="text-[0.75rem] font-semibold tracking-[0.18em] text-sky-200">環境スナップショット</span>
                  <span className="text-[0.75rem] text-slate-300">需給・取引条件・競争の変化を60分で棚卸し</span>
                </div>
                <h3 className="text-left text-2xl font-semibold leading-snug text-white md:text-[2rem]">
                  危機と機会を同時に掴む経営チームほど、判断リードタイムは▲48％へ近づき、前向きなメッセージで組織を導けます。（例）
                </h3>
                <ul className="grid gap-3 text-left text-sm leading-relaxed text-slate-300 md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                    <span>取引条件：主要取引先が値引き要請と納期変更を同時に提示し、交渉材料の整理が必須（例）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                    <span>需給：主要素材のリードタイムが平均2.2倍に延伸し、在庫判断の先読みが必須（例）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                    <span>競争：新規プレーヤーが価格とサービスを連動させ、判断が遅れるほどブランドが揺らぐ（例）</span>
                  </li>
                </ul>

                <div className="rounded-[28px] border border-white/15 bg-slate-900/55 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.45)]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-200">EXECUTIVE PLAYBOOK</p>
                    <div className="flex items-center gap-2 text-xs text-slate-200/80">
                      <TrendingUp className="h-4 w-4 text-sky-300" aria-hidden="true" />
                      <span>21日で意思決定と資金計画を揃えるフレーム</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-4">
                    {impactTimeline.map((milestone, index) => (
                      <div
                        key={milestone.label}
                        className="relative grid gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-4 sm:grid-cols-[92px_1fr] sm:items-start"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sky-200">
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
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                        <Icon className="h-3.5 w-3.5 text-sky-200" aria-hidden="true" />
                        {stat.label}
                      </div>
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="text-xs leading-relaxed text-slate-200/90">{stat.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.06] p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-100">TRUST SIGNALS</p>
                <div className="flex flex-wrap gap-2">
                  {assuranceBadges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">IMPACT ON DECISIONS</p>
                  <p className="mt-1 text-sm text-slate-200">
                    環境の変化を可視化し続けることで、意思決定のタイミングを逃さず、資金ショックを未然に防げます。会議の場で自信を持って語れるだけの根拠も同時に揃います。
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
                <span>外部環境ダッシュボード</span>
                <span className="text-sky-200">更新頻度：週次</span>
              </div>
              <img
                src={dashboardPreview}
                alt="粗利・キャッシュへの影響を俯瞰するエグゼクティブ向けダッシュボードのモックアップ"
                className="relative w-full rounded-[24px] border border-white/10 object-cover shadow-[0_20px_55px_rgba(15,23,42,0.45)]"
              />
              <div className="grid gap-3 rounded-[20px] border border-white/10 bg-white/[0.08] p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-100">DUAL CODING SUMMARY</p>
                <p className="text-sm text-slate-200">
                  ダッシュボードは、需給シナリオと資金繰りを同時に描画。数字とグラフを並列に置くことで、取締役会での即時判断を助けます。
                </p>
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">CAUSE → EFFECT</p>
                <p className="mt-2 text-sm text-slate-200">
                  原材料価格・為替・需要変動 → 粗利率 → キャッシュ創出 までの因果パスをAIが自動生成し、意思決定ログに連携。根拠を示しながら話せる安心感を育てます。
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">GOVERNANCE</p>
                <p className="mt-2 text-sm text-slate-200">
                  監査ログ・バージョン管理・アクセス権限を統合。誤提案は自動レビューに送られ、納得感を担保します。
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
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sky-200">{frame.stage}</span>
                      <span className="text-xs font-semibold text-slate-100">{frame.kpi}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200 md:text-sm">{frame.description}</p>
                    {index < narrativeFrames.length - 1 && (
                      <ArrowRight className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-sky-300/80 sm:block" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/10 p-5 text-left sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <img
                  src={representativePhoto}
                  alt="サービス業 代表取締役の顔写真（例）"
                  className="h-16 w-16 rounded-full border border-white/20 object-cover"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-100">EXECUTIVE COMMENT</p>
                  <p className="mt-1 text-xs text-slate-400">サービス業 代表取締役（年商9.5億円・例）</p>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-sm leading-relaxed text-slate-200">
                  「外部環境の指標が週次で届くので、打ち合わせの前から論点をそろえられる。AIが根拠を整えてくれるから、会議で胸を張って判断を示せるようになった」
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-500/10 px-3 py-1 text-[0.7rem] font-semibold text-sky-100">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  粗利率回復フェーズでも攻めの投資判断を持続
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
