import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/ctaVariants";

const plans = [
  {
    name: "伴走スタンダード",
    summary: "管理会計と資金繰りの基盤づくりを3ヶ月で固める",
    target: "年商3〜8億円 / 管理部と営業責任者が兼務している企業",
    price: "180,000",
    metrics: [
      { label: "平均投資回収", value: "2.7ヶ月" },
      { label: "継続率", value: "91%" },
      { label: "推奨体制", value: "社長 + 管理/営業責任者" },
    ],
    features: [
      "月1回のハイブリッド伴走（訪問+オンライン）",
      "部門別損益と資金繰り表の可視化テンプレート構築",
      "粗利・回転・受注の主要KPIモニタリング（週次）",
      "金融機関向け説明資料と面談想定問答の整備",
      "AI活用ミニワークショップ（全2回）",
    ],
    outcomes: [
      "粗利率+5pt、回収サイト▲12日（導入3ヶ月平均）",
      "金融機関連携の事前準備時間を60%削減",
    ],
    subsidy: "金融機関ごとの着眼点を整理し、モニタリング資料の更新スケジュールを設計",
    popular: false,
  },
  {
    name: "成長アクセラレート",
    summary: "AIと伴走PMOで全社の改善と新規投資を同時推進",
    target: "年商8〜15億円 / 管理部に専任1〜2名 / DXを本格化したい企業",
    price: "280,000",
    metrics: [
      { label: "平均投資回収", value: "3.1ヶ月" },
      { label: "継続率", value: "94%" },
      { label: "推奨体制", value: "経営陣 + PMO + 専任DX担当" },
    ],
    features: [
      "月1回の経営会議・Slack等伴走（訪問+オンライン）",
      "AI需要予測・案件管理のPoCと本番運用設計",
      "キャッシュフローシナリオと投資回収計画の複線管理",
      "人材採用・定着支援のKPI設計とOKR運用",
      "必要に応じた金融機関面談の同席とフォローアップサマリー作成",
    ],
    outcomes: [
      "売上成長率+12pt、EBITDAマージン+3.8pt（導入6ヶ月平均）",
      "AI活用案件の定着率87%、年間1,200時間の工数削減",
    ],
    subsidy: "大型投資に向けた金融機関交渉シナリオとレポーティング体制を共同設計",
    popular: true,
  },
];

const comparisonPoints = [
  {
    label: "伴走頻度",
    starter: "月1回（経営会議の事前レビュー含む）",
    premium: "月2回＋Slack/Teams常時サポート",
  },
  {
    label: "データ連携範囲",
    starter: "会計・販売・在庫データのテンプレ連携",
    premium: "基幹/施工/勤怠/CRMまでフル連携",
  },
  {
    label: "AI活用レベル",
    starter: "営業・資金繰りのAIレポートを月次提供",
    premium: "需要予測・案件スコアリングをリアルタイム運用",
  },
  {
    label: "金融機関連携",
    starter: "四半期ごとの面談資料アップデートと想定問答の共有",
    premium: "月次のモニタリングレポートと面談サマリーの共同作成",
  },
  {
    label: "人材/社内浸透",
    starter: "マニュアルとKPIレビューのセット提供",
    premium: "現場研修2回＋OKR運用と人材定着プログラム",
  },
  {
    label: "レポーティング",
    starter: "週次ダッシュボードと月次レビュー",
    premium: "週次ダッシュボード＋経営陣報告書＋投資家向けサマリー",
  },
];

const guaranteeNotices = [
  "※ 初月は1ヶ月トライアル。成果指標に届かない場合は無償で改善計画を再提示し、継続判断いただけます",
  "※ 守秘義務契約（NDA）締結の上で財務・人事データを扱います",
  "※ 地方銀行・信金との連携実績に基づき、面談準備からフォローまで伴走します",
];

const guaranteeConditions = [
  "トライアル月に設定した主要KPI（粗利率・在庫回転・意思決定リードタイムなど）を事前に合意し、週次でレビュー。",
  "合意指標が改善しない場合は追加費用なしで改善案を再設計し、継続の可否を判断いただけます。",
  "実行ログ・AIレポートの共有をいただくことで、改善仮説の再設計を迅速化します。",
];

const guaranteeMetrics = [
  {
    icon: Target,
    label: "対象KPI",
    value: "粗利率 / 在庫回転 / 意思決定時間",
    description: "社長と合意した改善指標を起点に成果を測定します。",
  },
  {
    icon: TrendingUp,
    label: "モニタリング",
    value: "週次レビュー × AIレポート",
    description: "AI分析と伴走ミーティングで進捗と打ち手を立体的に確認。",
  },
  {
    icon: ClipboardCheck,
    label: "適用条件",
    value: "実行ログの共有",
    description: "実施した改善アクションと学びを両者で記録します。",
  },
];

const guaranteeSteps = [
  {
    period: "Week 0-2",
    title: "キックオフで指標と体制を設計",
    description: "現状棚卸しとKPI感度分析を行い、AIダッシュボードとレビュー頻度を決定。",
  },
  {
    period: "Week 3-6",
    title: "AIレポートと改善アクションを実装",
    description: "営業・財務データを接続し、優先施策の実行ログをテンプレート化。",
  },
  {
    period: "Week 7-12",
    title: "成果検証と投資判断のレビュー",
    description: "KPIの変化とキャッシュインパクトを定量評価し、投資継続可否を意思決定。",
  },
];

const PlansSection = () => {
  const [standardPlan, premiumPlan] = plans;

  const scrollToCta = () => {
    const section = document.getElementById("cta-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      </div>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal as="div" variant="fade-up" className="mb-14 text-center">
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary shadow-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                経営改善とAI活用を同時に叶える料金設計
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:mb-6 md:text-5xl lg:text-6xl">料金プラン</h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              3ヶ月で管理会計と資金繰りの基盤を固め、6ヶ月で現場に成果を定着させるための2つのプランをご用意しています。
            </p>
          </ScrollReveal>

          <div className="mb-14 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} variant="fade-up" delay={index * 120} className="h-full">
                <Card
                  className={`relative flex h-full flex-col gap-6 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant md:p-8 ${
                    plan.popular
                      ? "border-transparent shadow-[0_35px_80px_-35px_rgba(37,99,235,0.55)]"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-primary via-accent to-highlight px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      <Star className="h-4 w-4" />
                      おすすめ
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />

                  <div className="space-y-5 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground md:text-4xl">{plan.name}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{plan.summary}</p>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary md:text-sm">
                      {plan.target}
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold tracking-tight text-primary md:text-7xl">¥{plan.price}</span>
                      <span className="text-base text-muted-foreground md:text-xl">/ 月 (税抜)</span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {plan.metrics?.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-left shadow-inner"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">{metric.label}</p>
                        <p className="mt-1 text-base font-semibold text-foreground md:text-lg">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-1 flex-col gap-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-left">
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-4 w-4 md:h-5 md:w-5" />
                          </div>
                          <span className="text-sm leading-relaxed text-muted-foreground md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-2xl bg-muted/40 p-5 md:p-6">
                      <h4 className="mb-3 text-sm font-bold text-foreground md:text-base">成果の目安</h4>
                      <ul className="space-y-2.5">
                        {plan.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
                            <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </div>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{plan.subsidy}</p>
                  </div>

                  <div className="mt-auto space-y-3">
                    <Button
                      variant="cta"
                      size="lg"
                      className="w-full"
                      onClick={scrollToCta}
                      data-cta-id={`${PRIMARY_CTA.id}-plans-${index}`}
                    >
                      {PRIMARY_CTA.label}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground md:text-sm">
                      詳細資料はページ下部の <span className="font-semibold text-primary">{SECONDARY_CTA.label}</span> からダウンロードいただけます。
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal as="div" variant="fade-up" delay={220} className="mb-14">
            <h3 className="mb-6 text-center text-2xl font-bold text-foreground md:mb-8">プラン比較</h3>

            <div className="space-y-3 md:hidden">
              {comparisonPoints.map((point) => (
                <details key={point.label} className="group rounded-2xl border border-primary/20 bg-white/90 p-4 shadow-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                    {point.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    <p>
                      <span className="mr-2 inline-flex min-w-[88px] justify-center rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                        スタンダード
                      </span>
                      {point.starter}
                    </p>
                    <p>
                      <span className="mr-2 inline-flex min-w-[88px] justify-center rounded-full bg-secondary/15 px-2 py-1 text-xs font-semibold text-secondary">
                        アクセラレート
                      </span>
                      {point.premium}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-card backdrop-blur-sm">
                <caption className="sr-only">伴走スタンダードと成長アクセラレートの具体的な提供内容の比較</caption>
                <colgroup>
                  <col className="w-[22%] bg-muted/40" />
                  <col className="bg-background" />
                  <col className="bg-secondary/10" />
                </colgroup>
                <thead className="bg-gradient-to-r from-primary/10 via-white to-accent/10">
                  <tr>
                    <th className="px-6 py-5 text-left text-base font-bold uppercase tracking-wide text-muted-foreground/80">
                      項目
                    </th>
                    <th className="px-6 py-4 text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-lg font-bold text-foreground">{standardPlan.name}</span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {standardPlan.summary}
                        </span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-lg font-bold text-foreground">{premiumPlan.name}</span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {premiumPlan.summary}
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, index) => (
                    <tr
                      key={point.label}
                      className={`${index % 2 === 0 ? "bg-white/70" : "bg-white/40"} ${index !== comparisonPoints.length - 1 ? "border-b border-slate-200/70" : ""}`}
                    >
                      <td className="px-6 py-6 align-top text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {point.label}
                      </td>
                      <td className="px-6 py-6 text-sm text-foreground">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <p className="leading-relaxed text-muted-foreground md:text-base">{point.starter}</p>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-sm text-foreground">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <p className="leading-relaxed text-muted-foreground md:text-base">{point.premium}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            variant="fade-up"
            delay={320}
            className="space-y-8 rounded-[32px] border border-slate-200/80 bg-white/90 p-7 text-left shadow-card backdrop-blur md:p-8"
          >
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {guaranteeNotices.map((notice) => (
                <div
                  key={notice}
                  className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-white/85 px-4 py-3 text-sm text-muted-foreground shadow-inner"
                >
                  <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <p className="leading-relaxed">{notice}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/8 via-white to-accent/10 p-7 shadow-[0_30px_80px_-50px_rgba(18,52,120,0.55)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-inner">
                          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/70">GUARANTEE</p>
                          <h3 className="text-2xl font-semibold text-foreground md:text-[1.85rem]">返金・成果保証プログラム</h3>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary/80 shadow-sm">
                        リスクゼロ
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      安心して導入いただくためのコミットメント。定義された指標に基づいて成果を検証し、納得感のある改善サイクルを保証します。
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm leading-relaxed text-foreground/90 md:text-base">
                    {guaranteeConditions.map((condition) => (
                      <li key={condition} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {guaranteeMetrics.map((metric) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={metric.label}
                          className="flex h-full flex-col gap-2 rounded-2xl border border-primary/15 bg-white/85 p-4 shadow-inner"
                        >
                          <div className="flex items-center gap-2 text-primary">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">{metric.label}</p>
                          </div>
                          <p className="text-sm font-semibold text-foreground md:text-base">{metric.value}</p>
                          <p className="text-xs text-muted-foreground md:text-sm">{metric.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-[2rem] border border-secondary/25 bg-gradient-to-br from-secondary/5 via-white to-primary/5 p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                      <Target className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/80">EXECUTION DESIGN</p>
                      <h4 className="mt-1 text-lg font-semibold text-secondary-foreground md:text-xl">KPIレビューと検証サイクル</h4>
                    </div>
                  </div>
                  <ol className="mt-5 space-y-4">
                    {guaranteeSteps.map((step, index) => (
                      <li key={step.title} className="rounded-2xl border border-secondary/25 bg-white/90 p-4 shadow-inner">
                        <div className="flex items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-secondary/70">
                          <span>{step.period}</span>
                          {index < guaranteeSteps.length - 1 && (
                            <span className="inline-flex items-center gap-1 text-secondary">
                              NEXT
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                          )}
                        </div>
                        <h5 className="mt-2 text-base font-semibold text-foreground md:text-lg">{step.title}</h5>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-foreground md:text-lg">成果コミットメントシートの運用</h4>
                      <p className="text-xs text-muted-foreground">透明性の高いレビューを両者で共有</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <p>
                      成果測定は初回キックオフで御社と合意したKPIを元に行います。現状値をヒアリングし、改善目標と測定方法を明文化した「成果コミットメントシート」を作成して共有します。
                    </p>
                    <p>
                      目標未達の場合は返金または次月無料のいずれかをお選びいただけます。万一の際もリスクなく改善サイクルを継続いただけるようご用意しています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-5 py-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              <span className="font-semibold text-primary">{SECONDARY_CTA.label}</span> または{" "}
              <span className="font-semibold text-primary">{PRIMARY_CTA.label}</span> からご連絡いただくと、金融機関との対話設計や面談準備の進め方をご提案します。
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
