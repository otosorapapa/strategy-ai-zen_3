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
    description: "再生支援の現場で磨いた統制設計と寄り添う支援体制",
    icon: ShieldCheck,
  },
  {
    label: "地域金融機関との共創検証",
    description: "九州地銀と意思決定ボードを共同構築し交渉の再現性を検証",
    icon: Building2,
  },
  {
    label: "日経XTECHなど専門メディア掲載",
    description: "AIと管理会計の融合事例として紹介され、公開の場でも評価",
    icon: Newspaper,
  },
];

const proofHighlights = [
  {
    label: "判断の確かさ",
    value: "重要局面で一度で承認される設計",
    note: "経営と金融の確認プロセスを一つに束ね、会議で胸を張れる資料を整備。",
  },
  {
    label: "動き出す速さ",
    value: "交渉準備が一連の流れで完了",
    note: "必要資料と打ち手を先回りで提示し、差し戻しのない段取りを実現。",
  },
  {
    label: "先を読む安心感",
    value: "資金戦略と現場の打ち手が同期",
    note: "監査証憑と将来シナリオを連動させ、資金計画の揺らぎを抑制。",
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
    badge: "核となる背景",
    title: "判断が守りに傾くほど機会が遠のく",
    description:
      "粗利や資金の変化と現場の声が別々に伝わり、会議では数字合わせで時間が過ぎる。気づけば好機が後ろへ流れてしまう。",
    signal: "粗利率の鈍化と運転資金の圧迫が同時進行（例）",
    insight: "報告が点在 → 根拠を揃えるまでに時間を要し、先手を打つ意志が鈍る。",
    icon: AlertTriangle,
  },
  {
    badge: "提供する価値",
    title: "生成AIと診断士で未来の道筋を共創",
    description:
      "業界調査・競合動向・顧客の変化をAIが整理し、診断士が現場条件と重ねて一枚の経営設計図にまとめる。選択肢の優劣が明快になる。",
    signal: "AI提案が会議で採用され、打ち手の比較が即断で進む",
    insight: "仮説と検証指標を同時提示 → 判断の拠り所が揃い、挑戦へ踏み出しやすくなる。",
    icon: AlertTriangle,
  },
  {
    badge: "実現の進め方",
    title: "対外説明と現場実行まで同じ土台で進める",
    description:
      "経営管理アプリとダッシュボードを事業者ごとに調整し、会議メモから交渉資料まで一連で生成。胸を張って伝えられる準備が整う。",
    signal: "準備時間を圧縮し、外部との打ち合わせで質問が先読みできる",
    insight: "判断ログとタスクを一本化 → 行動の遅れを抑え、未来を描く会話が主導できる。",
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
    title: "視界が定まらず判断が守りに偏る",
    metric: "会議後も次の一手が定まらない",
    description:
      "市場の変化が部署ごとに別解釈となり、数字合わせに時間を費やす。先を語る場面で確信が持てず、挑戦が後回しになる。",
  },
  {
    stage: "Intervention",
    title: "生成AIと診断士が未来地図を描く",
    metric: "経営管理ボードを一枚に統合",
    description:
      "業界・顧客・コストを横断分析し、診断士が現場条件を聞き出す。経営管理アプリに筋道を落とし込み、優先順位を即時共有。",
  },
  {
    stage: "After",
    title: "行動と語り口が同じリズムで進む",
    metric: "判断と実行のリードが加速",
    description:
      "外部環境を常時監視し、五年先を見通したシナリオをダッシュボードで伴走。取引先や金融機関にも堂々と未来像を語れる。",
  },
];

const trustSignals = [
  "地域金融機関と意思決定ボードを共同検証",
  "経営会議での設計図レビューを継続支援",
  "福岡発の再生支援案件を多数伴走",
];

const problemQuickSummary = [
  "地域を守る経営者ほど、判断の遅れが信用や挑戦心を奪う。情報が散らばったままでは次の一手を選べない",
  "創和経営コンサルティングは、生成AIと中小企業診断士が市場・財務・現場を束ね、貴社専用の再生ストーリーを描き直す",
  "胸を張って決断できる会議体を整え、社内外の対話を前向きな挑戦へ導く",
];

const problemNextActions = [
  "48時間で粗利・資金・人材のゆがみを色分けし、迷わない議論の起点を共有",
  "AI分析と現場ヒアリングを結んだ意思決定ログで、根拠を揃えた合意形成へつなげる",
  "取引先や社内へ伝える要点と現場タスクを同じ進行表で整え、次の攻め手を素早く提示",
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
            判断を曇らせる停滞を断ち、未来を切り開くための3つの焦点
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            粗利の鈍化や運転資本の目減りを放置すれば、会議の結論は守りに傾き、挑み直す力が失われてしまう。AIの広範な調査と診断士の現場視点を重ね、停滞要因を一枚の判断軸に整理することで、次の会議で堂々と指針を語れる舞台を整える。
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
                      地域を支える経営判断に揺るぎない根拠を
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200/85 md:max-w-xl">
                    行政認定、地域金融機関との共同検証、専門メディアの評価を重ねることで、次の一手を選ぶ経営者の覚悟に確かな裏付けを添えます。
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
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">Board Confidence Lens</p>
                  <p className="text-sm leading-relaxed text-slate-100/90">
                    対外監査や金融審査で問われる証憑の動線を一枚に集約。未来志向の判断過程を記録し、堂々と語れる資料へ仕上げます。
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
                視点転換
              </div>
              <h3 className="text-2xl font-semibold leading-snug md:text-[1.75rem]">
                会議冒頭で経営改善の筋道をそろえる意思決定キャンバス
              </h3>
              <p className="text-sm leading-relaxed text-slate-200/90 md:text-base">
                <span className="text-cyan-200">状況・意図・判断</span>を一枚に束ね、財務と現場の思考速度を揃える。議題はすぐに実行設計へ移り、交渉資料も同じストーリーで更新される。
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/90 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>財務・現場・リスクの三層を同時表示し、議論の土台を共通化。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>視線誘導を設計し、話す順番と考える順番を整えて迷いを減らす。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>要点に象徴アイコンを添え、共通言語として記憶に残す。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>重要指標を色で分離し、判断基準を一目で確認できるようにする。</span>
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
                経営判断の兆し
              </div>
              <h3 className="text-left text-2xl font-semibold leading-snug text-white md:text-[1.75rem]">
                判断が遅れると、現場の信頼と資金繰りの選択肢は瞬く間に狭まります。
              </h3>
              <p className="text-left text-sm leading-relaxed text-slate-200/90 md:text-[0.95rem]">
                私たちは業界動向・競合・顧客のデータを診断士と生成AIで束ね、次の打ち手を描き切る計画づくりを支援します。会議に臨む前に状況を整理し、経営者自身が指揮をとり続けられる状態を整えます。
              </p>
              <ul className="grid gap-3 text-sm text-slate-200/85 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>業界・競合・顧客・コストを多面的に洗い出し、会議前に次の一手を提示する生成AIダッシュボード。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>財務・商談・現場の数字を一画面で同期し、5年先を見越した改善シナリオを即座に描画。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>策定後も診断士が伴走し、補助金の活用も視野に入れて計画とアプリを更新。</span>
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
              <span>視覚と言葉の連動</span>
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
                収益の漏れ、生成AIの停滞、対外説明の遅延は、共通の設計図がないことが原因です。数字と現場を一つの物語にまとめれば、次の手を打つ自信が戻ります。
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">
                実例｜再設計後は粗利+3.2pt／交渉回答スピード▲45%（一例）
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
