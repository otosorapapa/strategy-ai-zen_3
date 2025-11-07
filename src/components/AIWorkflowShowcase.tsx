import { Fragment } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  FileText,
  HandshakeIcon,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import problemInfographic from "@/assets/problem-infographic.svg";
import representativeImage from "@/assets/representative.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";

const serviceItems = [
  {
    step: "01",
    title: "現状分析と数値シミュレーション",
    description:
      "財務・取引・人材の情報をAIが統合。利益と資金のゆがみを見える化し、改善余地を捉えます。",
    icon: BarChart3,
  },
  {
    step: "02",
    title: "再生シナリオ設計",
    description:
      "撤退・投資・再編の道筋を複数描写。診断士が判断枠組みと投資対効果を検証し、優先度とリスクを整理します。",
    icon: FileText,
  },
  {
    step: "03",
    title: "金融機関交渉・モニタリング",
    description:
      "交渉資料、資金繰りチャート、定例レポートをAIが作成。専門家が金融機関との論点整理と次アクションを並走します。",
    icon: HandshakeIcon,
  },
  {
    step: "04",
    title: "経営者コーチング",
    description:
      "週次セッションで指標と現場判断を同期。判断の前提を確かめながら、チームの巻き込み力と実行速度を高めます。",
    icon: MessageSquare,
  },
];

const impactMetrics = [
  {
    value: "議論が意思決定へ一直線",
    label: "経営会議",
    detail: "前提がそろったキャンバスで討議が整理され、判断が速まります。",
  },
  {
    value: "資金の見通しが澄む",
    label: "運転資金",
    detail: "資金の波形と行動計画がつながり、次の打ち手を胸を張って示せます。",
  },
  {
    value: "交渉の土台が揺らがない",
    label: "金融機関連携",
    detail: "根拠が明確な資料で対話が進み、堂々と主導権を握れます。",
  },
];

const trustSignals = [
  "福岡の金融機関と共同モニタリング実績",
  "再生案件の意思決定ボードを専門家が伴走",
  "金融交渉と現場実行を同時に支えるオペレーション",
  "九州エリアの経営会議ファシリテーションを継続",
];

const workflowQuickSummary = [
  "AIが財務・市場・人材の情報を束ね、経営で押さえるべき焦点を洗い出す",
  "診断士が再生シナリオと交渉資料を整理し、判断基準をそろえる",
  "専用ダッシュボードで行動履歴と資金の見通しを定例で更新する",
];

const workflowNextActions = [
  "現状データと気がかりを共有し、48時間でリスクの見取り図を受け取る",
  "2週間のZENスキャンで投資や撤退の案と金融交渉資料を並行準備",
  "週次伴走で指標ダッシュボードとレポートを更新し、交渉の先手を取る",
];

const AIWorkflowShowcase = () => {
  return (
    <section
      id="how-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#ecf3ff] via-[#f4f8ff] to-white py-24 text-[#081a33]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(44,123,255,0.18),_transparent_60%)]" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#10294e]/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#10294e]/70 shadow-[0_10px_40px_rgba(16,41,78,0.08)]">
            提供価値の全体像
          </span>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem]">
            AIと診断士が並走する経営改善で、次の一手を堂々と示せる会社へ
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[#143057]/80 md:text-lg">
            立て直しの局面でも迷わず判断し周囲を導ける舞台を整えることが私たちの使命です。生成AIと経営改善の専門家がチームとなり、貴社専用の再生シナリオと管理アプリを描きます。業界や顧客の兆候を常時捉え、計画づくりから交渉、現場実行まで同じ根拠で進められるよう一気通貫で伴走します。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-10 rounded-[32px] border border-[#0f2647]/10 bg-white/85 p-6 shadow-[0_30px_70px_rgba(8,26,51,0.14)] backdrop-blur"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#eff5ff] px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#0f2647]">
                30秒サマリー
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-[#143057]/80">
                {workflowQuickSummary.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[#2b7df4]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-[24px] border border-[#2b7df4]/25 bg-[#f3f8ff] p-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#2b7df4]">
                次のアクション
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-[#143057]/80">
                {workflowNextActions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#2b7df4]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex items-center gap-2 rounded-full border border-[#0f2647]/10 bg-white px-4 py-1.5 text-[0.78rem] font-medium text-[#0f2647]/80 shadow-[0_12px_30px_rgba(8,26,51,0.08)]"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[#3b82f6]" aria-hidden="true" />
              {signal}
            </span>
          ))}
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-8">
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#3b82f6]/40 via-[#3b82f6]/10 to-transparent sm:block" />
              {serviceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Fragment key={item.title}>
                    <ScrollReveal
                      variant="fade-up"
                      className="relative mb-8 rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-[0_35px_70px_rgba(12,35,73,0.12)] backdrop-blur"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2b7df4] to-[#00bcd4] text-lg font-semibold text-white shadow-[0_15px_35px_rgba(43,125,244,0.35)]">
                            {item.step}
                          </span>
                          <span className="hidden sm:inline-flex h-12 w-px bg-[#2b7df4]/20" aria-hidden="true" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center justify-center rounded-full bg-[#2b7df4]/10 p-2 text-[#2b7df4]">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <h3 className="text-xl font-semibold tracking-tight text-[#0b1f3f]">{item.title}</h3>
                          </div>
                          <p className="text-[0.95rem] leading-relaxed text-[#1a335c]/80">{item.description}</p>
                          {index === 1 && (
                            <div className="grid gap-4 rounded-2xl border border-[#2b7df4]/10 bg-gradient-to-br from-[#f4f9ff] to-white p-4 sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                              <div className="space-y-2">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2b7df4]">二重の見える化</p>
                                <p className="text-sm leading-relaxed text-[#143057]/75">
                                  指標と意思決定のつながりを図解で共有。複数シナリオの利益・資金・人員への影響を一目で比較し、経営陣と現場の認識をそろえます。
                                </p>
                              </div>
                              <div className="relative overflow-hidden rounded-xl">
                                <img
                                  src={dashboardPreview}
                                  alt="再生シナリオを可視化したダッシュボードのハイライト"
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                                <span className="absolute inset-x-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0b1f3f] shadow-lg">
                                  <Sparkles className="h-4 w-4 text-[#f97316]" aria-hidden="true" />
                                  シナリオ比較 3分で共有
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                    {index === 2 && (
                      <ScrollReveal
                        variant="fade-up"
                        className="mb-8 rounded-[28px] border border-[#0b1f3f]/6 bg-white/95 p-6 shadow-[0_28px_60px_rgba(11,31,63,0.12)] backdrop-blur"
                      >
                        <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
                          <div className="space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#2b7df4]">Before / After</p>
                            <h4 className="text-lg font-semibold text-[#0b1f3f]">
                              銀行対話資料の品質が再生シナリオの信頼度を左右します
                            </h4>
                            <ul className="space-y-2 text-sm leading-relaxed text-[#143057]/80">
                              <li className="flex items-start gap-2">
                                <ArrowUpRight className="mt-1 h-4 w-4 text-[#2b7df4]" aria-hidden="true" />
                                Before：勘と経験で作成した計画書は、リスク分析が抜け落ちるため信用が伸び悩む
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowUpRight className="mt-1 h-4 w-4 text-[#2b7df4]" aria-hidden="true" />
                                After：AIが収益変動を多角的に試算し、専門家が交渉材料を整理。伝えたいメッセージが一本に収束する
                              </li>
                            </ul>
                          </div>
                          <div className="rounded-2xl border border-[#2b7df4]/15 bg-[#f0f6ff] p-4">
                            <img
                              src={problemInfographic}
                              alt="課題から解決までのフレームを示すインフォグラフィック"
                              className="w-full"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </ScrollReveal>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <ScrollReveal
              variant="fade-up"
              className="rounded-[32px] border border-[#0b1f3f]/8 bg-white/95 p-8 shadow-[0_35px_70px_rgba(7,23,48,0.16)] backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#2b7df4]">成果と実行管理</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#0b1f3f]">変化を先読みし、経営改善の判断軸を短期間で共通化</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#143057]/80">
                市場の揺らぎに遅れず舵を切るため、経営者の描く未来像と現場データをひとつの物語に束ねます。AIが示す将来シミュレーションを基に中小企業診断士が優先順位と交渉シナリオを設計し、週次レビューで行動と数字のズレを正します。
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {impactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl bg-gradient-to-br from-[#f5f9ff] to-white p-4 text-center shadow-[0_15px_40px_rgba(15,38,78,0.12)]"
                  >
                    <p className="text-lg font-semibold text-[#2b7df4]">{metric.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f2647]/70">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-[0.7rem] leading-relaxed text-[#143057]/75">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal
              variant="fade-up"
              className="overflow-hidden rounded-[32px] border border-[#2b7df4]/10 bg-white/95 shadow-[0_30px_70px_rgba(17,45,84,0.14)]"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
                <div className="space-y-4 px-8 py-8 lg:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2b7df4]">フォト・テスティモニアル</p>
                  <blockquote className="text-base font-medium leading-relaxed text-[#0b1f3f]">
                    「ヒアリングの直後には粗利改善の仮説が共有され、銀行面談でも一枚のダッシュボードで説明できました。現場の動き方まで視覚化されるので、チーム全員が同じ方向を向けています。」
                  </blockquote>
                  <div className="flex flex-col gap-1 text-sm text-[#143057]/75">
                    <span className="font-semibold text-[#0b1f3f]">福岡県内 製造業 代表取締役（年商約10億円規模）</span>
                    <span>交渉資料と現場タスクの整合性が保たれ、会議のたびに自信を持って共有できています。</span>
                  </div>
                </div>
                <div className="relative h-full overflow-hidden">
                  <img
                    src={representativeImage}
                    alt="中小企業の経営者が戦略資料を確認している様子"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#081a33]/80 to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              variant="fade-up"
              className="rounded-[28px] border border-dashed border-[#2b7df4]/30 bg-gradient-to-br from-[#f7fbff] to-white p-8 shadow-[0_24px_60px_rgba(14,35,73,0.12)]"
            >
              <h4 className="text-lg font-semibold text-[#0b1f3f]">初回の無料セッションで未来像と段取りをそろえる3つの観点</h4>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#143057]/80">
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" aria-hidden="true" />
                  <span>業界動向と自社の強みを洗い出し、守り抜く価値と挑戦の領域を言語化</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" aria-hidden="true" />
                  <span>AI分析で将来5年の収益イメージと交渉資料の骨子を描き、取引先へ胸を張って示せる道筋を明確化</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" aria-hidden="true" />
                  <span>カスタム経営管理アプリで週次アクションを可視化し、関係者全員が同じスピードで動ける運用に落とし込む</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        <SectionMicroCta
          eyebrow="Micro CTA"
          title="45分の無料相談で、貴社の再生ストーリーを共に描き直す"
          description="AIが提示する試算と中小企業診断士の洞察を並べ、貴社のKPIと現状データに沿った導入シナリオをご提案。対外説明でも誇りをもって語れる計画へと磨き上げます。"
          ctaId="workflow-overview"
          variant="subtle"
        />
      </div>
    </section>
  );
};

export default AIWorkflowShowcase;
