import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bolt,
  BrainCircuit,
  Building2,
  CalendarClock,
  CheckCircle2,
  Handshake,
  Newspaper,
  Palette,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import problemInfographic from "@/assets/problem-infographic.svg";
import financialAnalysis from "@/assets/financial-analysis.jpg";
import executiveStrategyMeeting from "@/assets/executive-strategy-meeting.jpg";
import insightBlueprintFlow from "@/assets/insight-blueprint-flow.svg";

type PainPoint = {
  badge: string;
  description: string;
  icon: LucideIcon;
  insight: string;
  signal: string;
  title: string;
};

type AuthorityBadge = {
  description: string;
  icon: LucideIcon;
  label: string;
};

type CausalityPillar = {
  description: string;
  focus: string;
  icon: LucideIcon;
  metric: string;
  title: string;
};

const authorityStack: AuthorityBadge[] = [
  {
    label: "中小企業庁 認定支援機関",
    description: "再生支援で鍛えた統制設計と、経営者の覚悟に寄り添う支援体制",
    icon: ShieldCheck,
  },
  {
    label: "地域金融機関との共創検証",
    description: "九州地銀と判断フレームを共同構築し、信頼される交渉の筋道を実証",
    icon: Building2,
  },
  {
    label: "日経XTECHなど専門メディア掲載",
    description: "AIと管理会計の融合事例として紹介され、公開の場での評価も獲得",
    icon: Newspaper,
  },
];

const proofHighlights = [
  {
    label: "目指す姿",
    value: "地域と仲間を守り抜く決断力",
    note: "行政認定と外部評価を一つに束ね、対話のたびに誇りを支える物語を提示。",
  },
  {
    label: "提供する基盤",
    value: "調査と生成AIで描く改善計画",
    note: "業界・顧客・資金の変化を同時に捉え、次の一手を迷いなく選べる速度を確保。",
  },
  {
    label: "実行のしくみ",
    value: "カスタム管理アプリと伴走",
    note: "ダッシュボードで進捗と資金の連動を可視化し、先を読む会議を継続。",
  },
];

const causalityPillars: CausalityPillar[] = [
  {
    focus: "背景理解",
    title: "数字の裏にある動きをすぐ把握",
    description: "業界・競合・顧客の調査結果と粗利・資金の推移をAIが結び付け、会議前に状況の意味を整理できます。",
    metric: "業界×競合の信号を同時表示",
    icon: BrainCircuit,
  },
  {
    focus: "計画設計",
    title: "5年先を見据えた筋道を描く",
    description: "外部環境の変化を常時監視し、生成AIと診断士が5か年の経営改善シナリオを段階ごとに提示します。",
    metric: "改善シナリオを段階設計",
    icon: Bolt,
  },
  {
    focus: "共有力",
    title: "判断材料を一画面に束ねる",
    description: "経営管理アプリとダッシュボードを事業者ごとにカスタマイズし、現場と経営が同じ土台で議論できます。",
    metric: "会議資料を一枚で共有",
    icon: Palette,
  },
  {
    focus: "実行推進",
    title: "現場の動きまで伴走",
    description: "優先タスクと代替案を通知し、週次レビューで進捗と数値のつながりを確認。迷いなく行動へ移れます。",
    metric: "行動タスクを自動通知",
    icon: Sparkles,
  },
  {
    focus: "信頼獲得",
    title: "説明責任を揃えた証跡を残す",
    description: "会議の根拠資料を即座に整理し、金融機関や補助金申請にも使える形で共有。説明の主導権を握れます。",
    metric: "資金支援の資料まで連携",
    icon: Handshake,
  },
];

const painPoints: PainPoint[] = [
  {
    badge: "症状 01",
    title: "数字と現場が別々に動く",
    description:
      "粗利とキャッシュの波形が噛み合わず、資料ごとに前提が異なる。経営会議に到達する頃には、判断の熱量が薄れてしまう。",
    signal: "粗利率が沈み、運転資金の余白が目減り（例）",
    insight: "報告経路が分断 → 合意形成までのリードタイムが長期化。現場は「どの数字を信じるか」で議論が止まる。",
    icon: AlertTriangle,
  },
  {
    badge: "症状 02",
    title: "生成AIが成果につながらない",
    description:
      "PoCは進んでも、現場に届くのは読み切れないテキスト。評価指標が曖昧で、採択された施策が断片的に終わる。",
    signal: "AI提案が選ばれず、ROIの検証も進まない",
    insight: "AI活用のKPIが欠如 → 投資判断が感覚的になり、改善の優先順位が定まらない。",
    icon: AlertTriangle,
  },
  {
    badge: "症状 03",
    title: "対外説明が後手に回る",
    description:
      "金融機関・主要取引先との面談準備が属人化し、更新資料の整合に追われる。説明は常に“事後報告”で、交渉が後ろ倒しに。",
    signal: "準備工数が膨らみ、追加質問が絶えない",
    insight: "事前シナリオが不足 → 交渉リードタイムが長期化し、資金繰りの選択肢が目減りする。",
    icon: AlertTriangle,
  },
];

const executiveSignals = [
  {
    label: "収益と資金の乖離",
    value: "粗利率低下 × 運転資金の圧迫",
    note: "粗利率低下と運転資金減少が同時進行。",
  },
  {
    label: "AI活用の定着度",
    value: "採択率が伸びない",
    note: "PoC止まりで現場のKPIに接続できない。",
  },
  {
    label: "対外説明のタイムラグ",
    value: "準備時間が増え続ける",
    note: "資料更新が増え、交渉の主導権を失いがち。",
  },
];

const narrativeFlow = [
  {
    stage: "Before",
    title: "情報が散在し、意思決定が遅延",
    metric: "資料更新が雪だるま式に増加",
    description:
      "部門ごとに数字の定義が異なり、経営会議は“数字合わせ”で終わる。現場には優先順位が降りてこない。",
  },
  {
    stage: "Intervention",
    title: "生成AIと専門家で設計図化",
    metric: "判断会議が定期運用へ",
    description:
      "AIが財務と市場を横断解析し、診断士が現場ヒアリングで実行条件を整理。単一の意思決定ボードに情報を統合。",
  },
  {
    stage: "After",
    title: "判断軸が揃い、行動が先手に",
    metric: "決裁リードタイムが大幅短縮",
    description:
      "シナリオごとのアクションプランが共有され、部門横断で同じ未来像に沿って動ける。金融機関への説明も一貫。",
  },
];

const trustSignals = [
  "地域金融機関と意思決定ボードを共同検証",
  "経営会議での設計図レビューを継続支援",
  "福岡発の再生支援案件を多数伴走",
];

const problemQuickSummary = [
  "先を読む指針が欠けると、粗利・資金・現場の判断が分断され、会議が守りに傾いてしまう",
  "生成AIが兆候を洗い出し、中小企業診断士が現場条件を重ねれば、未来の筋道が一枚のボードで揃う",
  "根拠を整えたストーリーを共有できれば、取引先や社内メンバーとの対話が攻めの姿勢に変わる",
];

const problemNextActions = [
  "48時間で粗利・資金・人材のゆがみを色分けし、議論の起点を明確にする",
  "AI分析と現場ヒアリングを結んだ意思決定ログで、合意までの時間を縮める",
  "金融機関や取引先へ伝える要点と現場タスクを同じ進行表で整え、先の一手を打つ",
];

const ProblemSection = () => {
  return (
    <section id="why-section" className="fade-in-section bg-[#04112a] py-24 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Reality｜直面する停滞サイクル
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            判断を曇らせる停滞を断ち、未来を先取りするための3つの焦点
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            粗利率の鈍化や運転資本の目減りを見落とすと、会議の結論が守りに傾き、挑み直す力が失われてしまう。AIヒアリングと診断士の現場視点で浮かび上がった停滞要因を整理し、次の会議で胸を張って語れる判断軸へつなげてほしい。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 grid gap-6 rounded-[28px] border border-white/12 bg-white/5 p-6 text-left shadow-[0_28px_75px_rgba(4,18,40,0.45)] backdrop-blur"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/85">
                30秒サマリー
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200/85">
                {problemQuickSummary.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-[24px] border border-cyan-300/30 bg-cyan-500/10 p-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                次のアクション
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-100/85">
                {problemNextActions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-6">
          <ScrollReveal
            variant="fade-up"
            className="rounded-[1.6rem] border border-white/12 bg-white/5 p-6 shadow-[0_30px_80px_rgba(4,18,40,0.55)] backdrop-blur"
          >
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.67fr)_minmax(0,0.33fr)] xl:items-stretch">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-left md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                      信頼の裏付け層
                    </span>
                    <h3 className="text-xl font-semibold text-white md:text-[1.45rem]">
                      地域を導く決断に胸を張れる根拠を
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200/85 md:max-w-xl">
                    行政認定、地域金融機関との共同検証、専門メディアの評価を重ね、会社を率いる決断が社員と地域の期待に応える証拠を備えました。
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {proofHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="flex h-full flex-col justify-between rounded-2xl border border-cyan-300/20 bg-[#0a1f48]/55 p-4 shadow-[0_18px_45px_rgba(4,20,48,0.45)]"
                    >
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
                        {highlight.label}
                      </span>
                      <p className="mt-3 text-lg font-semibold text-cyan-100">{highlight.value}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-200/75">{highlight.note}</p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {authorityStack.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.label}
                        className="flex h-full flex-col gap-3 rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-[0_22px_50px_rgba(5,28,68,0.35)]"
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-100">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-white">{badge.label}</p>
                          <p className="text-xs leading-relaxed text-slate-200/85">{badge.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <figure className="relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[1.6rem] border border-cyan-300/20 bg-black/20">
                <img
                  src={executiveStrategyMeeting}
                  alt="意思決定会議で財務の証跡と投資判断を確認する経営陣"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1e3f]/70 via-transparent to-[#030916]/85" />
                <figcaption className="absolute bottom-4 left-4 right-4 space-y-2 rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">Decision Confidence Lens</p>
                  <p className="text-sm leading-relaxed text-slate-100/90">
                    対外監査や金融審査で問われる証憑の動線を一枚に集約。未来志向の判断過程を記録し、堂々と語れる資料へ磨き上げます。
                  </p>
                </figcaption>
              </figure>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="overflow-hidden rounded-[1.8rem] border border-cyan-300/20 bg-gradient-to-br from-[#0b2346] via-[#071633] to-[#030d21] p-7 shadow-[0_32px_90px_rgba(3,16,36,0.62)]"
          >
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.68fr)_minmax(0,0.32fr)] xl:items-start">
              <div className="space-y-6">
                <div className="flex flex-col gap-3 text-left md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                      経営判断フレーム
                    </span>
                    <h3 className="text-xl font-semibold text-white md:text-[1.45rem]">
                      未来を見越して動くための5つの判断軸
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200/85 md:max-w-xl">
                    経営改善をやり切る力を高めるために、専門家の伴走と生成AIが抽出した五つの視点を一つの導線に集約。業界調査や現場ヒアリングで得た数値と物語を結び、胸を張って選べる次の一手を示します。
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {causalityPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.focus}
                        className="group relative flex h-full flex-col gap-4 rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-white/8 via-white/4 to-white/[0.05] p-5 shadow-[0_26px_70px_rgba(4,22,56,0.45)] transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-cyan-100">
                            {pillar.focus}
                          </span>
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-100">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        <h4 className="text-base font-semibold text-white">{pillar.title}</h4>
                        <p className="text-sm leading-relaxed text-slate-200/85">{pillar.description}</p>
                        <span className="mt-auto inline-flex w-max items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/12 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          {pillar.metric}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <figure className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-cyan-300/20 bg-[#091d3d]/70 p-6">
                <div className="flex items-center justify-between gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/75">
                  <span>Blueprint Signal</span>
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-cyan-100/90">因果マッピング</span>
                </div>
                <img
                  src={insightBlueprintFlow}
                  alt="因果関係の流れを視覚化した意思決定ブループリント"
                  className="mt-6 w-full max-w-[320px] self-center object-contain"
                  loading="lazy"
                />
                <figcaption className="mt-6 space-y-3 text-sm leading-relaxed text-slate-200/85">
                  <p>
                    KPIとリスクの結び付きを矢印で示し、判断を左右する指標を一目で確認。経営会議で話す順番まで揃い、迷いなく進められます。
                  </p>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Board Ready｜ストーリー化した証拠で合意形成を速める</p>
                </figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#0b2347] via-[#06152f] to-[#030b1d] p-8 shadow-[0_28px_70px_rgba(3,14,34,0.55)]"
        >
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <figure className="relative h-full w-full overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src={financialAnalysis}
                alt="経営ダッシュボードと会議室で指標を共有し意思決定する経営チーム"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/45 px-4 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-white/85 backdrop-blur">
                Dual Coding Canvas
              </figcaption>
            </figure>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Pattern Interrupt
              </div>
              <h3 className="text-2xl font-semibold leading-snug md:text-[1.75rem]">
                資金繰りシナリオを会議冒頭で共有できる意思決定キャンバス
              </h3>
              <p className="text-sm leading-relaxed text-slate-200/90 md:text-base">
                <span className="text-cyan-200">状況・意図・判断</span>を一枚に揃え、財務と現場の思考速度を同期させる。議題は即座に実行設計へ移り、交渉資料も同じストーリーで更新される。
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
                下記のシグナルが同時に表れている企業では、意思決定会議のリードタイムが倍近くまで伸びがちです。早期に設計図を可視化し、判断の土台を揃えることが重要です。
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
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
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

      <SectionMicroCta
        variant="dark"
        eyebrow="Micro CTA"
        title="48時間で決断の地図を描き直す経営診断"
        description="変化の波を先読みし、社員や取引先からの信頼を保ちたい経営者のための集中セッション。業界・競合・顧客の情報を生成AIと中小企業診断士が統合し、守るべき資源と攻めるべき打ち手を整理します。自社専用に組み立てた管理アプリと次回会議に使える要約メモをお渡しし、確信を持って次の手を示せます。"
        ctaId="problem-insights"
      />
    </section>
  );
};

export default ProblemSection;
