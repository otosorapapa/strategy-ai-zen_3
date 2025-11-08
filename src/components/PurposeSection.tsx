const PurposeSection = () => {
  return (
    <section className="bg-[#f3f6fb] py-16 text-[#0b1f3f]">
      <div className="layout-shell">
        <div className="mx-auto max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b4dd8]">
            Purpose
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            創業期から再生期まで、判断が止まる瞬間に寄り添う
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-[#1e3359] md:text-lg">
            <p>
              全国の中小企業では、財務指標と現場の声が別々に追いかけられ、会議の着地点が曖昧なまま時間が過ぎがちです。創業期は資金繰りに不安を抱え、成長期は粗利と在庫の歪みに悩み、成熟・再生期は投資判断と対外説明の重さに立ち止まってしまいます。
            </p>
            <p>
              私たちの使命は、福岡で磨いたノウハウをオンラインで全国に届け、経営者が次の一手を胸を張って選べる舞台を整えること。生成AIと診断士の伴走で数字と現場を同じ言語に束ね、地域ごとの商習慣に合わせた戦略づくりを支えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
