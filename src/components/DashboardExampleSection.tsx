import dashboardPreviewImage from "@/assets/dashboard-preview.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const dashboardHighlights = [
  "粗利・資金・人材のスコアを色分けし、優先順が直感的に把握できる",
  "金融機関共有用のKPIスナップショットをワンクリックでPDF出力",
  "週次レビューの議事録とアクションリストが同じ画面で更新される",
];

const DashboardExampleSection = () => {
  return (
    <section className="section-spacing bg-[#010a1d] text-white">
      <div className="layout-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal
            variant="fade-up"
            className="overflow-hidden rounded-[32px] border border-white/10 bg-[#041226]/70 shadow-[0_28px_70px_rgba(4,18,45,0.5)]"
          >
            <img
              src={dashboardPreviewImage}
              alt="ZENが提供する経営ダッシュボードのプレビュー"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1} className="space-y-5 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              Dashboard Example
            </span>
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.3rem]">
              ダッシュボードで「次の一手」と「根拠資料」を同時に管理
            </h2>
            <p className="text-base leading-relaxed text-slate-100/80 md:text-lg">
              伴走チームが構築するカスタムダッシュボードは、スマホでも見やすいレイアウト。社内共有だけでなく、金融機関やパートナーへの説明にもそのまま活用できます。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-100/85 md:text-base">
              {dashboardHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DashboardExampleSection;
