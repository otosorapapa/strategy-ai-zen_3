import ScrollReveal from "@/components/ScrollReveal";
import { BarChart3, ClipboardList, LayoutDashboard, LifeBuoy } from "lucide-react";

const valueCards = [
  {
    title: "AI診断×診断士レビュー",
    description: "生成AIが複数の改善シナリオを描き、中小企業診断士が現場条件で磨き上げて提示。",
    metric: "▲52%",
    metricLabel: "意思決定リードタイム",
    icon: BarChart3,
  },
  {
    title: "財務・経営・業務の三位一体改善",
    description: "粗利率・在庫回転・資金余力を同時に可視化し、優先順位を一枚の設計図で共有。",
    metric: "+5.2pt",
    metricLabel: "平均粗利率改善幅",
    icon: LayoutDashboard,
  },
  {
    title: "96時間で使える管理アプリ",
    description: "Python×生成AIで最短96時間のカスタムSaaSを構築し、週次AIレポートと連動させます。",
    metric: "96h",
    metricLabel: "主要機能の提供目安",
    icon: LifeBuoy,
  },
  {
    title: "全国対応×公的支援",
    description: "福岡発の実績をもとに全国の商習慣へローカライズ。補助金や金融機関との交渉も伴走。",
    metric: "78%",
    metricLabel: "補助金採択率（直近2年）",
    icon: ClipboardList,
  },
];

const ValuePropositionSection = () => {
  return (
    <section id="what-section" className="section-spacing bg-[#010a1d] text-white">
      <div className="layout-shell">
        <div className="space-y-12">
          <ScrollReveal variant="fade-up" className="space-y-5 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              Value Proposition
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
              再挑戦を支える提供価値
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
              未来志向の計画と日々の意思決定をつなげ、数字と現場の感覚を同じダッシュボードで共有できる環境を整備します。
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
            {valueCards.map(({ title, description, metric, metricLabel, icon: Icon }) => (
              <ScrollReveal
                key={title}
                variant="fade-up"
                className="flex h-full flex-col justify-between gap-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/8 via-white/6 to-white/4 p-6 text-left shadow-[0_22px_60px_rgba(4,18,45,0.45)]"
              >
                <div className="space-y-4 text-slate-100/85">
                  <div className="flex items-center gap-3 text-white">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-100">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold leading-snug md:text-xl">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed md:text-base">{description}</p>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cyan-100/90">
                  <span className="text-2xl font-bold text-white">{metric}</span>
                  <span className="text-right text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/70">
                    {metricLabel}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
