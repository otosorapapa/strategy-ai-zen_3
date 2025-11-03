import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import heroConsultingImage from "@/assets/hero-consulting.jpg";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Landmark,
  LayoutDashboard,
  LineChart,
  PlayCircle,
  Sparkle,
  Target,
  Timer,
} from "lucide-react";

const heroBullets = [
  "粗利率・運転資本・人員稼働をAIが同時診断し、緊急度を色分けしたヒートマップを48時間で提示。",
  "診断士が財務ストーリーと施策の相関を整理し、銀行協議と現場実行にそのまま使える改善計画を仕立てる。",
  "週次レビューでKPIダッシュボードとタスクを更新し、資金繰り会議と交渉資料を一気通貫で同期する。",
];

const blueprintSteps = [
  {
    title: "Day0-7｜課題スキャン",
    description: "粗利率・資金繰り・人材稼働を45指標で照合。危険ラインと改善余地を可視化",
  },
  {
    title: "Day7-30｜再生設計",
    description: "現場ヒアリングで実行条件を整理し、AIシミュレーションを踏まえた改善ロードマップを策定",
  },
  {
    title: "Day30-180｜実行伴走",
    description: "金融機関向け資料と現場タスクを週次でアップデート。交渉と実行のズレを解消",
  },
];

const trustSignals = [
  { icon: Landmark, label: "中小企業庁 登録支援機関" },
  { icon: BriefcaseBusiness, label: "再生・改善案件 180社超を伴走" },
  { icon: LineChart, label: "経営改善計画策定支援補助金の活用支援" },
  { icon: Timer, label: "48時間以内の初回レポート共有" },
];

const heroValueBullets = [
  "運転資本と粗利を72時間で再評価",
  "生成AI×診断士の意思決定伴走",
  "金融機関協議まで整う計画テンプレ",
];

const heroSummaryCards = [
  {
    icon: Timer,
    eyebrow: "要約 01",
    title: "48時間で危険ラインを色分け",
    description: "資金繰りと粗利の優先順位をAIヒートマップで即把握",
  },
  {
    icon: Sparkle,
    eyebrow: "要約 02",
    title: "診断士が計画を現場仕様に翻訳",
    description: "ヒアリングで実行条件を整理し、会議資料とタスクに落とし込む",
  },
  {
    icon: Landmark,
    eyebrow: "要約 03",
    title: "銀行交渉と補助金申請まで一気通貫",
    description: "再交渉・稟議・補助金の資料を共通ダッシュボードで共有",
  },
];

const heroImpactStats = [
  {
    icon: LineChart,
    value: "+12%",
    label: "営業利益改善幅（中央値）",
    helper: "改善計画実行6〜12ヶ月後の例",
  },
  {
    icon: Activity,
    value: "80%",
    label: "債務超過解消率",
    helper: "金融機関との再交渉が合意に至った割合（例）",
  },
  {
    icon: Target,
    value: "3.1ヶ月",
    label: "意思決定リードタイム",
    helper: "平均で1/3に短縮された再生案件の実績値",
  },
];

const heroReasonHighlights = [
  {
    icon: Compass,
    eyebrow: "Reason 01",
    title: "年商5,000万〜15億円の課題に特化",
    description:
      "財務と現場データの粒度を理解した診断士が、規模にフィットする改善ロードマップを48時間で提示",
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Reason 02",
    title: "AIと診断士が一枚の設計図に統合",
    description:
      "AIの提案を経験知で補正し、銀行・役員・現場で共有できるダッシュボードと会議テンプレを整備",
  },
  {
    icon: Landmark,
    eyebrow: "Reason 03",
    title: "交渉と補助金申請まで伴走",
    description:
      "経営改善計画策定支援補助金や条件変更交渉に必要な資料づくりまでワンストップで支援",
  },
];

const heroVideoSummary = {
  url: "https://www.youtube.com/embed/2Xc9gXyf2G4?rel=0&autoplay=0&mute=1",
  title: "90秒でわかるAI×診断士の再生ロードマップ",
  description:
    "無料相談から6ヶ月の伴走までの流れをストーリー形式で紹介。どのタイミングでAIと専門家が関わるかを把握できます。",
  highlights: [
    "初回45分ヒアリングで棚卸しする論点と必要データ",
    "AIヒートマップと改善計画ドラフトのサンプル",
    "金融機関面談・補助金申請までのマイルストーン",
  ],
};

const heroProcessSteps = [
  {
    icon: Compass,
    title: "無料相談 45分",
    description: "経営者の悩みを棚卸しし、AI初期診断に必要なデータと進め方を整理",
  },
  {
    icon: Sparkle,
    title: "48H AI診断",
    description: "粗利・資金・人材のリスクと伸び代を可視化し、優先順位付きの改善仮説を提示",
  },
  {
    icon: Landmark,
    title: "再生計画伴走",
    description: "月次/週次の実行レビューと金融機関交渉支援で成果の定着まで伴走",
  },
];

const heroPainScenarios = [
  "黒字なのに資金が残らず、銀行面談で次の一手を問われている",
  "生成AIの検証は進んだが、現場のKPIと結びつかず成果が見えない",
  "改善計画の提出期限が迫り、資料づくりと現場調整が間に合わない",
];

const heroPainSummaryTags = [
  "黒字でもキャッシュが残らない",
  "AI投資が利益と直結しない",
  "改善計画の締切が目前",
];

const heroIntroCopy = {
  short:
    "AIの資金繰りシミュレーションと診断士の管理会計設計で、半年以内に銀行稟議に耐える経営改善計画を仕上げる。",
  extended:
    "生成AIが財務・需要・稼働データの歪みを即座に抽出し、診断士が再生ストーリーと定量根拠を統合。金融機関向け資料と現場タスクを同じダッシュボードで運用し、意思決定リードタイムを平均1/3に圧縮する。補助金活用や投資判断まで含め、資金繰りに強い体制へ定着させる。",
};

const ctaTrustBadges = [
  {
    icon: Landmark,
    headline: "福岡銀行グループ連携",
    description: "金融機関レビュー向け資料を共同整備",
  },
  {
    icon: BriefcaseBusiness,
    headline: "伴走180社超",
    description: "改善計画・再生支援の導入実績",
  },
  {
    icon: LineChart,
    headline: "融資稟議サポート",
    description: "銀行交渉に耐えるKPIと根拠を提示",
  },
];

const HeroSection = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const scrollToContact = () => {
    const target = document.getElementById("cta-section");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section section-spacing relative overflow-hidden bg-gradient-to-b from-[#020d21] via-[#062047] to-[#010713] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(104,194,255,0.24),_transparent_68%)]" aria-hidden="true" />
      <div className="layout-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#7ec3ff]">
                資金繰り × 意思決定 × 実行
              </span>
              <h1 className="text-balance text-3xl font-bold leading-[1.35] md:text-4xl xl:text-[3.1rem]">
                資金繰りに強い経営体制を、AIとプロの伴走で即構築する。
              </h1>
              <ul className="flex flex-wrap items-center gap-3 text-left text-sm text-slate-100/80 md:text-base">
                {heroValueBullets.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-4 text-left shadow-[0_18px_45px_rgba(3,16,36,0.4)] sm:grid-cols-3">
                {heroSummaryCards.map(({ icon: Icon, title, description, eyebrow }) => (
                  <div key={title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0b1f3f]/60 p-4">
                    <div className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                      <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                      {eyebrow}
                    </div>
                    <p className="text-sm font-semibold text-white/90">{title}</p>
                    <p className="text-xs leading-relaxed text-slate-100/80">{description}</p>
                  </div>
                ))}
              </div>
              <p className="max-w-3xl text-[1.05rem] leading-relaxed text-slate-100/90 md:text-lg">
                {heroIntroCopy.short}
              </p>
              <div className="rounded-3xl border border-white/12 bg-white/5 p-5 shadow-[0_18px_45px_rgba(3,16,36,0.35)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">
                  眠れない夜に起きている代表的な3症状
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-left text-xs text-slate-100/80 md:text-sm">
                  {heroPainSummaryTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[0.8rem] leading-relaxed text-slate-100/75">
                  詳細な症状と改善ロードマップは「詳細を見る」から確認できます。該当する項目が1つでもあれば、無料診断で具体的な優先順位をご提示します。
                </p>
              </div>
              <div
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows] duration-500",
                  isDetailOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
                aria-hidden={!isDetailOpen}
              >
                <div id="hero-detail-content" className="min-h-0 space-y-8">
                  <div className="grid gap-3 rounded-3xl border border-white/15 bg-white/5 p-4 text-left shadow-[0_18px_45px_rgba(3,16,36,0.4)] sm:grid-cols-3">
                    {heroProcessSteps.map(({ icon: Icon, title, description }) => (
                      <div key={title} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0b1f3f]/60 p-4">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                          <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                          {title}
                        </div>
                        <p className="text-xs leading-relaxed text-slate-100/80">{description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 rounded-3xl border border-white/12 bg-white/5 p-5 shadow-[0_18px_45px_rgba(3,16,36,0.35)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">
                      眠れない夜に起きていること
                    </p>
                    <ul className="space-y-2 text-left text-sm leading-relaxed text-slate-100/85">
                      {heroPainScenarios.map((scenario) => (
                        <li key={scenario} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                          <span>{scenario}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="max-w-3xl text-[1.05rem] leading-relaxed text-slate-100/80 md:text-lg">
                    {heroIntroCopy.extended}
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                      3つの選ばれる理由
                    </p>
                    <div className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-4 sm:grid-cols-3">
                      {heroReasonHighlights.map(({ icon: Icon, title, description, eyebrow }) => (
                        <div
                          key={title}
                          className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#0b1f3f]/60 p-4 shadow-[0_18px_45px_rgba(3,16,36,0.4)]"
                        >
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                            <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                            {eyebrow}
                          </div>
                          <p className="text-sm font-semibold text-white/90">{title}</p>
                          <p className="text-xs leading-relaxed text-slate-100/75">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-5 shadow-[0_22px_55px_rgba(3,16,36,0.45)]">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">
                      <PlayCircle className="h-4 w-4" aria-hidden="true" />
                      {heroVideoSummary.title}
                    </div>
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
                      <div className="aspect-video w-full overflow-hidden rounded-[20px] border border-white/15 bg-black/60 shadow-lg">
                        <iframe
                          src={heroVideoSummary.url}
                          title={heroVideoSummary.title}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-3 text-left text-sm leading-relaxed text-slate-100/85">
                        <p>{heroVideoSummary.description}</p>
                        <ul className="space-y-2 text-xs text-slate-100/75">
                          {heroVideoSummary.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                          まずは動画で全体像を掴んでからフォームへ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                      <Sparkle className="h-4 w-4" aria-hidden="true" />
                      48H Blueprint Preview
                    </div>
                    <ul className="space-y-3 text-left text-sm leading-relaxed text-slate-100/85 md:text-base">
                      {heroBullets.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroImpactStats.map((metric) => {
                      const Icon = metric.icon;

                      return (
                        <div
                          key={metric.label}
                          className="rounded-3xl border border-white/15 bg-[#0b1f3f]/60 p-5 shadow-[0_20px_45px_rgba(2,12,30,0.4)] backdrop-blur"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-100">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <p className="text-2xl font-bold text-white">{metric.value}</p>
                          </div>
                          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-slate-100/75">{metric.helper}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="grid gap-6 rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_55px_rgba(3,16,36,0.4)] backdrop-blur">
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                      <div className="space-y-4">
                        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                          再生ストーリーを3枚で把握
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-3">
                          {blueprintSteps.map((step) => (
                            <div
                              key={step.title}
                              className="rounded-2xl border border-white/15 bg-[#0b1f3f]/60 p-4 shadow-[0_12px_30px_rgba(2,12,30,0.35)]"
                            >
                              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                                {step.title}
                              </div>
                              <p className="mt-2 text-sm leading-relaxed text-slate-100/85">{step.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative mx-auto w-full max-w-[280px] rounded-[24px] border border-white/20 bg-[#031024]/80 p-6 text-center shadow-[0_20px_45px_rgba(3,16,36,0.45)]">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">KPIストーリー</div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-100/80">
                          生成AIが示す優先指標と改善幅を、診断士が意思決定に使えるストーリーへと翻訳。数値の裏側にある行動と交渉のポイントを一枚で共有します。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="group h-auto w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90"
                onClick={() => setIsDetailOpen((prev) => !prev)}
                aria-expanded={isDetailOpen}
                aria-controls="hero-detail-content"
              >
                <span className="flex items-center gap-2 text-[0.7rem] normal-case tracking-[0.08em] text-white/80 group-hover:text-white">
                  {isDetailOpen ? "詳細を閉じて概要に戻る" : "詳細を見る｜進め方と成果指標を確認"}
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isDetailOpen ? "rotate-90" : "translate-x-0",
                    )}
                    aria-hidden="true"
                  />
                </span>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <Button
                  type="button"
                  variant="cta"
                  size="lg"
                  className="interactive-cta h-auto rounded-full px-10 py-5 text-[1.05rem] font-bold shadow-[0_15px_40px_rgba(15,23,42,0.35)]"
                  onClick={scrollToContact}
                  data-cta-id={PRIMARY_CTA.id}
                  data-cta-attention="hero-primary"
                  data-cta-attention-delay="420"
                >
                  <span className="flex items-center gap-2">
                    {PRIMARY_CTA.label}
                    <ArrowRight className="cta-arrow h-5 w-5" aria-hidden="true" />
                    <CheckCircle2 className="cta-check h-5 w-5" aria-hidden="true" />
                  </span>
                </Button>
                <a
                  href={PHONE_TEL_LINK}
                  className={cn(
                    buttonVariants({ variant: "hero", size: "lg" }),
                    "call-now-button h-auto rounded-full border border-white/20 bg-transparent px-8 py-4 text-[1.05rem] font-semibold text-white/90 hover:bg-white/10",
                  )}
                  aria-label="電話で相談する"
                >
                  <Timer className="mr-2 h-5 w-5" aria-hidden="true" />
                  まずは48時間の初期診断から
                </a>
                <a
                  href={TERTIARY_CTA.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  {TERTIARY_CTA.label}
                </a>
              </div>
              <div className="grid gap-3 rounded-2xl border border-white/12 bg-white/5 p-4 text-left text-xs text-slate-100/80 md:grid-cols-3">
                {ctaTrustBadges.map(({ icon: Icon, headline, description }) => (
                  <div key={headline} className="flex items-start gap-3 rounded-xl bg-[#0b1f3f]/60 p-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-100">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                        {headline}
                      </p>
                      <p className="text-[0.78rem] leading-relaxed text-slate-100/80">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/80">
                代表・古町（中小企業診断士）が直接ヒアリング｜初回45分で論点を棚卸し、翌営業日に再生仮説と優先シナリオを提示
              </p>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-[0.75rem] uppercase tracking-[0.22em] text-cyan-100/80">
                {trustSignals.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                    <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                    <span className="font-semibold text-slate-100/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] items-stretch justify-center">
            <div className="relative w-full overflow-hidden rounded-[36px] border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(3,16,36,0.55)]">
              <img
                src={heroConsultingImage}
                alt="代表・古町が経営陣と再生戦略をホワイトボードで描き出している様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/85 via-[#041633]/30 to-transparent" aria-hidden="true" />
              <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/85 shadow-[0_18px_45px_rgba(2,10,28,0.35)]">
                Executive Session
              </div>
              <div className="absolute inset-x-5 bottom-5 space-y-3 rounded-3xl border border-white/15 bg-[#020b1c]/70 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">48h Discovery</p>
                <p className="text-sm leading-relaxed text-slate-100/85">
                  生成AIの示す優先指標を代表・古町が現場の温度感で補正。初回セッションで未来像とリスクラインを描き切ります。
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    48h仮説共有
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    週次レビュー設計
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
