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
    label: "利益改善スピード",
    value: 2.4,
    suffix: "倍",
    decimals: 1,
    duration: 1400,
    annotation: "重点事業の利益改善リードタイム（例）",
  },
  {
    label: "キャッシュ創出前倒し",
    value: 28,
    suffix: "日前",
    duration: 1600,
    annotation: "資金余力を確保できたタイミング（例）",
  },
  {
    label: "改善ロードマップ定着率",
    value: 93,
    suffix: "%",
    duration: 1800,
    annotation: "経営陣アンケートでの定着実感（例）",
  },
  {
    label: "会議準備の削減",
    value: 7,
    suffix: "時間/週",
    duration: 1900,
    annotation: "役員クラスが創出した時間（例）",
  },
];

const heroChecklist = [
  "粗利の伸び悩みとキャッシュ不足の原因が整理できず、会議が確認で終わる",
  "生成AIを導入したいが、社内データ整備と運用ルールの設計が追いつかない",
  "金融機関・幹部に説明する資料づくりに追われ、未来の打ち手が描けない",
];

const heroSolutionHighlights = [
  "診断士・会計士・データサイエンティストが48時間で現場ヒアリングとデータ棚卸しを実施。生成AIに学習させる指標と改善テーマを設計します",
  "粗利・在庫・キャッシュのシナリオをAIが週次で自動生成し、専門家が優先度とリスクをコメント。意思決定ボードが“今すぐ着手すべき2つ”を提示します",
  "改善の進捗・根拠データ・金融機関向け資料を自動更新。全員が同じ地図で動けるよう運用ルールと教育コンテンツまで伴走します",
];

const servicePillars = [
  {
    icon: BrainCircuit,
    title: "戦略×データ統合設計",
    description:
      "経営課題とデータ構造を同時に棚卸し。粗利・キャッシュ・現場KPIの因果を定義し、生成AIが学習できる判断フレームを組み上げます。",
  },
  {
    icon: BarChart3,
    title: "生成AI改善スタジオ",
    description:
      "施策の根拠と数値シナリオをAIが生成し、専門家がチェック。週次レポートと意思決定ボードで、迷いのない指示を出すための材料を整えます。",
  },
  {
    icon: PiggyBank,
    title: "キャッシュ＆投資マネジメント",
    description:
      "資金繰り・投資計画・金融機関資料をひとつのワークフローに。キャッシュ確保と攻めの投資判断を両立させる運用を標準化します。",
  },
];

const proofPoints = [
  {
    icon: ShieldCheck,
    title: "監査可能な意思決定ログ",
    description:
      "AIが提示した施策の根拠データと承認履歴を自動保存。経営会議や金融機関への説明にも流用できる透明性を備えています。",
  },
  {
    icon: BarChart3,
    title: "週次エグゼクティブレビュー",
    description:
      "専門家が週次でレポートと意思決定ボードをレビュー。優先順位・リスク・アクションを整理し、経営陣の判断を前倒しにします。",
  },
  {
    icon: BrainCircuit,
    title: "現場定着プログラム",
    description:
      "会議体・教育コンテンツ・プロンプトを整備し、社内チームが自走できる状態まで伴走。生成AIの活用ルールも標準化します。",
  },
];

const aiVisualHighlights = [
  {
    icon: LineChart,
    title: "利益改善シナリオ",
    description:
      "価格改定・需要変動・原価を組み替えた3パターンを比較。粗利とキャッシュへの波及を同時に確認できます。",
  },
  {
    icon: PieChart,
    title: "キャッシュ確保レーダー",
    description:
      "資金残高・借入余力・投資計画を重ね、危険ラインに触れる前に代替案を提示します。",
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
                    年商1億〜30億円企業特化
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-accent">
                    生成AI×専門家伴走
                  </span>
                </div>
                <h1 className="text-balance text-3xl font-bold leading-[1.2] text-foreground md:text-4xl xl:text-[3.2rem] xl:leading-[1.15]">
                  生成AIと専門家が同じチームで走る経営改善サービス「Strategy AI ZEN」
                </h1>
                <p className="max-w-3xl text-[1.05rem] leading-relaxed text-muted-foreground md:text-lg">
                  変動する市況、複雑化する商流、AI活用への期待。経営が迷う時間を減らし、利益とキャッシュを同時に積み上げるには、データと現場の知恵を一枚の地図にまとめる必要があります。Strategy AI ZENは、生成AIと経営改善の専門家が一体となって週次で計画を刷新。判断の根拠とタイミングを整え、経営陣が胸を張って次の一手を語れる状態をつくります。
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
                      背景：粗利とキャッシュのズレが経営判断を鈍らせ、AI活用も構想止まりになりがちです。約束する成果：生成AIと専門家が粗利+2.4倍の改善スピード／キャッシュ創出28日前倒し／会議準備▲7時間（例）を狙う改善基盤を構築します。進め方：48時間で現状棚卸し→週次でシナリオ提示→運用ルールまで伴走し、組織全体が同じ仮説で動ける状態を整えます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">整理したい経営課題</p>
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
                    データ・現場・意思決定の断絶を10分で棚卸しし、AI活用に必要な要件を整理します。
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl border border-highlight/30 bg-gradient-to-br from-white via-highlight/5 to-highlight/15 p-6 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-highlight-foreground/80">AIが提示するシナリオ</p>
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
                    根拠・数字・アクションプランを1枚に集約し、判断のスピードと納得感を高めます。
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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">信頼の構造</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">ダッシュボードの一例</p>
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
