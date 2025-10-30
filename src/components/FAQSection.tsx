import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/ctaVariants";
import ScrollReveal from "@/components/ScrollReveal";
import consultationScene from "@/assets/strategy-planning.jpg";
import { HelpCircle, BarChart4, Sparkles, Users } from "lucide-react";

const faqs = [
  {
    question: "費用とトライアルの仕組みは？",
    answer:
      "月額18万円〜（税別）。初月は1ヶ月トライアルとして位置づけ、粗利率・在庫回転・意思決定リードタイムなどの合意指標を週次でレビューします。指標が改善しなければ追加費用なく改善案を再設計し、継続可否をご判断いただけます。",
  },
  {
    question: "導入期間とスケジュールは？",
    answer:
      "Week0-2で現状診断とデータ整備、Week3-6でAIレポートと意思決定ボードを運用開始、Week7-12で施策実行と検証を回します。3ヶ月で判断の前倒しを実感いただき、以降は四半期ごとに戦略レビューを行います。",
  },
  {
    question: "必要な社内体制は？",
    answer:
      "社長と管理部・営業責任者を中心とした3〜5名体制を推奨します。週次レポートとタスクボードは当社で整備し、会議ファシリテーションとAIレポート配信まで伴走するため、専任のDX人材がいなくても運用可能です。",
  },
  {
    question: "データと守秘義務の取り扱いは？",
    answer:
      "NDAを締結のうえ、財務・人事・顧客データは暗号化されたクラウドで保管します。アクセス権限は役割ベースで管理し、AIモデルは匿名化データのみ学習。契約終了時は速やかにデータを削除します。",
  },
  {
    question: "生成AIの精度と監査体制は？",
    answer:
      "AIが生成したシナリオは因果グラフと根拠データを必ず添付し、中小企業診断士がダブルチェックします。異常値や前提のズレは自動アラートで検知し、監査ログに保存。社長が納得できる判断材料のみを会議に上げます。",
  },
  {
    question: "社内で成果を共有する仕組みは？",
    answer:
      "週次レポートと意思決定ボードにコメント機能を持たせ、経営陣と現場リーダーが同じ画面で根拠と判断を確認できます。導入初月は会議のファシリテーションまで伴走し、経営方針を自信を持って伝えられる言葉と資料の整備を支援します。",
  },
];

const quickFacts = [
  {
    icon: BarChart4,
    label: "導入3ヶ月の平均改善",
    value: "+12.8%",
    description: "粗利率・在庫回転・意思決定スピードの平均改善幅。",
  },
  {
    icon: Users,
    label: "経営会議の参加体制",
    value: "3〜5名",
    description: "社長・管理部・営業責任者が中心。現場レポートは伴走サポート。",
  },
  {
    icon: Sparkles,
    label: "意思決定ボード稼働まで",
    value: "6週",
    description: "Week3からAIレポートを稼働させ、Week6で定例会議へ本格導入。",
  },
];

const FAQSection = () => {
  const scrollToSection = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="faq" className="fade-in-section bg-slate-50 py-16 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 text-center lg:text-left">
              <ScrollReveal as="p" variant="fade" className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.38em] text-primary">
                <HelpCircle className="h-4 w-4" /> FAQ
              </ScrollReveal>
              <ScrollReveal as="h2" variant="fade-up" delay={60} className="text-balance text-3xl font-bold md:text-4xl">
                経営判断のスピードを上げるための疑問にすべて回答します
              </ScrollReveal>
              <ScrollReveal as="p" variant="fade-up" delay={120} className="text-base leading-relaxed text-muted-foreground">
                コスト・導入体制・守秘義務・AIの精度といった、社長が意思決定前に確認したい論点を1ページに集約しました。疑問点はその場でチャット相談いただけます。
              </ScrollReveal>

              <ScrollReveal as="div" variant="fade-up" delay={180} className="grid gap-4 sm:grid-cols-3">
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-4 text-left shadow-sm"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{fact.label}</p>
                      <p className="text-2xl font-bold text-foreground">{fact.value}</p>
                      <p className="text-xs text-muted-foreground">{fact.description}</p>
                    </div>
                  );
                })}
              </ScrollReveal>
            </div>

            <ScrollReveal
              as="figure"
              variant="fade-left"
              delay={100}
              className="relative isolate overflow-hidden rounded-[28px] border border-primary/20 bg-white shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)]"
            >
              <img
                src={consultationScene}
                alt="経営会議でAIレポートをもとに意思決定するシーン"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-primary/20" aria-hidden="true" />
              <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 p-4 text-left backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Before → After</p>
                <p className="mt-1 text-sm text-slate-700">
                  AIレポートの因果グラフを共有しながら、経営陣が同じ画面でKPIと次アクションを即決。議事録は自動生成され、翌朝には全社共有されます。
                </p>
              </figcaption>
            </ScrollReveal>
          </div>

          <ScrollReveal
            as="div"
            variant="fade-up"
            delay={220}
            className="mt-12 rounded-3xl border border-border bg-card shadow-lg"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            variant="fade-up"
            delay={280}
            id="consultation-cta"
            className="mt-12 space-y-5 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white to-primary/5 p-8 text-center shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)]"
          >
            <h3 className="text-2xl font-bold text-foreground">三つのオファーから最適なスタートを選べます</h3>
            <p className="text-sm text-muted-foreground">
              {PRIMARY_CTA.label}・{SECONDARY_CTA.label}・資料ダウンロードの3種類をご用意しました。貴社の意思決定スピードに合わせてお選びください。
            </p>
            <ul className="mx-auto grid max-w-3xl gap-3 text-left text-xs text-muted-foreground sm:grid-cols-3">
              <li className="rounded-2xl border border-primary/20 bg-white/80 p-3">
                <p className="font-semibold text-primary">経営課題ヒアリング</p>
                <p className="mt-1 leading-relaxed">現状のKPI・ボトルネックを整理し、AI導入の適合性を30分で診断。</p>
              </li>
              <li className="rounded-2xl border border-primary/20 bg-white/80 p-3">
                <p className="font-semibold text-primary">ダッシュボード体験</p>
                <p className="mt-1 leading-relaxed">自社データをダミー連携した画面で、意思決定ボードの動きを確認。</p>
              </li>
              <li className="rounded-2xl border border-primary/20 bg-white/80 p-3">
                <p className="font-semibold text-primary">契約・運用サポート</p>
                <p className="mt-1 leading-relaxed">NDA締結・決裁フロー整備まで当社が伴走。初月から運用負荷を最小化。</p>
              </li>
            </ul>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button variant="outline" onClick={scrollToSection("offer-heading")}>
                オファーを比較する
              </Button>
              <Button variant="cta" onClick={scrollToSection("cta-section")}>
                {PRIMARY_CTA.label}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              相談日時や送付希望の資料はフォーム備考欄にご記載ください。翌営業日までに代表または担当者からご連絡します。
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
