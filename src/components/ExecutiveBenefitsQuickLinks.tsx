import { ArrowUpRight, Clock3, DollarSign, LineChart, ShieldCheck } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const leadershipStats = [
  {
    value: "3倍",
    label: "経営判断の速度",
    description: "AIによるシミュレーションが意思決定の待ち時間を短縮",
  },
  {
    value: "92%",
    label: "施策の納得度",
    description: "財務・現場データの根拠提示で経営会議の合意形成が迅速に",
  },
  {
    value: "-28%",
    label: "資金繰りリスク",
    description: "キャッシュフローの先読みで資金ショックの発生確率を低減",
  },
];

const benefitLinks = [
  {
    icon: Clock3,
    title: "経営者の時間を削減",
    description:
      "AIが会議資料と判断材料を自動生成し、週あたり8〜12時間の意思決定工数を削減。リアルタイム分析で即断に集中できます。",
    href: "#case-studies",
    anchorLabel: "時短事例を見る",
    proof: {
      label: "平均削減時間",
      highlight: "-10h / 週",
    },
    theme: {
      mobileCard:
        "border-sky-200/70 bg-gradient-to-br from-white via-sky-50 to-white shadow-[0_18px_45px_rgba(14,165,233,0.16)] hover:border-sky-300",
      desktopCard:
        "border-sky-200/70 bg-gradient-to-br from-white via-sky-50 to-white shadow-[0_24px_60px_rgba(14,165,233,0.16)] hover:border-sky-300 hover:shadow-[0_28px_70px_rgba(14,165,233,0.22)]",
      icon: "bg-sky-100 text-sky-600",
      link: "text-sky-600",
      linkHover: "hover:text-sky-500 group-hover:text-sky-500",
    },
  },
  {
    icon: LineChart,
    title: "意思決定の確度を上げる",
    description:
      "現場データと財務指標を秒で統合し、粗利・在庫・需要シナリオを比較。AIレポートが最適施策と根拠を提示します。",
    href: "#ai-simulator",
    anchorLabel: "AIシミュレーターへ",
    proof: {
      label: "意思決定の精度",
      highlight: "+34%",
    },
    theme: {
      mobileCard:
        "border-emerald-200/70 bg-gradient-to-br from-white via-emerald-50 to-white shadow-[0_18px_45px_rgba(16,185,129,0.16)] hover:border-emerald-300",
      desktopCard:
        "border-emerald-200/70 bg-gradient-to-br from-white via-emerald-50 to-white shadow-[0_24px_60px_rgba(16,185,129,0.16)] hover:border-emerald-300 hover:shadow-[0_28px_70px_rgba(16,185,129,0.22)]",
      icon: "bg-emerald-100 text-emerald-600",
      link: "text-emerald-600",
      linkHover: "hover:text-emerald-500 group-hover:text-emerald-500",
    },
  },
  {
    icon: DollarSign,
    title: "資金繰りを改善",
    description:
      "キャッシュフロー予測と借入計画を同じ画面で管理し、資金ショート確率と打ち手をAIが優先順位付きで提示します。",
    href: "#cta-section",
    anchorLabel: "30分相談を予約",
    proof: {
      label: "運転資金の改善",
      highlight: "+1.6ヶ月",
    },
    theme: {
      mobileCard:
        "border-amber-200/70 bg-gradient-to-br from-white via-amber-50 to-white shadow-[0_18px_45px_rgba(217,119,6,0.16)] hover:border-amber-300",
      desktopCard:
        "border-amber-200/70 bg-gradient-to-br from-white via-amber-50 to-white shadow-[0_24px_60px_rgba(217,119,6,0.16)] hover:border-amber-300 hover:shadow-[0_28px_70px_rgba(217,119,6,0.22)]",
      icon: "bg-amber-100 text-amber-600",
      link: "text-amber-600",
      linkHover: "hover:text-amber-500 group-hover:text-amber-500",
    },
  },
  {
    icon: ShieldCheck,
    title: "信頼される社外対話を支援",
    description:
      "投資家・金融機関・取引先との打ち合わせに必要なKPIと説明資料をAIが即時生成。論点と根拠をそろえ、外部との折衝を前向きに進められます。",
    href: "#resources",
    anchorLabel: "資料サンプルを見る",
    proof: {
      label: "面談準備時間",
      highlight: "-65%",
    },
    theme: {
      mobileCard:
        "border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50 to-white shadow-[0_18px_45px_rgba(79,70,229,0.16)] hover:border-indigo-300",
      desktopCard:
        "border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50 to-white shadow-[0_24px_60px_rgba(79,70,229,0.16)] hover:border-indigo-300 hover:shadow-[0_28px_70px_rgba(79,70,229,0.22)]",
      icon: "bg-indigo-100 text-indigo-600",
      link: "text-indigo-600",
      linkHover: "hover:text-indigo-500 group-hover:text-indigo-500",
    },
  },
] as const;

const ExecutiveBenefitsQuickLinks = () => {
  return (
    <section className="fade-in-section relative -mt-6 overflow-hidden bg-gradient-to-br from-white via-primary/10 to-white py-14 shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[720px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-[-12%] hidden w-[420px] rounded-full bg-gradient-to-b from-sky-100/60 via-transparent to-primary/10 blur-[160px] lg:block" />
      <div className="container relative mx-auto px-3 sm:px-4">
        <ScrollReveal as="div" className="mx-auto max-w-5xl text-center" variant="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            KEY BENEFITS
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold text-foreground md:text-4xl">
            生成AIが経営の意思決定を前倒しする4つのメリット
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            因果関係が明確なダッシュボードとロジカルなレコメンドを軸に、経営スピード・資金感覚・現場納得度を同時に引き上げます。興味のある領域から詳細セクションにショートカットしてください。
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {leadershipStats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              as="div"
              delay={index * 60}
              variant="fade-up"
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between gap-6">
                <span className="text-4xl font-bold tracking-tight text-primary md:text-5xl">{stat.value}</span>
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  OUTCOME
                </span>
              </div>
              <p className="relative mt-4 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{stat.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {benefitLinks.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className={cn(
                    "group min-w-[260px] snap-start rounded-3xl border border-white/70 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]",
                    benefit.theme.mobileCard,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                      benefit.theme.icon,
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{benefit.title}</h3>
                  <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                    <span className="text-muted-foreground">{benefit.proof.label}</span>
                    <span className="text-sm text-foreground">{benefit.proof.highlight}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                  <a
                    href={benefit.href}
                    className={cn(
                      "mt-4 inline-flex items-center gap-2 text-xs font-semibold transition-colors",
                      benefit.theme.link,
                      benefit.theme.linkHover,
                    )}
                  >
                    {benefit.anchorLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 hidden gap-6 md:grid lg:grid-cols-4">
          {benefitLinks.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={benefit.title}
                as="article"
                delay={index * 90}
                variant="fade-up"
                className={cn(
                  "group flex h-full flex-col gap-5 rounded-3xl border border-white/70 bg-gradient-to-br from-white via-primary/5 to-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]",
                  benefit.theme.desktopCard,
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                    benefit.theme.icon,
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="flex items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-5 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur">
                  <span className="text-muted-foreground">{benefit.proof.label}</span>
                  <span className="text-lg text-foreground">{benefit.proof.highlight}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
                <a
                  href={benefit.href}
                  className={cn(
                    "mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors",
                    benefit.theme.link,
                    benefit.theme.linkHover,
                  )}
                >
                  {benefit.anchorLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBenefitsQuickLinks;
