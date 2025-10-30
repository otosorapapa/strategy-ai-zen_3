import ScrollReveal from "@/components/ScrollReveal";

const resultMetrics = [
  {
    label: "営業利益の改善",
    value: "+12%",
    detail: "再生計画実行後12ヶ月の平均改善幅（例）",
  },
  {
    label: "債務超過解消率",
    value: "80%",
    detail: "金融機関との再交渉で合意に至った割合（例）",
  },
  {
    label: "相談企業数",
    value: "100社超",
    detail: "九州・西日本の伴走実績",
  },
];

const proofStories = [
  {
    title: "製造業｜粗利とキャッシュを同時に立て直し",
    narrative:
      "原材料高騰で粗利率が▲4pt。AIが調達条件と需要予測を分析し、診断士が価格戦略と人員再配置を設計。6ヶ月で粗利率+3.2pt、キャッシュ余力+45日を確保。",
  },
  {
    title: "卸売業｜金融機関との信頼を再構築",
    narrative:
      "在庫滞留で債務超過に陥ったが、AIが在庫の死蔵箇所と需要シフトを抽出。再生シナリオとモニタリング資料を整備し、追加融資と返済スケジュールの再設計に成功。",
  },
  {
    title: "サービス業｜人材活用の設計図を刷新",
    narrative:
      "離職率が高止まりし、施策が属人化。AIでスキルマップを分析し、診断士が育成プログラムと評価制度を再設計。平均客単価+18%、離職率▲35%（例）。",
  },
];

const ResultsSection = () => {
  return (
    <section className="fade-in-section bg-[#04112a] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Impact
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            「再生の設計図」が描かれたとき、数字と行動がつながり始める
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            仮説を示すだけでは意味がありません。ZENは実行に耐える再生プロセスを作り込み、経営者が次のステップを選び取れる状態を守り抜きます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resultMetrics.map((metric) => (
            <ScrollReveal
              key={metric.label}
              variant="fade-up"
              className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-white/15 bg-white/5 p-6 text-center shadow-[0_25px_60px_rgba(2,10,28,0.45)]"
            >
              <p className="text-3xl font-black text-cyan-100">{metric.value}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">{metric.label}</p>
              <p className="text-xs leading-relaxed text-slate-200/80">{metric.detail}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {proofStories.map((story) => (
            <ScrollReveal
              key={story.title}
              variant="fade-up"
              className="flex h-full flex-col gap-3 rounded-[28px] border border-white/12 bg-gradient-to-br from-[#062147] via-[#041536] to-[#021024] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Case</p>
              <h3 className="text-lg font-semibold text-white">{story.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200/85">{story.narrative}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
