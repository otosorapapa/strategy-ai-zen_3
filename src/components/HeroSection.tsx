import heroImage from "@/assets/financial-analysis.jpg";
import { Button, buttonVariants } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, Sparkle, Target, Timer } from "lucide-react";

const heroStats = [
  {
    label: "初期診断までのスピード",
    value: 48,
    suffix: "時間以内",
    annotation: "生成AIと専門家が歪みの見取り図を提示",
  },
  {
    label: "会議アップデートの頻度",
    value: 1,
    suffix: "週間ごと",
    annotation: "判断の根拠と行動計画を同期",
  },
  {
    label: "伴走する専門領域",
    value: 3,
    suffix: "領域連携",
    annotation: "財務・販売・人材の視点を束ねる",
  },
];

const heroBullets = [
  "生成AIが市場・資金・人材データを同時解析し、歪みと余白を一枚のヒートマップに集約",
  "診断士が現場ヒアリングで制約条件を棚卸し、合意形成に耐える優先シナリオを構築",
  "週次レビューで交渉資料と現場アクションを同期し、語れる物語として意思決定を磨く",
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
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
                信念｜判断力を研ぎ澄ます伴走
              </span>
              <h1 className="text-balance text-3xl font-bold leading-tight md:text-4xl xl:text-[3.1rem]">
                資金が尽きる前に、未来を読み直す。<br className="hidden md:block" />「生成AI × 専門家」が描く再生の設計図
              </h1>
              <p className="max-w-3xl text-[1.05rem] leading-relaxed text-slate-100/90 md:text-lg">
                資金が目減りし、主力メンバーが疲弊し、次の一手が見えない──停滞は努力不足ではなく、未来を読む設計図が卓上にないことが原因です。<br className="hidden md:block" />
                創和経営コンサルティングは、生成AIが読み解く外部データと診断士が現場で積み上げてきた判断軸を束ね、貴社の“再生の設計図”をゼロから描き直します。数字とストーリーを一枚のボードに統合し、経営者が胸を張って判断を語れる舞台を整えます。
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
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-[#0b1f3f] shadow-[0_30px_80px_rgba(5,12,35,0.55)]">
              <img
                src={heroImage}
                alt="生成AIダッシュボードを前に戦略を議論する専門家と経営者"
                className="h-full max-h-[460px] w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#031024]/40 via-transparent to-[#0ef2ff]/10" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-[#061530]/80 p-5 backdrop-blur">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
                  <Target className="h-4 w-4" aria-hidden="true" />
                  再生の設計図｜KPIスナップショット
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-cyan-200/20 bg-white/10 p-4 text-center">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={1500}
                        className="text-2xl font-black text-cyan-100"
                      />
                      <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-[0.65rem] leading-relaxed text-slate-100/70">{stat.annotation}</p>
                    </div>
                  ))}
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
