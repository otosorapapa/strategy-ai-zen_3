import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Briefcase,
  Calculator,
  CalendarClock,
  Cpu,
  Gauge,
  Percent,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type SimulatorInputs = {
  monthlyRevenue: number;
  grossMargin: number;
  manualHours: number;
  cashOnHand: number;
  aiUsage: number;
};

const defaultInputs: SimulatorInputs = {
  monthlyRevenue: 35,
  grossMargin: 28,
  manualHours: 14,
  cashOnHand: 3,
  aiUsage: 18,
};

const chartConfig = {
  revenue: {
    label: "売上高 (百万円)",
    color: "hsl(217 90% 60%)",
  },
  cash: {
    label: "キャッシュ創出 (百万円)",
    color: "hsl(152 70% 45%)",
  },
} as const;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const formatMillions = (value: number) => `${value.toFixed(1)} 百万円`;
const formatSignedMillions = (value: number) => `${value >= 0 ? "+" : "-"}${Math.abs(value).toFixed(1)} 百万円`;
const formatPercent = (value: number) => `${value.toFixed(1)}%`;

const yAxisLabelStyle: CSSProperties = {
  fill: "rgba(15, 23, 42, 0.55)",
  fontSize: 11,
  fontWeight: 600,
};

type SliderDefinition = {
  key: keyof SimulatorInputs;
  label: string;
  description: string;
  icon: LucideIcon;
  min: number;
  max: number;
  step: number;
  unitSuffix?: string;
  minLabel?: string;
  maxLabel?: string;
  iconAccent: string;
  tone: string;
  formatValue?: (value: number) => string;
};

const sliderDefinitions: SliderDefinition[] = [
  {
    key: "monthlyRevenue",
    label: "月間売上高",
    description: "現在の月次売上規模（税抜ベース）を選択してください。",
    icon: BarChart3,
    min: 5,
    max: 150,
    step: 1,
    unitSuffix: "百万円",
    minLabel: "5",
    maxLabel: "150+",
    iconAccent: "bg-sky-500/10 text-sky-600",
    tone: "text-sky-600",
    formatValue: (value) => `${value.toLocaleString()} 百万円`,
  },
  {
    key: "grossMargin",
    label: "粗利率",
    description: "粗利率が高いほどキャッシュ創出ポテンシャルが高まります。",
    icon: Percent,
    min: 10,
    max: 60,
    step: 1,
    unitSuffix: "%",
    minLabel: "10",
    maxLabel: "60",
    iconAccent: "bg-emerald-500/10 text-emerald-600",
    tone: "text-emerald-600",
  },
  {
    key: "manualHours",
    label: "経営者が数字整理に使う時間（週あたり）",
    description: "財務・業績データを整える時間。自動化により意思決定へ再投資できます。",
    icon: Timer,
    min: 4,
    max: 30,
    step: 1,
    unitSuffix: "時間",
    minLabel: "4",
    maxLabel: "30",
    iconAccent: "bg-amber-500/10 text-amber-600",
    tone: "text-amber-600",
  },
  {
    key: "cashOnHand",
    label: "手元資金の保有月数",
    description: "固定費をどれだけ賄えるかの指標です。資金繰り余力を確認しましょう。",
    icon: ShieldCheck,
    min: 1,
    max: 12,
    step: 1,
    unitSuffix: "か月",
    minLabel: "1",
    maxLabel: "12",
    iconAccent: "bg-indigo-500/10 text-indigo-600",
    tone: "text-indigo-600",
  },
  {
    key: "aiUsage",
    label: "現在のAI活用度",
    description: "定例業務で生成AIやRPAを活用している割合を教えてください。",
    icon: Cpu,
    min: 0,
    max: 80,
    step: 1,
    unitSuffix: "%",
    minLabel: "0",
    maxLabel: "80",
    iconAccent: "bg-purple-500/10 text-purple-600",
    tone: "text-purple-600",
  },
];

const executiveStats: { icon: LucideIcon; label: string; value: string; description: string }[] = [
  {
    icon: Briefcase,
    label: "対象規模",
    value: "年商5,000万円〜10億円未満",
    description: "複数事業や地方拠点を抱える成長企業の意思決定速度を補強",
  },
  {
    icon: CalendarClock,
    label: "推奨導入期間",
    value: "最短6週間で検証・効果測定",
    description: "1〜2回の経営会議サイクルで定量評価まで実施",
  },
  {
    icon: Gauge,
    label: "伴走体制",
    value: "専属コンサル + AIアナリスト",
    description: "経営/現場/ファイナンスを横断した実務家チームが伴走",
  },
];

const executiveHighlights: { title: string; description: string }[] = [
  {
    title: "因果構造まで可視化",
    description:
      "粗利率・受注残・運転資金の連動を定量モデル化し、キャッシュ創出レバーを瞬時に提示。",
  },
  {
    title: "論点とアクションを同画面で提示",
    description:
      "AIが想定リスクと打ち手候補をロジックツリー化。経営会議での決裁資料へ即転用できます。",
  },
  {
    title: "納得性の高い検証プロセス",
    description:
      "現場ヒアリング → データ補正 → シミュレーション検証を並行実施し、合意形成を加速。",
  },
  {
    title: "スマートな運用シナリオ",
    description:
      "生成AIが更新頻度と責任者を提案。Slack・Notionなど既存ツールに統合し属人化を排除。",
  },
];

const AIDiagnosticSimulator = () => {
  const [inputs, setInputs] = useState<SimulatorInputs>(defaultInputs);

  const baselineGrossProfit = useMemo(
    () => (inputs.monthlyRevenue * inputs.grossMargin) / 100,
    [inputs.monthlyRevenue, inputs.grossMargin],
  );

  const estimatedImpact = useMemo(() => {
    const revenueLiftRate = 0.02 + inputs.manualHours / 220 + Math.max(0, 60 - inputs.aiUsage) / 520;
    const estimatedRevenueLift = inputs.monthlyRevenue * revenueLiftRate;

    const executionEfficiency = inputs.manualHours * 0.65 + 4;
    const decisionTimeSaved = Math.round(executionEfficiency);

    const cashSafetyBoost =
      baselineGrossProfit * 0.28 +
      estimatedRevenueLift * 0.55 +
      Math.max(0, 8 - inputs.cashOnHand) * 0.4;

    const readinessScore = clamp(
      35 +
        inputs.manualHours * 1.7 +
        Math.max(0, 8 - inputs.cashOnHand) * 4.2 +
        Math.max(0, 70 - inputs.aiUsage) * 0.55 +
        Math.min(22, inputs.grossMargin * 0.35),
      18,
      100,
    );

    return {
      revenueLift: Number(estimatedRevenueLift.toFixed(1)),
      cashLift: Number(cashSafetyBoost.toFixed(1)),
      decisionTimeSaved,
      readinessScore,
    };
  }, [baselineGrossProfit, inputs.cashOnHand, inputs.grossMargin, inputs.manualHours, inputs.monthlyRevenue, inputs.aiUsage]);

  const chartData = useMemo(() => {
    const { revenueLift, cashLift } = estimatedImpact;
    const halfwayRevenue = inputs.monthlyRevenue + revenueLift * 0.6;
    const halfwayCash = baselineGrossProfit * 0.55 + cashLift * 0.55;

    return [
      {
        stage: "現状",
        revenue: inputs.monthlyRevenue,
        cash: baselineGrossProfit * 0.55,
      },
      {
        stage: "AI導入3カ月",
        revenue: halfwayRevenue,
        cash: halfwayCash,
      },
      {
        stage: "AI導入6カ月",
        revenue: inputs.monthlyRevenue + revenueLift,
        cash: baselineGrossProfit * 0.55 + cashLift,
      },
    ];
  }, [baselineGrossProfit, estimatedImpact, inputs.monthlyRevenue]);

  const readinessTone = estimatedImpact.readinessScore >= 75 ? "text-emerald-600" : "text-amber-600";

  const chartSummary = useMemo(() => {
    const current = chartData[0];
    const future = chartData[chartData.length - 1];

    const revenueDelta = future.revenue - current.revenue;
    const cashDelta = future.cash - current.cash;

    return {
      revenueCurrent: current.revenue,
      revenueFuture: future.revenue,
      revenueDelta,
      revenueGrowthRate: current.revenue ? (revenueDelta / current.revenue) * 100 : 0,
      cashCurrent: current.cash,
      cashFuture: future.cash,
      cashDelta,
      cashGrowthRate: current.cash ? (cashDelta / current.cash) * 100 : 0,
    };
  }, [chartData]);

  const handleSliderChange = (key: keyof SimulatorInputs) => (value: number[]) => {
    setInputs((previous) => ({
      ...previous,
      [key]: Number(value[0]),
    }));
  };

  const scrollToCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ai-simulator" className="fade-in-section bg-sky-50/60 py-14 md:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-primary/10">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            AI診断シミュレーター
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold text-slate-900 md:text-4xl">
            3つの数字を入力するだけで、AIが提案する意思決定サポートの効果を可視化
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            現状の売上・粗利率・経営時間を入力すると、生成AIがどの程度まで判断材料を整えられるかを予測します。
            あくまで経営者の最終判断を補助するシナリオとして表示され、根拠データとともにグラフでダウンロード可能です。
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
          <ScrollReveal className="h-full" variant="fade-up">
            <Card className="h-full border-primary/20 bg-white/95 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-left text-2xl font-bold text-slate-900">
                  <Calculator className="h-6 w-6 text-primary" aria-hidden="true" />
                  会社の現状を入力
                </CardTitle>
                <CardDescription className="text-left text-base leading-relaxed">
                  スライダーを動かすと診断結果がリアルタイムで更新されます。数字はおおよその値でも構いません。
                </CardDescription>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                  <Badge variant="secondary" className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    信頼できる予測レンジ
                  </Badge>
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                    データは社内レポートにエクスポート可能
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Timer className="h-3.5 w-3.5 text-sky-500" aria-hidden="true" />
                    入力所要時間 約30秒
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-6 shadow-inner lg:p-8">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute bottom-0 left-8 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl" aria-hidden="true" />
                  <div className="relative grid gap-8 lg:grid-cols-[1.15fr_minmax(0,0.85fr)] lg:items-start">
                    <div className="space-y-6 text-left">
                      <Badge className="rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-slate-900/20">
                        Executive Insights
                      </Badge>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-slate-900 lg:text-2xl">
                          6カ月以内にキャッシュ創出を実現する意思決定ブループリント
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-slate-600">
                          入力条件に応じて、AIが最も効果的な成長レバーとキャッシュ創出シナリオを算出。
                          「因果性」「再現性」「実行体制」の3軸で優先順位を提示し、経営陣の納得感と現場の動きやすさを両立させます。
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {executiveHighlights.map(({ title, description }) => (
                          <div
                            key={title}
                            className="group rounded-2xl border border-slate-200/60 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                              {title}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                              {description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-2xl border border-slate-200/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                              意思決定の納得度（導入企業中央値）
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              AIが提示したシナリオの経営会議採択率
                            </p>
                          </div>
                          <p className="text-3xl font-bold text-slate-900 sm:text-4xl">93%</p>
                        </div>
                        <Progress value={93} className="mt-3 h-2 bg-slate-200" />
                        <span className="sr-only">93%</span>
                        <p className="mt-2 text-xs text-slate-500">
                          定量データと現場ヒアリングの両輪でロジックを検証し、反対意見を事前に潰すフローを実装します。
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      {executiveStats.map(({ icon: Icon, label, value, description }) => (
                        <div
                          key={label}
                          className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                        >
                          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                          <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/5 text-slate-900">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div className="space-y-1">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                {label}
                              </p>
                              <p className="text-base font-bold text-slate-900">{value}</p>
                              <p className="text-sm text-slate-500">{description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-white to-emerald-100/60 p-5 shadow-inner">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                              導入後6カ月の成果指標例
                            </p>
                            <p className="mt-2 text-sm text-slate-600">
                              営業キャッシュフロー +24%、在庫回転日数 -18%、意思決定時間 -36%
                            </p>
                          </div>
                          <div className="hidden shrink-0 rounded-full bg-white/70 p-3 shadow-sm sm:block">
                            <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="mt-4 grid gap-3 sm:grid-cols-3">
                          <div className="rounded-xl bg-white/80 p-3 text-center shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">キャッシュ貢献</p>
                            <p className="text-lg font-bold text-slate-900">+¥48M</p>
                          </div>
                          <div className="rounded-xl bg-white/80 p-3 text-center shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">意思決定速度</p>
                            <p className="text-lg font-bold text-slate-900">1/2</p>
                          </div>
                          <div className="rounded-xl bg-white/80 p-3 text-center shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">リスク顕在化</p>
                            <p className="text-lg font-bold text-slate-900">▼32%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6">
                  {sliderDefinitions.map(({
                    key,
                    label,
                    description,
                    icon: Icon,
                    min,
                    max,
                    step,
                    unitSuffix,
                    minLabel,
                    maxLabel,
                    iconAccent,
                    tone,
                    formatValue,
                  }) => {
                    const value = inputs[key];
                    const formattedValue = formatValue ? formatValue(value) : `${value} ${unitSuffix ?? ""}`.trim();

                    return (
                      <div
                        key={key}
                        className="group rounded-3xl border border-slate-200/70 bg-slate-50/70 p-5 shadow-sm transition-colors hover:border-primary/40 hover:bg-white"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex flex-1 items-start gap-3">
                            <span className={cn("flex h-11 w-11 items-center justify-center rounded-full", iconAccent)}>
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{label}</p>
                              <p className="mt-1 text-xs text-slate-500">{description}</p>
                            </div>
                          </div>
                          <div className={cn("rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm", tone)}>
                            {formattedValue}
                          </div>
                        </div>
                        <Slider
                          value={[Number(value)]}
                          onValueChange={handleSliderChange(key)}
                          min={min}
                          max={max}
                          step={step}
                          className="mt-5"
                          aria-label={label}
                        />
                        <div className="mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          <span>{minLabel ?? `${min}`}{unitSuffix ? ` ${unitSuffix}` : ""}</span>
                          <span>{maxLabel ?? `${max}`}{unitSuffix ? ` ${unitSuffix}` : ""}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="h-full" variant="fade-up" delay={80}>
            <Card className="h-full border-sky-200/70 bg-white/95 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-left text-2xl font-bold text-slate-900">
                  <span className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-sky-500" aria-hidden="true" />
                    診断結果
                </span>
                <span className={cn("text-lg font-semibold", readinessTone)}>
                  改善余地 {estimatedImpact.readinessScore}%
                </span>
              </CardTitle>
              <CardDescription className="text-left text-base leading-relaxed">
                生成AIと管理会計を組み合わせた場合の6カ月後シナリオ。売上とキャッシュ創出の伸び率を視覚的に確認できます。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-3xl bg-sky-50/80 p-6 shadow-inner">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-sky-600 shadow-sm">
                    売上 × キャッシュの推移
                  </span>
                  <span className="text-slate-500">単位: 百万円</span>
                </div>
                <ChartContainer config={chartConfig} className="h-[220px]">
                  <ResponsiveContainer>
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-revenue)" stopOpacity={0.45} />
                          <stop offset="95%" stopColor="var(--color-revenue)" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="cashGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-cash)" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="var(--color-cash)" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="4 4" stroke="rgba(15, 118, 230, 0.12)" vertical={false} />
                      <XAxis dataKey="stage" stroke="rgba(15, 23, 42, 0.4)" tickLine={false} axisLine={false} />
                      <YAxis
                        stroke="rgba(15, 23, 42, 0.4)"
                        tickFormatter={(value) => `${value}`}
                        tickLine={false}
                        width={54}
                        label={{
                          value: "百万円",
                          angle: -90,
                          position: "insideLeft",
                          offset: -4,
                          style: yAxisLabelStyle,
                        }}
                      />
                      <ChartTooltip
                        cursor={{ strokeDasharray: "4 4" }}
                        content={
                          <ChartTooltipContent
                            formatter={(value, name) => {
                              const numericValue = typeof value === "number" ? value : Number(value);
                              const label = chartConfig[name as keyof typeof chartConfig]?.label ?? name;
                              return [`${numericValue.toFixed(1)} 百万円`, label];
                            }}
                          />
                        }
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        strokeWidth={2.4}
                        fill="url(#revenueGradient)"
                        dot={{ strokeWidth: 2, r: 4 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="cash"
                        stroke="var(--color-cash)"
                        strokeWidth={2.4}
                        fill="url(#cashGradient)"
                        dot={{ strokeWidth: 2, r: 4 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-sky-200/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">現状の売上</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{formatMillions(chartSummary.revenueCurrent)}</p>
                  <p className="text-xs text-muted-foreground">粗利率 {inputs.grossMargin}% / 月間</p>
                </div>
                <div className="rounded-2xl border border-sky-200/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">6カ月後の売上</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{formatMillions(chartSummary.revenueFuture)}</p>
                  <p className="text-xs text-emerald-600">{formatSignedMillions(chartSummary.revenueDelta)} / {formatPercent(chartSummary.revenueGrowthRate)}</p>
                </div>
                <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">キャッシュ創出</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{formatMillions(chartSummary.cashFuture)}</p>
                  <p className="text-xs text-emerald-600">現状比 {formatSignedMillions(chartSummary.cashDelta)} / {formatPercent(chartSummary.cashGrowthRate)}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/15 bg-white/90 p-4 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-semibold text-sky-600">
                    <TrendingUp className="h-4 w-4" aria-hidden="true" />
                    推定売上改善額（6カ月）
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{formatMillions(estimatedImpact.revenueLift)}</p>
                  <p className="text-sm text-muted-foreground">AIシナリオの平均成長率を3〜6%と仮定した場合の増分です。</p>
                </div>
                <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/60 p-4 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-semibold text-emerald-700">
                    <Gauge className="h-4 w-4" aria-hidden="true" />
                    キャッシュ創出見込み（6カ月）
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{formatMillions(estimatedImpact.cashLift)}</p>
                  <p className="text-sm text-muted-foreground">粗利改善・余剰在庫削減・資金繰り最適化による効果を含みます。</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
                <div className="rounded-2xl border border-sky-200/70 bg-white/90 p-4 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-semibold text-sky-700">
                    <Timer className="h-4 w-4" aria-hidden="true" />
                    週あたり意思決定に再投資できる時間
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">約 {estimatedImpact.decisionTimeSaved} 時間</p>
                  <p className="text-sm text-muted-foreground">生成AIが定例レポートと分析を担当することで、社長が戦略に集中できます。</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-white/90 p-4 shadow-sm">
                  <div className="flex items-center gap-3 text-sm font-semibold text-primary">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    AI導入レディネス
                  </div>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{estimatedImpact.readinessScore}%</p>
                  <Progress
                    value={estimatedImpact.readinessScore}
                    className="mt-4 h-3 bg-slate-200"
                    indicatorClassName="bg-gradient-to-r from-sky-500 to-emerald-500"
                    aria-label="AI導入レディネス"
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    80%以上なら、14指標の仮診断で具体的なKPI設計とキャッシュ改善ロードマップをご案内します。
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/15 bg-slate-50/80 p-5">
                <div className="max-w-xl text-left text-sm leading-relaxed text-muted-foreground">
                  診断結果はメールでお送りするテンプレートに保存できます。担当コンサルタントが貴社の実際の財務データに当てはめ、
                  投資優先順位とキャッシュ創出計画を60分でご提案します。
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  className="interactive-cta"
                  onClick={scrollToCta}
                  data-cta-attention="simulator-cta"
                  data-cta-attention-delay="360"
                >
                  30分相談で結果を深掘りする
                </Button>
              </div>
                </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnosticSimulator;
