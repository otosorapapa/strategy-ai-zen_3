import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import problemInfographic from "@/assets/problem-infographic.svg";
import strategyPlanning from "@/assets/strategy-planning.jpg";

type PainPoint = {
  badge: string;
  description: string;
  icon: LucideIcon;
  insight: string;
  signal: string;
  title: string;
};

const painPoints: PainPoint[] = [
  {
    badge: "症状 01",
    title: "数字と現場が別々に動く",
    description:
      "粗利とキャッシュの波形が噛み合わず、資料ごとに前提が異なる。経営会議に到達する頃には、判断の熱量が薄れてしまう。",
    signal: "粗利率▲2.5pt｜運転資金カバー▲1.2ヶ月（例）",
    insight: "報告経路が分断 → 合意形成まで平均7日遅延。現場は「どの数字を信じるか」で議論が止まる。",
    icon: AlertTriangle,
  },
  {
    badge: "症状 02",
    title: "生成AIが成果につながらない",
    description:
      "PoCは進んでも、現場に届くのは読み切れないテキスト。評価指標が曖昧で、採択された施策が断片的に終わる。",
    signal: "AI提案の採択率38%｜ROI評価は未実装",
    insight: "AI活用のKPIが欠如 → 投資判断が感覚的になり、改善の優先順位が定まらない。",
    icon: AlertTriangle,
  },
  {
    badge: "症状 03",
    title: "対外説明が後手に回る",
    description:
      "金融機関・主要取引先との面談準備が属人化し、更新資料の整合に追われる。説明は常に“事後報告”で、交渉が後ろ倒しに。",
    signal: "面談準備時間+40%｜金融機関の追加質問が2倍",
    insight: "事前シナリオが不足 → 交渉リードタイムが長期化し、資金繰りの選択肢が目減りする。",
    icon: AlertTriangle,
  },
];

const executiveSignals = [
  {
    label: "収益と資金の乖離",
    value: "▲2.5pt × ▲1.2ヶ月",
    note: "粗利率低下と運転資金減少が同時進行。",
  },
  {
    label: "AI活用の定着度",
    value: "採択率38%",
    note: "PoC止まりで現場のKPIに接続できない。",
  },
  {
    label: "対外説明のタイムラグ",
    value: "+40%",
    note: "資料更新が増え、交渉の主導権を失いがち。",
  },
];

const narrativeFlow = [
  {
    stage: "Before",
    title: "情報が散在し、意思決定が遅延",
    metric: "資料更新 12本/月",
    description:
      "部門ごとに数字の定義が異なり、経営会議は“数字合わせ”で終わる。現場には優先順位が降りてこない。",
  },
  {
    stage: "Intervention",
    title: "生成AIと専門家で設計図化",
    metric: "判断会議 週次化",
    description:
      "AIが財務と市場を横断解析し、診断士が現場ヒアリングで実行条件を整理。単一の意思決定ボードに情報を統合。",
  },
  {
    stage: "After",
    title: "判断軸が揃い、行動が先手に",
    metric: "決裁リードタイム 1/3",
    description:
      "シナリオごとのアクションプランが共有され、部門横断で同じ未来像に沿って動ける。金融機関への説明も一貫。",
  },
];

const trustSignals = [
  "中小企業庁 認定支援機関",
  "再生・成長計画支援 42社",
  "DX投資回収診断 共同監修",
];

const ProblemSection = () => {
  return (
    <section className="fade-in-section bg-[#04112a] py-24 text-white">
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

        <ScrollReveal
          variant="fade-up"
          className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#0b2347] via-[#06152f] to-[#030b1d] p-8 shadow-[0_28px_70px_rgba(3,14,34,0.55)]"
        >
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <figure className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src={strategyPlanning}
                alt="経営会議で経営指標とアクションプランを共有しながら議論する様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/80 backdrop-blur">
                Visual Anchor
              </figcaption>
            </figure>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Pattern Interrupt
              </div>
              <h3 className="text-2xl font-semibold leading-snug md:text-[1.75rem]">
                「次の一手」がひと目で伝わるコンテキストを、会議冒頭で共有できていますか？
              </h3>
              <p className="text-sm leading-relaxed text-slate-200/90 md:text-base">
                読み切れないレポートではなく、<span className="text-cyan-200">状況・意図・判断</span>が同期した1枚を提示することで、経営陣と現場の思考速度を揃えます。図解とナラティブを並走させることで理解の負荷を下げ、議論は「どのように実行するか」へ早々に移行します。
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/90 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>Dual Coding｜財務・現場・リスクの3層を一画面で可視化。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>Gaze Cueing｜視線誘導で議論の順序を固定し、迷いを減らす。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>Picture Superiority｜キーメッセージに象徴アイコンを添え記憶に残す。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>Isolation Effect｜重要指標を色面で分離し、判断基準を強調。</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <ScrollReveal
            variant="fade-up"
            className="flex h-full flex-col justify-between gap-6 rounded-[2rem] border border-white/12 bg-white/5 p-8 shadow-[0_35px_80px_rgba(5,20,45,0.55)]"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Executive Signal
              </div>
              <h3 className="text-left text-2xl font-semibold leading-snug text-white md:text-[1.75rem]">
                数字・現場・資金のズレは、放置すると資金繰りの選択肢を確実に削ります。
              </h3>
              <p className="text-left text-sm leading-relaxed text-slate-200/90 md:text-[0.95rem]">
                下記のシグナルが同時に表れている企業では、意思決定会議のリードタイムが平均で1.8倍に伸びています。早期に設計図を可視化し、判断の土台を揃えることが重要です。
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/85 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>現場ヒアリングで抽出したリードタイムのボトルネックを即座に数値化。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>財務モデルと商談パイプラインを連携させ、意思決定の基準を統一。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>資金調達シナリオと投資配分を併記し、納得度の高い判断を支援。</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {executiveSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="flex flex-col rounded-2xl border border-cyan-300/20 bg-[#0a1f48]/60 p-4"
                >
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                    {signal.label}
                  </span>
                  <span className="mt-3 text-xl font-semibold text-cyan-100">
                    {signal.value}
                  </span>
                  <span className="mt-2 text-xs leading-relaxed text-slate-200/80">
                    {signal.note}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-cyan-100/90"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-cyan-200" aria-hidden="true" />
                  {signal}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            as="figure"
            variant="fade-up"
            className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#0b264f] via-[#061632] to-[#010b1d] p-8 shadow-[0_35px_80px_rgba(1,11,29,0.55)]"
          >
            <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
              <span>Dual Coding</span>
              <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-[0.65rem] text-cyan-100">
                課題マップ（要約）
              </span>
            </div>
            <img
              src={problemInfographic}
              alt="収益低下・AI停滞・交渉遅延の関係性を示した課題マップ"
              className="mt-6 w-full max-w-md self-center object-contain"
              loading="lazy"
            />
            <figcaption className="mt-6 space-y-3 text-[0.9rem] leading-relaxed text-slate-200/85">
              <p>
                収益の漏れ・AI活用の停滞・対外説明の遅延は、同じ根にある「判断の設計図不在」が引き起こす連鎖です。視線誘導の矢印が示すとおり、数字と現場の分断が資金繰りの選択肢を削っています。
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                Proof Point｜再設計後は粗利+3.2pt／交渉回答スピード▲45%（例）
              </p>
            </figcaption>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {painPoints.map((pain) => (
            <ScrollReveal
              key={pain.title}
              variant="fade-up"
              className="flex h-full flex-col gap-5 rounded-[1.8rem] border border-white/12 bg-gradient-to-br from-white/7 via-white/4 to-white/[0.02] p-6 shadow-[0_30px_70px_rgba(2,8,20,0.45)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                  {pain.badge}
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-100">
                  <pain.icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{pain.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200/90">{pain.description}</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-[#0a1f48]/70 p-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-cyan-200/70">
                  経営指標シグナル
                </span>
                <p className="mt-2 text-sm font-semibold text-cyan-100">{pain.signal}</p>
              </div>
              <div className="mt-auto space-y-3 rounded-2xl border border-white/12 bg-gradient-to-br from-[#081c3b]/90 via-[#06162f]/90 to-[#030d1f]/90 p-4">
                <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  因果の洞察
                </div>
                <p className="text-sm leading-relaxed text-slate-200/85">{pain.insight}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          variant="fade-up"
          className="mt-16 rounded-[2rem] border border-cyan-300/20 bg-[#071a39]/80 p-8 shadow-[0_35px_80px_rgba(1,10,24,0.55)]"
        >
          <div className="flex flex-col gap-3 text-left md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
                Narrative Visualization
              </span>
              <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                Before→介入→Afterを一枚で可視化し、全員が同じ未来を描ける状態へ。
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/80 md:max-w-sm">
              設計図の再構築は、課題の分解と優先順位付けを同時に行います。矢印の通り、ストーリーに沿って視線を誘導することで、役員会でも即座に理解が進みます。
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {narrativeFlow.map((step, index) => (
              <div
                key={step.stage}
                className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/12 bg-gradient-to-br from-white/8 via-white/4 to-white/[0.02] p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                      0{index + 1}
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
                      {step.stage}
                    </span>
                  </div>
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {step.metric}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                <p className="text-sm leading-relaxed text-slate-200/85">{step.description}</p>
                {index < narrativeFlow.length - 1 && (
                  <div className="mt-4 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                    Next
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                )}
                {index < narrativeFlow.length - 1 && (
                  <span
                    className="pointer-events-none absolute right-[-3rem] top-1/2 hidden h-px w-12 translate-y-[-50%] bg-gradient-to-r from-cyan-300/40 via-cyan-200/20 to-transparent md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-[#06142c]/80 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm leading-relaxed text-slate-200/85 md:max-w-2xl">
                3ステップの設計図は、経営会議のアジェンダと連動したダッシュボードとして提供。部署別アクション、資金手当て、外部説明資料を同じ更新サイクルで管理するため、意思決定の“前後関係”が途切れません。
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Board Ready Package
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ScrollReveal
            variant="fade-up"
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#093369] via-[#052147] to-[#031124] p-6 shadow-[0_35px_80px_rgba(5,20,45,0.55)]"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <BarChart3 className="h-5 w-5" aria-hidden="true" />
              視点① データ
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90">
              粗利率、在庫回転、顧客単価、離脱率。生成AIがこれらを横断解析し、どこで収益が漏れているかを特定します。
            </p>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#093369] via-[#052147] to-[#031124] p-6 shadow-[0_35px_80px_rgba(5,20,45,0.55)]"
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
            className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#093369] via-[#052147] to-[#031124] p-6 shadow-[0_35px_80px_rgba(5,20,45,0.55)]"
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
