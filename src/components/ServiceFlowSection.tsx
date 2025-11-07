import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, ClipboardCheck, GaugeCircle, ListChecks, Settings2 } from "lucide-react";

const serviceSteps = [
  {
    title: "診断",
    description: "45分のヒアリングで現状と目指す姿を共有。必要データと関係者を整理します。",
    icon: GaugeCircle,
  },
  {
    title: "課題特定",
    description: "売上・資金繰り・人材の指標をAIが可視化し、診断士が優先課題とリスクをコメント。",
    icon: ListChecks,
  },
  {
    title: "シナリオ立案",
    description: "改善仮説を複数案で提示し、金融機関説明用の根拠と実行ロードマップを整備します。",
    icon: ClipboardCheck,
  },
  {
    title: "ダッシュボード導入",
    description: "現場と役員が共有できる管理画面を構築。指標更新とアラート設計も支援。",
    icon: Settings2,
  },
  {
    title: "実行支援",
    description: "週次レビューで進捗を確認し、金融機関対応や補助金申請も伴走します。",
    icon: ArrowRight,
  },
];

const ServiceFlowSection = () => {
  return (
    <section id="how-section" className="section-spacing bg-gradient-to-b from-[#010713] via-[#04152c] to-[#010713] text-white">
      <div className="layout-shell">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Service Flow
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            診断から実行支援まで、5つのステップで伴走
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-100/80 md:text-lg">
            48時間で現状把握を完了し、その後は週次レビューで行動をアップデート。スマホでも読みやすいUIで、いつでも進捗を確認できます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal
            variant="fade-up"
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(4,18,45,0.45)]"
          >
            <ol className="grid gap-5 text-left">
              {serviceSteps.map(({ title, description, icon: Icon }, index) => (
                <li
                  key={title}
                  className="flex flex-col gap-3 rounded-[24px] border border-white/15 bg-[#0a1d3b]/70 p-5 text-sm leading-relaxed text-slate-100/85 md:flex-row md:items-center md:gap-5"
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-start">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-lg font-semibold text-cyan-100">
                      {index + 1}
                    </span>
                    <Icon className="hidden h-6 w-6 text-cyan-200 md:block" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 md:flex-1">
                    <div className="flex items-center gap-3 text-white">
                      <Icon className="h-5 w-5 text-cyan-200 md:hidden" aria-hidden="true" />
                      <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
                    </div>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={0.1}
            className="space-y-5 rounded-[32px] border border-white/10 bg-white/5 p-6 text-left text-sm leading-relaxed text-slate-100/85 shadow-[0_24px_70px_rgba(4,18,45,0.35)]"
          >
            <h3 className="text-lg font-semibold text-white md:text-xl">伴走で得られる安心ポイント</h3>
            <ul className="space-y-3">
              {[
                "初回45分の相談後、24時間以内に準備いただきたい資料とテンプレートを共有",
                "48時間診断の結果はスマホ対応のダッシュボードとPDFでお届け",
                "週次レビューでは議事録と行動リストをその場で更新",
                "金融機関・自治体への提出資料はZENチームがチェック",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-2xl border border-cyan-300/30 bg-cyan-500/10 p-4 text-sm text-cyan-100">
              すべてのステップで「今やること」と「誰が担当するか」を明確にし、社内外の関係者が同じ情報を共有できるよう設計しています。
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceFlowSection;
