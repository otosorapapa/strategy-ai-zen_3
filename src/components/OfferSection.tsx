import { ArrowRight, CheckCircle2, ClipboardList, FileText, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

const offerCards = [
  {
    id: "consult",
    label: "無料相談",
    icon: Sparkles,
    title: "短時間で未来の設計図の輪郭を描き始める",
    description:
      "経営者・キーパーソンとの対話で課題を棚卸し。生成AIが初期分析したシグナルと共に、優先仮説メモを速やかに共有します。",
    bullets: [
      "粗利・キャッシュ・人材データの整合性チェック",
      "AI適用余地と優先課題を三層で整理",
      "次回会議で伝えられる仮説メモを提供",
    ],
    button: PRIMARY_CTA,
  },
  {
    id: "diagnosis",
    label: "ZENスキャン",
    icon: ClipboardList,
    title: "短期間で再生可能性を数値化するレポート",
    description:
      "粗利率・在庫回転・キャッシュ余力など多層の指標をAIがスコアリング。専門家のコメント付きで再生の到達イメージを提示します。",
    bullets: [
      "重要指標のヒートマップとリスクスコア",
      "シナリオ別の損益・資金シミュレーション",
      "実行に必要なデータ・体制のチェックリスト",
    ],
    button: {
      id: SECONDARY_CTA.id,
      label: SECONDARY_CTA.label,
      benefitCopy: SECONDARY_CTA.benefitCopy,
      benefitCopyAlt: SECONDARY_CTA.benefitCopy,
      supportText: SECONDARY_CTA.description,
    },
  },
  {
    id: "materials",
    label: "資料ダウンロード",
    icon: FileText,
    title: "再生ロードマップの全体像を社内共有",
    description:
      "ZENの運用フロー、AIダッシュボード、会議テンプレートをまとめた資料。幹部会や金融機関との共有にも活用できます。",
    bullets: [
      "再生ロードマップのサンプル",
      "AIダッシュボードの画面イメージ",
      "週次レポートと会議運用の解説",
    ],
    button: {
      id: TERTIARY_CTA.id,
      label: TERTIARY_CTA.label,
      benefitCopy: "PDFとデモ画面のセット",
      benefitCopyAlt: "PDFとデモ画面のセット",
      supportText: TERTIARY_CTA.description,
    },
    href: TERTIARY_CTA.href,
  },
];

const OfferSection = () => {
  const handleClick = (cardId: string, href?: string) => {
    if (href) {
      window.open(href, "_blank", "noreferrer noopener");
      return;
    }

    if (cardId !== "materials") {
      document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="fade-in-section bg-white py-20" aria-labelledby="offer-heading">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#f2f7ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            行動へのステップ
          </span>
          <h2 id="offer-heading" className="text-3xl font-bold leading-tight text-[#0b1f3f] md:text-4xl">
            行動の重さに合わせた三つの入り口で、再生への一歩を後押しする
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            無料相談で輪郭を描き、ZENスキャンで可能性を数値化し、資料で社内共有を進める。最初の一歩から実行までがひと続きになるように設計しています。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {offerCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="group flex h-full flex-col justify-between gap-6 rounded-[30px] border border-[#0b1f3f]/12 bg-[#f6f9ff] p-8 shadow-[0_25px_60px_rgba(6,21,48,0.12)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">{card.label}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0b1f3f] md:text-2xl">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{card.description}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#1e3359]/75">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  {card.button.supportText && (
                    <p className="text-xs leading-relaxed text-[#1e3359]/70">{card.button.supportText}</p>
                  )}
                  <Button
                    type="button"
                    variant="cta"
                    size="lg"
                    data-cta-id={`${card.button.id}-offer`}
                    className={cn("w-full justify-center rounded-full text-sm font-bold", "interactive-cta")}
                    onClick={() => handleClick(card.id, card.href)}
                  >
                    {card.button.label}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
                    {card.button.benefitCopy || card.button.benefitCopyAlt}
                  </p>
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
