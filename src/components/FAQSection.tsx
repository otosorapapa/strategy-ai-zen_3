import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "無料相談では何が分かりますか？",
    answer:
      "現在の数字や課題を伺い、生成AIで初期分析したシグナルと共に、優先仮説メモを速やかにお届けします。再生ロードマップの入口となる論点を整理できます。",
  },
  {
    question: "データが整っていなくても大丈夫ですか？",
    answer:
      "はい。最低限必要なデータ項目をリスト化し、整備まで伴走します。Excelや紙の資料からの入力でも対応可能です。",
  },
  {
    question: "金融機関との交渉はどこまで支援してくれますか？",
    answer:
      "交渉方針の設計、資料作成、面談同席までサポートします。交渉のログと合意事項もAIで整理し、次回以降の対話に備えます。",
  },
  {
    question: "社内にAIやDXの担当者がいません。",
    answer:
      "生成AIの運用ガイドと教育プログラムをご用意しているので、専任担当がいなくても運用開始できます。導入初期は密度の高い伴走で、再現できる状態まで引き上げます。",
  },
  {
    question: "費用と期間の目安は？",
    answer:
      "ご支援内容に応じて個別にお見積もりします。初期診断から実行伴走までの流れを明確にし、合意した指標の改善状況を段階的に可視化しながら進めます。",
  },
];

const FAQSection = () => {
  return (
    <section className="fade-in-section bg-white py-20" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-4xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#f2f7ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl font-bold leading-tight text-[#0b1f3f] md:text-4xl">
            よくあるご質問
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            経営再生のパートナーを選ぶうえで気になる点をまとめました。個別の事情については無料相談でお気軽にお尋ねください。
          </p>
        </ScrollReveal>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="overflow-hidden rounded-3xl border border-[#0b1f3f]/12 bg-[#f6f9ff] p-4"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[#0b1f3f]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#1e3359]/75">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
