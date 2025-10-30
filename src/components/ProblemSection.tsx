import { AlertTriangle, BarChart3, CalendarClock, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const painPoints = [
  {
    title: "数字と現場が別々に動く",
    description:
      "粗利とキャッシュの動きが合わない。報告資料は何種類も存在し、意思決定の場に辿り着くまでに熱量が薄れてしまう。",
    signal: "粗利率▲2.5pt／資金残高▲1.2ヶ月（例）",
  },
  {
    title: "生成AIが成果につながらない",
    description:
      "チャットの実験は進むが、現場に渡るのは読み切れない長文。活用の評価指標が定まらず、採択された施策は断片的に終わる。",
    signal: "AI提案の採択率38%→停滞",
  },
  {
    title: "対外説明が後手に回る",
    description:
      "金融機関・主要取引先との面談準備が属人化。資料更新に追われ、交渉と意思決定が常に“事後説明”になる。",
    signal: "面談準備時間+40%／条件交渉の先延ばし",
  },
];

const ProblemSection = () => {
  return (
    <section className="fade-in-section bg-[#04112a] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Why 02｜現場で起きていること
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            設計図が欠けたままでは、努力が点で終わる。判断の軸を一枚に集約し、未来を共有する。
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            勇気や根性だけでは再生は加速しません。市場の揺らぎ、資金の波形、現場の実感を同じキャンバスに載せ、「どこから、どんな順番で」動くのかを揃える仕組みが必要です。生成AIと専門家の視点を束ね、断片的な情報を“未来の設計図”として再構築します。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((pain) => (
            <ScrollReveal
              key={pain.title}
              variant="fade-up"
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/12 bg-white/10 p-6 shadow-[0_25px_60px_rgba(2,8,20,0.45)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-100">
                <AlertTriangle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{pain.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200/90">{pain.description}</p>
              <div className="mt-auto rounded-2xl border border-cyan-300/20 bg-[#0a1f48] p-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                {pain.signal}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <ScrollReveal
            variant="fade-up"
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#093369] via-[#052147] to-[#031124] p-6 shadow-[0_30px_70px_rgba(5,20,45,0.55)]"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <BarChart3 className="h-5 w-5" aria-hidden="true" />
              視点① データ
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
              粗利率、在庫回転、顧客単価、離脱率。生成AIがこれらを横断的に解析し、どこで収益が漏れているかを特定します。
            </p>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#093369] via-[#052147] to-[#031124] p-6 shadow-[0_30px_70px_rgba(5,20,45,0.55)]"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <Users className="h-5 w-5" aria-hidden="true" />
              視点② 現場
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
              診断士が現場の声を丁寧にヒアリング。人や組織の動き、心理的なブレーキを理解し、実行できる形へ翻訳します。
            </p>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#093369] via-[#052147] to-[#031124] p-6 shadow-[0_30px_70px_rgba(5,20,45,0.55)]"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <CalendarClock className="h-5 w-5" aria-hidden="true" />
              視点③ 時間軸
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
              判断が遅れる原因を明確にし、週次のアップデートリズムを再設計。次の危機を待たずに手を打てる状態へ整えます。
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
