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
    id: "analysis",
    label: "現状分析とシナリオ設計",
    step: "MENU 01",
    icon: Sparkles,
    image: consultWorkshop,
    imageAlt: "経営者と専門家がホワイトボードで課題を整理している様子",
    title: "生成AIが兆しを整理し、再生の起点をつくる",
    description:
      "財務・販売・顧客データと外部環境を重ね、生成AIが歪みのパターンを抽出。診断士がヒアリングで裏付けを取り、複数の改善シナリオを提示します。",
    bullets: [
      "粗利・キャッシュ・需要データを統合したヒートマップ",
      "業界・競合・顧客の視点を踏まえたSWOT整理",
      "優先仮説とリスクラインを示すブリーフィングメモ",
    ],
    stat: {
      label: "初期レポート共有",
      value: "48時間",
      caption: "仮診断レポートの目安",
    },
    button: PRIMARY_CTA,
  },
  {
    id: "planning",
    label: "再生計画策定",
    step: "MENU 02",
    icon: ClipboardList,
    image: diagnosisDashboard,
    imageAlt: "改善計画書とダッシュボードを確認するビジュアル",
    title: "実行できるロードマップを合意形成",
    description:
      "週次・月次の進行を描いた再生計画書を、中小企業診断士が経営陣と共に設計。人・資金・商品サービスの打ち手を整理し、会議でそのまま使える資料を整えます。",
    bullets: [
      "収益モデルとコスト構造の再設計",
      "優先施策とKPIを結ぶロードマップ",
      "金融機関・取引先に提示できる説明資料セット",
    ],
    stat: {
      label: "計画ドラフト完成",
      value: "約2週間",
      caption: "ヒアリング完了後の目安",
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
    id: "monitoring",
    label: "モニタリングと共有支援",
    step: "MENU 03",
    icon: FileText,
    image: materialsPreview,
    imageAlt: "ダッシュボードと会議資料を同期させた画面のイメージ",
    title: "ダッシュボードで進捗と説明責任を同期",
    description:
      "経営管理アプリやダッシュボードを事業者ごとにカスタマイズし、進捗とリスクをリアルタイムで共有。社内外のレビュー資料も同じ情報源から自動生成します。",
    bullets: [
      "週次ダッシュボードと会議資料の同時更新",
      "意思決定ログと実行タスクのトラッキング",
      "関係者共有用のレポートテンプレート",
    ],
    stat: {
      label: "レビュー開始",
      value: "月次運用",
      caption: "導入後すぐに定例化",
    },
    button: {
      id: PRIMARY_CTA.id,
      label: PRIMARY_CTA.label,
      benefitCopy: PRIMARY_CTA.benefitCopy,
      benefitCopyAlt: PRIMARY_CTA.benefitCopy,
      supportText: PRIMARY_CTA.supportText,
    },
  },
  {
    id: "session",
    label: "経営者セッション",
    step: "MENU 04",
    icon: ClipboardList,
    image: representativePortrait,
    imageAlt: "代表コンサルタントが経営者と対話している写真",
    title: "意思決定プロセスを磨き続ける",
    description:
      "経営者向けのワークショップと役員会ファシリテーションで、判断プロセスと伝え方を継続的に整えます。感情と数字の両面から納得感を高める対話設計を支援します。",
    bullets: [
      "経営会議の設計とファシリテーション",
      "リーダー向けコーチングと振り返り",
      "社内共有用のストーリースライド作成",
    ],
    stat: {
      label: "伴走期間",
      value: "3〜12ヶ月",
      caption: "課題に応じて柔軟に設計",
    },
    button: {
      id: PRIMARY_CTA.id,
      label: PRIMARY_CTA.label,
      benefitCopy: PRIMARY_CTA.benefitCopy,
      benefitCopyAlt: PRIMARY_CTA.benefitCopy,
      supportText: PRIMARY_CTA.supportText,
    },
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
            4つのサービスメニュー
          </span>
          <h2 id="offer-heading" className="text-3xl font-bold leading-tight text-[#0b1f3f] md:text-4xl">
            環境変化に揺らぐ局面でも、再生計画を実装まで導く四つのメニュー
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            現状分析・計画策定・モニタリング・経営者セッションを組み合わせ、判断から実行までを一貫支援します。課題の緊急度に合わせて着手でき、次の一歩を自信を持って選べる構成です。
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
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
              「初回相談から届いた再生シグナルの試案で、役員会の議題が一気に整い、取引先への説明も迷わなくなりました。ZENが用意した三つの入り口が、交渉資料づくりと現場アクションを同じ速度で進めてくれます。」
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
        title="三つの入り口から、いま踏み出すべき一歩を無料で設計"
        description="無料相談・ZENスキャン・資料DLのどれを優先するか、現在の社内状況と意思決定スケジュールを伺いながら整えていきます。"
        ctaId="offer-steps"
      />
    </section>
  );
};

export default OfferSection;
