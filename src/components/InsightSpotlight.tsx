import { Lightbulb, Quote, Sparkles, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rootCauseNarrative = [
  {
    title: "1. 変化の兆しを捉えきれない",
    description:
      "仕入れの変動、価格競争、離職リスク。データは揃っているのに、タイムラインがバラバラで波形を合わせられない。気づいたときには資金繰りが限界近くまで削られています。",
  },
  {
    title: "2. 判断が遅れ、説明が追いつかない",
    description:
      "経営会議の大半が“現状確認”に費やされ、意思決定の根拠を共有する時間が取れない。金融機関・主要取引先への説明資料は毎回ゼロから作り直しになってしまう。",
  },
  {
    title: "3. 再起への筋道が描けない",
    description:
      "改善案はあるものの、数字と現場の物語がつながらない。誰もが腹落ちする“再生の設計図”がないまま、日常業務に追われて時間だけが進む。",
  },
];

const hopeStatements = [
  "AIが市場データと社内ログを照合し、粗利・キャッシュのズレを即座に可視化",
  "診断士が現場の声を汲み取り、行動につながるストーリーへ翻訳",
  "経営者が次の一手を自信を持って語れるよう、必要な資料とロードマップを同時に整備",
];

const InsightSpotlight = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-white py-20 text-[#0b1f3f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,21,48,0.06),_transparent_65%)]" aria-hidden="true" />
      <div className="container relative mx-auto max-w-5xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#0b1f3f]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            揺らぎの正体
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            経営の灯が揺らぐのは、努力不足ではなく「未来を読む設計図」が欠けているから
          </h2>
          <p className="mx-auto max-w-3xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            市場が揺れ、資金が逼迫し、現場の士気も落ちかけているとき。必要なのは“頑張れ”という精神論ではなく、未来の見取り図です。データと経験知を結びつける設計図がなければ、どれだけ情熱があっても経営は空回りします。だからこそ私たちは、経営者がもう一度舵を握り、胸を張って判断を伝えられる環境を作るために伴走を続けています。
          </p>
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
