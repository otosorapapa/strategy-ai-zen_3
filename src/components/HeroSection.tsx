import { Button, buttonVariants } from "@/components/ui/button";
import heroConsultingImage from "@/assets/hero-consulting.jpg";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Landmark,
  LayoutDashboard,
  LineChart,
  Sparkle,
  Target,
  Timer,
} from "lucide-react";

const heroBullets = [
  "生成AIが粗利・資金・市場トレンドを重ね合わせ、再生余地を色分けして提示",
  "中小企業診断士が現場ヒアリングで制約条件を棚卸し、優先仮説とリスクを言語化",
  "週次レビューで交渉資料と現場アクションを同期し、全員が共有できる未来像を整備",
];

const blueprintSteps = [
  {
    title: "課題の即時スキャン",
    description: "主要3領域×45指標をAIでクロス解析し、優先度と緊急度を自動評価",
  },
  {
    title: "反転シナリオの設計",
    description: "診断士が現場の制約条件を織り込んだ再生ストーリーを共創",
  },
  {
    title: "実行と交渉の伴走",
    description: "金融機関・主要取引先向け資料と現場アクションを週次で更新",
  },
];

const trustSignals = [
  { icon: Landmark, label: "中小企業庁 登録診断士" },
  { icon: BriefcaseBusiness, label: "再生案件 年間48件サポート" },
  { icon: LineChart, label: "専門誌『TURNAROUND』掲載" },
];

const heroImpactStats = [
  {
    icon: LineChart,
    value: "+12%",
    label: "営業利益改善幅",
    helper: "再生後12ヶ月の平均伸長（例）",
  },
  {
    icon: Activity,
    value: "80%",
    label: "債務超過解消率",
    helper: "主要金融機関との再交渉成功割合（例）",
  },
  {
    icon: Target,
    value: "92%",
    label: "合意形成継続率",
    helper: "銀行同席レビューの継続率（例）",
  },
];

const heroSummaryHighlights = [
  {
    icon: Compass,
    eyebrow: "48H診断",
    title: "48時間で方向性を確定",
    description:
      "初回セッションで優先仮説と次の一手を整理し、迷いを断ち切る指標セットを共有",
  },
  {
    icon: LayoutDashboard,
    eyebrow: "可視化",
    title: "粗利・資金・人材を一枚化",
    description: "AIが主要指標を重ね合わせ、現場でも語れるダッシュボードを生成",
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: "伴走",
    title: "診断士が実行伴走",
    description: "金融機関との交渉シナリオと現場アクションを週次でレビュー",
  },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const target = document.getElementById("cta-section");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section section-spacing relative overflow-hidden bg-gradient-to-b from-[#061530] via-[#0a1f48] to-[#031024] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_65%)]" aria-hidden="true" />
      <div className="layout-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
                使命｜判断力を取り戻す伴走
              </span>
              <h1 className="text-balance text-3xl font-bold leading-[1.35] md:text-4xl xl:text-[3.1rem]">
                資金が尽きる前に、未来を読み直す。<br className="hidden md:block" />「生成AI × 専門家」が描き切る再生の設計図
              </h1>
              <div className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-4 sm:grid-cols-3">
                {heroSummaryHighlights.map(({ icon: Icon, title, description, eyebrow }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0b1f3f]/60 p-4 shadow-[0_18px_45px_rgba(3,16,36,0.4)]"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                      <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                      {eyebrow}
                    </div>
                    <p className="text-sm font-semibold text-white/90">{title}</p>
                    <p className="text-xs leading-relaxed text-slate-100/75">{description}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-3xl text-[1.05rem] leading-relaxed text-slate-100/90 md:text-lg">
                手元資金が減り、要となる人材が疲弊し、次の一手が霧の中に消えていく──その停滞は情熱不足ではなく「未来を読むための設計図」が卓上に存在しないからこそ起こります。<br className="hidden md:block" />
                創和経営コンサルティングは、生成AIが読み解く外部データと診断士が現場で磨いてきた判断軸を束ね、貴社専用の“再生の設計図”をゼロから描き直します。数値が示す兆しと専門家の洞察を一枚のボードに統合し、これからの一年を反転させるための最初の決断を共に導きます。
              </p>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                <Sparkle className="h-4 w-4" aria-hidden="true" />
                ZEN Re-Design Blueprint
              </div>
              <ul className="space-y-3 text-left text-sm leading-relaxed text-slate-100/85 md:text-base">
                {heroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-100">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroImpactStats.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/15 bg-[#0b1f3f]/60 p-5 shadow-[0_20px_45px_rgba(2,12,30,0.4)] backdrop-blur"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                    </div>
                    <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-100/75">{metric.helper}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-6 rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_55px_rgba(3,16,36,0.4)] backdrop-blur">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                    再生ストーリーを3枚で把握
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {blueprintSteps.map((step) => (
                      <div
                        key={step.title}
                        className="rounded-2xl border border-white/15 bg-[#0b1f3f]/60 p-4 shadow-[0_12px_30px_rgba(2,12,30,0.35)]"
                      >
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                          {step.title}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-100/85">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-[280px] rounded-[24px] border border-white/20 bg-[#031024]/80 p-6 text-center shadow-[0_20px_45px_rgba(3,16,36,0.45)]">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">KPIストーリー</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-100/80">
                    生成AIが示す優先指標と改善幅を、診断士が意思決定に使えるストーリーへと翻訳。数値の裏側にある行動と交渉のポイントを一枚で共有します。
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <Button
                  type="button"
                  variant="cta"
                  size="lg"
                  className="interactive-cta h-auto rounded-full px-10 py-5 text-[1.05rem] font-bold shadow-[0_15px_40px_rgba(15,23,42,0.35)]"
                  onClick={scrollToContact}
                  data-cta-id={PRIMARY_CTA.id}
                  data-cta-attention="hero-primary"
                  data-cta-attention-delay="420"
                >
                  <span className="flex items-center gap-2">
                    {PRIMARY_CTA.label}
                    <ArrowRight className="cta-arrow h-5 w-5" aria-hidden="true" />
                    <CheckCircle2 className="cta-check h-5 w-5" aria-hidden="true" />
                  </span>
                </Button>
                <a
                  href={PHONE_TEL_LINK}
                  className={cn(
                    buttonVariants({ variant: "hero", size: "lg" }),
                    "call-now-button h-auto rounded-full border border-white/20 bg-transparent px-8 py-4 text-[1.05rem] font-semibold text-white/90 hover:bg-white/10",
                  )}
                  aria-label="電話で相談する"
                >
                  <Timer className="mr-2 h-5 w-5" aria-hidden="true" />
                  まずは48時間の初期診断から
                </a>
                <a
                  href={TERTIARY_CTA.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  {TERTIARY_CTA.label}
                </a>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/80">
                代表・古町（中小企業診断士）が直接ヒアリング｜初回30分で論点を棚卸し、翌営業日に再生仮説と優先シナリオを提示
              </p>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-[0.75rem] uppercase tracking-[0.22em] text-cyan-100/80">
                {trustSignals.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                    <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                    <span className="font-semibold text-slate-100/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] items-stretch justify-center">
            <div className="relative w-full overflow-hidden rounded-[36px] border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(3,16,36,0.55)]">
              <img
                src={heroConsultingImage}
                alt="代表・古町が経営陣と再生戦略をホワイトボードで描き出している様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/85 via-[#041633]/30 to-transparent" aria-hidden="true" />
              <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/85 shadow-[0_18px_45px_rgba(2,10,28,0.35)]">
                Executive Session
              </div>
              <div className="absolute inset-x-5 bottom-5 space-y-3 rounded-3xl border border-white/15 bg-[#020b1c]/70 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">48h Discovery</p>
                <p className="text-sm leading-relaxed text-slate-100/85">
                  生成AIの示す優先指標を代表・古町が現場の温度感で補正。初回セッションで未来像とリスクラインを描き切ります。
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    48h仮説共有
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    週次レビュー設計
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
