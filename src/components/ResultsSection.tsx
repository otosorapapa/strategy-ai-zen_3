import ScrollReveal from "@/components/ScrollReveal";
import resultBlueprint from "@/assets/hero-consulting (1).jpg";
import manufacturingLeader from "@/assets/growth-chart.jpg";
import wholesaleLeader from "@/assets/financial-analysis.jpg";
import serviceLeader from "@/assets/ai-illustration.jpg";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Landmark,
  LineChart,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";

const trustBadges = [
  "中小企業診断士チーム常駐",
  "金融機関連携テンプレ完備",
  "福岡・九州100社超の伴走",
];

const resultsQuickSummary = [
  "営業利益+12%、債務超過解消率80%（例）など九州エリアで蓄積した成果指標",
  "48時間診断→再生設計→金融交渉の3ステップで意思決定リードタイムを1/3に短縮",
  "銀行・現場・役員会が同じダッシュボードを共有し、判断と行動のズレを解消",
];

const resultsMomentumLevers = [
  "金融機関とのエビデンス共有で条件交渉を先手に進める",
  "AIと診断士が週次で改善仮説を検証し、粗利とキャッシュの波形を同期",
  "現場タスクとKPIを結ぶ設計図で、会議後すぐに行動へ移せる状態を維持",
];

const resultMetrics = [
  {
    label: "営業利益の改善",
    value: "+12%",
    detail: "再生計画実行後12ヶ月の平均改善幅（例）",
    icon: LineChart,
  },
  {
    label: "債務超過解消率",
    value: "80%",
    detail: "金融機関との再交渉で合意に至った割合（例）",
    icon: ShieldCheck,
  },
  {
    label: "相談企業数",
    value: "100社超",
    detail: "九州・西日本の伴走実績",
    icon: Users,
  },
];

const transformationFlow = [
  {
    phase: "Week 1｜診断",
    focus: "AI×専門家で財務・市場を同時走査",
    deliverable: "リスクヒートマップと優先指標12項目",
    signal: "現状把握の曖昧さを48時間で解消",
    icon: Gauge,
  },
  {
    phase: "Week 2｜設計",
    focus: "キャッシュ・粗利・組織の相関を分解",
    deliverable: "施策シミュレーションと資金繰り3案",
    signal: "実行条件とモニタリング軸を可視化",
    icon: Landmark,
  },
  {
    phase: "Week 4｜合意形成",
    focus: "金融機関・現場の合意に必要な根拠を整理",
    deliverable: "KPIダッシュボードと合意形成シナリオ",
    signal: "意思決定リードタイムを1/3に短縮",
    icon: ArrowRight,
  },
];

const proofStories = [
  {
    title: "製造業｜粗利とキャッシュを同時に立て直し",
    narrative:
      "原材料高騰で粗利率が▲4pt。AIが調達条件と需要予測を分析し、診断士が価格戦略と人員再配置を設計。6ヶ月で粗利率+3.2pt、キャッシュ余力+45日を確保。",
    persona: "精密部品メーカー（年商52億円）CEO",
    kpi: ["粗利率+3.2pt", "キャッシュ余力+45日"],
    image: manufacturingLeader,
  },
  {
    title: "卸売業｜金融機関との信頼を再構築",
    narrative:
      "在庫滞留で債務超過に陥ったが、AIが在庫の死蔵箇所と需要シフトを抽出。再生シナリオとモニタリング資料を整備し、追加融資と返済スケジュールの再設計に成功。",
    persona: "専門商社（年商86億円）代表取締役",
    kpi: ["追加融資2.5億円承認", "債務超過を8ヶ月で解消"],
    image: wholesaleLeader,
  },
  {
    title: "サービス業｜人材活用の設計図を刷新",
    narrative:
      "離職率が高止まりし、施策が属人化。AIでスキルマップを分析し、診断士が育成プログラムと評価制度を再設計。平均客単価+18%、離職率▲35%（例）。",
    persona: "多店舗サービス（年商14億円）COO",
    kpi: ["平均客単価+18%", "離職率▲35%"],
    image: serviceLeader,
  },
];

const financialPartnerQuote = {
  quote:
    "経営陣と金融機関が同じ指標で議論できる資料設計により、条件変更の協議が驚くほど滑らかになりました。ストーリーと数字の一体感が、社内稟議を後押ししています。",
  author: "西日本シティ銀行 企業再生部 部長",
  name: "田島 直樹 氏",
};

const partnerLogos = [
  "西日本シティ銀行", "福岡信用金庫", "九州DXパートナー協議会"
];

const ResultsSection = () => {
  return (
    <section className="fade-in-section bg-[#04112a] py-20 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Impact｜結果で語る
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            福岡・九州の中小企業再生実績｜「再生の設計図」が整うと数字と行動が同じ未来を指す
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
            仮説を語るだけでは反転は起こりません。ZENは実行に耐えるプロセスを作り込み、粗利・資金・人材の波形を同時に整えることで、経営者が迷いなく次のステップを選べる状態を守り抜きます。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/90"
              >
                <ShieldCheck className="h-4 w-4 text-cyan-200" />
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 grid gap-6 rounded-[32px] border border-white/12 bg-white/10 p-6 text-left shadow-[0_28px_70px_rgba(2,12,32,0.5)] backdrop-blur"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/85">
                30秒サマリー
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200/85">
                {resultsQuickSummary.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-[24px] border border-cyan-300/30 bg-cyan-500/10 p-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100">
                成果を引き上げるレバー
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-100/85">
                {resultsMomentumLevers.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <ScrollReveal
            variant="fade-up"
            className="relative flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-br from-[#0b2448] via-[#081a34] to-[#030d1f] p-8 shadow-[0_30px_80px_rgba(2,12,32,0.55)] lg:p-12"
          >
            <div className="space-y-5 text-left">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
                因果が見えるダッシュボード
              </p>
              <h3 className="text-2xl font-semibold md:text-[1.75rem]">
                KPIと現場アクションを一枚で紐づけ、意思決定の迷いを排除します。
              </h3>
              <p className="text-sm leading-relaxed text-slate-200/80 md:text-base">
                数値の伸び方だけでなく、施策とリスクの紐づきまで可視化。金融機関・役員会・現場チームが同じ指標を起点に議論できる状態を作ることで、方針転換が遅れるリスクを抑えます。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resultMetrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className="flex h-full flex-col gap-2 rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-2xl font-bold text-cyan-100">{metric.value}</p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                      {metric.label}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-200/80">{metric.detail}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="relative flex h-full flex-col overflow-hidden rounded-[36px] border border-white/12 bg-[#020d22] shadow-[0_30px_80px_rgba(2,12,32,0.55)]"
          >
            <img
              src={resultBlueprint}
              alt="経営陣とコンサルタントが再生プランのホワイトボードを囲み、数値とアクションを照合している様子"
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010b1c]/95 via-[#020e24]/40 to-transparent" />
            <div className="relative mt-auto flex h-full flex-col justify-end gap-6 p-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Dual Coding
              </div>
              <p className="text-lg font-semibold text-white md:text-xl">
                財務・市場・人材の因果を重ねた「再生の設計図」を1枚で共有
              </p>
              <ul className="space-y-3 text-sm text-slate-200/85 md:text-base">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-cyan-200" />
                  金融機関への説明資料と同じ根拠ラインをダッシュボード上で提示
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="mt-1 h-5 w-5 text-cyan-200" />
                  KPIのドリルダウン結果から直ちに行動計画へリンクする導線を設計
                </li>
                <li className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-cyan-200" />
                  役員会・現場会議で同じ指標を参照できる閲覧レベル設計で納得感を統一
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-5">
          {transformationFlow.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal
                key={step.phase}
                variant="fade-up"
                className="relative flex flex-1 flex-col gap-4 overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-br from-[#062147] via-[#041536] to-[#021024] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    {step.phase}
                  </span>
                  <Icon className="h-5 w-5 text-cyan-200" />
                </div>
                <p className="text-base font-semibold text-white md:text-lg">{step.focus}</p>
                <p className="text-sm leading-relaxed text-slate-200/85">{step.deliverable}</p>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/85">
                  <ArrowRight className="h-4 w-4" />
                  {step.signal}
                </div>
                {index < transformationFlow.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-cyan-200/60" />
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          variant="fade-up"
          className="mt-14 grid gap-6 rounded-[32px] border border-white/12 bg-white/5 p-8 text-left shadow-[0_30px_80px_rgba(2,12,32,0.55)] backdrop-blur md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/85">
              金融機関からの声
            </div>
            <p className="text-lg font-semibold leading-relaxed text-white md:text-xl">
              {financialPartnerQuote.quote}
            </p>
            <div className="flex items-center gap-3 text-sm font-semibold text-cyan-100/85">
              <Quote className="h-5 w-5" aria-hidden="true" />
              <span>{financialPartnerQuote.name}</span>
              <span className="text-slate-200/70">{financialPartnerQuote.author}</span>
            </div>
          </div>
          <div className="grid gap-3 rounded-[24px] border border-white/15 bg-white/10 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">第三者証明</p>
            <div className="grid gap-3">
              {partnerLogos.map((logo) => (
                <span
                  key={logo}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-[#041536]/60 px-4 py-3 text-sm font-semibold tracking-[0.18em] text-cyan-100/85"
                >
                  {logo}
                </span>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-slate-200/80">
              共同検証・共創プロジェクトで蓄積したノウハウをもとに、金融庁ガイドライン準拠のレポート形式で提供しています。
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {proofStories.map((story) => (
            <ScrollReveal
              key={story.title}
              variant="fade-up"
              className="group flex h-full flex-col gap-5 overflow-hidden rounded-[30px] border border-white/12 bg-gradient-to-br from-[#062147] via-[#041536] to-[#021024] p-7 shadow-[0_25px_60px_rgba(2,10,28,0.45)]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={story.image}
                  alt={`${story.title}の経営者写真`}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-cyan-300/40"
                />
                <div className="flex flex-col">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-cyan-200/70">
                    Case Study
                  </span>
                  <p className="text-sm font-semibold text-white/90">{story.persona}</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white md:text-xl">{story.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200/85 md:text-[0.95rem]">
                {story.narrative}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {story.kpi.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
