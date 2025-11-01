import {
  ArrowRight,
  CheckCircle2,
  CircleDashed,
  ShieldCheck,
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

const comparisonRows = [
  {
    label: "意思決定までのリードタイム",
    others: "会議ごとに資料を作り直し、判断まで3〜4週間を要する",
    zen: "48時間で仮説共有→週次レビュー運用で平均リードタイム1/3",
  },
  {
    label: "AI活用の浸透",
    others: "PoC止まりで提案が現場に届かず、ROI検証が遅延",
    zen: "AIスコア×診断士ヒアリングで週次アクションに直結",
  },
  {
    label: "金融機関への説明",
    others: "資料の更新が属人化し、質問対応で後手に回る",
    zen: "銀行・役員が同じ指標を閲覧できるダッシュボードを標準装備",
  },
  {
    label: "導入後の伴走",
    others: "レポート納品中心で現場定着までサポート外",
    zen: "診断士チームが週次ファシリテーションと交渉議事を伴走",
  },
];

const switchHighlights = [
  {
    title: "導入リードタイム",
    value: "最短2週間",
    helper: "初回相談→データ接続→ZENスキャンで現状把握を完了",
  },
  {
    title: "初期費用",
    value: "0円",
    helper: "成功報酬・月額のハイブリッドでキャッシュ負担を最小化",
  },
  {
    title: "移行サポート",
    value: "専任PM配置",
    helper: "既存顧問からの引き継ぎ資料作成とステークホルダー調整を代行",
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
            「従来顧問」の限界を超えるために、ZENが設計した差分と切替サポート
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            現在の顧問契約やスポット支援から切り替える際の懸念を、比較表と導入支援策で明確に解消。判断に必要な情報と移行のステップを、ひと目で把握できるよう整理しました。
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
      </div>
    </section>
  );
};

export default ComparisonSection;
