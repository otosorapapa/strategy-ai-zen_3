import { ArrowRight, CircleDashed, Compass, Heart, Sparkles, Workflow } from "lucide-react";

const navigationItems = [
  {
    id: "morse-copy-section",
    label: "Flow Map",
    title: "4段階コピーの全体像",
    description: "「わかる→感じる→動きたくなる→実行できる」の俯瞰図を確認",
    icon: Sparkles,
  },
  {
    id: "why-section",
    label: "Stage 01",
    title: "わかっていること",
    description: "粗利・資金・人材が分断される真因と失速パターンを把握",
    icon: Compass,
  },
  {
    id: "before-after-section",
    label: "Stage 02",
    title: "感じていること",
    description: "経営者の感情ジャーニーと共感のポイントを確認",
    icon: Heart,
  },
  {
    id: "segment-benefits-section",
    label: "Stage 03",
    title: "やりたいこと",
    description: "業態別に次の一手とCTAを設計したカードを見る",
    icon: ArrowRight,
  },
  {
    id: "how-section",
    label: "Stage 04",
    title: "どうしたらよいか",
    description: "AI診断×診断士伴走の具体的な進め方と成果を確認",
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
              モールスコピーで整理した「わかる→感じる→動きたくなる→実行できる」の流れを、スクロールに合わせてたどれるよう並べ替えました。気になるフェーズから即アクセスし、最適なCTAを選択してください。
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
