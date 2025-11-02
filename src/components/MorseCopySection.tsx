import { ArrowRight, Heart, Lightbulb, Route, Target } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

const morseStages = [
  {
    id: "understand",
    label: "わかっていること",
    title: "数字と現場の分断が再生のスピードを奪う",
    description:
      "粗利・資金・人材の情報が別々に管理され、経営会議に到達するころには判断に必要な熱量が失われてしまう。資料づくりに追われる間に、現場では次の危機が進行しています。",
    keyEvidence: "粗利率低下 × 運転資金の圧迫",
    icon: Lightbulb,
    cta: {
      label: SECONDARY_CTA.label,
      ctaId: `${SECONDARY_CTA.id}-morse-understand`,
      targetId: "why-section",
    },
  },
  {
    id: "feel",
    label: "感じていること",
    title: "経営者は“このままでは間に合わない”と焦っている",
    description:
      "数字は追っているのに勝ち筋が見えず、会議は“状況説明”で終わる。銀行や社員に示すストーリーが揃わず、意思決定が後手に回ってしまう危機感が膨らみます。",
    keyEvidence: "決裁までのリードタイムが平均+2週間",
    icon: Heart,
    cta: {
      label: "共感の声と事例を見る",
      ctaId: `${TERTIARY_CTA.id}-morse-feel`,
      targetId: "before-after-section",
      href: TERTIARY_CTA.href,
    },
  },
  {
    id: "want",
    label: "やりたいこと",
    title: "最短で“次の一手”を定め、社内外と共有したい",
    description:
      "粗利改善・資金繰り安定・人材再配置のシナリオを並走させたい。銀行交渉や現場アクションに迷いなく着手できる羅針盤を48時間以内に受け取りたいというニーズが高まっています。",
    keyEvidence: "48H診断×診断士伴走への相談が急増",
    icon: Target,
    cta: {
      label: PRIMARY_CTA.label,
      ctaId: `${PRIMARY_CTA.id}-morse-want`,
      targetId: "cta-section",
    },
  },
  {
    id: "action",
    label: "どうしたらよいか",
    title: "AI診断 × 診断士伴走で“再生の設計図”を共創する",
    description:
      "ZENは粗利・資金・人材の指標をAIで色分けし、診断士が現場の制約と補助金要件を織り込んだ再生シナリオを描きます。週次レビューと交渉資料を同じ画面で更新し、意思決定を1/3に短縮します。",
    keyEvidence: "粗利改善 +12%／交渉準備 45%短縮（例）",
    icon: Route,
    cta: {
      label: "48時間診断の流れを見る",
      ctaId: `${PRIMARY_CTA.id}-morse-action`,
      targetId: "how-section",
    },
  },
] as const;

const MorseCopySection = () => {
  const handleClick = (cta: (typeof morseStages)[number]["cta"]) => {
    if (cta.href) {
      window.open(cta.href, "_blank", "noreferrer noopener");
      return;
    }

    if (cta.targetId) {
      document.getElementById(cta.targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="morse-copy-section"
      className="fade-in-section relative overflow-hidden bg-white py-24 text-[#0b1f3f]"
      aria-labelledby="morse-copy-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.08),_transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#f4f8ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            Morse Copy Framework
          </span>
          <h2 id="morse-copy-heading" className="text-3xl font-bold leading-tight md:text-[2.6rem] md:leading-[1.25]">
            「わかる→共感する→動きたくなる→実行できる」4段階でコピーと導線を最適化
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            画像で共有いただいたモールスコピーの設計図を、そのままランディングページの骨格に翻訳しました。各フェーズで語るべき事実・感情・行動欲求・提案をカード化し、スクロールと連動するCTAで自然なアクションを促します。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {morseStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.id}
                className="group relative flex h-full flex-col gap-5 rounded-[28px] border border-[#0b1f3f]/10 bg-white/90 p-7 shadow-[0_32px_80px_rgba(11,31,63,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#0584c6]/40 hover:shadow-[0_40px_110px_rgba(5,132,198,0.18)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#f6f9ff] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#0584c6]/80">
                    {stage.label}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0584c6]/12 text-[#0584c6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#0b1f3f]">{stage.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[#1e3359]/80">{stage.description}</p>
                <div className="rounded-2xl border border-[#0584c6]/20 bg-[#f6fbff] p-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]/80">
                  {stage.keyEvidence}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  className={cn(
                    "mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#0584c6]/30 bg-[#f2f7ff] px-5 py-3 text-sm font-semibold text-[#0b1f3f] transition",
                    "hover:border-[#0584c6]/60 hover:bg-[#e6f3ff] hover:text-[#0584c6]"
                  )}
                  onClick={() => handleClick(stage.cta)}
                  data-cta-id={stage.cta.ctaId}
                >
                  {stage.cta.label}
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

export default MorseCopySection;
