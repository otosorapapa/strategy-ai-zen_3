import { ArrowRight, CheckCircle2, ClipboardList, FileText, Sparkles } from "lucide-react";

import consultWorkshop from "@/assets/strategy-planning.jpg";
import diagnosisDashboard from "@/assets/financial-analysis.jpg";
import monitoringDashboard from "@/assets/dashboard-preview.jpg";
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
    title: "兆しを読み切り、迷いを断つ起点づくり",
    description:
      "業界・競合・顧客・財務の兆候をまとめて照らし合わせ、次に打つべき筋道を可視化します。生成AIが抽出した歪みを診断士が現場の声で確かめ、会議で胸を張って示せる判断材料を整備します。",
    bullets: [
      "粗利・資金・需要を一枚の色分け図で俯瞰",
      "強み・弱み・機会・脅威を現場ヒアリングで整理",
      "優先仮説と注意点をまとめた共有メモ",
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
    title: "合意できる再生計画で行動ラインを描く",
    description:
      "経営陣が納得して動けるよう、週次と月次の進め方を一本化した再生計画を共に整えます。人・資金・商品サービスの打ち手を地図に落とし込み、変化に揺さぶられても判断が鈍らない状態を作ります。",
    bullets: [
      "収益と費用の組み立て直し",
      "優先施策と指標を並べた行動表",
      "社内外でそのまま使える説明資料",
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
    image: monitoringDashboard,
    imageAlt: "経営ダッシュボードと会議資料を同時に映した画面のイメージ",
    title: "進捗を見える化し、判断を止めない",
    description:
      "経営管理アプリとダッシュボードを事業者ごとに整え、進み具合とリスクを常に確認できる環境を提供します。数字と行動が同じ土台で更新されるため、説明責任も迷わず果たせます。",
    bullets: [
      "週次画面で数値と打ち手を同時更新",
      "判断記録と対応メモの追跡",
      "関係者へ即共有できる報告書ひな型",
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
    title: "経営会議で先を示し続ける伴走",
    description:
      "経営者向けワークショップと役員会の進行支援で、判断の流れと伝え方を磨き続けます。数字と物語をそろえ、周囲を率いていく力を保ちながら次の一手を示せるよう支援します。",
    bullets: [
      "会議の流れと問いを整理",
      "リーダー向けの対話と振り返り",
      "共有資料を物語として整備",
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
            変化を先に捉え、迷わず舵を取るための四つの支援
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            立て直しの現場で滞りがちな「判断材料の整理」「全員の合意」「実行の継続」を一連の流れで支えます。現状分析、計画づくり、運用、会議伴走を状況に合わせて組み合わせられる柔軟な構成です。
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#0584c6]/20 bg-[#f2f9ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0584c6]">
                      {card.step}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#0b1f3f]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
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
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
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
            <span className="absolute -bottom-2 right-0 inline-flex items-center rounded-full bg-[#0584c6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white">
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
