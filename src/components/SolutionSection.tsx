import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileSpreadsheet,
  Gauge,
  GanttChart,
  Layers,
  LineChart,
  Map,
  PanelRightDashed,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  TrendingUp,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import decisionOpsMock from "@/assets/data-infographic-growth.jpg";
import solutionIllustration from "@/assets/executive-strategy-meeting.jpg";
import growthChart from "@/assets/roi-chart.jpg";

const howPillars = [
  {
    icon: BrainCircuit,
    title: "生成AIが未来を読む",
    description:
      "財務データ、販売ログ、業界トレンド、マクロ指標を横断分析。粗利とキャッシュの歪みを“何が・いつ・どこで”起きているかまで因果分解し、意思決定の根拠を秒で提示します。",
  },
  {
    icon: Users,
    title: "専門家が現場で翻訳",
    description:
      "中小企業診断士が現場ヒアリングとワークショップを実施。人と組織のリアリティを加味し、AIが示した打ち手を現実的な週次タスクまで翻訳します。",
  },
  {
    icon: Map,
    title: "再生ロードマップを設計",
    description:
      "投資・撤退・強化すべき領域を週次で可視化。金融機関への説明ストーリーや現場タスクまで連動させ、実行ステータスとキャッシュインパクトを同時に追跡します。",
  },
];

const impactHighlights = [
  {
    label: "経営判断の短縮",
    value: "会議から判断までが加速",
    detail: "会議から意思決定までのリードタイム短縮を実現",
    icon: TimerReset,
    accent: "from-[#d7f4ff] to-[#f2fbff]",
  },
  {
    label: "粗利インパクト",
    value: "粗利改善の余地を見える化",
    detail: "重点施策の粗利率押し上げ効果を裏付け",
    icon: TrendingUp,
    accent: "from-[#e8f3ff] to-[#f6f9ff]",
  },
  {
    label: "金融機関連携",
    value: "資料整備が高評価",
    detail: "レポート整備の満足度が高く評価されています",
    icon: ShieldCheck,
    accent: "from-[#edf7ff] to-white",
  },
];

const logicSequence = [
  {
    title: "先を読む判断軸を揃える",
    description:
      "外部環境や顧客動向、粗利とキャッシュの歪みをAIが同時に解析し、診断士が論点を整理。社内外で共有できる全体像で、迷いなく指示を出せる土台を築きます。",
    metricLabel: "兆候把握スピード",
    metricValue: "即座に共有",
    icon: Layers,
  },
  {
    title: "次の一手を描き切る",
    description:
      "役員・現場の議論を踏まえて、優先施策とリスクをカスタムダッシュボードに落とし込み。5年を見据えた経営改善計画を段階ごとに設計し、行動順序を明確化します。",
    metricLabel: "行動計画更新",
    metricValue: "自社仕様で提示",
    icon: GanttChart,
  },
  {
    title: "実行と信頼を積み上げる",
    description:
      "週次レビューで成果と課題を追跡し、金融機関や取引先へ示す資料も自動で同期。伴走支援で現場の実行力を磨きつつ、判断の裏付けとなる証跡を蓄積します。",
    metricLabel: "関係者の納得感",
    metricValue: "高い評価を継続",
    icon: BarChart3,
  },
];

const insightPills = [
  "粗利・キャッシュ同時最適化",
  "リードタイム短縮ロジック",
  "金融機関が納得する証跡",
];

const trustSignals = [
  "福岡の金融機関とデータ連携を実施",
  "製造・サービス業の設計図づくりを伴走",
  "経営会議での再生レビューを継続支援",
  "メディア掲載・登壇多数",
];

const solutionQuickSummary = [
  "環境変化の兆しを先読みし、迷いのない意思決定を支える体制を整える",
  "生成AIが業界・競合・財務を横断分析し、診断士が実行できる計画に磨き上げる",
  "専用の経営管理アプリと資料で、社内外への説明と実行フォローを同時に進められる",
];

const solutionNextActions = [
  "オンライン30分の初回相談で課題と外部環境を整理",
  "約2週間の仮診断でAI分析とヒアリングを再生ヒートマップにまとめて共有",
  "再生設計ワークで優先施策と目標をそろえ、伴走支援を開始",
];

const causewayStages = [
  {
    id: "01",
    title: "課題の焦点を秒で捕捉",
    highlight: "粗利・キャッシュ・人材指標を同一レイヤーで照合し、異常値を優先度順に提示。",
    kpi: "異常検知 92% 精度",
    description:
      "財務・販売・稼働データを暗号化連携し、AIが因果ネットワークを生成。判断を止める論点を短時間で抽出します。",
  },
  {
    id: "02",
    title: "打ち手の妥当性を合意形成",
    highlight: "診断士がAIの提案を検証し、役員会が求めるエビデンスの形に翻訳。",
    kpi: "施策合意 2.3週",
    description:
      "週次レビューで仮説を検証し、投資判断に必要な根拠資料と現場タスクをワンセットで整備します。",
  },
  {
    id: "03",
    title: "成果の証跡を蓄積",
    highlight: "金融機関・取引先・現場の報告フォーマットを統一し、納得性のある数字だけを残す。",
    kpi: "レポート作成 65%削減",
    description:
      "実行ログとキャッシュ波形を同じボードで追跡し、意思決定の納得感を高めるストーリーを自動更新します。",
  },
];

const keyProofPoints = [
  {
    icon: Target,
    title: "因果で語れる経営指標",
    detail: "粗利・キャッシュ・人員の遅延要因を一枚のマップで比較。理事会でも説明が噛み合います。",
  },
  {
    icon: LineChart,
    title: "最短2週で仮説検証を開始",
    detail: "経営会議の議題をテンプレ化し、意思決定リードタイムを平均40%削減した実績を保持。",
  },
  {
    icon: ArrowUpRight,
    title: "金融機関への説明がスムーズ",
    detail: "モニタリング資料と現場タスクが同期し、融資交渉や条件変更の対話が短時間で整います。",
  },
];

const executionSignals = [
  {
    label: "意思決定リードタイム",
    value: "▲38%",
    description: "週次レビューの標準化で経営会議〜実行判断の遅延を大幅に短縮。",
  },
  {
    label: "金融機関連携満足度",
    value: "4.6/5",
    description: "証憑とレポートの自動整備により、金融機関からの評価が安定。",
  },
  {
    label: "現場タスク完遂率",
    value: "92%",
    description: "AIが優先度を提示し、専門家が実行条件を整備することで遂行率が向上。",
  },
];

const workflowSteps = [
  {
    title: "STEP 0｜初期診断",
    detail:
      "短期間で粗利・キャッシュ・人材のボトルネックを抽出し、生成AIが描いた歪みのヒートマップを提示します。",
  },
  {
    title: "STEP 1｜再生キャンバス設計",
    detail:
      "AIが生成したシナリオを専門家が検証。意思決定キャンバスに優先仮説とリスクシナリオを整理し、週次会議で共有。",
  },
  {
    title: "STEP 2｜実行＆金融連携",
    detail:
      "施策の進捗とキャッシュ波形を同時にトラッキング。金融機関向け資料、モニタリングレポート、現場タスクまで一気通貫で整備します。",
  },
];

const implementationTimeline = [
  {
    phase: "Day 0-2",
    title: "無料相談とAIスキャンで現状把握",
    detail: "経営・財務データとヒアリング内容を集約し、優先仮説メモと再生ヒートマップを48時間以内に共有。",
    deliverable: "優先仮説メモ／リスクヒートマップ",
    icon: CalendarClock,
  },
  {
    phase: "Week 1-2",
    title: "再生キャンバスとKPIを合意",
    detail: "診断士がAI提案を検証し、粗利・資金・現場の指標を一本化。役員会向けの意思決定キャンバスを整備。",
    deliverable: "意思決定キャンバス／週次レビュー設計図",
    icon: ClipboardCheck,
  },
  {
    phase: "Week 3-4",
    title: "金融機関・現場と資料連動",
    detail: "銀行説明シナリオと現場タスクを同期し、必要資料・証憑をテンプレ化。交渉準備を短期間で完了。",
    deliverable: "金融機関連携パッケージ",
    icon: ShieldCheck,
  },
  {
    phase: "Week 5-6",
    title: "週次運用で成果検証を開始",
    detail: "AIレポートと実行ログを週次で更新し、粗利とキャッシュの変化をモニタリング。意思決定の記録を残し、次の改善サイクルへつなぐ。",
    deliverable: "週次ダッシュボード／成果コミットメントシート",
    icon: TrendingUp,
  },
];

const SolutionSection = () => {
  return (
      <section id="what-section" className="fade-in-section bg-white py-24 text-[#0b1f3f]">
        <div className="container mx-auto max-w-6xl px-4">
          <ScrollReveal variant="fade-up" className="space-y-6 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-[#0b1f3f]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
              提供価値｜判断力・速さ・先見性
            </span>
            <h2 className="text-3xl font-bold leading-tight md:text-[2.75rem] md:leading-[1.2]">
              変化を読み切り迷わず決断できる経営改善計画を、生成AIと診断士が一体で支える
            </h2>
            <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
              需要の揺らぎや仕入れ高騰が続く時代でも、地域の事業を堂々と守り続ける判断を遅らせない。生成AIが外部環境と財務データを常時見張り、診断士が現場の事情と重ねて次の一手を磨きます。会議では整理されたシナリオから選ぶだけ。数字の裏付けと語れるストーリーがそろうから、社員にも金融機関にも胸を張って説明できます。
            </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {insightPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#0b1f3f]/70 shadow-[0_12px_30px_rgba(9,23,54,0.08)]"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#0584c6]" aria-hidden="true" />
                {pill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 rounded-[32px] border border-[#0b1f3f]/10 bg-[#f4f8ff] p-7 shadow-[0_30px_80px_rgba(9,27,60,0.18)]"
        >
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:items-stretch">
            <div className="space-y-4 rounded-[24px] border border-white/60 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(9,27,60,0.12)]">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
                30秒サマリー
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-[#1a335c]/85">
                {solutionQuickSummary.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 rounded-[24px] border border-[#0584c6]/25 bg-white px-5 py-6 shadow-[0_18px_45px_rgba(5,120,180,0.12)]">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
                次のアクション
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-[#1a335c]/85">
                {solutionNextActions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mx-auto mt-10 w-full max-w-5xl overflow-hidden rounded-[36px] border border-[#0b1f3f]/10 bg-gradient-to-br from-[#f1f7ff] via-white to-[#e8f3ff] shadow-[0_35px_100px_rgba(8,25,54,0.16)]"
        >
          <figure className="relative">
            <img
              src={decisionOpsMock}
              alt="粗利改善とキャッシュROIの相関チャートを多層でレビューしている経営会議のビジュアル"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3 rounded-3xl bg-white/85 p-6 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/70">
                <span className="inline-flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                  Impact Dashboard Snapshot
                </span>
                <span className="inline-flex items-center gap-2 text-[#0584c6]">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  因果トレースが3層で可視化
                </span>
              </div>
              <p className="text-sm font-semibold text-[#0b1f3f]">
                直近4週の粗利ギャップとキャッシュ波形を同一画面で分解。右側のアクションボードと連動し、指示→現場実行→金融報告がひと続きで把握できます。
              </p>
            </div>
          </figure>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mx-auto mt-10 grid gap-8 rounded-[32px] border border-[#0b1f3f]/10 bg-gradient-to-r from-[#f3f7ff] via-white to-[#ebf4ff] px-8 py-10 shadow-[0_30px_90px_rgba(8,27,59,0.12)] md:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/70">
              <Gauge className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
              Impact Snapshot
            </div>
            <p className="text-xl font-semibold leading-8 text-[#0b1f3f]">
              「財務 × 現場 × キャッシュ」を一つの画面に統合し、意思決定の納得感を高める因果ストーリーを即座に提示。
            </p>
            <p className="text-sm leading-relaxed text-[#1e3359]/80">
              週次の再生スタンドアップでは、AIが弾き出した仮説と専門家の知見を照合し、役員会の論点整理・金融機関への説明・現場タスクを一本化。迷いなく投資判断が下せるようロジックを階層化します。
            </p>
            <div className="grid gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-[#0b1f3f]/15 bg-white/75 px-3 py-1 text-center">
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
            <figure className="relative overflow-hidden rounded-[28px] border border-white/65 bg-white shadow-[0_25px_70px_rgba(5,24,55,0.14)]">
              <img
                src={solutionIllustration}
                alt="エグゼクティブチームが戦略会議でAIダッシュボードを確認する様子"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-[#0b1f3f]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/90">
                <span>Executive Review</span>
                <ArrowUpRight className="h-4 w-4 text-cyan-200" aria-hidden="true" />
              </figcaption>
            </figure>
            <div className="flex h-full flex-col gap-4 rounded-[28px] border border-[#0b1f3f]/12 bg-white/95 p-6 shadow-[0_24px_60px_rgba(6,21,48,0.12)] backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
                視線誘導インサイト
              </div>
              <p className="text-lg font-semibold text-[#0b1f3f]">3つの論理フレームで「納得できる数字」を確保</p>
              <ul className="space-y-3 text-sm leading-relaxed text-[#1e3359]/75">
                {keyProofPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <li
                      key={point.title}
                      className="flex items-start gap-3 rounded-2xl border border-[#0b1f3f]/8 bg-white p-3 shadow-[0_16px_40px_rgba(6,21,48,0.08)]"
                    >
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0584c6]/15 text-[#0584c6]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#0b1f3f]">{point.title}</p>
                        <p className="text-xs text-[#1e3359]/70">{point.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 grid gap-6 rounded-[28px] border border-[#0b1f3f]/10 bg-white/90 p-6 shadow-[0_30px_80px_rgba(6,21,48,0.1)] md:grid-cols-3"
        >
          {impactHighlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.label}
                className={`flex h-full flex-col gap-3 rounded-2xl bg-gradient-to-br ${highlight.accent} p-6 shadow-[0_18px_45px_rgba(9,29,62,0.12)]`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80 text-[#0584c6] shadow-[0_10px_25px_rgba(9,38,70,0.12)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
                    {highlight.label}
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#0584c6]">{highlight.value}</span>
                    <ArrowRight className="h-4 w-4 text-[#0584c6]/70" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#1e3359]/75">{highlight.detail}</p>
              </div>
            );
          })}
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 grid gap-8 rounded-[32px] border border-[#0b1f3f]/10 bg-gradient-to-br from-[#f0f6ff] via-white to-[#e4f1ff] p-8 shadow-[0_32px_90px_rgba(7,22,48,0.12)] md:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Decision Loop Diagram
            </div>
            <div className="relative space-y-6">
              {causewayStages.map((stage, index) => (
                <div
                  key={stage.title}
                  className="relative rounded-[28px] border border-white/60 bg-white/85 p-6 shadow-[0_26px_70px_rgba(7,22,48,0.12)] backdrop-blur"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0584c6]/15 text-sm font-bold text-[#0584c6] shadow-[0_12px_28px_rgba(5,132,198,0.2)]">
                        {stage.id}
                      </span>
                      <p className="text-base font-semibold text-[#0b1f3f]">{stage.title}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                      <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
                      {stage.kpi}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#0584c6]">{stage.highlight}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#1e3359]/75">{stage.description}</p>
                  {index < causewayStages.length - 1 && (
                    <span
                      className="absolute left-10 top-[calc(100%+4px)] h-10 w-px bg-gradient-to-b from-[#0584c6]/40 to-transparent md:left-1/2 md:-translate-x-1/2 md:h-14"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <figure className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_28px_70px_rgba(7,22,48,0.14)]">
              <img
                src={growthChart}
                alt="施策前後の経営指標が改善する様子を示すグラフ"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-[#0b1f3f]/85 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
                <span>Before</span>
                <ArrowRight className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                <span>After</span>
              </figcaption>
            </figure>
            <div className="space-y-4 rounded-[28px] border border-[#0b1f3f]/10 bg-white/92 p-6 shadow-[0_24px_60px_rgba(6,21,48,0.12)] backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
                実行ステータス指標
              </div>
              <p className="text-lg font-semibold text-[#0b1f3f]">実装と金融連携の“納得性”を示すシグナル</p>
              <div className="space-y-3">
                {executionSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-[#0b1f3f]/8 bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(6,21,48,0.08)]"
                  >
                    <div className="max-w-[60%] space-y-1 text-left">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">{signal.label}</p>
                      <p className="text-xs text-[#1e3359]/70">{signal.description}</p>
                    </div>
                    <span className="text-xl font-bold text-[#0584c6]">{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 space-y-8 rounded-[32px] border border-[#0b1f3f]/10 bg-gradient-to-br from-white via-[#f7faff] to-[#eef4ff] p-8 shadow-[0_32px_90px_rgba(7,22,48,0.1)]"
        >
          <div className="grid gap-6 text-center md:grid-cols-[1.05fr_0.95fr] md:items-center md:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
                ロジックドリブンな再生設計
              </span>
              <h3 className="text-2xl font-semibold text-[#0b1f3f]">
                経営判断の筋道を3フェーズで共有し、先を読む力を磨く
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-[#1e3359]/75">
                業界・競合・顧客の動きと社内データを一つのダッシュボードに束ね、生成AIと診断士が次の一手を検証。5年を見据えた経営改善計画まで滑らかにつなぎ、貴社仕様の経営管理アプリで根拠を示しながら指示を出せる状態を守ります。
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-[#0584c6]/25 bg-white/75 px-5 py-4 text-left shadow-[0_20px_45px_rgba(5,120,180,0.12)] md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0584c6]/12 text-[#0584c6]">
                <LineChart className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-1 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/60">視線誘導レポート</p>
                <p className="text-sm font-semibold leading-relaxed text-[#0b1f3f]">理事会資料にも転用できる因果証跡が自動生成</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {logicSequence.map((node, index) => {
              const Icon = node.icon;
              const phase = String(index + 1).padStart(2, "0");
              return (
                <div key={node.title} className="relative h-full rounded-3xl border border-white/60 bg-white p-6 shadow-[0_22px_60px_rgba(8,25,54,0.12)]">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.26em] text-[#0b1f3f]/60">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/12 px-3 py-1 text-[#0584c6]">
                      Phase {phase}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#0b1f3f]/45">
                      <Gauge className="h-3.5 w-3.5 text-[#0584c6]" aria-hidden="true" />
                      先読み指標
                    </span>
                  </div>
                  <span className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#0584c6]/15 text-[#0584c6]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-[#0b1f3f]">{node.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#1e3359]/75">{node.description}</p>
                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#f3f8ff] px-4 py-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/60">{node.metricLabel}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#0584c6]">{node.metricValue}</span>
                      <ArrowRight className="h-4 w-4 text-[#0584c6]/70" aria-hidden="true" />
                    </div>
                  </div>
                  {index < logicSequence.length - 1 && (
                    <span
                      className="absolute right-[-28px] top-1/2 hidden h-px w-12 -translate-y-1/2 bg-gradient-to-r from-[#0584c6]/60 to-transparent md:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {howPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                variant="fade-up"
                className="flex h-full flex-col gap-5 rounded-3xl border border-[#0b1f3f]/12 bg-gradient-to-br from-[#f2f7ff] via-white to-[#e7f5ff] p-7 shadow-[0_28px_70px_rgba(6,21,48,0.12)]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-[#0b1f3f]">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-[#1e3359]/75">{pillar.description}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[36px] border border-[#0b1f3f]/10 bg-[#04112a] p-8 text-white shadow-[0_35px_95px_rgba(3,14,32,0.55)]"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              <PanelRightDashed className="h-4 w-4" aria-hidden="true" />
              AI Strategy Workflow
            </div>
            <p className="text-sm leading-relaxed text-slate-100/90">
              週次の「再生スタンドアップ」で、AIが提示するシナリオに専門家が追記。粗利・キャッシュ・人の動きを同じボードでレビューし、判断の先送りを断ちます。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-100/85">
              <li className="flex items-start gap-2">
                <FileSpreadsheet className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                粗利・キャッシュの分解表をAIが更新、差異要因を色分け表示
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                リスク指標が閾値を超えると即アラート、証跡ログも自動保存
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                各部門のアクションプランと金融機関説明資料を同時に更新
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="mt-1 h-4 w-4 text-cyan-200" aria-hidden="true" />
                金融・取引先との共有チャネルに直結し、ステークホルダーの合意形成を高速化
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[32px] border border-[#0b1f3f]/10 bg-white p-8 shadow-[0_28px_70px_rgba(6,21,48,0.12)]"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/70">
              再生ロードマップの運用イメージ
            </div>
            <div className="grid gap-5 text-sm leading-relaxed text-[#1e3359]/80 md:grid-cols-3">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="relative h-full rounded-2xl border border-[#0584c6]/25 bg-[#f4fbff] p-5 shadow-[0_18px_45px_rgba(5,94,160,0.12)]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-[#0584c6] text-sm font-bold text-white shadow-[0_12px_28px_rgba(5,132,198,0.35)]">
                      {step.title.split("｜")[0].replace("STEP", "S")}
                    </span>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-[#0584c6]/70 md:block" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-4 font-semibold text-[#0b1f3f]">{step.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#1e3359]/75">{step.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal
        variant="fade-up"
        className="mt-16 rounded-[36px] border border-[#0b1f3f]/12 bg-gradient-to-br from-[#f2f7ff] via-white to-[#e8f4ff] p-8 shadow-[0_30px_80px_rgba(9,30,70,0.15)]"
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0584c6]/20 bg-[#f2f9ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]">
                導入までの流れ（最短6週間）
              </span>
              <h3 className="text-2xl font-semibold text-[#0b1f3f] md:text-[1.9rem]">
                現状把握から週次運用までを6週間で滑らかにつなぐ導線
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#1e3359]/80">
              期間ごとに必要な資料とアクションを並走支援。金融機関との調整や補助金活用の可否判断まで、同じドキュメント群で意思決定を進められます。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {implementationTimeline.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.phase}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-[#0584c6]/15 bg-white/95 p-6 shadow-[0_22px_60px_rgba(5,94,160,0.16)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0584c6]/75">
                      {stage.phase}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0584c6]/12 text-[#0584c6]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-[#0b1f3f]">{stage.title}</p>
                    <p className="text-sm leading-relaxed text-[#1e3359]/80">{stage.detail}</p>
                  </div>
                  <div className="mt-auto rounded-2xl border border-dashed border-[#0584c6]/25 bg-[#f3f8ff] px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]/85">
                    {stage.deliverable}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="導入フローの詳細は無料相談で貴社向けにカスタマイズ"
        description="最短6週間の流れをベースに、現在の顧問体制や金融機関との調整状況に合わせてロードマップをその場で描き直します。"
        ctaId="solution-flow"
      />
    </section>
  );
};

export default SolutionSection;
