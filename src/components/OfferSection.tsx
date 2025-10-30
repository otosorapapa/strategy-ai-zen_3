import { ArrowRight, ClipboardList, FileText, Sparkles, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";
import AnimatedCounter from "@/components/AnimatedCounter";
import offerBlueprint from "@/assets/financial-analysis.jpg";

const offers = [
  {
    id: "consult",
    icon: Sparkles,
    label: "無料相談",
    headline: "30分でZEN導入の適合度を棚卸し",
    description:
      "経営者・後継者とオンラインで課題を整理し、粗利・資金・人員のボトルネックとAI活用余地を確認します。翌営業日にナビゲーションメモ（例）を送付し、チームに語るべき論点を言語化します。",
    highlights: [
      "粗利・資金・人員の3指標で因果を整理",
      "経営会議で使える仮説メモを翌営業日に送付",
      "投資判断までの不安・リスクを整理",
    ],
    button: PRIMARY_CTA,
    ctaText: "30分で判断材料を整える",
    targetId: "cta-section",
  },
  {
    id: "diagnosis",
    icon: ClipboardList,
    label: "ZENスキャン",
    headline: "72時間で18指標のシグナルレポート",
    description:
      "粗利率・在庫回転・資金余力・意思決定リードタイムなど18指標をAIが試算し、改善優先度を可視化します。（例）判断に必要な根拠を事前に揃え、会議での説明力を高めます。",
    highlights: [
      "18指標のスコアリングで優先順位を決定",
      "AI導入時のデータ要件と実行ロードマップ",
      "判断リードタイムを短縮するシミュレーション",
    ],
    button: {
      id: SECONDARY_CTA.id,
      label: SECONDARY_CTA.label,
      benefitCopy: SECONDARY_CTA.benefitCopy,
      benefitCopyAlt: SECONDARY_CTA.benefitCopy,
      supportText: SECONDARY_CTA.description,
    },
    targetId: "cta-section",
  },
  {
    id: "materials",
    icon: FileText,
    label: "資料ダウンロード",
    headline: "ZENの運用フローと数値例を確認",
    description:
      "サービス概要・ZENナビゲーションボードの画面・実行管理テンプレートをまとめたPDFを即時ダウンロードできます。",
    highlights: [
      "ZENナビゲーションボードの画面サンプル",
      "ROI試算と導入チェックリスト",
      "現場共有用の解説スライド",
    ],
    button: {
      id: TERTIARY_CTA.id,
      label: TERTIARY_CTA.label,
      benefitCopy: "PDFとダッシュボードのサンプル付き",
      benefitCopyAlt: "PDFとダッシュボードのサンプル付き",
      supportText: "",
    },
    ctaText: TERTIARY_CTA.label,
    href: TERTIARY_CTA.href,
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const offerMetrics = [
  {
    value: 30,
    suffix: "分",
    label: "初回棚卸",
    description: "経営課題とAI適用余地を共同設計",
  },
  {
    value: 72,
    suffix: "時間",
    label: "ZENスキャン",
    description: "意思決定の前倒しを可視化",
  },
  {
    value: 18,
    suffix: "指標",
    label: "シグナル",
    description: "粗利・資金・需要のKPIを同期",
  },
];

const OfferSection = () => {
  return (
    <section className="fade-in-section section-spacing bg-gradient-to-b from-white via-slate-50 to-slate-100" aria-labelledby="offer-heading">
      <div className="layout-shell">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            OFFER
          </span>
          <h2 id="offer-heading" className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            意思決定の質・速さ・先見性を試せる3つの入り口
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            行動のハードルに応じた3つのオファーをご用意しました。経営者が自信を持って判断材料をそろえられる順番で並べています。
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-sky-50/60 p-8 shadow-card">
          <div className="pointer-events-none absolute inset-0">
            <img
              src={offerBlueprint}
              alt="AI経営ダッシュボードの意思決定イメージ"
              className="h-full w-full object-cover opacity-35 mix-blend-multiply"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
            <span className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
                DECISION BLUEPRINT
              </span>
              <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">30分→72時間→18指標で一気に意思決定を前倒し</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                無料相談で課題を棚卸し、仮診断で優先順位を決定、資料ダウンロードで社内共有を加速する三段構えの導線です。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {offerMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="group relative flex h-full flex-col gap-3 rounded-3xl border border-white/60 bg-white/90 p-5 shadow-inner backdrop-blur-sm"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{metric.label}</span>
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    duration={1000}
                    className="text-3xl font-black text-primary"
                  />
                  <p className="text-sm leading-relaxed text-muted-foreground">{metric.description}</p>
                  <div className="mt-auto h-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon;
            const handleClick = () => {
              if (offer.href) {
                if (typeof window !== "undefined") {
                  window.open(offer.href, "_blank", "noreferrer noopener");
                }
              } else if (offer.targetId) {
                scrollTo(offer.targetId);
              }
            };

            return (
              <article
                key={offer.id}
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary/15 bg-white/95 p-8 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{offer.label}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">{offer.headline}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{offer.description}</p>
                  {offer.highlights && (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {offer.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-primary/80">{offer.button.benefitCopy || offer.button.benefitCopyAlt}</p>
                  <Button
                    type="button"
                    variant="cta"
                    size="lg"
                    className={cn("w-full justify-center rounded-full text-sm font-bold", "interactive-cta")}
                    onClick={handleClick}
                    data-cta-id={`${offer.button.id}-offer`}
                    data-cta-attention="offer"
                    data-cta-attention-delay="640"
                  >
                    {offer.ctaText || offer.button.label}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
