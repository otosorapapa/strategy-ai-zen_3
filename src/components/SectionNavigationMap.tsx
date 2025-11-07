import { ArrowRight, CircleDashed, Compass, Layers, Workflow } from "lucide-react";

const navigationItems = [
  {
    id: "why-section",
    label: "背景",
    title: "停滞を断ち切る理由を共有",
    description:
      "資金・粗利・現場のどこで歪みが生まれているのかを明らかにし、意思決定の質を高める必然性を整理",
    icon: Compass,
  },
  {
    id: "what-section",
    label: "提供価値",
    title: "専門家×生成AIの成果物を確認",
    description:
      "経営改善計画、カスタム管理アプリ、ダッシュボードがどのように判断スピードと先読み力を支えるかを提示",
    icon: Layers,
  },
  {
    id: "how-section",
    label: "進め方",
    title: "未来に備える段取りを描写",
    description:
      "48時間診断から伴走フェーズまでの進め方を通じ、堂々と舵を取れる状態をどう確立するかを解説",
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
              「背景→提供価値→進め方」の順に読み進めることで、なぜ変革が必要なのか、何を受け取れるのか、どう進めれば先を読めるのかが一気に掴めます。経営者が自信をもって判断できる流れを、そのままページ構成に落とし込んでいます。
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
