import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CalendarClock, MapPinned } from "lucide-react";

const executionTimeline = [
  {
    phase: "48時間診断",
    dayRange: "Day0-2",
    description: "会計・販売・人材データをAIが統合し、粗利・資金・人材のギャップを色分けして共有。",
    metric: "48h",
    metricLabel: "初回レポート",
    icon: CalendarClock,
  },
  {
    phase: "シナリオ設計",
    dayRange: "Day3-7",
    description: "診断士が現場ヒアリングを重ね、生成AIが描いた複数シナリオを実行可能なロードマップに整理。",
    metric: "▲52%",
    metricLabel: "意思決定リードタイム",
    icon: MapPinned,
  },
  {
    phase: "伴走実行",
    dayRange: "Day8-30+",
    description: "96時間で構築した管理アプリとAIレポートで週次レビューを実施。金融機関・取引先との交渉資料も同時に更新。",
    metric: "+28%",
    metricLabel: "在庫回転率",
    icon: ArrowRight,
  },
];

const ServiceFlowSection = () => {
  return (
    <section
      id="service-flow-section"
      className="section-spacing bg-gradient-to-b from-[#010713] via-[#04152c] to-[#010713] text-white"
    >
      <div className="layout-shell">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Execution Roadmap
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            創業期から再生期までを貫く3ステップ伴走
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
            初動の診断で全体像を掴み、設計で複数シナリオと指標を揃え、伴走実行で意思決定と現場行動を同期させます。全国どこからでも同じ品質で導入できます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {executionTimeline.map(({ phase, dayRange, description, metric, metricLabel, icon: Icon }) => (
            <ScrollReveal
              key={phase}
              variant="fade-up"
              className="flex h-full flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_24px_70px_rgba(4,18,45,0.45)]"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {dayRange}
                </span>
                <h3 className="text-xl font-semibold text-white">{phase}</h3>
                <p className="text-sm leading-relaxed text-slate-100/85 md:text-base">{description}</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-[#072044]/80 px-4 py-3 text-cyan-100/90">
                <p className="text-2xl font-bold text-white">{metric}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">{metricLabel}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFlowSection;
