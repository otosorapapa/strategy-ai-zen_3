import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

const segments = [
  {
    id: "starter",
    icon: Sparkles,
    title: "創業期・小規模企業向けスタータープラン",
    persona: "年商数千万円｜資金繰りと数値管理が不安な経営者",
    pains: [
      "月次試算表の読み方が分からず、資金ショートが怖い",
      "販路拡大と投資判断の優先度を決められない",
    ],
    value: "+30日",
    proof: "AI簡易レポートと資金繰り基礎講座でキャッシュ余力を可視化",
    cta: {
      label: "スタータープランの詳細を見る",
      ctaId: `${PRIMARY_CTA.id}-segment-starter`,
    },
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "成長期企業向けスタンダードプラン",
    persona: "年商数千万〜数億円｜粗利と在庫改善が課題の企業",
    pains: [
      "売上は伸びているのに粗利率が上がらない",
      "在庫と資金のバランスが崩れ、投資判断に迷う",
    ],
    value: "+5.2pt",
    proof: "週次AIレポートと診断士レビューで粗利率+5.2pt・在庫回転+28%",
    cta: {
      label: "スタンダードプランを確認",
      ctaId: `${SECONDARY_CTA.id}-segment-growth`,
    },
  },
  {
    id: "premium",
    icon: ShieldCheck,
    title: "成熟・再生期企業向けプレミアムプラン",
    persona: "年商数億〜15億円｜事業再生やM&Aを視野に入れる企業",
    pains: [
      "金融機関との交渉準備に時間がかかり意思決定が遅れる",
      "部門横断の改善施策が定着せず再挑戦の糸口が見えない",
    ],
    value: "▲52%",
    proof: "診断士が伴走し意思決定リードタイムを平均52%短縮、公的支援も活用",
    cta: {
      label: "プレミアムプランの相談を予約",
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
            創業・成長・再生の3ステージごとに、欲しい成果物と導線を設計
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            「福岡発だがオンラインで全国対応」という強みを活かし、3つの成長ステージに合わせた価値訴求を用意。AIレポートの深さや伴走の密度を調整し、地域や業種ごとの課題にも応えられる導線を整えました。
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
