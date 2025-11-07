import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  ShieldCheck,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";

const comparisonRows = [
  {
    label: "判断スピード",
    others: "会議のたびに資料を作り直し、方向性が固まるまで長期化",
    zen: "48時間で課題仮説を共有し、週次レビューで判断を一気に前進",
  },
  {
    label: "生成AIの活用",
    others: "試行で止まり、提案内容が現場に落ちるまでに時間がかかる",
    zen: "診断士が生成AIで分析した行動案を現場会議にそのまま接続",
  },
  {
    label: "金融機関への説明",
    others: "資料更新が担当者任せで、追加質問に後追い対応",
    zen: "銀行や役員と同じ指標を共有し、堂々と将来像を語れる状態を用意",
  },
  {
    label: "導入後の伴走",
    others: "報告書中心で、現場に根づく前に支援が終了",
    zen: "診断士チームが行動計画の実行を毎週ともに確認し、次の一手を提案",
  },
];

const switchHighlights = [
  {
    title: "導入準備期間",
    value: "最短2週間",
    helper: "初回相談からデータ連携、ZENスキャンまでを短期で整備",
  },
  {
    title: "初期費用",
    value: "0円",
    helper: "成果連動型の料金設計で、資金負担を抑えながら開始",
  },
  {
    title: "移行サポート",
    value: "専任PM配置",
    helper: "診断士とPMが現行体制を整理し、関係者調整と資料作成まで対応",
  },
];

const ComparisonSection = () => {
  return (
    <section className="fade-in-section bg-white py-24 text-[#0b1f3f]">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#f2f7ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            他社顧問との比較
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            変化の波を先取りし、意思決定の質と速さを磨き上げるためのご提案
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            予測困難な環境でも迷わず舵を切れるよう、生成AIと診断士が練り上げた計画づくりと伴走体制を比較形式でまとめました。自社にとっての次の一手を安心して選べる材料をご確認ください。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-14 overflow-hidden rounded-[36px] border border-[#0b1f3f]/10 bg-[#f6f9ff] shadow-[0_30px_70px_rgba(11,31,63,0.12)]"
        >
          <div className="grid gap-px bg-[#0b1f3f]/10 text-left text-sm leading-relaxed text-[#1a335c]/85">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-white/70 text-xs font-semibold uppercase tracking-[0.26em] text-[#0b1f3f]/60">
              <span className="px-6 py-4">比較観点</span>
              <span className="px-6 py-4">一般的な顧問</span>
              <span className="px-6 py-4">ZEN Re-Design</span>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-[1.1fr_1fr_1fr] bg-white">
                <div className="px-6 py-5 font-semibold text-[#0b1f3f]">{row.label}</div>
                <div className="flex items-start gap-3 px-6 py-5 text-[#1e3359]/75">
                  <CircleDashed className="mt-1 h-4 w-4 text-[#a0aec0]" aria-hidden="true" />
                  <span>{row.others}</span>
                </div>
                <div className="flex items-start gap-3 px-6 py-5 bg-[#ecf6ff] text-[#0b1f3f]">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                  <span>{row.zen}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 grid gap-6 rounded-[32px] border border-[#0b1f3f]/10 bg-white p-8 shadow-[0_30px_70px_rgba(7,24,57,0.14)] md:grid-cols-3"
        >
          {switchHighlights.map((item) => (
            <div key={item.title} className="flex h-full flex-col gap-3 rounded-[24px] border border-[#0584c6]/10 bg-[#f2f7ff] p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">判断を後押しする仕組み</span>
                <ShieldCheck className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
              </div>
              <p className="text-lg font-semibold text-[#0b1f3f]">{item.title}</p>
              <p className="text-3xl font-bold text-[#0584c6]">{item.value}</p>
              <p className="text-sm leading-relaxed text-[#1e3359]/80">{item.helper}</p>
              <div className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                胸を張れる移行計画を個別設計
              </div>
            </div>
          ))}
        </ScrollReveal>

        <SectionMicroCta
          eyebrow="Micro CTA"
          title="現在の伴走体制との違いを、個別比較レポートでご案内"
          description="契約状況や月次の進め方を伺い、切替時の手順・運営体制・想定リスクを一枚に整理して共有します。取引先や金融機関へ自信を持って説明できる準備を整えましょう。"
          ctaId="comparison-support"
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
