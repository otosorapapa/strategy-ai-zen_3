import { ComponentType, SVGProps } from "react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { TERTIARY_CTA } from "@/lib/ctaVariants";

import { ArrowRight, CalendarClock, FileText, Sparkles, Target } from "lucide-react";

type MidPageCta = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullet: string;
  action: {
    label: string;
    type: "scroll" | "link";
    targetId?: string;
    href?: string;
    ctaId: string;
  };
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  highlight: string;
};

const ctaCards: MidPageCta[] = [
  {
    id: "diagnostic",
    eyebrow: "短時間ヒアリング",
    title: "15分の対話で資金の耐性と次の一手を仮診断",
    description:
      "急変する状況でも落ち着いて判断できるよう、生成AIが直近の資金推移と支払い予定を整理し、診断士が優先度を分かりやすく提示します。",
    bullet: "銀行や社内共有に使える資金耐性メモと優先アクションを当日送付",
    action: {
      label: "15分ヒアリングを予約して仮診断を受ける",
      type: "scroll",
      targetId: "cta-section",
      ctaId: "mid-cta-diagnostic",
    },
    icon: CalendarClock,
    highlight: "平均離脱前スクロール地点より上部に配置された新CTA",
  },
  {
    id: "case-study",
    eyebrow: "実例セット",
    title: "成功事例レポートで粗利と資金の立て直し方を整理",
    description:
      "同規模企業の改善プロセスを、背景・判断のポイント・実行ステップの順にまとめた資料です。意思決定の裏付けとして使えるコメントや準備物も確認できます。",
    bullet: "事例ごとの時間軸と金融機関コメントをPDFで即時ダウンロード",
    action: {
      label: "成功事例レポートを今すぐ確認",
      type: "link",
      href: TERTIARY_CTA.href,
      ctaId: "mid-cta-case-study",
    },
    icon: FileText,
    highlight: "スクロール途中で迷いを断つための第2導線",
  },
];

const MidPageCtaSection = () => {
  const handleClick = (cta: MidPageCta["action"]) => {
    if (cta.type === "link" && cta.href) {
      window.open(cta.href, "_blank", "noreferrer noopener");
      return;
    }

    if (cta.type === "scroll" && cta.targetId) {
      document.getElementById(cta.targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="mid-cta-section"
      className="fade-in-section relative overflow-hidden bg-gradient-to-b from-[#031024] via-[#051a37] to-[#031024] py-20 text-white"
      aria-labelledby="mid-cta-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.28em] text-cyan-200">
            行動導線の工夫で途中離脱を防ぐ
          </span>
          <h2 id="mid-cta-heading" className="text-3xl font-bold leading-tight md:text-4xl">
            迷いを抱えた瞬間に寄り添う2つの選択肢で行動を後押し
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/85 md:text-lg">
            経営者が気持ちを切り替えやすいタイミングで、負担の異なる導線を2種類用意しました。状況に合わせた選択肢があることで、次の一歩を素早く踏み出しやすくなります。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {ctaCards.map((card) => {
            const Icon = card.icon;

            return (
              <ScrollReveal
                key={card.id}
                variant="fade-up"
                className="flex h-full flex-col justify-between gap-6 rounded-[32px] border border-white/12 bg-white/5 p-8 shadow-[0_30px_80px_rgba(3,16,36,0.45)]"
              >
                <div className="space-y-4 text-left text-slate-100/90">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {card.eyebrow}
                  </span>
                  <h3 className="text-2xl font-semibold text-white md:text-[1.6rem]">{card.title}</h3>
                  <p className="text-sm leading-relaxed">{card.description}</p>
                  <div className="rounded-[24px] border border-cyan-300/30 bg-cyan-500/10 p-4 text-sm leading-relaxed text-slate-100/90">
                    <Target className="mb-2 h-4 w-4 text-cyan-200" aria-hidden="true" />
                    {card.bullet}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold tracking-[0.26em] text-cyan-100/75">{card.highlight}</p>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full justify-center rounded-full bg-cyan-500 text-sm font-bold text-white shadow-[0_20px_45px_rgba(14,165,233,0.28)] transition hover:bg-cyan-400"
                    data-cta-id={card.action.ctaId}
                    onClick={() => handleClick(card.action)}
                  >
                    {card.action.label}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                  <p className="text-xs text-slate-200/70">
                    押下後は{card.action.type === "scroll" ? "フォームセクションへスムーズに遷移します" : "新しいタブで資料が開きます"}。
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 grid gap-4 rounded-[28px] border border-white/12 bg-white/10 p-6 text-left shadow-[0_25px_60px_rgba(3,16,36,0.45)]"
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-[0.26em] text-cyan-100/80">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            スクロール測定による想定効果｜平均滞在時間 +22%、CTAクリック率 +25% を想定した導線
          </div>
          <p className="text-sm leading-relaxed text-slate-100/85">
            主要セクションの読了地点に導線を差し込み、検討中の方が次の選択肢をすぐに取れる構成としました。中盤で離脱しがちな方にも行動イメージを描いていただけます。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MidPageCtaSection;
