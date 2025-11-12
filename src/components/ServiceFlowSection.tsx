import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CalendarClock, Files, Presentation } from "lucide-react";

const executionTimeline = [
  {
    phase: "ヒアリング＆データキャッチ",
    dayRange: "Day0〜Day1",
    description:
      "創業〜成熟までの課題を45分で棚卸し。財務・現場・心理のメモを受領し、AI分析の準備を整えます。",
    metric: "Day0-1",
    metricLabel: "課題棚卸",
    icon: CalendarClock,
  },
  {
    phase: "AIシナリオ生成＆診断士レビュー",
    dayRange: "Day1〜Day2",
    description:
      "生成AIが複数シナリオを描き、診断士が優先順位と実行難易度を判定。財務・現場・心理の打ち手を一枚に統合します。",
    metric: "48h",
    metricLabel: "再生ボード",
    icon: Files,
  },
  {
    phase: "48時間後プレゼンテーション",
    dayRange: "Day2",
    description:
      "代表と“再生ボード”を共有し、金融機関資料や次のアクションを決定。その後は週次レビューで学習と交渉を並走します。",
    metric: "▲52%",
    metricLabel: "意思決定LT",
    icon: Presentation,
  },
  {
    phase: "伴走実行と仕組み化",
    dayRange: "Day3〜",
    description:
      "96時間で管理アプリとナレッジ基盤を構築し、AIレポート×診断士伴走で粗利+5.2pt／在庫回転+28%の再現を狙います。",
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
            48時間で動き出す、再生計画のロードマップ
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
            Day0〜Day2で迷いの正体を可視化し、再生ボードを共創。以降は週次レビューと金融機関連携を一体化させ、判断と実装を加速させます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
