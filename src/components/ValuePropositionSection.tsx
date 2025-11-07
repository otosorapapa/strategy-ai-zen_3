import ScrollReveal from "@/components/ScrollReveal";
import { BarChart3, ClipboardList, LayoutDashboard, LifeBuoy } from "lucide-react";

const valueCards = [
  {
    title: "未来志向の再生計画",
    description: "粗利率やキャッシュの改善余地を一目で把握できる設計図を提示します。",
    metric: "+3pt",
    metricLabel: "平均粗利率改善幅",
    icon: BarChart3,
  },
  {
    title: "カスタマイズ型ダッシュボード",
    description: "AIが週次で社内外データを同期し、診断士が制約とリスクを一枚に整理。",
    metric: "7日",
    metricLabel: "導入までの目安",
    icon: LayoutDashboard,
  },
  {
    title: "継続的な伴走支援",
    description: "週次レビューで進捗と交渉資料を更新し、決断の瞬間をサポートします。",
    metric: "95%",
    metricLabel: "伴走継続率（過去3年）",
    icon: LifeBuoy,
  },
  {
    title: "補助金活用サポート",
    description: "経営改善支援補助金の要件整理から書類準備まで、実行計画と並走。",
    metric: "70%",
    metricLabel: "採択実績（2024年度）",
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
