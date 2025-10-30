import {
  AlertTriangle,
  ArrowUpRight,
  BrainCircuit,
  CalendarClock,
  DollarSign,
  LineChart,
  Network,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import problemInfographic from "@/assets/problem-infographic.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { cn } from "@/lib/utils";

type PainPoint = {
  title: string;
  quote: string;
  reasons: string[];
  risk: string;
  focus: string;
  icon: React.ComponentType<{ className?: string }>;
  priority?: number;
};

type StoryFlowItem = {
  stage: string;
  icon: React.ComponentType<{ className?: string }>;
  headline: string;
  copy: string;
  metrics: string[];
};

type ExecutiveSignal = {
  label: string;
  metric: string;
  note: string;
  icon: React.ComponentType<{ className?: string }>;
};

const pains: PainPoint[] = [
  {
    title: "粗利は積み上がるのに資金が残らない",
    quote: "会議のたびに資金繰りの読み替えを指示され、判断が常に後追いです。",
    reasons: [
      "粗利・在庫・入出金のデータが部門ごとに閉じ、更新タイミングも揃わない",
      "資金繰りシミュレーションを手作業で回し、30日先の資金波形が共有されていない",
      "価格シナリオを経験則で決めており、利益率と需要の弾力を同時に検証できない",
    ],
    risk: "短期資金ショックで投資判断が止まり、金融機関への説明責任も果たせない",
    focus: "生成AIが粗利とキャッシュの差異要因を常時解析し、意思決定ボードへ即時反映",
    icon: DollarSign,
    priority: 5,
  },
  {
    title: "営業判断が属人化し勝ち筋が読めない",
    quote: "商談ヒアリングの要点が人ごとに違い、社長決裁まで時間がかかる。",
    reasons: [
      "顧客接点データがExcelとメールに散在し、AIで会話を横断分析できない",
      "案件スコアリングの指標がなく、値引きや優先順位が担当者の経験に依存している",
      "ナレッジ共有のワークフローが構築されず、生成AIの要約やFAQが活用されない",
    ],
    risk: "高粗利案件の決裁が遅れ、営業人材の育成コストと離職率が同時に上がる",
    focus: "商談ログをAIが構造化し、勝ち筋プレイブックと次アクションを自動提案",
    icon: Network,
    priority: 4,
  },
  {
    title: "回収と在庫が読めずキャッシュが滞留",
    quote: "入金サイトが変わるたびに数値を集め直し、会議が確認だけで終わります。",
    reasons: [
      "販売・在庫・与信データが分断され、AI需要予測の学習サイクルが回っていない",
      "調達・生産計画が慣習に頼り、在庫アラートや欠品シミュレーションが即時計算できない",
      "請求と回収の情報更新が月次で止まり、資金波形のズレを即検知できない",
    ],
    risk: "資金が棚卸資産に寝て新規投資が遅れ、サプライチェーンの信用も揺らぐ",
    focus: "AI需要予測と調達ルールを連動させ、在庫・回収・資金繰りを一枚で管理",
    icon: CalendarClock,
    priority: 4,
  },
  {
    title: "人材が定着せず戦略が回らない",
    quote: "育成指標が示せず、判断材料を準備するだけで管理職が疲弊しています。",
    reasons: [
      "スキルマップと評価指標が可視化されず、AIによる習熟度診断ができない",
      "OJTコンテンツが属人化し、生成AIでのマイクロラーニング教材化が進まない",
      "エンゲージメントや離職兆候のデータが点在し、予兆管理の会議が形骸化している",
    ],
    risk: "キーパーソンの離脱でプロジェクトが停滞し、採用・教育コストが雪だるま式に増加",
    focus: "AIパーソナライズ学習と組織診断ダッシュボードで、判断会議の再現性を高める",
    icon: Users,
  },
  {
    title: "金融機関との対話が属人で途切れる",
    quote: "面談準備に時間を取られ、本業の改善と意思決定が後回しになります。",
    reasons: [
      "財務ストーリーや資金繰り見通しが部署ごとに分散し、最新数値を一元管理できていない",
      "借入条件やモニタリング論点の履歴が残らず、関係者間で期待値を共有できない",
      "面談ログの要点が整理されず、AIで交渉材料を抽出する仕組みが用意されていない",
    ],
    risk: "信用評価が下がり、追加融資や条件交渉のタイミングを逃して資金計画が遅延",
    focus: "生成AIで財務ストーリーと交渉履歴を標準化し、対話サイクルを高速化",
    icon: AlertTriangle,
  },
];

const executiveSignals: ExecutiveSignal[] = [
  {
    label: "意思決定リードタイム",
    metric: "+12日（例）",
    note: "会議準備にかかるデータ収集時間が分散し、経営ボードの判断が後ろ倒し",
    icon: CalendarClock,
  },
  {
    label: "粗利と資金の乖離",
    metric: "▲24%",
    note: "粗利が積み上がっても資金波形が遅行し、先行投資の意思決定が止まる",
    icon: DollarSign,
  },
  {
    label: "重要KPIの不一致",
    metric: "68%",
    note: "営業・財務・現場でモニタリング指標がバラバラになり、議論が噛み合わない",
    icon: Network,
  },
  {
    label: "金融機関との停滞",
    metric: "+3回/期",
    note: "対話ログが属人化し、条件交渉とモニタリングのアップデートが遅延",
    icon: ShieldCheck,
  },
];

const PainAccordionItem = ({ pain, index }: { pain: PainPoint; index: number }) => {
  const Icon = pain.icon;
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({ threshold: 0.3 });

  return (
    <AccordionItem
      ref={ref}
      value={`pain-${index}`}
      className={cn(
        "overflow-hidden rounded-[32px] border border-primary/15 bg-gradient-to-br from-white via-white to-secondary/10 shadow-card transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <AccordionTrigger className="px-6 py-6 hover:no-underline focus:outline-none">
        <div className="flex w-full flex-col gap-5 text-left sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-start">
            <span className="inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary/80">
                <span>CAUSE → EFFECT</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold leading-snug text-foreground lg:text-[1.75rem]">{pain.title}</h3>
              <p className="text-base italic text-muted-foreground">"{pain.quote}"</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 rounded-2xl border border-primary/20 bg-white/80 px-4 py-3 text-left shadow-sm sm:w-56">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">優先度</span>
            <span className="text-lg font-bold text-primary">{pain.priority ?? index + 1}</span>
            <span className="text-xs text-muted-foreground">判断遅延コストを数値化</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6 pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-muted/20 bg-white/95 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">原因の分解</p>
              <ul className="mt-4 space-y-3">
                {pain.reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-1.5 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-white to-primary/10 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">直近12ヶ月のリスク像</p>
              <p className="mt-4 text-base leading-relaxed text-primary/90">{pain.risk}</p>
            </div>
          </div>
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">推奨アクション</p>
            <p className="text-base font-semibold leading-relaxed text-foreground">{pain.focus}</p>
            <div className="mt-auto rounded-xl border border-accent/40 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
              初期診断で適用可能なAIワークフロー
            </div>
          </div>
        </div>
        <footer className="mt-6 flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>年商5,000万円～15億円企業のヒアリングから抽出</span>
          <span>クリックで詳細を閉じる</span>
        </footer>
      </AccordionContent>
    </AccordionItem>
  );
};

const storyFlow: StoryFlowItem[] = [
  {
    stage: "変化が迫る背景",
    icon: AlertTriangle,
    headline: "判断が遅れるほど資金と信頼が目減り",
    copy:
      "粗利の高い案件ほど判断材料が揃わず、会議資料は担当者の端末に点在。資金波形のズレを把握できず、社内外に示す方針がぶれ始めます。",
    metrics: ["意思決定リードタイムの長期化", "現場の迷いと信用の低下"],
  },
  {
    stage: "手に入る未来像",
    icon: BrainCircuit,
    headline: "専門家×生成AIで判断を見える化",
    copy:
      "中小企業診断士が意思決定の論点を整理し、生成AIが販売・会計・資金データを一体化。週次で粗利・資金・需要の未来像を提示し、経営陣が迷いなく共有できる判断会議を設計します。",
    metrics: ["粗利率+5.2pt（例）", "資金ショック30日前検知（例）"],
  },
  {
    stage: "実行ステップ",
    icon: TrendingUp,
    headline: "週次ボードで先読みと実行を両立",
    copy:
      "AIが作成する議事録と意思決定ボードをもとに、重点テーマごとのKPIと打ち手を優先順位づけ。社長の判断時間を週8時間創出し、現場の勢いを保ったまま攻めの投資を前倒しできます。",
    metrics: ["意思決定リードタイム▲48%（例）", "資金繰り更新時間-70%"],
  },
];

const ProblemSection = () => {
  return (
    <section className="fade-in-section section-spacing bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60">
      <div className="layout-shell space-y-16 lg:space-y-20">
        <div className="balanced-grid--reverse lg:items-start xl:items-center">
          <div className="space-y-8 lg:pr-16">
            <span className="inline-flex items-center rounded-full bg-highlight/20 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.3em] text-highlight-foreground">
              よくある課題
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              意思決定を止める<br />5つの警戒信号
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg lg:max-w-[62ch]">
              需給や取引条件が同時に変わるなかで判断が遅れれば、粗利と資金は即座に揺らぎます。経営者が迷いなく決断を示せるよう、現場ヒアリングと財務データから特に因果性の強いボトルネックを可視化しました。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {executiveSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={signal.label}
                    className="group flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-colors duration-500 hover:border-primary/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{signal.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{signal.metric}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{signal.note}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 text-sm text-muted-foreground shadow-sm">
              <LineChart className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="font-semibold text-foreground">週次アップデートで因果とタイミングを両方管理</span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:inline-flex" />
              <span>経営会議の準備時間▲40%（例）</span>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/60 shadow-elegant">
            <div className="pointer-events-none absolute -left-24 top-24 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              STRATEGY MAP
            </div>
            <img
              src={problemInfographic}
              alt="外部環境から意思決定までを結ぶ因果マップ"
              className="relative w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="relative flex flex-col gap-3 border-t border-slate-200/60 bg-white/90 px-6 py-5 text-left">
              <p className="text-sm font-semibold text-foreground">外部シグナル→財務インパクト→意思決定の連鎖を一枚図で同期。</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-[0.28em] text-slate-500">
                  TRUST
                </span>
                <span>専門家ヒアリング48社分のパターン（例）</span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:inline-flex" />
                <span>週次で更新される実務ダッシュボード</span>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-primary/15 bg-white/95 p-10 shadow-card">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3 text-left md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
                  NARRATIVE VISUALIZATION
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">課題→介入→成果を3つのフレームで直感把握</h3>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm text-primary/80">
                <LineChart className="h-4 w-4" aria-hidden="true" />
                KPIを一枚で確認し、会議前の視点合わせが5分で完了（例）
              </div>
            </div>
            <div className="relative mt-4 grid gap-6 md:grid-cols-3">
              <div className="pointer-events-none absolute left-[8%] right-[8%] top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
              {storyFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.stage}
                    className="relative flex h-full flex-col gap-4 rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-highlight via-accent to-primary text-base font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{item.stage}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-highlight/20 text-highlight-foreground">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">{item.headline}</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                      </div>
                    </div>
                    <div className="mt-auto rounded-2xl border border-primary/25 bg-primary/5 p-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">注目KPI</span>
                      <ul className="mt-3 space-y-2 text-sm text-primary/90">
                        {item.metrics.map((metric) => (
                          <li key={metric} className="flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {pains.map((pain, index) => (
            <PainAccordionItem key={pain.title} pain={pain} index={index} />
          ))}
        </Accordion>

        <div className="rounded-[36px] border border-highlight/30 bg-gradient-to-r from-highlight/20 via-white to-accent/10 p-10 text-center shadow-card">
          <p className="text-xl font-semibold leading-relaxed text-foreground">
            初回相談では判断が詰まるポイントを30分で診断し、専門家と生成AIが粗利・資金・需要を同じ地図で描くステップを共創します。視覚化された因果マップと週次ボードのサンプルも併せてご提示します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
