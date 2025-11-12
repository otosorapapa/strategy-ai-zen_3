import ScrollReveal from "@/components/ScrollReveal";
import { BrainCircuit, ClipboardList, GaugeCircle, Workflow } from "lucide-react";

const valueCards = [
  {
    title: "AIが数字を読み取り、48時間で診断",
    description: "財務・在庫・人材データを統合し、優先課題とインパクトを色分けした再生ボードを生成します。",
    metric: "48h",
    metricLabel: "初回レポート",
    icon: Workflow,
  },
  {
    title: "診断士が意味を読み解き、判断材料に翻訳",
    description: "財務×現場×心理のギャップを言語化し、経営者が迷わず決断できる筋書きに整えます。",
    metric: "▲52%",
    metricLabel: "意思決定リードタイム",
    icon: BrainCircuit,
  },
  {
    title: "エンジニアが仕組み化し、現場で回る",
    description: "生成AIとノーコードを組み合わせ、96時間で管理アプリや週次レビュー基盤を構築します。",
    metric: "96h",
    metricLabel: "運用基盤",
    icon: GaugeCircle,
  },
  {
    title: "金融・公的支援と連携し、実装まで伴走",
    description: "週次レビューと金融機関連携を一体化。補助金・再生支援の資料まで共創して意思決定を後押しします。",
    metric: "+5.2pt",
    metricLabel: "粗利率改善",
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
              “AIが数字を読み、診断士が意味を読み、エンジニアが仕組み化する。”
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
              経営改善計画書策定の熟練ノウハウと生成AIを掛け合わせ、共に戦う参謀として判断と実行を一気通貫で支援します。
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
