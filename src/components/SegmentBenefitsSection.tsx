import { ArrowRight, Building2, Factory, LineChart, Sparkle } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

const segments = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "製造業｜ライン別に粗利を立て直したい",
    persona: "年商7億円・従業員120名の加工メーカー社長",
    pains: [
      "稼働が高いラインほど粗利率が下がる",
      "価格転嫁の交渉材料が不足し意思決定が遅れる",
    ],
    value: "粗利改善幅 +12%",
    proof: "重点ラインの原価ドリルダウンと交渉ストーリーを48Hで提示",
    cta: {
      label: "生産ライン別の改善案を受け取る",
      ctaId: `${PRIMARY_CTA.id}-segment-manufacturing`,
    },
  },
  {
    id: "service",
    icon: Building2,
    title: "サービス業｜複数拠点の資金繰りを整えたい",
    persona: "年商3億円・8店舗を運営するサービス事業経営者",
    pains: [
      "拠点ごとの損益管理がExcelで属人化",
      "運転資金の山谷が把握できず、借入調達のタイミングを逃す",
    ],
    value: "資金繰り耐性 +45日",
    proof: "週次キャッシュ予測ボードと金融機関共有資料で交渉を先手に",
    cta: {
      label: "資金繰りシナリオのサンプルを見る",
      ctaId: `${SECONDARY_CTA.id}-segment-service`,
    },
  },
  {
    id: "it",
    icon: LineChart,
    title: "IT・卸｜AI投資を売上に直結させたい",
    persona: "年商12億円・DX投資を加速させたい卸・IT企業の経営者",
    pains: [
      "PoCの成果が現場KPIに落ちずROIを示せない",
      "役員会で意思決定の根拠資料が不足し議論が迷走",
    ],
    value: "意思決定速度 1.9倍",
    proof: "AIスコア×診断士伴走で週次アクションと成果指標を同期",
    cta: {
      label: "AI投資の稟議テンプレートを入手",
      ctaId: `${TERTIARY_CTA.id}-segment-it`,
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
            Stage 03｜やりたいこと
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            業態別に「次の一手」を具体化し、行動したくなる理由と成果物を明確に提示
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            モールスコピー第三段階では、「やりたい」と思ってもらう条件を細かく提示します。年商5,000万〜15億円の経営者でも業態ごとに欲しいアウトプットが違うため、ZENはAI診断と診断士伴走を組み合わせた成果物・KPI・CTAをセグメント別に設計しました。
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
                        <Sparkle className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
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
