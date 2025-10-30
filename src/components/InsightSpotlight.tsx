import { Lightbulb, Quote, Sparkles, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rootCauseNarrative = [
  {
    title: "1. 兆しはあっても座標軸がない",
    description:
      "原材料が高騰し、人材が流出しても、数字が月次報告でしか現れず意思決定の座標軸が揃わない。結果、先の資金波形を読む時間が消えていきます。",
  },
  {
    title: "2. 説明資料づくりで力が尽きる",
    description:
      "経営会議は現状確認で終わり、金融機関への資料は毎回ゼロから作成。判断を支える物語が整わず、次の一手が常に後手に回ります。",
  },
  {
    title: "3. 誰もが納得する設計図がない",
    description:
      "改善策はあるのに、数字・現場・人材が同じ未来を向かない。設計図の空白が、再起のスピードを止めてしまいます。",
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
      <div className="container relative mx-auto max-w-5xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#0b1f3f]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            志｜再起を阻む真因
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            経営の灯が揺らぐのは、情熱が足りないからではなく「未来を読む設計図」が欠けているから
          </h2>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            <p>
              私たちが向き合ってきた再生案件の多くで、価格戦略の調整や人員再配置の根拠が欠けていました。月次の数字づくりに追われ、3ヶ月先の資金波形を読む時間が奪われる。努力ではなく、未来を読み解く設計図が足りないのです。
            </p>
            <p>
              創和が存在する理由は、経営者がもう一度自分の判断を信じられる環境を整えること。データの正確さと現場の会話を往復させ、どこから着手すれば事業が息を吹き返すのかを明確にする。そのために、生成AIの洞察と診断士の経験知を重ね合わせます。
            </p>
            <p>
              数字の根拠と現場の納得感が揃った瞬間、経営者としての矜持は自然と立ち上がります。先を読む視座を取り戻し、語る言葉に重みを宿す──それが私たちの使命です。
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rootCauseNarrative.map((item) => (
            <ScrollReveal
              key={item.title}
              variant="fade-up"
              className="flex h-full flex-col gap-3 rounded-3xl border border-[#0b1f3f]/12 bg-white/90 p-6 shadow-[0_25px_60px_rgba(6,21,48,0.08)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b1f3f]/8 text-[#0b1f3f]">
                <Lightbulb className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 space-y-6 rounded-[36px] border border-[#0b1f3f]/10 bg-gradient-to-br from-[#f1f6ff] via-white to-[#e9f5ff] p-8">
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
          <div className="rounded-3xl border border-[#0584c6]/30 bg-[#0584c6]/10 p-6 text-center text-sm font-semibold text-[#0b1f3f]">
            <TrendingUp className="mx-auto mb-3 h-5 w-5 text-[#0584c6]" aria-hidden="true" />
            48時間の初期診断で「歪みの見取り図」を提示し、2週目から再生シナリオと優先施策の比較検証を開始します。
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSpotlight;
