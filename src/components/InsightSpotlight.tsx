import { Lightbulb, Quote, Sparkles, TrendingUp } from "lucide-react";
import causeDiagram from "@/assets/problem-infographic.svg";
import ScrollReveal from "@/components/ScrollReveal";

const rootCauseNarrative = [
  {
    id: "01",
    title: "兆しはあっても座標軸がない",
    cause:
      "原材料が高騰し、人材が流出しても、数字は月次報告の羅列で終わる。経営会議で議論すべき座標軸が揃わず、意思決定が感覚頼みになります。",
    effect: "結果 → 先の資金波形を読む時間が消え、打ち手の優先順位が曖昧に。",
  },
  {
    id: "02",
    title: "説明資料づくりで力が尽きる",
    cause:
      "金融機関向けの資料や社内説明資料を毎回ゼロから作成。根拠データの突合に時間を割かれ、戦略ストーリーを磨く余白が奪われます。",
    effect: "結果 → 説明責任を果たすだけで手いっぱいになり、次の一手が常に後手に回ります。",
  },
  {
    id: "03",
    title: "誰もが納得する設計図がない",
    cause:
      "現場、管理部門、金融機関が見ている指標と時間軸がバラバラ。部門間で未来像を共有できず、改善施策の連動性が生まれません。",
    effect: "結果 → 採るべき投資と撤退の線引きが曖昧なまま、再起のスピードが止まってしまいます。",
  },
];

const proofPoints = [
  {
    label: "初期診断リードタイム",
    value: "72時間",
    caption: "金融・現場データをAIで整流化し、一次仮説を3営業日以内に提示",
  },
  {
    label: "金融機関再提出率",
    value: "▲68%",
    caption: "交渉資料の再提出回数を平均3回→1回へ圧縮",
  },
  {
    label: "経営会議の合意形成",
    value: "+18pt",
    caption: "意思決定指標を共通言語化し、議題決着までの時間を短縮",
  },
];

const hopeStatements = [
  "生成AIが市場データと社内ログを照合し、粗利と資金のギャップを即座に色分け",
  "診断士が現場ヒアリングで制約条件を棚卸し、優先仮説とリスクを言語化",
  "再生ロードマップと交渉資料を同時に整備し、次の会議で語れる物語を提供",
];

const InsightSpotlight = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-white py-20 text-[#0b1f3f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,21,48,0.06),_transparent_65%)]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <ScrollReveal variant="fade-up" className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#0b1f3f]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
                Why｜なぜ再生が止まるのか
              </span>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                経営の灯が揺らぐのは、情熱が足りないからではなく「未来を読む設計図」が欠けているから
              </h2>
            </div>
            <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
              <p>
                私たちが向き合ってきた再生案件の多くで、価格戦略の調整や人員再配置の根拠が欠けていました。月次の数字づくりに追われ、3ヶ月先の資金波形を読む時間が奪われる。努力ではなく、未来を読み解く設計図が足りないのです。
              </p>
              <p>
                創和が存在する理由は、経営者がもう一度自分の判断を信じられる環境を整えること。データの正確さと現場の会話を往復させ、どこから着手すれば事業が息を吹き返すのかを明確にする。そのために、生成AIの洞察と診断士の経験知を重ね合わせます。
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#0b1f3f]/10 bg-white/80 p-4 shadow-[0_18px_40px_rgba(6,21,48,0.08)]"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0b1f3f]/60">{item.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-[#0584c6]">{item.value}</dd>
                  <p className="mt-1 text-xs leading-relaxed text-[#1e3359]/70">{item.caption}</p>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={120}
            as="figure"
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-[#0b1f3f]/10 bg-gradient-to-br from-white/60 via-white to-[#eef5ff] p-6 shadow-[0_30px_80px_rgba(6,21,48,0.12)]"
          >
            <div className="absolute -left-5 top-6 hidden rotate-[-6deg] rounded-full bg-[#0584c6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-lg sm:block">
              Before ⇄ After
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-br from-[#0b1f3f] to-[#093067] text-white">
                <div className="flex h-full items-center justify-between px-6 text-xs uppercase tracking-[0.28em]">
                  <span>現状</span>
                  <span>未来</span>
                </div>
              </div>
              <img
                src={causeDiagram}
                alt="課題から解決までの論理構造を示すフレームワーク図"
                className="block w-full scale-105 pt-16"
                loading="lazy"
              />
              <figcaption className="space-y-3 border-t border-[#0b1f3f]/10 bg-[#f4f7ff] p-5">
                <p className="text-sm font-semibold text-[#0b1f3f]">
                  「兆候 → 原因 → 再生オペレーション」を一枚で同期させ、社内外の意思決定を同じリズムに整えます。
                </p>
                <p className="text-xs leading-relaxed text-[#1e3359]/70">
                  図解は経営陣レビューと金融機関ヒアリングを同時に進めるための共通言語として機能。議論が拡散せず、合意形成までの時間を削減します。
                </p>
              </figcaption>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative mt-16 rounded-[40px] border border-[#0b1f3f]/10 bg-white/80 p-8 shadow-[0_25px_65px_rgba(6,21,48,0.08)]">
          <div className="mx-auto max-w-2xl text-center">
            <ScrollReveal variant="fade-up" className="inline-flex items-center gap-2 rounded-full bg-[#0b1f3f] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white">
              根本原因のトリアージ
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80} className="mt-6 text-lg font-semibold text-[#0b1f3f]">
              症状・原因・経営指標の因果を可視化し、経営陣と金融機関が同じ設計図を共有する
            </ScrollReveal>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {rootCauseNarrative.map((item) => (
              <ScrollReveal
                as="li"
                key={item.id}
                variant="fade-up"
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-[#0b1f3f]/12 bg-white/90 p-6 shadow-[0_18px_48px_rgba(6,21,48,0.08)] md:pl-8 md:[&:not(:first-child)]:before:absolute md:[&:not(:first-child)]:before:-left-4 md:[&:not(:first-child)]:before:top-1/2 md:[&:not(:first-child)]:before:h-px md:[&:not(:first-child)]:before:w-6 md:[&:not(:first-child)]:before:-translate-y-1/2 md:[&:not(:first-child)]:before:bg-gradient-to-r md:[&:not(:first-child)]:before:from-transparent md:[&:not(:first-child)]:before:via-[#0584c6]/40 md:[&:not(:first-child)]:before:to-[#0584c6]/0"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0584c6]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#0584c6]">
                  Signal {item.id}
                </span>
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0b1f3f]/8 text-[#0b1f3f]">
                    <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.cause}</p>
                    <div className="rounded-2xl bg-[#0584c6]/5 p-3 text-sm font-medium text-[#0b1f3f]">
                      {item.effect}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <div className="mt-16 space-y-6 rounded-[36px] border border-[#0b1f3f]/10 bg-gradient-to-br from-[#f1f6ff] via-white to-[#e9f5ff] p-8">
          <div className="flex flex-col gap-4 text-left md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
              <Quote className="h-5 w-5" aria-hidden="true" />
              共に描く希望
            </div>
            <p className="text-sm text-[#1e3359]/70">
              「再生の設計図」が整うと、判断の根拠と行動が一体化し、次の会議を待たずに動けるようになります。
            </p>
          </div>
          <ul className="grid gap-4 text-sm leading-relaxed text-[#1e3359]/80 md:grid-cols-3">
            {hopeStatements.map((statement) => (
              <li key={statement} className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-white/70 p-4">
                <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                <span>{statement}</span>
              </li>
            ))}
          </ul>
          <div className="grid gap-4 text-sm font-semibold text-[#0b1f3f] md:grid-cols-[2fr_1fr] md:items-center">
            <div className="rounded-3xl border border-[#0584c6]/30 bg-white/80 p-6 text-left text-sm text-[#1e3359]/80">
              <p>
                KPIダッシュボード、資金繰りシミュレーション、交渉資料のドラフトを同時並行で提示。経営陣の意思決定と現場実装を分断させません。
              </p>
            </div>
            <div className="rounded-3xl border border-[#0584c6]/40 bg-[#0584c6]/10 p-6 text-center">
              <TrendingUp className="mx-auto mb-3 h-5 w-5 text-[#0584c6]" aria-hidden="true" />
              48時間の初期診断で「歪みの見取り図」を提示し、2週目から再生シナリオと優先施策の比較検証を開始します。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSpotlight;
