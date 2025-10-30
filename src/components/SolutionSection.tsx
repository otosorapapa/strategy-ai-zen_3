import {
  BrainCircuit,
  Building2,
  FileSpreadsheet,
  Gauge,
  Map,
  PanelRightDashed,
  ShieldCheck,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import solutionIllustration from "@/assets/solution-illustration.jpg";

const howPillars = [
  {
    icon: BrainCircuit,
    title: "生成AIが未来を読む",
    description:
      "財務データ、販売ログ、業界トレンド、マクロ指標を横断分析。粗利とキャッシュの歪みを“何が・いつ・どこで”起きているかまで細分化します。",
  },
  {
    icon: Users,
    title: "専門家が現場で翻訳",
    description:
      "中小企業診断士が現場ヒアリングとワークショップを実施。人と組織のリアリティを加味し、実行可能な優先シナリオにまとめます。",
  },
  {
    icon: Map,
    title: "再生ロードマップを設計",
    description:
      "投資・撤退・強化すべき領域を週次で可視化。金融機関への説明ストーリーや現場タスクまで連動させ、実行力を底上げします。",
  },
];

const impactHighlights = [
  {
    label: "経営判断の短縮",
    value: "-38%",
    detail: "会議から意思決定までのリードタイム短縮（導入企業中央値）",
  },
  {
    label: "粗利インパクト",
    value: "+3.4pt",
    detail: "重点施策の粗利率押し上げ効果（3カ月平均）",
  },
  {
    label: "金融機関連携",
    value: "96%",
    detail: "レポート整備の満足度（金融機関ヒアリングによる）",
  },
];

const trustSignals = [
  "福岡県認定支援機関",
  "DX認定企業",
  "地域金融機関連携",
  "日経クロステック掲載",
];

const workflowSteps = [
  {
    title: "STEP 0｜初期診断",
    detail:
      "48時間で粗利・キャッシュ・人材のボトルネックを抽出し、生成AIが描いた歪みのヒートマップを提示します。",
  },
  {
    title: "STEP 1｜再生キャンバス設計",
    detail:
      "AIが生成したシナリオを専門家が検証。意思決定キャンバスに優先仮説とリスクシナリオを整理し、週次会議で共有。",
  },
  {
    title: "STEP 2｜実行＆金融連携",
    detail:
      "施策の進捗とキャッシュ波形を同時にトラッキング。金融機関向け資料、モニタリングレポート、現場タスクまで一気通貫で整備します。",
  },
];

const SolutionSection = () => {
  return (
    <section className="fade-in-section bg-white py-24 text-[#0b1f3f]">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#0b1f3f]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            How｜再生の設計図を描く方法
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-[2.75rem] md:leading-[1.2]">
            生成AIと中小企業診断士が共創し、判断が止まらない「再生デザインスタジオ」を運用
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            最初の2週間でAIが財務指標・市場トレンド・競合動向を横断解析し、複数の回復シナリオを抽出。診断士が現場ヒアリングとプロセスマップを描き、実行条件を棚卸しします。両者が同じダッシュボードで議論することで、意思決定までのリードタイムを従来の3分の1に圧縮し、机上の空論ではない“再生の設計図”を共同で編み上げます。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mx-auto mt-8 flex flex-col items-center justify-between gap-6 rounded-[32px] border border-[#0b1f3f]/10 bg-gradient-to-r from-[#f3f7ff] via-white to-[#ebf4ff] px-8 py-10 shadow-[0_30px_90px_rgba(8,27,59,0.12)] md:flex-row"
        >
          <div className="max-w-xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
              <Gauge className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
              Impact Snapshot
            </div>
            <p className="text-lg font-semibold text-[#0b1f3f]">
              「財務 × 現場 × キャッシュ」の三位一体管理で、経営判断の納得感を数値で裏付け。
            </p>
            <p className="text-sm leading-relaxed text-[#1e3359]/80">
              週次の再生スタンドアップで、AIが提示する仮説を診断士が根拠付け。各部門の動きと金融機関への説明を一つのキャンバスで同期し、次の一手を迷わず選べる状態を実現します。
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">
              {trustSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-[#0b1f3f]/15 bg-white/70 px-3 py-1">
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <figure className="relative w-full max-w-sm overflow-hidden rounded-[28px] border border-white/60 shadow-[0_25px_70px_rgba(5,24,55,0.14)]">
            <img
              src={solutionIllustration}
              alt="生成AIダッシュボードと専門家が並んで意思決定を設計する様子"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-[#0b1f3f]/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-white/90">
              Dual Coding Insight
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 grid gap-4 rounded-[28px] border border-[#0b1f3f]/10 bg-white/80 p-6 shadow-[0_30px_80px_rgba(6,21,48,0.08)] md:grid-cols-3"
        >
          {impactHighlights.map((highlight) => (
            <div key={highlight.label} className="flex flex-col gap-2 rounded-2xl bg-gradient-to-br from-[#f7fbff] via-white to-[#eef6ff] p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
                {highlight.label}
              </span>
              <span className="text-3xl font-bold text-[#0584c6]">{highlight.value}</span>
              <p className="text-sm leading-relaxed text-[#1e3359]/75">{highlight.detail}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {howPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                variant="fade-up"
                className="flex h-full flex-col gap-5 rounded-3xl border border-[#0b1f3f]/12 bg-gradient-to-br from-[#f2f7ff] via-white to-[#e7f5ff] p-7 shadow-[0_28px_70px_rgba(6,21,48,0.12)]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-[#0b1f3f]">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-[#1e3359]/75">{pillar.description}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[36px] border border-[#0b1f3f]/10 bg-[#04112a] p-8 text-white shadow-[0_35px_95px_rgba(3,14,32,0.55)]"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <PanelRightDashed className="h-4 w-4" aria-hidden="true" />
              AI Strategy Workflow
            </div>
            <p className="text-sm leading-relaxed text-slate-100/90">
              週次の「再生スタンドアップ」で、AIが提示するシナリオに専門家が追記。粗利・キャッシュ・人の動きを同じボードでレビューし、判断の先送りを断ちます。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-100/85">
              <li className="flex items-start gap-2">
                <FileSpreadsheet className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                粗利・キャッシュの分解表をAIが更新、差異要因を色分け表示
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                リスク指標が閾値を超えると即アラート、証跡ログも自動保存
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                各部門のアクションプランと金融機関説明資料を同時に更新
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                金融・取引先との共有チャネルに直結し、ステークホルダーの合意形成を高速化
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[32px] border border-[#0b1f3f]/10 bg-white p-8 shadow-[0_28px_70px_rgba(6,21,48,0.12)]"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/70">
              再生ロードマップの運用イメージ
            </div>
            <ul className="relative space-y-5 text-sm leading-relaxed text-[#1e3359]/80">
              <span
                className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#0584c6]/40 via-[#0584c6]/10 to-transparent"
                aria-hidden="true"
              />
              {workflowSteps.map((step) => (
                <li key={step.title} className="relative rounded-2xl border border-[#0584c6]/20 bg-[#f4fbff] p-5 shadow-sm">
                  <span className="absolute -left-5 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#0584c6] text-sm font-bold text-white shadow-[0_10px_25px_rgba(5,132,198,0.35)]">
                    {step.title.split("｜")[0].replace("STEP", "S")}
                  </span>
                  <p className="font-semibold text-[#0b1f3f]">{step.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#1e3359]/75">{step.detail}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
