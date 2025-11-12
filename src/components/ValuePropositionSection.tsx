import ScrollReveal from "@/components/ScrollReveal";
import { BarChart3, ClipboardList, LayoutDashboard, LifeBuoy } from "lucide-react";

const valueCards = [
  {
    title: "48時間で可視化",
    description: "資金繰り・粗利・人材のギャップを一目で把握できる再生ボードを、ヒアリング後48時間以内にご提示します。",
    metric: "48h",
    metricLabel: "初回ボード提示",
    icon: BarChart3,
  },
  {
    title: "AI×診断士のハイブリッド分析",
    description: "暗黙知とデータを融合し、生成AIが描いたシナリオを診断士とエンジニアが検証。迷いの原因を構造から解き明かします。",
    metric: "3職種",
    metricLabel: "AI/診断士/エンジニア",
    icon: LayoutDashboard,
  },
  {
    title: "全国リモート対応＋地域密着",
    description: "福岡で磨いた再生ノウハウをベースに、地域・業種ごとの商習慣へローカライズ。全国どこでも同じスピードで意思決定を支援します。",
    metric: "全国",
    metricLabel: "オンライン伴走",
    icon: LifeBuoy,
  },
  {
    title: "創業〜再生まで一気通貫",
    description: "計画書策定から実行支援まで、局面ごとの打ち手をワンチームで支援。創業・成長・成熟・再生を滑らかにつなぎます。",
    metric: "0→再生",
    metricLabel: "全フェーズ対応",
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
              “迷わない経営”を支える4つの強み
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
              経営者の迷いを減らすために、即時可視化・ハイブリッド分析・地域適応・実行伴走を一体化。判断の根拠と再現性を兼ね備えた経営インフラを届けます。
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
