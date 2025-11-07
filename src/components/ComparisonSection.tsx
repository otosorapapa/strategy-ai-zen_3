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
    label: "経営判断までの流れ",
    others: "会議のたびに資料を作り直し、結論が出るまで数週間停滞",
    zen: "48時間で仮説を共有し、週次の見直しで判断の迷いを削減",
  },
  {
    label: "データと現場のつながり",
    others: "試行で止まり、現場に提案が届かず効果検証も遅れる",
    zen: "AIによる得点と診断士の聞き取りで次の行動を即日提示",
  },
  {
    label: "金融機関・関係者への共有",
    others: "資料更新が人任せで、質問対応に追われる",
    zen: "銀行と経営陣が同じ指標をいつでも見られる画面を標準提供",
  },
  {
    label: "計画実行後の支え",
    others: "書類納品が中心で、現場に根づく前にフォローが途切れる",
    zen: "診断士が週次の打合せと交渉記録まで伴走し、前向きな実行を継続",
  },
];

const switchHighlights = [
  {
    title: "導入リードタイム",
    value: "最短2週間",
    helper: "初回相談からデータ接続、現状スキャンまでを一気通貫で伴走",
  },
  {
    title: "初期費用",
    value: "0円",
    helper: "成果連動と月額の組み合わせで資金の不安を抑えた構成",
  },
  {
    title: "移行サポート",
    value: "専任PM配置",
    helper: "既存顧問からの引き継ぎや関係者調整を丁寧に整理",
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
            激しく変わる環境でも、次の一手を誇りを持って選べる体制へ
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            先を読む判断力を高めたい経営者のために、現状の顧問体制との違いと切替の道筋を整理しました。ZEN Re-Designは、中小企業診断士と生成AIが連携した経営改善・事業再生の専任チームです。調査・分析からアプリ構築、計画策定、補助金の活用支援まで一体で支え、迷いの少ない意思決定を実現します。
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
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">切替ハードルを下げる仕組み</span>
                <ShieldCheck className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
              </div>
              <p className="text-lg font-semibold text-[#0b1f3f]">{item.title}</p>
              <p className="text-3xl font-bold text-[#0584c6]">{item.value}</p>
              <p className="text-sm leading-relaxed text-[#1e3359]/80">{item.helper}</p>
              <div className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                移行計画を個別設計
              </div>
            </div>
          ))}
        </ScrollReveal>

        <SectionMicroCta
          eyebrow="Micro CTA"
          title="経営改善への切替を、個別比較レポートで可視化"
          description="契約状況と課題感を伺い、切替時の工程・費用・想定リスクを整理したシートを作成。補助金活用の道筋も含め、胸を張って選べる判断材料をご用意します。"
          ctaId="comparison-support"
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
