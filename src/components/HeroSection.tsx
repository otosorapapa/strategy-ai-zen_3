import { Button, buttonVariants } from "@/components/ui/button";
import heroExecutiveBriefingImage from "@/assets/executive-strategy-meeting.jpg";
import heroGrowthMetricsImage from "@/assets/dashboard-preview.jpg";
import { PRIMARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { PHONE_TEL_LINK } from "@/lib/phone";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Landmark,
  LineChart,
  Target,
  Timer,
} from "lucide-react";

const heroValueBullets = [
  "現場の声と数字を一体に整理し、迷いを減らす判断基準を共通化",
  "生成AIが業界・顧客・コストを同時に読み解き、診断士が実行計画へ翻訳",
  "金融機関や取引先に堂々と示せる経営改善計画と管理アプリを短期間で整備",
];

const heroSummaryCards = [
  {
    icon: Timer,
    eyebrow: "初動",
    title: "Day0→Day2｜危険信号を即座に棚卸し",
    description: "生成AIが外部環境と社内数値を重ね、急ぎの打ち手と備えを可視化",
  },
  {
    icon: Landmark,
    eyebrow: "設計",
    title: "Day7｜未来に向けた設計図を言語化",
    description: "診断士がヒアリングを重ね、複数シナリオと判断根拠を整理",
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: "展開",
    title: "Day30｜対外説明まで伴走",
    description: "金融機関や主要取引先に胸を張って示せる資料と段取りを準備",
  },
];

const heroBoardroomInsights = [
  {
    label: "判断の土台",
    value: "全員が同じ景色を共有",
    description: "経営指標と現場ヒアリングをひとつの画面に束ね、議論の基準を揃える",
  },
  {
    label: "再生シナリオ",
    value: "複数の打ち手を提示",
    description: "投資余力と資金余裕を見える化し、次の行動を選びやすくする",
  },
  {
    label: "進行スピード",
    value: "初回会議で前進",
    description: "根拠資料と段取りが整い、議論を未来の選択へ集中できる",
  },
];

const heroImpactStats = [
  {
    icon: LineChart,
    value: "数字が語る",
    label: "粗利と資金の開きが同時に縮む体験を共有",
    helper: "6〜12カ月の伴走で得た声をもとに改善の道筋を検証",
  },
  {
    icon: Activity,
    value: "対話が締まる",
    label: "金融機関や取引先との協議が前倒しで進行",
    helper: "未来像と根拠を揃えて臨めるから交渉が迷わない",
  },
  {
    icon: Target,
    value: "決断が冴える",
    label: "合意形成までの時間を短縮",
    helper: "共通指標で議論できるので一歩先を示しやすい",
  },
];

const trustSignals = [
  { icon: Landmark, label: "中小企業庁 登録支援機関" },
  { icon: BriefcaseBusiness, label: "福岡発｜再生支援の伴走実績" },
  { icon: LineChart, label: "診断士が監修するAI経営改善支援" },
];

const heroIntroCopy = {
  short:
    "変化が続く中でも会社の未来を守り抜く——その意志に応えるために、生成AIが兆候を読み解き、中小企業診断士が現場の温度をつかみます。業界・競合・顧客の分析から管理アプリの設計、再生計画の言語化までを一気通貫で支援し、胸を張って示せる経営判断を整えます。",
};

const HeroSection = () => {
  const scrollToContact = () => {
    const target = document.getElementById("cta-section");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="fade-in-section section-spacing relative overflow-hidden bg-gradient-to-b from-[#020d21] via-[#062047] to-[#010713] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(104,194,255,0.24),_transparent_68%)]"
        aria-hidden="true"
      />
      <div className="layout-shell relative z-10 py-20">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.28em] text-[#7ec3ff]">
                福岡発｜生成AIと診断士の経営改善伴走
              </span>
              <h1 className="text-balance text-3xl font-bold leading-[1.45] md:text-4xl md:leading-[1.5] xl:text-[3.1rem]">
                未来を諦めない経営者の決断を守る。生成AIと診断士が貴社仕様の経営改善計画を描き切ります。
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-100/80 md:text-base">
                目的は、変化の波に揺られても堂々と次の一手を示せる状態をつくること。業界の兆しと自社の強みを重ね、意思決定の質と速さ、先を読む力を磨き上げます。
              </p>
            </div>

            <p className="max-w-3xl text-base leading-relaxed text-slate-100/85 md:text-lg">
              {heroIntroCopy.short}
            </p>

            <ul className="grid gap-3 text-left text-sm text-slate-100/85 md:grid-cols-2 md:text-[0.95rem]">
              {heroValueBullets.map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 shadow-[0_14px_32px_rgba(2,12,32,0.32)] transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-200">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
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

            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-[0.75rem] uppercase tracking-[0.22em] text-cyan-100/80">
              {trustSignals.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                  <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  <span className="font-semibold text-slate-100/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#041226]/90 shadow-[0_36px_90px_rgba(3,12,32,0.55)]">
              <img
                src={heroExecutiveBriefingImage}
                alt="代表・古町が経営陣とボードアジェンダを設計しているセッションの様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 space-y-3 bg-gradient-to-t from-[#020b1c]/95 via-[#041226]/60 to-transparent px-6 pb-6 pt-10 text-left">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/85">
                  Blueprint Preview
                </p>
                <p className="text-sm leading-relaxed text-slate-100/85">
                  48時間で抽出した資金圧迫の兆しと現場の制約条件を、一目で理解できる再生ボードに整理。次の会議で示せるドラフトが整います。
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/85">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    優先論点リスト
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    リスクライン付き
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/5 p-6 shadow-[0_28px_70px_rgba(3,16,36,0.45)]">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/90">
                再生ボード サンプル
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {heroBoardroomInsights.map(({ label, value, description }) => (
                  <div key={label} className="rounded-2xl border border-white/12 bg-[#0b1f3f]/60 p-4 text-left">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-cyan-100/80">{label}</p>
                    <p className="mt-1 text-xl font-bold text-white">{value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-100/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroImpactStats.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/15 bg-[#04152b]/80 p-5 text-left shadow-[0_20px_45px_rgba(2,12,30,0.4)] backdrop-blur"
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

            <div className="rounded-[28px] border border-white/12 bg-white/5 p-6 text-left shadow-[0_24px_65px_rgba(3,16,36,0.38)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-white/15 bg-[#031024]/70 md:w-40">
                  <img
                    src={heroGrowthMetricsImage}
                    alt="改善後の経営ダッシュボードのプレビュー"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#010713]/70 to-transparent" aria-hidden="true" />
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-slate-100/85">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    週次レビューと金融機関連携を一枚で
                  </p>
                  <p>
                    ダッシュボードと会議資料を同時更新し、役員・現場・金融機関が同じ根拠で会話できる状態をキープします。
                  </p>
                  <p className="text-xs text-slate-100/70">
                    伴走フェーズでは意思決定ログも残し、次の改善サイクルの起点まで滑らかに繋ぎます。
                  </p>
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
