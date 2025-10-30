import { Button, buttonVariants } from "@/components/ui/button";
import heroImage from "@/assets/financial-analysis.jpg";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import AnimatedCounter from "@/components/AnimatedCounter";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  JapaneseYen,
  LineChart,
  Lock,
  Phone,
  PiggyBank,
  PieChart,
  ShieldCheck,
  Sparkle,
  Timer,
} from "lucide-react";

const heroStats = [
  {
    label: "改善サイクルの短縮",
    value: 3.1,
    suffix: "倍",
    decimals: 1,
    duration: 1400,
    annotation: "利益計画のアップデート頻度（例）",
  },
  {
    label: "キャッシュ安心余力",
    value: 42,
    suffix: "日前",
    duration: 1600,
    annotation: "資金ショック検知のリードタイム（例）",
  },
  {
    label: "AI提案の採択率",
    value: 87,
    suffix: "%",
    duration: 1800,
    annotation: "経営会議で採用されたAI提案（例）",
  },
  {
    label: "会議資料作成時間",
    value: 68,
    suffix: "%削減",
    duration: 1900,
    annotation: "経営会議資料の作成工数（例）",
  },
];

const heroChecklist = [
  "全社KPIが部門ごとにズレ、粗利・キャッシュ・人員のストーリーを語れない",
  "生成AIのユースケースが点在し、現場の判断に使えるテンプレートが整わない",
  "金融機関や主要取引先への説明資料が属人化し、交渉と意思決定が後手に回る",
];

const heroSolutionHighlights = [
  "経営陣と専門家が『ZENナビゲーションボード』を共同設計。生成AIが粗利・キャッシュ・人員の因果を学習し、変化を即座に可視化します",
  "週次のエグゼクティブスタンドアップでAIが施策シナリオとリスクを提示。専門家が優先順位と合意形成を支援し、そのまま現場に配信します",
  "会議ログ・金融機関連携資料・教育コンテンツを自動生成。全員が同じ判断材料で動ける運用ルールまで伴走します",
];

const servicePillars = [
  {
    icon: BrainCircuit,
    title: "意思決定キャンバス設計",
    description:
      "経営課題・KPI・データ粒度を棚卸しし、生成AIが学習する判断フレームを構築。因果パスとリスク指標を1枚の図に整理します。",
  },
  {
    icon: BarChart3,
    title: "シナリオ＆実行スタジオ",
    description:
      "粗利・キャッシュ・需要シナリオをAIが生成し、専門家が論理性を検証。週次レビューと実行ボードで迷いのない指示を出せます。",
  },
  {
    icon: PiggyBank,
    title: "金融・組織ガバナンス",
    description:
      "資金繰り計画・金融機関資料・教育プログラムを標準化。投資判断と現場浸透を両立させる運用ルールを実装します。",
  },
];

const proofPoints = [
  {
    icon: ShieldCheck,
    title: "監査対応の判断ログ",
    description:
      "AIが提示した根拠データと承認履歴を自動保存。金融機関・取締役会・監査対応の説明にそのまま転用できます。",
  },
  {
    icon: BarChart3,
    title: "週次エグゼクティブレビュー",
    description:
      "専門家が週次でシナリオと実行状況をレビュー。判断遅延の兆候を先読みし、優先アクションを明確化します。",
  },
  {
    icon: BrainCircuit,
    title: "現場共創プログラム",
    description:
      "会議体・プロンプト・教育コンテンツを整備し、自走できる社内チームを育成。AI活用の統制と浸透を同時に実現します。",
  },
];

const aiVisualHighlights = [
  {
    icon: LineChart,
    title: "ZENシグナルマップ",
    description:
      "粗利・需要・在庫の揺らぎをヒートマップで表示。警戒ラインと期待インパクトを色面で把握できます。",
  },
  {
    icon: PieChart,
    title: "キャッシュバリアウォール",
    description:
      "資金残高・借入余力・投資枠を重ね、危険水域に触れる前に代替案と交渉ポイントを提示します。",
  },
];

const HeroSection = () => {
  const scrollToContact = () => {
    const ctaSection = document.getElementById("cta-section");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section section-spacing relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-slate-100/50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-curve-overlay" />
        <div className="hero-aurora hero-aurora--one" />
        <div className="hero-aurora hero-aurora--two" />
        <div className="hero-aurora hero-aurora--three" />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        <div className="layout-shell">
          <div className="space-y-12 lg:grid lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-highlight/15 px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-highlight-foreground">
                    年商1〜50億円 成長フェーズ特化
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-accent">
                    生成AI×専門家×経営改善
                  </span>
                </div>
                <h1 className="text-balance text-3xl font-bold leading-[1.2] text-foreground md:text-4xl xl:text-[3.2rem] xl:leading-[1.15]">
                  生成AIと専門家が経営判断を共創する「ZEN Strategic Navigator」
                </h1>
                <p className="max-w-3xl text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                  市況が揺れ、投資判断のスピードが問われる今。粗利・キャッシュ・現場の知恵を同じキャンバスに重ねなければ、AI活用も数字管理も成果につながりません。ZEN Strategic Navigatorは生成AIと専門家がひとつのチームとなり、週次で意思決定をアップデート。リーダーが「なぜ今動くのか」を語れる状態を継続的にデザインします。
                </p>
              </div>

              <div className="rounded-3xl border border-primary/20 bg-white/90 p-6 shadow-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkle className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">エグゼクティブサマリー</p>
                    <p className="text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                      背景：市況変動と人材不足で判断が後ろ倒しになり、AI活用も実務に落ちないケースが急増。約束する成果：生成AIと専門家が改善サイクル3.1倍・キャッシュ余力+42日前倒し・会議資料作成▲68%（例）を狙う意思決定基盤を構築。進め方：48時間で現在地を棚卸し→週次でシナリオと実行を共創→金融機関・現場の合意形成まで伴走します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">優先して整えたい論点</p>
                  <ul className="space-y-3">
                    {heroChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-left text-[0.95rem] leading-relaxed text-muted-foreground">
                        <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-highlight/20 text-[0.75rem] font-bold text-highlight-foreground">
                          ●
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                    データ・現場・金融の断絶を10分で可視化し、AI活用と経営改善の必須要件を揃えます。
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl border border-highlight/30 bg-gradient-to-br from-white via-highlight/5 to-highlight/15 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-highlight-foreground/80">AIが描く実行シナリオ</p>
                  <div className="space-y-3">
                    {heroSolutionHighlights.map((item) => (
                      <p key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-3 text-[0.95rem] leading-relaxed text-foreground/90 shadow-sm">
                        <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-highlight-foreground/70">
                    根拠・論点・実行を1枚に集約し、スピードと納得感を同時に引き上げます。
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">伴走メニュー</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {servicePillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="space-y-3 rounded-3xl border border-primary/15 bg-white/96 p-5 shadow-card"
                      >
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{pillar.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-5 rounded-3xl border border-primary/15 bg-white/96 p-6 shadow-card">
                <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                  <Button
                    variant="cta"
                    size="lg"
                    className="interactive-cta h-auto rounded-full px-10 py-5 text-[1.05rem] font-bold"
                    onClick={scrollToContact}
                    data-cta-id={PRIMARY_CTA.id}
                    data-cta-attention="hero-primary"
                    data-cta-attention-delay="420"
                    aria-label="30分相談を予約する"
                  >
                    <span className="flex items-center gap-2">
                      {PRIMARY_CTA.label}
                      <ArrowRight className="cta-arrow h-5 w-5" aria-hidden="true" />
                      <CheckCircle2 className="cta-check h-5 w-5" aria-hidden="true" />
                    </span>
                  </Button>
                  <a
                    href={PHONE_TEL_LINK}
                    aria-label="電話で30分相談を予約"
                    className={cn(
                      buttonVariants({ variant: "hero", size: "lg" }),
                      "call-now-button h-auto rounded-full px-8 py-4 text-[1.05rem] font-semibold shadow-card transition-transform duration-300 hover:-translate-y-0.5",
                    )}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    お電話で相談
                  </a>
                  <a
                    href={TERTIARY_CTA.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-white to-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    {TERTIARY_CTA.label}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Timer className="h-3.5 w-3.5" aria-hidden="true" />
                    60秒で申込完了
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <JapaneseYen className="h-3.5 w-3.5" aria-hidden="true" />
                    月額20万円〜
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    初月トライアル設計
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    NDA対応
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground/80">
                  初回相談は無料｜オンライン・訪問どちらも対応｜ZEN専門家が直接ヒアリング
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-white shadow-elegant">
                <img
                  src={heroImage}
                  alt="生成AIと専門家が経営改善の意思決定を支援するチーム"
                  className="h-full max-h-[440px] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-900/10 via-transparent to-white/65" aria-hidden="true" />
                <div className="absolute inset-x-6 bottom-6 flex flex-col gap-4 rounded-3xl bg-white/85 p-4 shadow-xl backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">導入後イメージ</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroStats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-primary/5 p-4 text-center">
                        <AnimatedCounter
                          value={stat.value}
                          decimals={stat.decimals}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          duration={stat.duration}
                          className="mx-auto text-2xl font-black text-primary"
                        />
                        <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-primary/15 bg-white/95 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">成果指標</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-primary/10 bg-white/90 p-4 text-center shadow-sm">
                      <AnimatedCounter
                        value={stat.value}
                        decimals={stat.decimals}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={stat.duration}
                        className="mx-auto text-[2.1rem] font-black text-primary"
                      />
                      <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                        {stat.label}
                      </p>
                      {stat.annotation && (
                        <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-muted-foreground/70">
                          {stat.annotation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-primary/15 bg-gradient-to-r from-white via-sky-50/90 to-sky-100/60 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">実現のための保証</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {proofPoints.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="space-y-3 rounded-2xl border border-primary/15 bg-white/90 p-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                        <p className="text-[0.85rem] leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-slate-50/80 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">ZENダッシュボードの一例</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {aiVisualHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col gap-2 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-inner transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    );
                  })}
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
