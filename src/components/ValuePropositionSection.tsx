import ScrollReveal from "@/components/ScrollReveal";
import {
  BrainCircuit,
  ClipboardList,
  LayoutDashboard,
  Timer,
} from "lucide-react";

const valuePropositions = [
  {
    title: "生成AIと診断士の融合",
    icon: BrainCircuit,
    bullets: [
      "社内外の数値を横断解析し、兆しとリスクを色分け",
      "診断士が現場ヒアリングで裏付け、意思決定に必要な言葉に翻訳",
    ],
  },
  {
    title: "専門家が設計する再生シナリオ",
    icon: ClipboardList,
    bullets: [
      "粗利・資金・人材の改善仮説を3パターン以上で提示",
      "金融機関説明用の根拠と実行ロードマップを同時に整備",
    ],
  },
  {
    title: "カスタマイズ可能なダッシュボード",
    icon: LayoutDashboard,
    bullets: [
      "部門ごとのKPIとキャッシュの見通しを一画面で確認",
      "週次レビュー用の議事録テンプレートと連動",
    ],
  },
  {
    title: "48時間診断と週次レビュー",
    icon: Timer,
    bullets: [
      "48時間以内に優先課題と対策メモを共有",
      "伴走期間中は週次で進捗レビューとリスケ対応を実施",
    ],
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
              未来を描き直すための4つの価値提案
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
              経営者が迷わず次の一手を選べるよう、計画づくりから実行、金融機関との連携までをワンチームで支援します。
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
            {valuePropositions.map(({ title, icon: Icon, bullets }) => (
              <ScrollReveal
                key={title}
                variant="fade-up"
                className="flex h-full flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_22px_60px_rgba(4,18,45,0.45)]"
              >
                <div className="flex items-center gap-3 text-white">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug md:text-xl">{title}</h3>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-100/85 md:text-base">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
