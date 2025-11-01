import { ArrowRight, CircleDashed, Compass, Layers, Workflow } from "lucide-react";

const navigationItems = [
  {
    id: "why-section",
    label: "Why",
    title: "なぜ停滞するのか",
    description: "資金・粗利・現場の分断要因と失速パターンを3分で把握",
    icon: Compass,
  },
  {
    id: "what-section",
    label: "What",
    title: "何を提供するのか",
    description: "AI×診断士が描く“再生の設計図”と価値を確認",
    icon: Layers,
  },
  {
    id: "how-section",
    label: "How",
    title: "どう進めるのか",
    description: "週次ワークフローと実行伴走の具体的な進め方を確認",
    icon: Workflow,
  },
];

const SectionNavigationMap = () => {
  return (
    <nav aria-label="主要セクションへのショートカット" className="bg-[#031024] py-10 text-white">
      <div className="layout-shell">
        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_rgba(3,16,36,0.45)] backdrop-blur">
          <div className="flex flex-col gap-3 text-sm text-slate-100/85 lg:flex-row lg:items-center lg:justify-between">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              <CircleDashed className="h-4 w-4" aria-hidden="true" />
              Navigation Map
            </div>
            <p className="max-w-3xl text-[0.95rem] leading-relaxed">
              「Why→What→How」の順に読み進めることで、再生の全体像と次のアクションを迷わず把握できます。気になるセクションから即座にアクセスしてください。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {navigationItems.map(({ id, label, title, description, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-[#0b1f3f]/60 p-5 transition hover:border-cyan-300/60 hover:bg-[#0e2a52]"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </div>
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-slate-100/80">{description}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80 group-hover:text-cyan-100">
                  詳細を見る
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SectionNavigationMap;
