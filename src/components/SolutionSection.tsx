import { BrainCircuit, FileSpreadsheet, Map, PanelRightDashed, ShieldCheck, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="fade-in-section bg-white py-20 text-[#0b1f3f]">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#0b1f3f]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            How｜再生の設計図を描く方法
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            生成AIと中小企業診断士が共創し、判断が止まらない「再生デザインスタジオ」を運用
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            最初の2週間でAIが財務指標・市場トレンド・競合動向を横断解析し、複数の回復シナリオを抽出。診断士が現場ヒアリングとプロセスマップを描き、実行条件を棚卸しします。両者が同じダッシュボードで議論することで、意思決定までのリードタイムを従来の3分の1に圧縮し、机上の空論ではない“再生の設計図”を共同で編み上げます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {howPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                variant="fade-up"
                className="flex h-full flex-col gap-4 rounded-3xl border border-[#0b1f3f]/12 bg-gradient-to-br from-[#f2f7ff] via-white to-[#e7f5ff] p-6 shadow-[0_25px_60px_rgba(6,21,48,0.12)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-[#0b1f3f]">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-[#1e3359]/75">{pillar.description}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[36px] border border-[#0b1f3f]/10 bg-[#04112a] p-8 text-white shadow-[0_35px_90px_rgba(3,14,32,0.55)]"
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
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="space-y-5 rounded-[32px] border border-[#0b1f3f]/10 bg-white p-8 shadow-[0_25px_60px_rgba(6,21,48,0.12)]"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/70">
              再生ロードマップの運用イメージ
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-[#1e3359]/80">
              {workflowSteps.map((step) => (
                <li key={step.title} className="rounded-2xl border border-[#0584c6]/20 bg-[#f4fbff] p-4 shadow-sm">
                  <p className="font-semibold text-[#0b1f3f]">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#1e3359]/75">{step.detail}</p>
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
