import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import heroStrategicMeetingImage from "@/assets/executive-strategy-meeting.jpg";
import heroDashboardImage from "@/assets/hero-dashboard-analytics.jpg";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Goal,
  Landmark,
  LayoutDashboard,
  LineChart,
  Network,
  PlayCircle,
  ShieldCheck,
  Sparkle,
  Target,
  Timer,
} from "lucide-react";

const heroBullets = [
  "財務・顧客・現場データを束ねて、判断材料を瞬時に見渡せる状態へ整える。",
  "診断士がAIの提案を現場仕様に翻訳し、迷いなく進められる行動計画を描く。",
  "週次のレビューでダッシュボードと資料を同時更新し、社内外に胸を張って伝えられる状況を保つ。",
];

const blueprintSteps = [
  {
    title: "初動（〜1週）｜全体スキャン",
    description: "粗利・資金・人員の指標を洗い出し、優先順位と危険サインを整理",
  },
  {
    title: "設計（〜1ヶ月）｜打ち手の絞り込み",
    description: "現場ヒアリングとAI分析を突き合わせ、実行可能な改善ストーリーを固める",
  },
  {
    title: "伴走（〜6ヶ月）｜更新と共有",
    description: "会議資料とダッシュボードを週次で更新し、対内外への説明を滑らかに保つ",
  },
];

const trustSignals = [
  { icon: Landmark, label: "中小企業庁 登録支援機関" },
  { icon: BriefcaseBusiness, label: "再生・改善案件の伴走実績多数" },
  { icon: LineChart, label: "現場運用と財務管理を統合した支援体制" },
  { icon: Timer, label: "48時間以内の初回レポート共有" },
];

const heroValueBullets = [
  "経営判断に必要な指標を一画面に集約",
  "生成AIと診断士が行動の優先度を調整",
  "銀行面談にそのまま使える資料を整備",
];

const heroSummaryCards = [
  {
    icon: Timer,
    eyebrow: "要約 01",
    title: "48時間で優先論点を提示",
    description: "資金と粗利の危険サインをヒートマップで即把握",
  },
  {
    icon: Sparkle,
    eyebrow: "要約 02",
    title: "現場が動ける改善計画を共創",
    description: "ヒアリングで実行条件を確認し、会議資料とタスクに反映",
  },
  {
    icon: Landmark,
    eyebrow: "要約 03",
    title: "社外説明にそのまま使える設計図",
    description: "銀行やパートナーとの対話に必要な根拠資料を一本化",
  },
];

const heroImpactStats = [
  {
    icon: LineChart,
    value: "改善実感",
    label: "利益と資金のギャップが縮む手応え",
    helper: "6〜12ヶ月の伴走で多くの経営者が実感した声",
  },
  {
    icon: Activity,
    value: "再生に前進",
    label: "金融機関との協議が滑らかに進む",
    helper: "根拠を共有することで交渉の主導権を取り戻した事例",
  },
  {
    icon: Target,
    value: "判断が速い",
    label: "合意形成までの時間が短くなる",
    helper: "共通の指標で議論できるため迷いが減少",
  },
];

const heroReasonHighlights = [
  {
    icon: Compass,
    eyebrow: "Reason 01",
    title: "中堅・中小企業の現場を熟知",
    description:
      "財務と現場のギャップを把握した診断士が、規模に合わせた改善ロードマップを48時間で提示",
  },
  {
    icon: LayoutDashboard,
    eyebrow: "Reason 02",
    title: "AIと経験知を一体化",
    description:
      "AIの示す選択肢を経験値で補正し、役員・現場・金融機関で共有できる設計図を整える",
  },
  {
    icon: Landmark,
    eyebrow: "Reason 03",
    title: "説明責任まで伴走",
    description:
      "会議資料・交渉資料・日次の進捗を一枚にまとめ、常に堂々と説明できる状態へ導く",
  },
];

const heroVideoSummary = {
  url: "https://www.youtube.com/embed/2Xc9gXyf2G4?rel=0&autoplay=0&mute=1",
  title: "90秒でわかるAI×診断士の伴走イメージ",
  description:
    "無料相談から6ヶ月の伴走までの流れをストーリー形式で紹介。どのタイミングでAIと専門家が支えるかを把握できます。",
  highlights: [
    "初回ヒアリングで確認する論点と必要データ",
    "AIヒートマップと改善計画ドラフトのサンプル",
    "銀行面談や取引先説明までのマイルストーン",
  ],
};

const heroProcessSteps = [
  {
    icon: Compass,
    title: "無料相談（約45分）",
    description: "課題と目指す姿を棚卸しし、AI診断に必要なデータと進め方を整理",
  },
  {
    icon: Sparkle,
    title: "初期診断（約48時間）",
    description: "粗利・資金・人員のリスクと伸び代を可視化し、優先度付きの改善仮説を提示",
  },
  {
    icon: Landmark,
    title: "伴走フェーズ",
    description: "週次レビューと社外説明支援で、行動と成果のズレを解消",
  },
];

const heroPainScenarios = [
  "黒字でも資金が残らず、銀行面談で説得力ある説明が求められている",
  "生成AIの検証は進んだが、現場の指標と結びつかず成果が見えない",
  "改善計画の提出期限が迫り、資料づくりと現場調整が追いつかない",
];

const heroPainSummaryTags = [
  "黒字でも資金が残らない",
  "AI投資が利益とつながらない",
  "改善計画の締切が迫る",
];

const heroIntroCopy = {
  short:
    "AIの資金繰りシミュレーションと診断士の設計力で、半年以内に胸を張って示せる経営改善計画をつくり上げる。",
  extended:
    "生成AIが財務・需要・稼働データの歪みを抽出し、診断士がストーリーと根拠を統合。銀行向け資料と現場タスクを同じダッシュボードで運用し、判断の迷いと伝達の手戻りを減らす。投資判断やパートナー協議まで一気通貫で支え、着実に動ける体制を定着させる。",
};

const ctaTrustBadges = [
  {
    icon: Landmark,
    headline: "福岡銀行グループ連携",
    description: "金融機関レビュー向け資料を共同整備",
  },
  {
    icon: BriefcaseBusiness,
    headline: "伴走実績 多数",
    description: "改善計画・再生支援で培った知見を提供",
  },
  {
    icon: LineChart,
    headline: "交渉の根拠を共通化",
    description: "銀行交渉に耐えるKPIとストーリーを提示",
  },
];

const heroMethodPillars = [
  {
    icon: Network,
    title: "因果マップで論点を構造化",
    description:
      "粗利・資金繰り・人員稼働の因果関係を可視化し、優先すべきボトルネックを一目で把握",
  },
  {
    icon: Goal,
    title: "AI×診断士で打ち手を検証",
    description:
      "AIが提案した施策を診断士が現場条件と照合し、実行可能性とリスクを即時評価",
  },
  {
    icon: ShieldCheck,
    title: "金融機関基準で裏付け",
    description:
      "稟議で求められる根拠資料までセットで提示し、交渉まで抜け漏れなく支援",
  },
];

const heroVisualSignals = [
  {
    label: "財務の歪み",
    value: "17項目",
    description: "債務超過や資金ショートを誘発する論点をレッドラインで提示",
  },
  {
    label: "シナリオ比較",
    value: "12パターン",
    description: "AIダッシュボードで粗利とキャッシュの推移を瞬時に試算",
  },
  {
    label: "稟議通過率",
    value: "94%",
    description: "再生案件の稟議・条件変更で承認された割合（直近3年）",
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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div className="space-y-12">
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
              <div className="grid gap-4 text-left sm:grid-cols-2 xl:grid-cols-3">
                {heroMethodPillars.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-white/10 p-4 shadow-[0_16px_38px_rgba(3,16,36,0.4)] backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {title}
                    </div>
                    <p className="text-xs leading-relaxed text-slate-100/85">{description}</p>
                  </div>
                ))}
              </div>
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

          <div className="relative mx-auto flex w-full max-w-[560px] items-stretch justify-center">
            <div className="relative w-full overflow-hidden rounded-[38px] border border-white/15 bg-white/5 shadow-[0_36px_95px_rgba(2,12,32,0.6)]">
              <img
                src={heroStrategicMeetingImage}
                alt="代表・古町が経営陣と再生戦略のボードを前に議論している様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/90 via-[#051836]/45 to-transparent" aria-hidden="true" />
              <div className="absolute left-6 top-6 space-y-3 rounded-3xl border border-white/20 bg-[#04122b]/70 p-4 shadow-[0_20px_55px_rgba(2,10,28,0.45)] backdrop-blur">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/85">因果シミュレーション</p>
                <div className="space-y-2 text-left text-xs leading-relaxed text-slate-100/85">
                  <p>AIが抽出したキャッシュ阻害要因を、診断士が意思決定シナリオに翻訳。</p>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Heatmap &amp; Dashboard Review</p>
                </div>
              </div>
              <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/85 shadow-[0_18px_45px_rgba(2,10,28,0.35)]">
                Executive Session
              </div>
              <div className="absolute inset-x-5 bottom-5 space-y-4 rounded-3xl border border-white/15 bg-[#020b1c]/75 p-5 backdrop-blur">
                <div className="grid gap-4 rounded-2xl border border-white/15 bg-[#04122b]/85 p-4 shadow-[0_20px_55px_rgba(2,12,30,0.45)]">
                  <img
                    src={heroDashboardImage}
                    alt="AIダッシュボードで財務シナリオを比較している画面"
                    className="h-36 w-full rounded-xl object-cover"
                    loading="lazy"
                  />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/80">シナリオ比較ダッシュボード</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {heroVisualSignals.map(({ label, value, description }) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/15 bg-white/10 p-3 text-left text-xs text-slate-100/80 shadow-[0_12px_32px_rgba(2,12,30,0.35)]"
                      >
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/80">{label}</p>
                        <p className="text-lg font-bold text-white">{value}</p>
                        <p className="mt-1 leading-relaxed">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
