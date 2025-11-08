import { Button, buttonVariants } from "@/components/ui/button";
import heroExecutiveBriefingImage from "@/assets/executive-strategy-meeting.jpg";
import heroGrowthMetricsImage from "@/assets/dashboard-preview.jpg";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Laptop,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  ShieldCheck,
  Target,
  Timer,
} from "lucide-react";

const heroKeyPhrases = [
  { icon: LifeBuoy, label: "福岡発｜全国オンライン対応" },
  { icon: LayoutDashboard, label: "創業〜再生期の三位一体改善" },
  { icon: ShieldCheck, label: "国家資格×生成AIの伴走" },
];

const heroSupportPhrases = [
  { icon: Globe2, label: "地域・業種別にローカライズ" },
  { icon: Laptop, label: "オンライン×対面のハイブリッド支援" },
];

const heroSummaryCards = [
  {
    icon: Timer,
    eyebrow: "創業・小規模",
    title: "資金繰りが不安で、数値の読み方が分からない",
    description:
      "隔週AIレポートと資金繰り基礎講座、創業補助金ナビで初期の迷いを解消",
  },
  {
    icon: BrainCircuit,
    eyebrow: "成長期",
    title: "売れているのに利益とキャッシュが残らない",
    description:
      "週次AIシナリオと診断士レビューで粗利率+5.2pt・在庫回転率+28%を後押し",
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: "成熟・再生期",
    title: "投資判断や再建策を相談できる相手がいない",
    description:
      "M&Aや公的支援も視野に、意思決定リードタイム▲52%の伴走体制を提供",
  },
];

const heroBoardroomInsights = [
  {
    label: "全国対応",
    value: "福岡発×オンライン",
    description: "地域特有の商習慣に合わせた言語化と交渉資料で、全国どこでも導入しやすい",
  },
  {
    label: "AI診断",
    value: "48時間で提示",
    description: "創業期でも扱いやすい指標と優先度を整理し、初回相談で共有",
  },
  {
    label: "再生設計",
    value: "複数シナリオ",
    description: "生成AIが描いた案を診断士がブラッシュアップし、判断の根拠を補強",
  },
];

const heroImpactStats = [
  {
    icon: LineChart,
    value: "+5.2pt",
    label: "平均粗利率改善幅",
    helper: "スタンダード/プレミアム導入企業の6ヶ月平均",
  },
  {
    icon: Activity,
    value: "+28%",
    label: "在庫回転率向上",
    helper: "AIレポートと伴走で在庫滞留を解消",
  },
  {
    icon: Target,
    value: "▲52%",
    label: "意思決定リードタイム",
    helper: "初回診断〜経営会議までの準備時間を短縮",
  },
];

const trustSignals = [
  { icon: Landmark, label: "中小企業診断士が全工程を伴走" },
  { icon: LineChart, label: "粗利率+5.2pt／在庫回転+28%（平均実績）" },
  { icon: BrainCircuit, label: "意思決定リードタイム52%短縮" },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const target = document.getElementById("cta-section");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section section-spacing relative overflow-hidden bg-gradient-to-b from-[#020d21] via-[#062047] to-[#010713] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(104,194,255,0.24),_transparent_68%)]"
        aria-hidden="true"
      />
      <div className="layout-shell relative z-10 py-20">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#7ec3ff]">
                AI × 診断士 × 再生設計図
              </span>
              <h1 className="text-balance text-[2.4rem] font-semibold leading-[1.2] tracking-tight md:text-[3.1rem] md:leading-[1.2] md:tracking-[-0.01em] xl:text-[3.6rem]">
                AI×中小企業診断士が、創業準備から再生局面まで“迷わない経営”を全国で伴走。
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-slate-100/85 md:text-lg">
                AIシナリオ×専門家レビューで意思決定リードタイムを52%短縮。福岡発の再生ノウハウを全国各地の商習慣に合わせてローカライズし、創業・成長・成熟それぞれの課題に即した判断材料を整備します。
              </p>
            </div>

            <p className="max-w-3xl text-base leading-relaxed text-slate-100/85 md:text-lg">
              初回無料相談とAI診断レポートで、粗利・資金・人材のギャップを48時間以内に可視化。創業期は資金繰りテンプレート、成長期は粗利・在庫の改善策、成熟期は再生・M&Aシナリオまで一気通貫で提示します。
            </p>
            <div className="flex flex-wrap items-center gap-3 text-left text-sm text-slate-100/90 md:gap-4 md:text-base">
              {heroKeyPhrases.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold uppercase tracking-[0.18em] text-cyan-100/90 shadow-[0_14px_32px_rgba(2,12,32,0.26)] backdrop-blur"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-200">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-left text-xs text-slate-100/80 md:text-sm">
              {heroSupportPhrases.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold uppercase tracking-[0.18em] text-cyan-100/80 shadow-[0_12px_28px_rgba(2,12,32,0.22)] backdrop-blur"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-200">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
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
                092-231-2920
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

            <div className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-4 text-left shadow-[0_18px_45px_rgba(3,16,36,0.4)] sm:grid-cols-3">
              {heroSummaryCards.map(({ icon: Icon, title, description, eyebrow }) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0b1f3f]/60 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                    <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                    {eyebrow}
                  </div>
                  <p className="text-sm font-semibold text-white/90">{title}</p>
                  <p className="text-xs leading-relaxed text-slate-100/80">{description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm uppercase tracking-[0.22em] text-cyan-100/80">
              {trustSignals.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                  <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  <span className="font-semibold text-slate-100/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#041226]/90 shadow-[0_36px_90px_rgba(3,12,32,0.55)]">
              <img
                src={heroExecutiveBriefingImage}
                alt="代表・古町が経営陣とボードアジェンダを設計しているセッションの様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 space-y-3 bg-gradient-to-t from-[#020b1c]/95 via-[#041226]/60 to-transparent px-6 pb-6 pt-10 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/85">
                  Blueprint Preview
                </p>
                <p className="text-sm leading-relaxed text-slate-100/85">
                  48時間で抽出した資金圧迫の兆しと現場の制約条件を、一目で理解できる再生ボードに整理。次の会議で示せるドラフトが整います。
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/85">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    優先論点リスト
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    リスクライン付き
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_28px_70px_rgba(3,16,36,0.45)]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                再生ボード サンプル
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {heroBoardroomInsights.map(({ label, value, description }) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-[#0b1f3f]/60 p-4 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/80">{label}</p>
                    <p className="mt-1 text-xl font-bold text-white">{value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-100/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroImpactStats.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/15 bg-[#04152b]/80 p-5 text-left shadow-[0_20px_45px_rgba(2,12,30,0.4)] backdrop-blur"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                    </div>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-100/75">{metric.helper}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-[28px] border border-white/12 bg-white/5 p-6 text-left shadow-[0_24px_65px_rgba(3,16,36,0.38)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-white/15 bg-[#031024]/70 md:w-40">
                  <img
                    src={heroGrowthMetricsImage}
                    alt="改善後の経営ダッシュボードのプレビュー"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#010713]/70 to-transparent" aria-hidden="true" />
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-slate-100/85">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    週次レビューと金融機関連携を一枚で
                  </p>
                  <p>
                    ダッシュボードと会議資料を同時更新し、役員・現場・金融機関が同じ根拠で会話できる状態をキープします。
                  </p>
                  <p className="text-xs text-slate-100/70">
                    伴走フェーズでは意思決定ログも残し、次の改善サイクルの起点まで滑らかに繋ぎます。
                  </p>
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
