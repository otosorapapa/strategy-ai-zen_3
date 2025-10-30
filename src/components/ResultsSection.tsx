import ScrollReveal from "@/components/ScrollReveal";

const resultMetrics = [
  {
    label: "会議で語れる根拠",
    value: "数字とアクションが同じボードで可視化",
    detail: "粗利・キャッシュ・人材の波形を統合し、次の判断に筋を通す",
  },
  {
    label: "金融機関との信頼",
    value: "対話資料とモニタリングを一体運用",
    detail: "交渉の場で語るべき要点を揃え、共通の未来像を共有",
  },
  {
    label: "伴走実績",
    value: "九州・西日本で蓄積した再生ノウハウ",
    detail: "製造・卸・サービスなど多業種の経営改善を支援",
  },
];

const proofStories = [
  {
    title: "製造業｜粗利とキャッシュを同時に立て直し",
    narrative:
      "原材料高騰が続く中で、AIが調達条件と需要予測を分析。診断士が価格戦略と人員再配置を設計し、収益と資金の両輪が噛み合う状態へ再構築しました。",
  },
  {
    title: "卸売業｜金融機関との信頼を再構築",
    narrative:
      "在庫滞留で危機的状況にあった企業に対し、AIが在庫の死蔵箇所と需要シフトを抽出。再生シナリオとモニタリング資料を整備し、交渉の場で胸を張れる説明を実現しました。",
  },
  {
    title: "サービス業｜人材活用の設計図を刷新",
    narrative:
      "離職が止まらず施策が属人化していた組織で、AIがスキルマップを分析。診断士が育成プログラムと評価制度を再設計し、働く人が誇りを持って挑める環境を整えました。",
  },
];

const ResultsSection = () => {
  return (
    <section className="fade-in-section bg-[#04112a] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            成果の足跡
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
