import { Fragment } from "react";
import {
  ArrowRight,
  BarChart4,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import serviceFlowIllustration from "@/assets/dashboard-preview.jpg";

const executiveAssurance = [
  {
    icon: ShieldCheck,
    title: "監査水準のガバナンス",
    description:
      "金融機関・株主説明に耐える証跡管理を初月から設計。リスク委員会のレビューに対応するテンプレートを提供します。",
  },
  {
    icon: LineChart,
    title: "月次の成果トラッキング",
    description:
      "粗利・キャッシュ・人員負荷を同時に可視化し、各施策の期待値と実績差分をリアルタイムで提示します。",
  },
  {
    icon: Users,
    title: "経営チームの納得形成",
    description:
      "役員会・経営会議で使える議事アジェンダと意思決定メモをAIが生成。判断プロセスを全員で共有できます。",
  },
];

const overviewItems = [
  {
    icon: BrainCircuit,
    title: "AIの洞察を経営判断に翻訳",
    description:
      "会計・販売・現場メモを統合し、施策候補ごとの粗利・キャッシュインパクトを即時算出。意思決定の前提を経営陣全員が共有できます。",
  },
  {
    icon: Users,
    title: "人間とAIの協働を徹底",
    description:
      "OECDが提唱する『人間中心のAI』を基準に、AIは提案と説明を担い、最終判断は経営者が実施。納得できるまで人が根拠を検証します。",
  },
  {
    icon: ClipboardCheck,
    title: "説明可能なレポート設計",
    description:
      "生成AIが提案理由とリスク要因を日本語で可視化。過去データ比較や感度分析もワンクリックで取得でき、ブラックボックスを排除します。",
  },
];

const insightHighlights = [
  {
    icon: BarChart4,
    title: "根拠の数値化",
    description: "全施策のIRRとキャッシュ影響度を定量比較し、意思決定の優先順位を一目で把握。",
  },
  {
    icon: FileText,
    title: "証跡テンプレート",
    description: "株主・金融機関説明に耐えるドキュメントを標準化し、監査対応の手戻りを削減。",
  },
  {
    icon: CheckCircle2,
    title: "現場での実行補助",
    description: "役割分担と期日をAIが自動配信。進捗差分を毎週可視化し、実行漏れを防止。",
  },
];

const collaborationSteps = [
  {
    step: "STEP 1",
    title: "データ連携と仮説共有",
    detail:
      "会計・販売データを暗号化で連携し、経営課題の仮説を30分のワークショップで整理。AIが使う指標と定義を人間が先に設計します。",
  },
  {
    step: "STEP 2",
    title: "AIレポートの検証",
    detail:
      "生成AIが複数の施策シナリオを作成。担当コンサルタントが根拠とリスクをレビューし、経営会議で使える形に整えます。",
  },
  {
    step: "STEP 3",
    title: "経営者が意思決定",
    detail:
      "経営者が最終判断を行い、AIは議事録化と進捗モニタリングを担当。判断の痕跡を残すことで再現性とガバナンスを担保します。",
  },
];

const causalMap = [
  {
    label: "Cause",
    title: "経営課題のボトルネックを特定",
    description: "会計・販売・現場ログを統合し、粗利やキャッシュのズレを引き起こす因子を抽出。",
    metric: "管理会計KPI×現場ログ",
  },
  {
    label: "Mechanism",
    title: "AIが因果構造をシミュレーション",
    description: "生成AIが施策シナリオと前提条件を明示し、粗利・資金繰りへの波及を可視化。",
    metric: "AIシミュレーション×感度分析",
  },
  {
    label: "Effect",
    title: "納得感ある意思決定と実行",
    description: "会議で合意した打ち手とKPIを即タスク化。金融機関や社内説明にも耐える証跡を残します。",
    metric: "意思決定ログ×実行管理",
  },
];

const ServiceOverviewSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-16 md:py-24"
      aria-labelledby="service-overview-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,white_0%,transparent_70%)]">
        <div className="absolute -top-24 left-1/2 h-72 w-[62rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-sky-200/40 blur-[120px]" />
      </div>
      <div className="container relative mx-auto px-3 sm:px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <ScrollReveal
              as="span"
              variant="fade"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-sm shadow-primary/40"
            >
              SERVICE
            </ScrollReveal>
            <ScrollReveal
              as="h2"
              variant="fade-up"
              delay={100}
              id="service-overview-heading"
              className="mt-6 text-balance text-3xl font-bold leading-tight text-slate-900 md:text-5xl"
            >
              ブラックボックスを排した生成AI経営支援で、意思決定プロセスを見える化
            </ScrollReveal>
            <ScrollReveal
              as="p"
              variant="fade-up"
              delay={160}
              className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              生成AIは経営判断のスピードと精度を高める補助役です。私たちはAIの提案を人が検証する二重チェック体制を整え、経営者が安心して最終決定できるよう伴走します。
            </ScrollReveal>
            <ScrollReveal
              as="div"
              variant="fade-up"
              delay={200}
              className="mt-8 grid gap-4 text-left sm:grid-cols-3"
            >
              {insightHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-2xl border border-primary/20 bg-white/70 p-4 shadow-[0px_20px_40px_-36px_rgba(15,72,170,0.9)] backdrop-blur"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
          <ScrollReveal
            as="figure"
            variant="fade-up"
            delay={240}
            className="relative mx-auto flex w-full max-w-xl items-stretch overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-6 shadow-[0px_50px_120px_-60px_rgba(12,72,160,0.55)] backdrop-blur lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-transparent to-emerald-50/70" aria-hidden="true" />
            <img
              src={serviceFlowIllustration}
              alt="生成AI経営支援ダッシュボードのプレビュー"
              className="relative z-[1] h-full w-full rounded-[24px] object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-[2] flex flex-col gap-2 bg-gradient-to-t from-white/90 via-white/40 to-transparent p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">Visibility Dashboard</p>
              <p className="text-sm font-medium text-slate-800">
                KPIと意思決定ログを一画面で追跡。リスクシナリオと投資回収の裏付けを秒で確認できます。
              </p>
            </figcaption>
          </ScrollReveal>
        </div>

        <ScrollReveal
          as="div"
          variant="fade-up"
          delay={180}
          className="mt-20 flex flex-col gap-3 text-center md:text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">GOVERNANCE GUARANTEE</span>
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">金融・株主に耐える監査品質を初月から</h3>
          <p className="text-base leading-relaxed text-slate-600 md:max-w-3xl">
            経営陣が安心してAIを導入できるよう、証跡と運用設計をセットで提供します。月次の意思決定を支えるガバナンス土台を整備し、説明責任を全社で共有します。
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {executiveAssurance.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                variant="fade-up"
                delay={80 + index * 80}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/60 bg-white/95 p-7 text-left shadow-[0px_26px_60px_-42px_rgba(11,76,170,0.65)] backdrop-blur"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold leading-snug text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          as="div"
          variant="fade-up"
          delay={260}
          className="mt-20 flex flex-col gap-3 text-center md:text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">VALUE PROPOSITION</span>
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">AIの提案を経営ロジックに変換する3つの視点</h3>
          <p className="text-base leading-relaxed text-slate-600 md:max-w-3xl">
            情報のブラックボックス化を排し、仮説・根拠・リスクを経営陣全員が即座に把握できるようにします。数値と説明をリンクさせることで納得性の高い意思決定を実現します。
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {overviewItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                as="article"
                variant="fade-up"
                delay={240 + index * 90}
                className="flex h-full flex-col gap-5 rounded-3xl border border-primary/25 bg-gradient-to-br from-white via-sky-50/70 to-primary/10 p-7 shadow-[0px_30px_68px_-44px_rgba(12,74,170,0.65)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{item.description}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal
          as="div"
          variant="fade-up"
          delay={320}
          className="mt-20 flex flex-col gap-3 text-center md:text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary-foreground/80">WORKFLOW</span>
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">経営者が納得して意思決定するための伴走ステップ</h3>
          <p className="text-base leading-relaxed text-slate-600 md:max-w-3xl">
            因果を意識したステップで、データ統合から意思決定・実行管理までを滑らかに繋ぎます。各工程でAIと人が役割分担し、判断の裏付けを明確にします。
          </p>
        </ScrollReveal>
        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-x-[4%] top-12 hidden h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {collaborationSteps.map((step, index) => (
              <ScrollReveal
                key={step.title}
                variant="fade-up"
                delay={380 + index * 100}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-secondary/40 bg-white/95 p-8 text-left shadow-[0px_32px_70px_-48px_rgba(7,84,110,0.58)] backdrop-blur"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-secondary-foreground">
                  {step.step}
                </span>
                <h4 className="text-xl font-semibold leading-snug text-slate-900">{step.title}</h4>
                <p className="text-base leading-relaxed text-slate-600">{step.detail}</p>
                <div className="pointer-events-none absolute inset-x-8 bottom-0 hidden h-24 rounded-full bg-gradient-to-b from-secondary/20 to-transparent opacity-0 blur-xl transition duration-300 group-hover:opacity-100 md:block" />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[36px] border border-primary/30 bg-white/90 p-10 shadow-[0px_48px_110px_-52px_rgba(12,74,170,0.58)] backdrop-blur">
          <div className="flex flex-col gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div className="md:max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">CAUSAL ROADMAP</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">因果で語る意思決定プロセス</h3>
            </div>
            <div className="flex flex-col gap-3 text-left md:max-w-xl">
              <p className="text-base leading-relaxed text-slate-600">
                初回診断では、原因・メカニズム・結果を一つのロジックマップで提示。投資回収シミュレーションとリスク許容度を同時に確認し、経営者が納得して判断できるまで伴走します。
              </p>
              <div className="grid gap-3 text-left sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">DELIVERABLE</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">経営ロジックマップ（PDF/Notion）</p>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">TIMELINE</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">初回導入から4週間で可視化と運用開始</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-[repeat(5,minmax(0,1fr))]">
            {causalMap.map((item, index) => (
              <Fragment key={item.label}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-primary/20 bg-white/95 p-7 shadow-[0px_26px_48px_-34px_rgba(15,72,170,0.5)] transition duration-300">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary/70">{item.label}</span>
                  <div className="mt-4 space-y-3">
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                    {item.metric}
                  </span>
                  <div className="pointer-events-none absolute inset-x-6 -bottom-6 hidden h-12 rounded-full bg-gradient-to-b from-primary/15 to-transparent blur-md transition duration-300 group-hover:opacity-80 md:block" />
                </div>
                {index < causalMap.length - 1 && (
                  <div className="hidden items-center justify-center md:flex" aria-hidden="true">
                    <ArrowRight className="h-7 w-7 text-primary/60" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
