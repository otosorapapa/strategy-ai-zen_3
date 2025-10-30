import ScrollReveal from "@/components/ScrollReveal";

const resultMetrics = [
  {
    label: "営業利益の改善傾向",
    value: "二桁台の反転事例",
    detail: "再生計画実行後に確認された代表的な傾向（例）",
  },
  {
    label: "金融再交渉の進展",
    value: "合意形成が続く軌跡",
    detail: "金融機関との再交渉で得られた前進の実例（例）",
  },
  {
    label: "相談企業数",
    value: "百社規模",
    detail: "九州・西日本の伴走実績",
  },
];

const proofStories = [
  {
    title: "製造業｜粗利とキャッシュを同時に立て直し",
    narrative:
      "原材料高騰で粗利が目減りしていたが、AIが調達条件と需要予測を分析し、診断士が価格戦略と人員再配置を設計。半年足らずでキャッシュの息継ぎと利益回復の道筋が整い、経営者が堂々と再起プランを語れるようになった。",
  },
  {
    title: "卸売業｜金融機関との信頼を再構築",
    narrative:
      "在庫滞留で債務超過に陥ったが、AIが在庫の死蔵箇所と需要シフトを抽出。再生シナリオとモニタリング資料を整備し、追加融資と返済スケジュールの再設計に成功。",
  },
  {
    title: "サービス業｜人材活用の設計図を刷新",
    narrative:
      "離職率が高止まりし、施策が属人化。AIでスキルマップを分析し、診断士が育成プログラムと評価フローを再構築。メンバーの定着と顧客単価の底上げが同時に進み、現場が自信を持って動き出した。",
  },
];

const ResultsSection = () => {
  return (
    <section className="fade-in-section bg-[#04112a] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Impact｜結果で語る
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            「再生の設計図」が描かれた瞬間、数字と行動が同じ未来を向き始める
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            仮説を示すだけでは再生は進みません。ZENは実行に耐えるプロセスを作り込み、粗利・資金・人材の波形を同時に整えることで、経営者が次のステップを迷いなく選べる状態を守り抜きます。
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
