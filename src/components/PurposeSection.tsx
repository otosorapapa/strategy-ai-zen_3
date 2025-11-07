const PurposeSection = () => {
  return (
    <section className="bg-[#f3f6fb] py-16 text-[#0b1f3f]">
      <div className="layout-shell">
        <div className="mx-auto max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b4dd8]">
            Purpose
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            経営判断が止まる背景に寄り添う
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-[#1e3359] md:text-lg">
            <p>
              多くの中小企業では財務指標と現場の声が別々に追いかけられ、議論の着地点が曖昧なまま会議が終わりがちです。数字の根拠と現場の感覚が噛み合わない時間が続くほど、意思決定は後ろ倒しになり、挑戦の機会が遠のいてしまいます。
            </p>
            <p>
              私たちの使命は、情熱を力に変える舞台を整え、経営者が次の一手を胸を張って選べる状態をつくること。分析と伴走の両輪で、地域企業が歩む未来の物語を自分たちの言葉で語れるよう支えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
