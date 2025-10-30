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
    label: "意思決定リードタイム",
    value: 48,
    suffix: "%短縮",
    duration: 1400,
    annotation: "週次会議〜決裁の短縮幅（例）",
  },
  {
    label: "粗利率の底上げ",
    value: 5.2,
    suffix: "pt",
    decimals: 1,
    duration: 1600,
    annotation: "重点商材の粗利率改善幅（例）",
  },
  {
    label: "資金ショック検知",
    value: 30,
    suffix: "日前",
    duration: 1800,
    annotation: "危険ラインの前倒し検知幅（例）",
  },
  {
    label: "経営者の創出時間",
    value: 9,
    suffix: "時間/週",
    duration: 1900,
    annotation: "判断準備から削減（例）",
  },
];

const heroChecklist = [
  "仕入れ条件や商流の変化が同時に起き、計画修正が常に後追いになる",
  "粗利とキャッシュの差異要因を言語化できず、会議が確認作業で終わる",
  "現場データが統一されず、経営陣が判断に使う時間を資料収集に奪われる",
];

const heroSolutionHighlights = [
  "経営会議の論点を専属の中小企業診断士が棚卸し、生成AIが粗利・資金・需要の先読みモデルを構築。判断の迷いと不安を一掃する設計図を整えます",
  "週次のAIレポートと意思決定ボードで、判断リードタイム▲48%・粗利率+5.2pt（例）を同時に狙う実行計画を共有。経営陣が胸を張って選択を伝えられる環境を築きます",
  "初回30分の相談でデータ連携と成果指標を決め、翌営業日に優先打ち手の検証メモを提示。その瞬間から堂々と指揮できる下準備を完了させます",
];

const servicePillars = [
  {
    icon: BrainCircuit,
    title: "意思決定フレーム設計",
    description:
      "役員会・管理部門・現場の聞き取りから論点と制約条件を洗い出し、粗利・資金・需要の因果パターンと優先順位を定義。判断が迷子にならない設計図を用意し、トップが迷いなく指示できる流れを整えます。",
  },
  {
    icon: BarChart3,
    title: "生成AIダッシュボード",
    description:
      "粗利率・在庫回転・資金余力を1画面で更新。AIが提示する施策には根拠データと感度分析（例）を添え、経営判断に必要な証跡を揃えて安心感を支えます。",
  },
  {
    icon: PiggyBank,
    title: "キャッシュ先読み",
    description:
      "需給シナリオと支払条件の変化を取り込み、手元資金の安全圏と投資余力を30日前倒しで可視化（例）。経営会議で迷いなく判断できるストーリーを整えます。",
  },
];

const proofPoints = [
  {
    icon: ShieldCheck,
    title: "根拠の可視化",
    description:
      "AIが提示する施策に因果グラフとデータ出典を必ず添付。判断プロセスと監査ログを残し、社内外のステークホルダーに自信を持って共有できる透明性を確保します。",
  },
  {
    icon: BarChart3,
    title: "週次レビュー",
    description:
      "専門家が週1回のレポートと意思決定ボードを整備。リスクと機会の優先度を色分けし、次の手を迷わず決められるよう支援します。",
  },
  {
    icon: BrainCircuit,
    title: "運用定着",
    description:
      "会議体・KPI・教育コンテンツを整備し、社内チームだけで運用できる状態まで伴走。生成AIの利用ルールも標準化して継続性を高め、日常の判断力が磨かれ続ける仕組みを残します。",
  },
];

const aiVisualHighlights = [
  {
    icon: LineChart,
    title: "粗利シナリオ比較",
    description: "為替・需給・価格改定の前提を変えた粗利シナリオを即時計算し、施策ごとのインパクトを定量比較。会議で迷わず決断でき、指示の言葉に力が宿ります。",
  },
  {
    icon: PieChart,
    title: "資金余力アラート",
    description: "30日・60日・90日先の資金曲線と借入余力を予測し、警戒ラインを下回る前に代替案を提示。安心して攻めの投資を選べます。",
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
                    年商5,000万円～15億円企業限定
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-accent">
                    3ヶ月集中プログラム
                  </span>
                </div>
                <h1 className="text-balance text-3xl font-bold leading-[1.2] text-foreground md:text-4xl xl:text-[3.2rem] xl:leading-[1.15]">
                  判断の質・速さ・先読み力を一度に底上げする経営計画伴走
                </h1>
                <p className="max-w-3xl text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                  原材料や商流の急変、競合の価格攻勢、生成AIを巡るスピード競争。変化が交差するなかで判断が遅れれば、粗利とキャッシュだけでなく、経営チームの誇りや勢いまで揺らぎます。株式会社創和経営コンサルティング（福岡）は、現場を熟知した中小企業診断士と生成AIを組み合わせ、経営計画を週次で更新。意思決定の根拠とタイミングを揃え、経営陣が迷わず方針を伝えられる状態をつくります。
                </p>
              </div>

              <div className="rounded-3xl border border-primary/20 bg-white/90 p-6 shadow-card">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkle className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                      エグゼクティブサマリー
                    </p>
                    <p className="text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                      背景：需給と取引条件が同時に揺れると、判断が遅れた瞬間に利益機会と組織の勢いが失われます。約束する成果：中小企業診断士と生成AIが粗利+5.2pt／在庫回転+24％／判断リードタイム▲48％（例）を同時に狙える意思決定基盤を構築し、経営陣が胸を張って前に進める土台を固めます。進め方：週次レポートと意思決定ボードで根拠・優先順位・打ち手を一体化し、その場で行動に移せる準備を整えます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                    整理したい経営課題
                  </p>
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
                    現場の一次情報と会計データを同期し、意思決定を遅らせる要因を10分で棚卸しします。
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl border border-highlight/30 bg-gradient-to-br from-white via-highlight/5 to-highlight/15 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-highlight-foreground/80">
                    AIが提示するシナリオ
                  </p>
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
                    根拠・数字・実行ロードマップを1枚に並べ、迷いなく判断できる状態をつくります。
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  伴走メニュー
                </p>
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
                    お電話で診断予約
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
                    月額18万円〜
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
                  初回相談は無料｜オンライン・訪問どちらも対応｜所要30分
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[40px] border border-primary/20 bg-white shadow-elegant">
                <img
                  src={heroImage}
                  alt="AIと管理会計で経営の意思決定を支援するコンサルティングチーム"
                  className="h-full max-h-[440px] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-sky-900/10 via-transparent to-white/65" aria-hidden="true" />
                <div className="absolute inset-x-6 bottom-6 flex flex-col gap-4 rounded-3xl bg-white/85 p-4 shadow-xl backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                    導入後イメージ
                  </p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  成果指標
                </p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  信頼の構造
                </p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                  ダッシュボードの一例
                </p>
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
