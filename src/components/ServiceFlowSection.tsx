import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CalendarClock, MapPinned } from "lucide-react";

const executionTimeline = [
  {
    phase: "初動",
    dayRange: "0〜2日",
    description: "データ統合と改善余地の見える化。粗利率・資金ギャップの分析と優先度付けを実施。",
    metric: "+3pt",
    metricLabel: "粗利率改善目安",
    icon: CalendarClock,
  },
  {
    phase: "設計",
    dayRange: "7日目",
    description: "現場ヒアリングを通じて生成AIの兆しをストーリー化し、再生シナリオと資金計画・交渉資料を提示。",
    metric: "▲45%",
    metricLabel: "交渉リードタイム短縮",
    icon: MapPinned,
  },
  {
    phase: "実行",
    dayRange: "30日目以降",
    description: "部署横断ダッシュボードで週次レビューを回し、金融機関や取引先との交渉を前倒しで準備。",
    metric: "+1.8億円",
    metricLabel: "再投資余力創出例",
    icon: ArrowRight,
  },
];

const ServiceFlowSection = () => {
  return (
    <section id="how-section" className="section-spacing bg-gradient-to-b from-[#010713] via-[#04152c] to-[#010713] text-white">
      <div className="layout-shell">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Execution Roadmap
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            3フェーズで意思決定と実行を加速
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
            初動で土台を整え、設計でストーリーと根拠を揃え、実行で行動と交渉を前倒しに。数字と現場の声が同じ時間軸で進むよう伴走します。
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
