import { ComponentType, SVGProps } from "react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { TERTIARY_CTA } from "@/lib/ctaVariants";
import conversionMomentumVisual from "@/assets/success-metrics-visual.jpg";

import { ArrowRight, CalendarClock, FileText, Sparkles, Target } from "lucide-react";

type MidPageCta = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullet: string;
  action: {
    label: string;
    type: "scroll" | "link";
    targetId?: string;
    href?: string;
    ctaId: string;
  };
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  highlight: string;
};

const ctaCards: MidPageCta[] = [
  {
    id: "diagnostic",
    eyebrow: "15 MINUTE CHECK",
    title: "15分ヒアリングで『資金繰り耐性スコア』をその場で受診",
    description:
      "AIDMAの『Desire→Memory』を切り替える短時間セッション。AIが直近12週間のキャッシュ波形を整理し、支払いインパクトの高い論点を色分けします。",
    bullet: "銀行同席時に使えるキャッシュ耐性スナップショットと優先アクションを当日共有",
    action: {
      label: "15分ヒアリングを予約して耐性スコアを確認",
      type: "scroll",
      targetId: "cta-section",
      ctaId: "mid-cta-diagnostic",
    },
    icon: CalendarClock,
    highlight: "平均離脱前スクロール地点より上部に配置された新CTA",
  },
  {
    id: "case-study",
    eyebrow: "INSIGHT KIT",
    title: "成功事例レポートで、粗利と資金の立て直し方を体系的に把握",
    description:
      "AISASの『Search→Action』を刺激する資料パック。粗利+12%、債務超過解消率80%（例）の背景と、再現手順をまとめています。",
    bullet: "事例別のタイムラインと金融機関コメントをPDFで即時ダウンロード",
    action: {
      label: "成功事例レポートを今すぐ見る",
      type: "link",
      href: TERTIARY_CTA.href,
      ctaId: "mid-cta-case-study",
    },
    icon: FileText,
    highlight: "スクロール途中で意思決定を後押しするセカンダリ導線",
  },
];

const MidPageCtaSection = () => {
  const handleClick = (cta: MidPageCta["action"]) => {
    if (cta.type === "link" && cta.href) {
      window.open(cta.href, "_blank", "noreferrer noopener");
      return;
    }

    if (cta.type === "scroll" && cta.targetId) {
      document.getElementById(cta.targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="mid-cta-section"
      className="fade-in-section relative overflow-hidden bg-gradient-to-b from-[#031024] via-[#051a37] to-[#031024] py-20 text-white"
      aria-labelledby="mid-cta-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Conversion Bridge｜途中離脱を防ぐ
          </span>
          <h2 id="mid-cta-heading" className="text-3xl font-bold leading-tight md:text-4xl">
            迷いを行動に変える2つのセカンダリCTAでCVRを底上げ
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/85 md:text-lg">
            スクロール中に発生する「後で連絡すればいい」という心理的惰性を断つため、行動ハードルの異なる2種類のCTAを用意。CVR +18〜25%向上を狙った構成です。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 overflow-hidden rounded-[32px] border border-white/12 bg-white/5 shadow-[0_28px_75px_rgba(3,16,36,0.45)]"
        >
          <figure className="relative flex flex-col overflow-hidden rounded-[30px]">
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-slate-900/40"
              aria-hidden="true"
            />
            <img
              src={conversionMomentumVisual}
              alt="CTAクリック率の向上を示すダッシュボードとチームのモニタリング風景"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="relative z-10 flex flex-col gap-2 px-6 py-4 text-left text-xs text-slate-100/80 md:flex-row md:items-center md:justify-between md:text-sm">
              <span className="font-semibold uppercase tracking-[0.28em] text-cyan-200">Engagement Snapshot</span>
              <span>
                中盤のナーチャリング導線で可視化される指標イメージを添えることで、複数CTAの役割分担と改善効果を直感的に伝えます。
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {ctaCards.map((card) => {
            const Icon = card.icon;

            return (
              <ScrollReveal
                key={card.id}
                variant="fade-up"
                className="flex h-full flex-col justify-between gap-6 rounded-[32px] border border-white/12 bg-white/5 p-8 shadow-[0_30px_80px_rgba(3,16,36,0.45)]"
              >
                <div className="space-y-4 text-left text-slate-100/90">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {card.eyebrow}
                  </span>
                  <h3 className="text-2xl font-semibold text-white md:text-[1.6rem]">{card.title}</h3>
                  <p className="text-sm leading-relaxed">{card.description}</p>
                  <div className="rounded-[24px] border border-cyan-300/30 bg-cyan-500/10 p-4 text-sm leading-relaxed text-slate-100/90">
                    <Target className="mb-2 h-4 w-4 text-cyan-200" aria-hidden="true" />
                    {card.bullet}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/75">{card.highlight}</p>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full justify-center rounded-full bg-cyan-500 text-sm font-bold text-white shadow-[0_20px_45px_rgba(14,165,233,0.28)] transition hover:bg-cyan-400"
                    data-cta-id={card.action.ctaId}
                    onClick={() => handleClick(card.action)}
                  >
                    {card.action.label}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                  <p className="text-xs text-slate-200/70">
                    押下後は{card.action.type === "scroll" ? "フォームセクションへスムーズに遷移します" : "新しいタブで資料が開きます"}。
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 grid gap-4 rounded-[28px] border border-white/12 bg-white/10 p-6 text-left shadow-[0_25px_60px_rgba(3,16,36,0.45)]"
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            スクロール測定による想定効果｜平均滞在時間 +22%、CTAクリック率 +25% を目指した導線
          </div>
          <p className="text-sm leading-relaxed text-slate-100/85">
            主要セクションの読了地点にCTAを差し込むことで、AISAS/AIDMA双方の「Action」フェーズを強制的に喚起。中盤離脱が多かったユーザーにも即時の選択肢を提示します。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MidPageCtaSection;
