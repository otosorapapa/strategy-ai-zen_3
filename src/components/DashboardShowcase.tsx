import ScrollReveal from "@/components/ScrollReveal";

const metricHighlights = [
  {
    value: "+12%",
    label: "営業利益の改善",
    description: "再生計画実行後12ヶ月の平均改善幅（例）",
  },
  {
    value: "80%",
    label: "債務超過解消率",
    description: "金融機関との再交渉で合意に至った割合（例）",
  },
  {
    value: "100社超",
    label: "相談企業数",
    description: "九州・西日本の伴走実績",
  },
];

const DashboardShowcase = () => {
  return (
    <section className="bg-[#010a1d] py-24 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <ScrollReveal
            variant="fade-up"
            className="relative overflow-hidden rounded-[32px] border border-white/8 bg-gradient-to-b from-[#071a3b] via-[#04122d] to-[#020a1d] p-10 shadow-[0_35px_80px_rgba(2,8,23,0.6)]"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              <span className="rounded-full bg-white/10 px-3 py-1">Impact</span>
              <span className="text-white/70">再現性で語る</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-snug md:text-[2.1rem]">
              「再生の設計図」が整うと、数字と行動が同じ未来を指すコンパスに変わる
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-200/80 md:text-base">
              仮説を語るだけでは反転は起こりません。ZENは実行に耐えるプロセスを作り込み、粗利・資金・人材の波形を同時に整えることで、経営者が迷いなく次のステップを選べる状態を守り抜きます。
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {metricHighlights.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
                >
                  <p className="text-3xl font-black text-cyan-100 md:text-4xl">{metric.value}</p>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-[0.8rem] leading-relaxed text-slate-200/75">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["製造業｜粗利とキャッシュを同時に立て直し", "卸売業｜金融機関との信頼を再構築", "サービス業｜人材活用の設計図を刷新"].map(
                (title) => (
                  <div
                    key={title}
                    className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#062147] via-[#041735] to-[#021024] p-5 text-left"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Case</p>
                    <p className="mt-2 text-sm font-semibold leading-snug text-white">{title}</p>
                  </div>
                )
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={0.1}
            className="relative h-full overflow-hidden rounded-[32px] border border-white/6 bg-gradient-to-br from-[#24165f] via-[#1d1f63] to-[#0c1740] p-8 shadow-[0_35px_80px_rgba(13,5,34,0.65)]"
          >
            <div className="flex items-center justify-between text-sm font-semibold text-white/80">
              <span className="flex items-center gap-2 text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg">🎯</span>
                Dashboard
              </span>
              <div className="flex gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">⚙️</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">⋮</span>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-[#ff8b5b] via-[#f55f96] to-[#8047f2] p-5 text-white shadow-lg">
                <p className="text-sm font-medium text-white/80">Sales Overview</p>
                <p className="mt-3 text-3xl font-bold">$21,300</p>
                <p className="mt-2 text-xs font-semibold text-green-100">▲ 12,5%</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#2a5cf6] via-[#4e46e5] to-[#1a1a5c] p-5 text-white">
                <p className="text-sm font-medium text-white/80">Revenue</p>
                <div className="mt-4 h-24 w-full rounded-xl bg-white/10" />
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#1f2a5f] via-[#1a1a4d] to-[#0c1335] p-5 text-white">
                <p className="text-sm font-medium text-white/70">Traffic Sources</p>
                <ul className="mt-3 space-y-2 text-xs text-white/60">
                  <li className="flex items-center justify-between"><span>Organic Search</span><span>42%</span></li>
                  <li className="flex items-center justify-between"><span>Social Media</span><span>32%</span></li>
                  <li className="flex items-center justify-between"><span>Referral</span><span>18%</span></li>
                  <li className="flex items-center justify-between"><span>Other</span><span>8%</span></li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#3f46f0] via-[#6f5cff] to-[#4623b7] p-5 text-white text-center">
                <p className="text-sm font-medium text-white/80">Conversion Rate</p>
                <div className="mx-auto mt-4 flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-white/30 text-2xl font-bold">
                  4.7%
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#ff8b5b] via-[#f55f96] to-[#8047f2] p-5 text-white">
                <p className="text-sm font-medium text-white/70">Active Users</p>
                <p className="mt-3 text-3xl font-bold">2,358</p>
                <p className="mt-2 text-xs text-white/60">Jan - Dec</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#24a168] via-[#2bc999] to-[#066b4d] p-5 text-white">
                <p className="text-sm font-medium text-white/80">Goal Completion</p>
                <div className="mt-4 h-3 w-full rounded-full bg-white/10">
                  <div className="h-3 w-[76%] rounded-full bg-emerald-300" />
                </div>
                <p className="mt-3 text-3xl font-bold">76%</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
