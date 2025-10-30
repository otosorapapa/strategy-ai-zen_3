import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import financialAnalysisImage from "@/assets/financial-analysis.jpg";
import cashflowImage from "@/assets/solution-illustration.jpg";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  LayoutDashboard,
  MonitorSmartphone,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from "lucide-react";

const chartConfig = {
  manual: {
    label: "従来の準備時間",
    color: "hsl(217 62% 55%)",
  },
  ai: {
    label: "AIが整理した時間",
    color: "hsl(156 62% 45%)",
  },
} as const;

type Metric = {
  label: string;
  value: string;
  helper: string;
  tone: "emerald" | "sky" | "amber";
};

type DemoFrame = {
  id: string;
  label: string;
  description: string;
  chart: Array<{ stage: string; manual: number; ai: number }>;
  metrics: Metric[];
};

type DemoScenario = {
  id: string;
  label: string;
  description: string;
  accent: string;
  image: string;
  imageAlt: string;
  frames: DemoFrame[];
};

const metricToneClass: Record<Metric["tone"], string> = {
  emerald: "text-emerald-600",
  sky: "text-sky-600",
  amber: "text-amber-600",
};

type ExperienceHighlight = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

const experienceHighlights: ExperienceHighlight[] = [
  {
    icon: LayoutDashboard,
    title: "経営判断の全貌を1画面に",
    description: "粗利・キャッシュ・現場課題をクロス集計し、意思決定の裏付けをワンクリックで提示します。",
    accent: "from-sky-100 via-white to-primary/10",
  },
  {
    icon: Brain,
    title: "AI根拠のドリルダウン",
    description: "AIが選定した要因分析を瞬時に展開。会議中の「なぜ？」に根拠データで即応できます。",
    accent: "from-emerald-100 via-white to-emerald/10",
  },
  {
    icon: ShieldCheck,
    title: "レポート統制と履歴",
    description: "ダッシュボード内で議事録・打ち手履歴を自動保存。金融機関や役員への共有も1クリックです。",
    accent: "from-indigo-100 via-white to-secondary/10",
  },
];

const quickStats = [
  {
    label: "判断スピード",
    value: "3.4x",
    helper: "AIサマリーで意思決定までのリードタイムを短縮",
  },
  {
    label: "経営会議満足度",
    value: "+29pt",
    helper: "根拠の可視化で議論の納得感を向上",
  },
  {
    label: "投資対効果",
    value: "215%",
    helper: "導入後6ヶ月の平均ROI（導入企業実績）",
  },
];

const formatHours = (value: number | string) =>
  typeof value === "number" ? `${value.toFixed(0)}h` : `${value}`;

const demoScenarios: DemoScenario[] = [
  {
    id: "dashboard",
    label: "AI経営ダッシュボード",
    description:
      "粗利やキャッシュドライバーをAIがリアルタイムに整理し、経営会議で使える資料として提示するデモです。",
    accent: "from-sky-300 via-primary to-emerald-400",
    image: financialAnalysisImage,
    imageAlt: "成長率の比較を示すAIダッシュボードのグラフ",
    frames: [
      {
        id: "baseline",
        label: "現状の会議準備",
        description: "資料集めと分析に追われ、判断材料が揃うまでに時間がかかる状態。",
        chart: [
          { stage: "資料収集", manual: 36, ai: 16 },
          { stage: "指標分析", manual: 28, ai: 12 },
          { stage: "意思決定", manual: 18, ai: 10 },
        ],
        metrics: [
          { label: "資料作成時間", value: "36h → 16h", helper: "週20時間削減", tone: "emerald" },
          { label: "粗利差異の可視化", value: "3指標 → 9指標", helper: "見逃しゼロへ", tone: "sky" },
          { label: "会議準備の心理的負荷", value: "高 → 中", helper: "AIが根拠を添付", tone: "amber" },
        ],
      },
      {
        id: "projection",
        label: "AI提示シナリオ",
        description: "生成AIが粗利・キャッシュ・需要を組み合わせたシナリオを提示。優先施策を自動で整理します。",
        chart: [
          { stage: "資料収集", manual: 18, ai: 10 },
          { stage: "指標分析", manual: 14, ai: 8 },
          { stage: "意思決定", manual: 9, ai: 6 },
        ],
        metrics: [
          { label: "提案スピード", value: "45分 → 12分", helper: "AIが差分を要約", tone: "emerald" },
          { label: "会議で採用される施策", value: "52% → 81%", helper: "根拠付きで可視化", tone: "sky" },
          { label: "リスク検知", value: "翌週 → 当日", helper: "異常値を即アラート", tone: "amber" },
        ],
      },
      {
        id: "execution",
        label: "実行モニタリング",
        description: "着地のブレをAIが日次で補正し、実行計画とキャッシュ影響を同じ画面で追跡します。",
        chart: [
          { stage: "資料収集", manual: 14, ai: 8 },
          { stage: "指標分析", manual: 10, ai: 6 },
          { stage: "意思決定", manual: 6, ai: 4 },
        ],
        metrics: [
          { label: "キャッシュ誤差", value: "±12% → ±3%", helper: "日次で補正", tone: "emerald" },
          { label: "経営会議時間", value: "120分 → 75分", helper: "要点を要約", tone: "sky" },
          { label: "現場ヒアリング", value: "翌日共有", helper: "ボトルネックを自動記録", tone: "amber" },
        ],
      },
    ],
  },
  {
    id: "cash",
    label: "資金繰りシナリオ",
    description:
      "資金繰り表と投資余力をAIが更新し、金融機関とのコミュニケーションに使える資料を自動で用意するデモです。",
    accent: "from-emerald-400 via-teal-400 to-sky-500",
    image: cashflowImage,
    imageAlt: "資金繰りの流れと指標を可視化したダッシュボード",
    frames: [
      {
        id: "baseline",
        label: "資金繰りの整理",
        description: "口座残高とExcelの転記で追い付かず、意思決定が後手に回っている状態。",
        chart: [
          { stage: "残高確認", manual: 18, ai: 8 },
          { stage: "シミュレーション", manual: 22, ai: 12 },
          { stage: "打ち手整理", manual: 16, ai: 9 },
        ],
        metrics: [
          { label: "資金繰り表作成時間", value: "56h → 29h", helper: "27時間削減", tone: "emerald" },
          { label: "資金ショート予測", value: "2週前 → 6週前", helper: "早期警戒", tone: "sky" },
          { label: "担当者の負担感", value: "高 → 中", helper: "AIが入力補完", tone: "amber" },
        ],
      },
      {
        id: "projection",
        label: "投資余力の試算",
        description: "借入返済と投資計画を組み合わせ、AIが判断材料をグラフィカルに提示します。",
        chart: [
          { stage: "残高確認", manual: 12, ai: 7 },
          { stage: "シミュレーション", manual: 16, ai: 9 },
          { stage: "打ち手整理", manual: 10, ai: 6 },
        ],
        metrics: [
          { label: "投資判断までの時間", value: "10日 → 3日", helper: "根拠資料を自動生成", tone: "emerald" },
          { label: "資金余力", value: "+8.2%", helper: "余力を可視化", tone: "sky" },
          { label: "金融機関との共有", value: "メール添付 → ダッシュボード共有", helper: "履歴を自動保存", tone: "amber" },
        ],
      },
      {
        id: "execution",
        label: "金融機関連携",
        description: "金融機関との面談前にAIが論点とQ&Aを整理し、当日の議事録まで自動生成します。",
        chart: [
          { stage: "残高確認", manual: 9, ai: 6 },
          { stage: "シミュレーション", manual: 12, ai: 7 },
          { stage: "打ち手整理", manual: 8, ai: 5 },
        ],
        metrics: [
          { label: "議事録作成", value: "180分 → 35分", helper: "AIがドラフト作成", tone: "emerald" },
          { label: "稟議スピード", value: "2週間 → 5日", helper: "根拠が共有済み", tone: "sky" },
          { label: "ヒアリング漏れ", value: "20項目を自動フォロー", helper: "質問集を生成", tone: "amber" },
        ],
      },
    ],
  },
];

const animationIntervalMs = 3400;

const AIDemoExperienceSection = () => {
  const [scenarioId, setScenarioId] = useState<DemoScenario["id"]>(demoScenarios[0].id);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scenario = useMemo(
    () => demoScenarios.find((item) => item.id === scenarioId) ?? demoScenarios[0],
    [scenarioId],
  );

  const frame = scenario.frames[frameIndex] ?? scenario.frames[0];

  const timelineSummary = useMemo(() => {
    const manualTotal = frame.chart.reduce((sum, point) => sum + point.manual, 0);
    const aiTotal = frame.chart.reduce((sum, point) => sum + point.ai, 0);
    const totalReduction = manualTotal - aiTotal;
    const reductionPercent = manualTotal === 0 ? 0 : Math.round((totalReduction / manualTotal) * 100);
    const efficiencyRatio = aiTotal === 0 ? 0 : manualTotal / aiTotal;
    const pointsWithDelta = frame.chart.map((point) => ({
      ...point,
      delta: point.manual - point.ai,
    }));
    const defaultStage = { stage: "-", manual: 0, ai: 0, delta: 0 };
    const topStage = pointsWithDelta.length
      ? pointsWithDelta.reduce((prev, point) => (point.delta > prev.delta ? point : prev))
      : defaultStage;

    return {
      manualTotal,
      aiTotal,
      totalReduction,
      reductionPercent,
      efficiencyRatio: efficiencyRatio ? Number(efficiencyRatio.toFixed(1)) : 0,
      topStage,
    };
  }, [frame]);

  const gradientIds = useMemo(
    () => ({
      manual: `gradient-manual-${scenario.id}-${frame.id}`,
      ai: `gradient-ai-${scenario.id}-${frame.id}`,
    }),
    [frame.id, scenario.id],
  );

  useEffect(() => {
    setFrameIndex(0);
  }, [scenario]);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timer = window.setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % scenario.frames.length);
    }, animationIntervalMs);

    return () => window.clearInterval(timer);
  }, [isPlaying, scenario.frames.length]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const progress = ((frameIndex + 1) / scenario.frames.length) * 100;

  return (
    <section className="fade-in-section relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative mx-auto px-3 sm:px-4">
        <ScrollReveal className="mx-auto max-w-4xl text-center" variant="fade">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm ring-1 ring-primary/10">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            生成AIデモを体験
          </span>
          <h2 className="mt-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
            インタラクティブなダッシュボードでAIの提案根拠と操作感を確認
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            シナリオを切り替えると、AIがレポートをどう組み立て、どの指標を強調するのかが分かります。忙しい経営者でも片手操作で判断材料を確認できるよう、モバイル最適化と視線誘導を徹底しました。
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" variant="fade-up" delay={60}>
          {experienceHighlights.map((item) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-primary/10 bg-white/80 p-6 text-left shadow-sm transition",
                "hover:-translate-y-1 hover:shadow-elegant",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  `bg-gradient-to-br ${item.accent}`,
                )}
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <ScrollReveal className="space-y-6" variant="fade-up">
            <Card className="border-primary/25 bg-white/90 shadow-card">
              <CardContent className="space-y-6 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-left text-base font-semibold text-primary/80">シナリオを選択</p>
                    <p className="text-xs text-muted-foreground">AIが用意した意思決定ストーリーを切り替えて比較</p>
                  </div>
                  <div className="flex flex-wrap gap-2" role="tablist" aria-label="AIデモシナリオ">
                    {demoScenarios.map((item) => (
                      <Button
                        key={item.id}
                        type="button"
                        variant="outline"
                        size="sm"
                        role="tab"
                        aria-selected={scenario.id === item.id}
                        className={cn(
                          "rounded-full border-2 px-4 py-2 text-xs font-semibold transition-all",
                          scenario.id === item.id
                            ? "border-primary bg-white text-primary shadow-sm"
                            : "border-muted/40 bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary",
                        )}
                        onClick={() => {
                          setScenarioId(item.id);
                          setIsPlaying(true);
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-secondary/10 p-5 shadow-inner">
                  <h3 className="text-lg font-bold text-foreground">{frame.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{frame.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    type="button"
                    variant="cta"
                    size="lg"
                    className="interactive-cta rounded-full px-6 py-4 text-sm font-bold"
                    onClick={() => setIsPlaying((prev) => !prev)}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4" aria-hidden="true" />
                        一時停止
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" aria-hidden="true" />
                        デモを再生
                      </>
                    )}
                  </Button>
                  <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm ring-1 ring-primary/10">
                    <MonitorSmartphone className="h-4 w-4 text-primary" aria-hidden="true" />
                    モバイルでも同じ操作感
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 rounded-full bg-primary/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500"
                      style={{ width: `${progress}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                    {frameIndex + 1} / {scenario.frames.length} シーン
                  </p>
                </div>
              </CardContent>
            </Card>

            <ScrollReveal className="grid gap-4 md:grid-cols-3" variant="fade" delay={40}>
              {frame.metrics.map((metric) => (
                <div
                  key={`${frame.id}-${metric.label}`}
                  className="flex flex-col gap-2 rounded-2xl border border-dashed border-primary/20 bg-white/85 p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">{metric.label}</p>
                  <p className={cn("text-2xl font-bold", metricToneClass[metric.tone])}>{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.helper}</p>
                </div>
              ))}
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal className="space-y-6" variant="fade-up" delay={80}>
            <div className="relative rounded-[36px] border border-primary/20 bg-white/95 p-6 shadow-elegant">
              <div
                className={cn(
                  "demo-screen overflow-hidden border border-primary/15",
                  "bg-gradient-to-br",
                  scenario.accent,
                )}
                aria-hidden="true"
              >
                <img
                  src={scenario.image}
                  alt={scenario.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl border border-primary/10 bg-white/85 p-4 shadow-inner">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="h-5 w-5 text-primary" aria-hidden="true" />
                    <p className="text-sm font-semibold text-primary/80">リアルタイムで推移するダッシュボード</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    グラフはスクロールに合わせてふわりとフェードイン。会議中に気になる指標をタップすると、AIが説明を表示し、そのまま次の
                    アクションをアサインできます。
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-primary/10 bg-white/80 p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground/90">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.helper}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[36px] border border-primary/20 bg-white/95 p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <TimerReset className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">シミュレーションの挙動を見る</h3>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Comparison Timeline</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                マウスオーバーやタップで、AIがどのデータを根拠に意思決定をサポートしているかを確認できます。ホバーアニメーションで視線
                を誘導し、過剰な動きは避けつつ落ち着いたリズムで演出しました。
              </p>
              <div className="mt-5 space-y-5 rounded-3xl border border-primary/15 bg-gradient-to-r from-white via-primary/5 to-secondary/20 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    {Object.entries(chartConfig).map(([key, item]) => (
                      <div
                        key={key}
                        className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm ring-1 ring-primary/10"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: `var(--color-${key})` }}
                          aria-hidden="true"
                        />
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
                    <span className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-white to-emerald/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-primary">
                      AI削減率
                      <span className="text-sm font-bold text-foreground">-{timelineSummary.reductionPercent}%</span>
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-muted-foreground shadow-sm ring-1 ring-primary/10">
                      合計削減 {formatHours(timelineSummary.totalReduction)}
                    </span>
                  </div>
                </div>
                <ChartContainer config={chartConfig} className="h-[280px] w-full rounded-2xl bg-white/70 p-4 shadow-inner">
                  <ResponsiveContainer>
                    <AreaChart data={frame.chart} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
                      <defs>
                        <linearGradient id={gradientIds.manual} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-manual)" stopOpacity={0.42} />
                          <stop offset="100%" stopColor="var(--color-manual)" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id={gradientIds.ai} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-ai)" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="var(--color-ai)" stopOpacity={0.08} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 8" stroke="hsl(215 33% 82%)" />
                      <XAxis dataKey="stage" tickLine={false} axisLine={false} tick={{ fill: "hsl(215 23% 36%)", fontSize: 11 }} />
                      <YAxis tickLine={false} axisLine={false} width={36} tick={{ fill: "hsl(215 23% 36%)", fontSize: 11 }} />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent formatter={(value) => [formatHours(value), "工数"]} />}
                      />
                      <Area
                        type="monotone"
                        dataKey="manual"
                        stroke="var(--color-manual)"
                        fill={`url(#${gradientIds.manual})`}
                        strokeWidth={2.5}
                        dot={{ r: 3.5, strokeWidth: 1.5, stroke: "white" }}
                        isAnimationActive
                      />
                      <Area
                        type="monotone"
                        dataKey="ai"
                        stroke="var(--color-ai)"
                        fill={`url(#${gradientIds.ai})`}
                        strokeWidth={2.5}
                        dot={{ r: 3.5, strokeWidth: 1.5, stroke: "white" }}
                        isAnimationActive
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <div className="grid gap-4 pt-2 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/10 bg-white/85 p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/70">総工数</p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      従来 {formatHours(timelineSummary.manualTotal)} → AI {formatHours(timelineSummary.aiTotal)}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      AIを使うと準備時間が{timelineSummary.reductionPercent}%圧縮され、会議前の負荷を軽減します。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white/85 p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/70">最大インパクト工程</p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      {timelineSummary.topStage.stage}
                      <span className="ml-1 text-base font-bold text-emerald-600">
                        -{formatHours(timelineSummary.topStage.delta)}
                      </span>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      因果グラフで優先度を提示し、担当者の再入力を不要化します。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white/85 p-4 shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/70">経営判断スピード</p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      効率 {timelineSummary.efficiencyRatio.toFixed(1)}x
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      根拠データと説明文を1クリックで取得し、納得感ある決裁を即日実現します。
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  ※ デモでは実データを匿名加工しています。数値はシナリオに合わせて自動で変化します。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AIDemoExperienceSection;
