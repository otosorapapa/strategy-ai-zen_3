import { ArrowRight, CheckCircle2, Flame, Flag, HeartPulse, Sparkle } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA } from "@/lib/ctaVariants";

const journeySteps = [
  {
    stage: "Before",
    label: "数字に追われる日々",
    description:
      "資金繰り表と粗利管理がバラバラで、役員会議は“数字合わせ”で終わる。金融機関との面談が迫るほど、意思決定の軸が揺らいでしまう。",
    emotion: "焦り・孤独感",
  },
  {
    stage: "Turning Point",
    label: "48Hで羅針盤を取得",
    description:
      "AIが粗利・資金・人材の歪みを色分けし、診断士が現場ヒアリングで制約条件を補正。年商5,000万〜15億円規模の経営者が最初に見るべき「次の一手」を一本化。",
    emotion: "状況把握と納得",
  },
  {
    stage: "After",
    label: "意思決定が先手に",
    description:
      "銀行・役員・現場が同じダッシュボードで進捗を確認。週次レビューでアクションが滞留せず、資金調達と利益改善を同じストーリーで語れる。",
    emotion: "安心と再起動",
  },
] as const;

const momentumSignals = [
  {
    icon: HeartPulse,
    label: "金融機関の安心感",
    value: "再交渉継続率 92%",
    helper: "意思決定ボードを共有した企業の平均（過去3年）",
  },
  {
    icon: Flame,
    label: "現場アクション",
    value: "改善起案 2.4倍",
    helper: "週次レビュー導入後の施策提案数の変化（例）",
  },
  {
    icon: Flag,
    label: "再生スピード",
    value: "決裁リードタイム 1/3",
    helper: "48H診断を起点とした意思決定までの平均短縮率",
  },
] as const;

const reassuranceBullets = [
  "紙・Excelのデータでもスタートできる実装設計",
  "金融機関・主要取引先への説明資料を48Hでドラフト",
  "年商5,000万〜15億円に最適化した行動リストと交渉Q&A",
] as const;

const BeforeAfterJourneySection = () => {
  const scrollToContact = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section relative overflow-hidden bg-[#031024] py-24 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(5,132,198,0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">
            Before → After Story
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            年商5,000万〜15億円の経営者が「再生の再現性」を取り戻すまでの感情ジャーニー
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-100/85 md:text-lg">
            私たちは経営者の感情の起伏に寄り添いながら、AIと診断士の伴走で意思決定の孤独を解消します。ビフォー／アフターの物語を描くことで、社内外の共感と合意形成が進みます。
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <ScrollReveal variant="fade-up" className="space-y-6">
            {journeySteps.map((step, index) => (
              <div
                key={step.stage}
                className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-6 text-left shadow-[0_28px_70px_rgba(3,16,36,0.4)]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                  <span>{step.stage}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] text-white/85">感情: {step.emotion}</span>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-sm font-semibold text-white/90 md:text-base">{step.label}</p>
                  <p className="text-sm leading-relaxed text-slate-100/80 md:text-[0.95rem]">{step.description}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -bottom-4 right-6 h-12 w-12 rotate-6 text-cyan-300/30 transition-transform group-hover:translate-x-2"
                  />
                )}
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="flex h-full flex-col gap-6 rounded-[32px] border border-white/15 bg-[#04122d]/80 p-8 shadow-[0_30px_80px_rgba(3,16,36,0.45)]"
          >
            <div className="space-y-3 text-left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                Momentum Signals
              </span>
              <p className="text-2xl font-semibold text-white/90">感情に寄り添うエビデンスで、経営判断に自信が戻る</p>
              <p className="text-sm leading-relaxed text-slate-100/75">
                ZENの伴走企業では、金融機関との信頼回復と現場アクションの増加がセットで進行します。数字と感情の両輪を揃え、再生ストーリーを社内外で語れる状態にします。
              </p>
            </div>
            <div className="grid gap-4 rounded-[24px] border border-white/15 bg-white/5 p-5 text-left">
              {momentumSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#031024]/70 p-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-1 text-slate-100/85">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">{signal.label}</p>
                      <p className="text-xl font-bold text-white">{signal.value}</p>
                      <p className="text-[0.8rem] leading-relaxed text-slate-100/70">{signal.helper}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-3 rounded-[28px] border border-white/15 bg-white/5 p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">Support Checklist</p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-100/80">
                {reassuranceBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button
                type="button"
                variant="cta"
                size="lg"
                className="mt-4 w-full rounded-full text-base font-semibold"
                onClick={scrollToContact}
                data-cta-id={`${PRIMARY_CTA.id}-journey`}
                data-cta-attention="journey-section"
              >
                <span className="flex items-center justify-center gap-2">
                  年商帯にフィットする提案を受け取る
                  <Sparkle className="h-5 w-5" aria-hidden="true" />
                </span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterJourneySection;
