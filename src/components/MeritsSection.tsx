import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight, Compass, Gauge, ShieldCheck, Sparkle } from "lucide-react";

const merits = [
  {
    title: "判断の迅速化",
    description: "経営指標と現場の声を一つのボードに集約し、次の会議で即断できる材料を提供します。",
    icon: Gauge,
  },
  {
    title: "先見性の向上",
    description: "外部データと自社データをAIが照合し、需要変動やコスト圧力の兆しを早期に可視化します。",
    icon: Compass,
  },
  {
    title: "行動への自信",
    description: "実行ロードマップと担当者別タスクを明確化。社内外へ堂々と提示できる根拠資料を同梱します。",
    icon: ShieldCheck,
  },
  {
    title: "事業者ごとの最適化",
    description: "業種や組織規模に合わせたKPIと会議テンプレートで、社内の運用負荷を抑えて導入できます。",
    icon: Sparkle,
  },
  {
    title: "持続的成長",
    description: "週次レビューと改善ログを蓄積し、次の投資判断や補助金活用にもつながる知見を残します。",
    icon: ArrowUpRight,
  },
];

const MeritsSection = () => {
  return (
    <section className="section-spacing bg-[#020d21] text-white">
      <div className="layout-shell">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Merits
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            伴走することで得られる5つのメリット
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
            経営判断に迷いが生まれる局面でも、数字とストーリーの両面から自信を持って舵を取れる状態を守ります。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {merits.map(({ title, description, icon: Icon }) => (
            <ScrollReveal
              key={title}
              variant="fade-up"
              className="flex h-full flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 text-left text-sm leading-relaxed text-slate-100/85 shadow-[0_22px_60px_rgba(4,18,45,0.45)]"
            >
              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
              </div>
              <p>{description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeritsSection;
