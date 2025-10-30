import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";
import transformationImage from "../../assets/strategy-planning.jpg";

const resultMetrics = [
  {
    label: "営業利益の改善幅",
    value: "+12%",
    detail: "再生計画実行後12ヶ月の平均改善幅（例）",
    icon: LineChart,
  },
  {
    label: "債務超過脱出率",
    value: "80%",
    detail: "金融機関との再交渉で合意に至った割合（例）",
    icon: ShieldCheck,
  },
  {
    label: "伴走企業数",
    value: "100社超",
    detail: "九州・西日本の伴走実績",
    icon: Users2,
  },
];

const trustSignals = [
  "中小企業庁 認定経営革新等支援機関チームとの共同体制",
  "地域金融機関7行と構築したモニタリング・レポーティング標準",
  "再生ファンド/PEの投資判断プロセスに対応した実務プロトコル",
];

const caseStudies = [
  {
    id: "01",
    industry: "製造業",
    title: "粗利率とキャッシュを6ヶ月で正常軌道に",
    before: "原材料高騰で粗利率が▲4pt、資金繰りが毎月綱渡り。社内では打ち手が分断し、現場の危機感もばらついていた。",
    intervention:
      "AIがSKU別に調達条件と需要弾力性を解析。診断士チームが価格改定シナリオと人員再配置を設計し、銀行提出用の実行計画を48時間で提示。",
    after: "粗利率+3.2pt／キャッシュ余力+45日。意思決定会議を週次ダッシュボードで標準化し、増産判断を前倒しで実行。",
    kpi: "粗利率+3.2pt・運転資金45日分を確保",
  },
  {
    id: "02",
    industry: "卸売業",
    title: "債務超過からの脱却と金融機関の信頼回復",
    before: "在庫滞留で債務超過に陥り、主要銀行からは条件変更の回答が保留。現場は売り切り施策が乱発し、赤字幅が拡大。",
    intervention:
      "需要シフトをAIでセグメント化し、不動在庫の処分ロードマップを再編。金融機関面談用に再生KPIとチェックリストを設計し、モニタリング会議を伴走。",
    after: "債務超過解消／追加融資の再開。月次の着地精度が±3%以内に安定し、金融機関とのモニタリング会議が共同改善の場へ。",
    kpi: "債務超過解消・追加融資5.5億円を確保",
  },
  {
    id: "03",
    industry: "サービス業",
    title: "人材の再配置と顧客単価の同時改善",
    before: "離職率が27%に達し、店舗ごとの顧客体験がばらつき。研修は属人的で、スキルマップも未整備。",
    intervention:
      "AIで人材スキルと顧客レビューを統合し、3レベルの育成ルートを設計。評価制度を刷新し、管理職向けのKPIコーチングを導入。",
    after: "平均客単価+18%／離職率▲35%。採用コストを年間1200万円削減し、サービス品質指数も改善。",
    kpi: "平均客単価+18%・離職率▲35%",
  },
];

const ResultsSection = () => {
  return (
    <section className="fade-in-section relative overflow-hidden bg-[#030b21] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[160px]" />
        <div className="absolute right-[-120px] top-40 h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-[160px]" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center md:text-left">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Impact｜結果で語る
          </span>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                「再生の設計図」が描かれた瞬間、数字と行動が同じ未来を向き始める
              </h2>
              <p className="text-[1.05rem] leading-relaxed text-slate-200/90 md:text-lg">
                仮説提示で終わらせず、AIアナリティクスと実務家の伴走で実行確度を担保。粗利・資金・人材を同時に整流化することで、経営者の意思決定を迷いなく前に進めます。
              </p>
            </div>
            <div className="hidden h-full flex-col items-center justify-center rounded-[24px] border border-white/15 bg-white/5 px-5 py-6 text-sm leading-relaxed text-slate-100/85 shadow-[0_25px_70px_rgba(2,10,28,0.45)] md:flex">
              <Sparkles className="mb-3 h-7 w-7 text-cyan-200" />
              <p className="text-center font-semibold text-white">
                数字・人材・現場の視点を一枚の設計図に束ね、再生の合意形成を高速化。
              </p>
              <p className="mt-2 text-[0.8rem] text-slate-200/80">
                経営者・金融機関・従業員が同じストーリーラインで未来を描き始める瞬間をデザインします。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
          <ScrollReveal variant="fade-up" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-3">
              {resultMetrics.map(({ icon: Icon, ...metric }) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-left shadow-[0_28px_70px_rgba(1,9,26,0.45)]"
                >
                  <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-125" />
                  <div className="flex h-full flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/80">{metric.label}</p>
                    </div>
                    <p className="text-4xl font-black text-white">{metric.value}</p>
                    <p className="text-sm leading-relaxed text-slate-200/85">{metric.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100/90 shadow-[0_18px_40px_rgba(3,13,32,0.35)]"
                >
                  <Building2 className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" className="relative">
            <div className="group relative overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-2 shadow-[0_30px_80px_rgba(2,11,32,0.55)]">
              <div className="relative overflow-hidden rounded-[30px]">
                <img
                  src={transformationImage}
                  alt="再生計画の全体像を俯瞰するダッシュボード"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#021029]/70 via-[#021c3d]/40 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-cyan-300/20 bg-[#051838]/90 px-6 py-5 shadow-[0_20px_50px_rgba(1,12,30,0.5)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Dual Coding</p>
                    <p className="mt-1 text-base font-semibold leading-snug text-white">
                      KPIモニタリング×現場TODOを一画面で同期し、意思決定を48時間以内に収束。
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-100">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up" className="mt-16 rounded-[36px] border border-white/12 bg-white/5 px-6 py-10 shadow-[0_35px_90px_rgba(2,12,34,0.5)] md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">Proof Stories</p>
              <h3 className="mt-2 text-2xl font-semibold leading-snug md:text-3xl">
                経営者・金融機関・現場を巻き込む「Before→After」の実装記録
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-200/85">
              数字の復元だけでなく、組織と金融のステークホルダーが納得するシナリオを再現性高く構築。各ケースでは、構造課題→介入→成果を3ステップで可視化し、次の打ち手へと接続しています。
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group flex h-full flex-col gap-6 rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0b1f3f] via-[#07162f] to-[#040d21] p-7 shadow-[0_28px_80px_rgba(1,10,32,0.55)]"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                  <span className="font-semibold">Case {study.id}</span>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[0.7rem] font-medium text-cyan-100">
                    {study.industry}
                  </span>
                </div>
                <h4 className="text-xl font-semibold leading-snug text-white">{study.title}</h4>
                <div className="space-y-4 text-sm text-slate-200/85">
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] inline-flex h-8 min-w-[72px] items-center justify-center rounded-full bg-white/10 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                      Before
                    </span>
                    <p className="leading-relaxed">{study.before}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] inline-flex h-8 min-w-[90px] items-center justify-center rounded-full bg-white/10 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                      Intervention
                    </span>
                    <p className="leading-relaxed">{study.intervention}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] inline-flex h-8 min-w-[68px] items-center justify-center rounded-full bg-white/10 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                      After
                    </span>
                    <p className="leading-relaxed">{study.after}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-4 text-left text-sm text-cyan-100 transition-all duration-300 group-hover:border-cyan-200/40 group-hover:bg-cyan-400/20">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Impact</p>
                    <p className="mt-1 text-base font-semibold text-white">{study.kpi}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;
