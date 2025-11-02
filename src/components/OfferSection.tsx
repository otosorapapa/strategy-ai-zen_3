import { ArrowRight, CheckCircle2, ClipboardList, FileText, Sparkles } from "lucide-react";

import consultWorkshop from "@/assets/strategic-meeting.jpg";
import diagnosisDashboard from "@/assets/financial-analysis.jpg";
import materialsPreview from "@/assets/ai-illustration.jpg";
import representativePortrait from "@/assets/representative_.jpg";

import { Button } from "@/components/ui/button";
import SectionMicroCta from "@/components/SectionMicroCta";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

const offerCards = [
  {
    id: "consult",
    label: "無料相談",
    step: "STEP 01",
    icon: Sparkles,
    image: consultWorkshop,
    imageAlt: "初回相談でのホワイトボードセッションを俯瞰したイメージ",
    title: "短時間で未来の設計図の輪郭を描き始める",
    description:
      "経営者・キーパーソンとの対話で課題を棚卸し。生成AIが初期分析したシグナルと共に、補助金活用の可否も含めた優先仮説メモを即日共有します。",
    bullets: [
      "粗利・キャッシュ・人材データの整合性チェック",
      "AI適用余地と優先課題を三層で整理",
      "経営改善計画策定支援補助金の要件とスケジュールを事前確認",
      "次回会議で伝えられる仮説メモを提供",
    ],
    stat: {
      label: "初回ドラフト提示",
      value: "即日",
      caption: "平均共有リードタイム（例）",
    },
    button: PRIMARY_CTA,
  },
  {
    id: "diagnosis",
    label: "ZENスキャン",
    step: "STEP 02",
    icon: ClipboardList,
    image: diagnosisDashboard,
    imageAlt: "粗利とキャッシュの推移を分析する財務チャートとレポートのビジュアル",
    title: "短期間で再生可能性を数値化するレポート",
    description:
      "粗利率・在庫回転・キャッシュ余力など主要指標をAIがスコアリング。専門家のコメント付きで再生の到達イメージと補助金申請に必要な論点整理を提示します。",
    bullets: [
      "主要指標のヒートマップとリスクスコア",
      "シナリオ別の損益・資金シミュレーション",
      "補助金申請に使える経営改善計画ドラフトと添付資料のチェックリスト",
      "実行に必要なデータ・体制のチェックリスト",
    ],
    stat: {
      label: "定量化のスピード",
      value: "短期間",
      caption: "全指標スコアリング完了まで（例）",
    },
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
    step: "STEP 03",
    icon: FileText,
    image: materialsPreview,
    imageAlt: "生成AIがまとめた再生ロードマップ資料セットと共有スライドのイメージ",
    title: "再生ロードマップの全体像を社内共有",
    description:
      "ZENの運用フロー、AIダッシュボード、会議テンプレートをまとめた資料。幹部会や金融機関との共有にも活用できます。",
    bullets: [
      "再生ロードマップのサンプル",
      "AIダッシュボードの画面イメージ",
      "週次レポートと会議運用の解説",
    ],
    stat: {
      label: "社内共有キット",
      value: "豊富なセット",
      caption: "資料・テンプレートの同梱内容（例）",
    },
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
    <section
      className="fade-in-section relative overflow-hidden bg-white py-24"
      aria-labelledby="offer-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.15),_transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-[-30%] -z-10 h-[60%] bg-[radial-gradient(circle_at_bottom,_rgba(15,37,73,0.12),_transparent_60%)]" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#f2f7ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            行動への3ステップ
          </span>
          <h2 id="offer-heading" className="text-3xl font-bold leading-tight text-[#0b1f3f] md:text-4xl">
            行動の重さに合わせた三つの入り口で、再生への一歩を後押しする
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            無料相談で課題を棚卸し、ZENスキャンで再生余地を可視化し、資料で社内外の合意形成を進める。迷いを確信へ切り替える導線を、三つの入り口で整えました。
          </p>
          <div className="mx-auto flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#0584c6]" aria-hidden="true" /> 共感から確信へ
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#0b1f3f]/30" aria-hidden="true" /> 数字と現場を同期
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-[#5aa6d6]" aria-hidden="true" /> 意思決定の再起動
            </span>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-x-8 top-6 hidden h-0.5 bg-gradient-to-r from-transparent via-[#0584c6]/30 to-transparent lg:block" aria-hidden="true" />
          <div className="grid gap-8 lg:grid-cols-3">
          {offerCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="group flex h-full flex-col justify-between gap-8 rounded-[32px] border border-[#0b1f3f]/10 bg-white/90 p-8 shadow-[0_32px_80px_rgba(6,21,48,0.14)] backdrop-blur"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#0584c6]/20 bg-[#f2f9ff] px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#0584c6]">
                      {card.step}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#0b1f3f]/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {card.label}
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-[#0b1f3f]/10 bg-[#f6f9ff]">
                    <img src={card.image} alt={card.imageAlt} className="h-40 w-full object-cover" loading="lazy" />
                  </div>
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-semibold leading-tight text-[#0b1f3f] md:text-[1.55rem]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#1e3359]/80">{card.description}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#1e3359]/80">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  {card.stat && (
                    <div className="rounded-3xl bg-[#f2f7ff] px-5 py-4 text-left shadow-inner shadow-white/40 ring-1 ring-[#0584c6]/10">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
                        {card.stat.label}
                      </p>
                      <p className="mt-1 text-3xl font-bold text-[#0b1f3f]">{card.stat.value}</p>
                      <p className="text-xs text-[#1e3359]/70">{card.stat.caption}</p>
                    </div>
                  )}
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
        <aside className="mt-20 grid gap-8 rounded-[36px] border border-[#0b1f3f]/10 bg-white/80 p-8 shadow-[0_24px_60px_rgba(6,21,48,0.12)] backdrop-blur md:grid-cols-[auto,1fr] md:items-center">
          <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-[#0b1f3f]/15 md:mx-0">
            <img
              src={representativePortrait}
              alt="代表・古町が穏やかな表情で相談者に向き合うポートレート"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute -bottom-2 right-0 inline-flex items-center rounded-full bg-[#0584c6] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white">
              Voice
            </span>
          </div>
          <div className="space-y-4 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
              顧客の声と再現性
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[#0b1f3f]">
              「初回相談で即座に届いた“再生シグナル”のドラフトが、役員会での意思決定を加速させました。ZENの三つの入り口が、金融機関との交渉資料づくりと現場の動きを同時に進めるエンジンになりました。」
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#1e3359]/70">
              <span className="font-semibold text-[#0b1f3f]">年商86億円 製造業C社（再生支援）</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f2f7ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                粗利率 +3.2pt（例）
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f5ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]">
                キャッシュ確保 1.8ヶ月分（例）
              </span>
            </div>
          </div>
        </aside>
      </div>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="三つの入り口のうち、いま最適な一歩を無料で設計"
        description="無料相談・ZENスキャン・資料DLのどれを優先するか、現在の社内状況と意思決定スケジュールを伺いながら一緒に決めましょう。"
        ctaId="offer-steps"
      />
    </section>
  );
};

export default OfferSection;
