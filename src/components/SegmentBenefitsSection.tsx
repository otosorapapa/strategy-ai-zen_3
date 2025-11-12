import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

const segments = [
  {
    id: "starter",
    icon: Sparkles,
    title: "① 創業・小規模期｜資金繰りの霧を晴らす",
    persona: "資金繰りが不安で、何から手を付けていいか分からない",
    pains: [
      "ペイン：月次資金繰りと補助金準備が追いつかず、眠れない夜が続く",
      "ソリューション：AI×診断士が“資金の見える化”テンプレートを即時生成し、48時間で初期のつまずきを解消",
      "CTA：初回ヒアリングと資金繰りテンプレートを48時間で提供",
    ],
    value: "48h",
    proof: "キャッシュポジションと優先課題を48時間で整理し、創業補助金の伴走も開始",
    cta: {
      label: "無料診断を予約する",
      ctaId: `${PRIMARY_CTA.id}-segment-starter`,
    },
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "② 成長期｜利益が残る体質へ転換",
    persona: "売上はあるのに、なぜか現金が残らない",
    pains: [
      "ペイン：粗利が沈み、在庫と固定費のバランスが崩れて投資判断が止まる",
      "ソリューション：粗利構造・在庫回転・固定費の歪みをAIが診断し、利益が続く設計へ変換",
      "CTA：粗利を守る週次レビューとAIシナリオをセットで提供",
    ],
    value: "+5.2pt",
    proof: "粗利率+5.2pt／在庫回転+28%の実績で、現場と経営会議を一本化",
    cta: {
      label: "伴走プログラムの説明を受ける",
      ctaId: `${SECONDARY_CTA.id}-segment-growth`,
    },
  },
  {
    id: "premium",
    icon: ShieldCheck,
    title: "③ 成熟・再生期｜意思決定の孤独を終わらせる",
    persona: "投資判断や再生計画を相談できる相手がいない",
    pains: [
      "ペイン：金融機関や投資家との対話資料が整わず、決断が先送りになる",
      "ソリューション：AIが数値を構築し、診断士が事業構造を分解。金融機関との対話資料まで一気通貫で整備",
      "CTA：再生シナリオと金融機関連携資料を48時間でドラフト",
    ],
    value: "▲52%",
    proof: "意思決定リードタイム▲52%短縮。公的支援・M&Aの検討も含めて参謀が伴走",
    cta: {
      label: "代表診断士に相談する",
      ctaId: `${TERTIARY_CTA.id}-segment-premium`,
      href: TERTIARY_CTA.href,
    },
  },
] as const;

const SegmentBenefitsSection = () => {
  const handleClick = (cta: (typeof segments)[number]["cta"]) => {
    if (cta.href) {
      window.open(cta.href, "_blank", "noreferrer noopener");
      return;
    }

    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="segment-benefits-section"
      className="fade-in-section bg-[#f6f9ff] py-24 text-[#0b1f3f]"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            Audience Journey
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            経営者の「不安→納得→行動」を導く3フェーズストーリー
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            創業準備・成長停滞・再生局面──それぞれの迷いに寄り添い、AIと診断士が共に戦う参謀として48時間で次の一手を提示します。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {segments.map((segment) => {
            const Icon = segment.icon;
            return (
              <article
                key={segment.id}
                className="group flex h-full flex-col gap-6 rounded-[32px] border border-[#0b1f3f]/10 bg-white/90 p-7 text-left shadow-[0_28px_70px_rgba(11,31,63,0.12)] transition hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(11,31,63,0.18)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0584c6]/12 text-[#0584c6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-[#f2f7ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
                    {segment.value}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#0b1f3f]">{segment.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0584c6]/80">{segment.persona}</p>
                  <ul className="space-y-2 text-sm leading-relaxed text-[#1e3359]/80">
                    {segment.pains.map((pain) => (
                      <li key={pain} className="flex items-start gap-2">
                        <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 rounded-[24px] border border-[#0584c6]/15 bg-[#f6fbff] p-5 text-sm leading-relaxed text-[#1e3359]/85">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]/80">提供価値</p>
                  <p>{segment.proof}</p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  className={cn(
                    "mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#0584c6]/30 bg-[#f2f7ff] px-6 py-3 text-sm font-semibold text-[#0b1f3f] transition",
                    "hover:border-[#0584c6]/60 hover:bg-[#e6f3ff] hover:text-[#0584c6]",
                  )}
                  onClick={() => handleClick(segment.cta)}
                  data-cta-id={segment.cta.ctaId}
                >
                  {segment.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </article>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SegmentBenefitsSection;
