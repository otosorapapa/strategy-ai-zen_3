const PurposeSection = () => {
  return (
    <section className="bg-[#f3f6fb] py-16 text-[#0b1f3f]">
      <div className="layout-shell">
        <div className="mx-auto max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b4dd8]">
            Purpose
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            数字と現場の温度差を埋め、迷わず決断できる舞台をつくる
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-[#1e3359] md:text-lg">
            <p>
              財務指標は悪くないのに現場が疲弊している。逆に、現場は動いているのに数字が伴わない。そんな温度差が長引くほど、経営会議は「判断が決まらない時間」になってしまいます。
            </p>
            <p>
              創和経営コンサルティングは、生成AIと診断士の暗黙知を組み合わせ、48時間で迷いの正体を言語化することを使命にしています。福岡で磨いた再生ノウハウを全国へ届け、経営者が「次の一手」を胸を張って選べる舞台を整えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
