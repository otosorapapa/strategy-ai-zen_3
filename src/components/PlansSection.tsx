import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import planWorkflowVisual from "@/assets/dashboard-preview.jpg";
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

const accentStyles = {
  primary: {
    icon: "bg-primary/10 text-primary",
    featureIcon: "bg-primary/10 text-primary",
    outcomeIcon: "bg-primary/15 text-primary",
    targetChip: "border border-primary/30 bg-primary/5 text-primary",
    price: "text-primary",
    tableIcon: "bg-primary/10 text-primary",
    tableCol: "bg-background",
    mobileBadge: "bg-primary/10 text-primary",
  },
  secondary: {
    icon: "bg-secondary/15 text-secondary",
    featureIcon: "bg-secondary/15 text-secondary",
    outcomeIcon: "bg-secondary/20 text-secondary",
    targetChip: "border border-secondary/30 bg-secondary/10 text-secondary",
    price: "text-secondary",
    tableIcon: "bg-secondary/20 text-secondary",
    tableCol: "bg-secondary/5",
    mobileBadge: "bg-secondary/15 text-secondary",
  },
  highlight: {
    icon: "bg-highlight/15 text-highlight",
    featureIcon: "bg-highlight/15 text-highlight",
    outcomeIcon: "bg-highlight/20 text-highlight",
    targetChip: "border border-highlight/30 bg-highlight/10 text-highlight",
    price: "text-highlight",
    tableIcon: "bg-highlight/20 text-highlight",
    tableCol: "bg-highlight/5",
    mobileBadge: "bg-highlight/15 text-highlight",
  },
} as const;

const plans = [
  {
    name: "スタータープラン",
    summary: "創業期の資金繰りと数値管理をAIで自走化",
    target: "創業〜年商5,000万円 / 個人事業主・小規模法人",
    price: "90,000",
    accent: "primary" as const,
    metrics: [
      { label: "平均投資回収", value: "1.6ヶ月" },
      { label: "継続率", value: "89%" },
      { label: "推奨体制", value: "経営者 + 主要メンバー1名" },
    ],
    features: [
      "隔週AI簡易レポートで粗利・資金の兆しを可視化",
      "資金繰り基礎講座とテンプレート提供",
      "創業者コミュニティと匿名相談チャット",
      "初回無料AI診断レポートとアクションメモ",
      "会計データの自動連携初期設定サポート",
    ],
    outcomes: [
      "キャッシュ余力+30日、粗利率+1.8pt（導入2ヶ月平均）",
      "会議資料準備時間を40%削減し、判断の迷いを減少",
    ],
    subsidy: "小規模事業者持続化補助金などの活用可否を診断し、申請準備を伴走",
    popular: false,
  },
  {
    name: "スタンダードプラン",
    summary: "成長期の粗利率と在庫回転を週次で改善",
    target: "年商5,000万〜3億円 / 管理部と営業責任者が兼務",
    price: "180,000",
    accent: "secondary" as const,
    metrics: [
      { label: "平均投資回収", value: "2.3ヶ月" },
      { label: "継続率", value: "92%" },
      { label: "推奨体制", value: "社長 + 管理/営業責任者" },
    ],
    features: [
      "週次AIレポートで粗利率・在庫回転・受注を同時管理",
      "診断士による値決め・投資判断レビュー（月2回）",
      "金融機関・投資家向けの説明資料テンプレート",
      "需要予測・資金繰りシナリオのシミュレーション",
      "採用・定着支援のKPI設計とモニタリング",
    ],
    outcomes: [
      "粗利率+5.2pt、在庫回転率+28%（導入4ヶ月平均）",
      "資金調達・投資判断の検討時間を50%短縮",
    ],
    subsidy: "ものづくり補助金・経営改善計画の申請資料を共同作成",
    popular: true,
  },
  {
    name: "プレミアムプラン",
    summary: "成熟・再生期の投資判断と再建を一気通貫で伴走",
    target: "年商3億〜15億円 / 部門横断で変革を進めたい企業",
    price: "320,000",
    accent: "highlight" as const,
    metrics: [
      { label: "平均投資回収", value: "3.8ヶ月" },
      { label: "継続率", value: "95%" },
      { label: "推奨体制", value: "経営陣 + PMO + 財務責任者" },
    ],
    features: [
      "週次AIレポート＋診断士常駐レビュー（訪問/オンライン）",
      "M&A・再生シナリオと公的支援活用の設計",
      "部門横断ダッシュボードと行動計画の統合運用",
      "金融機関・取引先との交渉同席と想定問答整備",
      "再生計画・中期経営計画の策定と合意形成支援",
    ],
    outcomes: [
      "意思決定リードタイム▲52%、EBITDAマージン+3.8pt（導入6ヶ月平均）",
      "再投資余力+1.5億円、金融交渉の差し戻し率を70%削減",
    ],
    subsidy:
      "事業再生計画・事業再構築補助金・地域金融機関の連携スキームを一体で設計",
    popular: false,
  },
];
const comparisonPoints = [
  {
    label: "伴走頻度",
    descriptions: [
      "隔週オンライン面談＋チャット",
      "月2回レビュー＋Slack/Teams伴走",
      "週次レビュー＋現場同席/経営会議支援",
    ],
  },
  {
    label: "データ連携範囲",
    descriptions: [
      "会計・販売データの自動取込",
      "会計・販売・在庫・勤怠まで連携",
      "会計・在庫・人事・プロジェクト管理を統合",
    ],
  },
  {
    label: "AI活用レベル",
    descriptions: [
      "簡易AIレポートと優先度アラート",
      "週次シナリオと需要・資金のシミュレーション",
      "複数シナリオと再生・投資判断の自動比較",
    ],
  },
  {
    label: "金融機関連携",
    descriptions: [
      "四半期面談資料と資金繰り表のアップデート",
      "月次モニタリングレポートと交渉準備サマリー",
      "主要行・投資家向け資料と想定問答の一元管理",
    ],
  },
  {
    label: "人材/社内浸透",
    descriptions: [
      "資金繰り講座と数値管理マニュアル",
      "部門別KPIレビューとOKR設計ワーク",
      "役員・部長向けチェンジリーダー育成と多拠点WS",
    ],
  },
  {
    label: "レポーティング",
    descriptions: [
      "隔週AIレポート＋月次レビュー",
      "週次ダッシュボード＋経営陣報告書",
      "週次・月次レポート＋再生/投資委員会資料",
    ],
  },
];
const guaranteeNotices = [
  "※ 初回無料相談とAI診断レポートはすべてのプランでご提供します",
  "※ 成果指標に届かない場合は無償で改善シナリオを再提示し、継続可否をご判断いただけます",
  "※ 守秘義務契約（NDA）締結の上で財務・人事データを安全に取り扱います",
];

const guaranteeConditions = [
  "初回48時間診断で合意した主要KPI（粗利率・在庫回転・リードタイムなど）を共有し、週次レビューで検証します。",
  "改善が進まない場合は追加費用なしでシナリオを再設計し、継続/停止をご判断いただけます。",
  "AIレポートと実行ログを双方で共有し、仮説検証のスピードを維持します。",
];

const guaranteeMetrics = [
  {
    icon: Target,
    label: "対象KPI",
    value: "粗利率 / 在庫回転 / 意思決定リードタイム",
    description: "創業〜再生期の状況に合わせた指標を起点に成果を測定します。",
  },
  {
    icon: TrendingUp,
    label: "モニタリング",
    value: "週次/隔週レビュー × AIレポート",
    description: "AI分析と伴走ミーティングで進捗と打ち手を立体的に確認します。",
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
    title: "48時間診断と指標の合意",
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
  const planAccents = plans.map((plan) => accentStyles[plan.accent]);

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
              創業期・成長期・成熟/再生期の3ステージに合わせて、AI診断と診断士伴走の密度を最適化したプランをご用意しています。
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" className="mx-auto mb-12 max-w-5xl">
            <figure className="group relative overflow-hidden rounded-[32px] border border-primary/15 bg-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <img
                src={planWorkflowVisual}
                alt="月次ダッシュボードと伴走セッションの進行を俯瞰するプラン構成イメージ"
                className="relative z-10 h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="relative z-10 flex flex-col gap-2 px-6 py-4 text-left text-sm text-slate-700/85 md:flex-row md:items-center md:justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Plan Visual</span>
                <span>
                  伴走セッションで共有するダッシュボードや週次レビューの雰囲気を補足し、サービス導入後の流れを直感的に理解できます。
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="mb-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan, index) => {
              const accent = accentStyles[plan.accent];
              return (
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
                    <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}>
                      <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground md:text-4xl">{plan.name}</h3>
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{plan.summary}</p>
                    </div>
                    <div className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider md:text-sm ${accent.targetChip}`}>
                      {plan.target}
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className={`text-4xl font-bold tracking-tight md:text-7xl ${accent.price}`}>¥{plan.price}</span>
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
                          <div className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${accent.featureIcon}`}>
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
                            <div className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${accent.outcomeIcon}`}>
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
              );
            })}
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
                    {plans.map((plan, planIndex) => (
                      <p key={`${point.label}-${plan.name}`}>
                        <span
                          className={`mr-2 inline-flex min-w-[88px] justify-center rounded-full px-2 py-1 text-xs font-semibold ${planAccents[planIndex].mobileBadge}`}
                        >
                          {plan.name}
                        </span>
                        {point.descriptions[planIndex]}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-card backdrop-blur-sm">
                <caption className="sr-only">{`${plans.map((plan) => plan.name).join("・")}の具体的な提供内容の比較`}</caption>
                <colgroup>
                  <col className="w-[22%] bg-muted/40" />
                  {plans.map((plan, index) => (
                    <col key={plan.name} className={planAccents[index].tableCol} />
                  ))}
                </colgroup>
                <thead className="bg-gradient-to-r from-primary/10 via-white to-accent/10">
                  <tr>
                    <th className="px-6 py-5 text-left text-base font-bold uppercase tracking-wide text-muted-foreground/80">
                      項目
                    </th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="px-6 py-4 text-left">
                        <div className="flex flex-col gap-1">
                          <span className="text-lg font-bold text-foreground">{plan.name}</span>
                          <span className="text-xs font-medium text-muted-foreground">{plan.summary}</span>
                        </div>
                      </th>
                    ))}
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
                      {plans.map((plan, planIndex) => (
                        <td key={`${point.label}-${plan.name}`} className="px-6 py-6 text-sm text-foreground">
                          <div className="flex items-start gap-3">
                            <div
                              className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${planAccents[planIndex].tableIcon}`}
                            >
                              <Check className="h-4 w-4" aria-hidden="true" />
                            </div>
                            <p className="leading-relaxed text-muted-foreground md:text-base">{point.descriptions[planIndex]}</p>
                          </div>
                        </td>
                      ))}
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
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-primary/80 shadow-sm">
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
                        <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.28em] text-secondary/70">
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

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="プランの違いや補助金活用の可否を、その場で診断"
        description="貴社の売上規模や体制を伺い、伴走スタンダードと成長アクセラレートのどちらが適合するか、補助金活用を含めた費用感と導入スケジュールを無料相談でお伝えします。"
        ctaId="plans-guidance"
      />
    </section>
  );
};

export default PlansSection;
