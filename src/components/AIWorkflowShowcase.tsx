import { Fragment } from "react";
import {
  ArrowUpRight,
  BarChart3,
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

const serviceItems = [
  {
    step: "01",
    title: "現状分析と数値シミュレーション",
    description:
      "財務・商流・人材データをAIが統合。粗利、キャッシュ、需要変動をヒートマップで可視化し、改善余地を定量化します。",
    icon: BarChart3,
  },
  {
    step: "02",
    title: "再生シナリオ設計",
    description:
      "撤退・投資・再編のシナリオを複数比較。専門家が意思決定フレームとROIを検証し、優先度とリスクを見える化します。",
    icon: FileText,
  },
  {
    step: "03",
    title: "金融機関交渉・モニタリング",
    description:
      "交渉資料、資金繰りチャート、定例レポートをAIが生成。専門家が金融機関との論点整理と次アクションを伴走します。",
    icon: HandshakeIcon,
  },
  {
    step: "04",
    title: "経営者コーチング",
    description:
      "週次セッションでKPIと現場判断を同期。意思決定の前提を検証しながら、巻き込み力と実行速度を引き上げます。",
    icon: MessageSquare,
  },
];

const impactMetrics = [
  {
    value: "粗利率 +3.2pt",
    label: "平均改善幅",
    detail: "製造・卸の再生案件18件の中央値（2022-2024年度実績）",
  },
  {
    value: "キャッシュ創出 +2.6ヶ月",
    label: "運転資金",
    detail: "在庫・与信のテコ入れにより資金繰りの猶予を拡大",
  },
  {
    value: "金融機関合意 94%",
    label: "交渉成立率",
    detail: "計画書の妥当性検証と対話資料の整備で再生計画を承認",
  },
];

const trustSignals = [
  "中小企業庁 認定支援機関",
  "福岡県事業再生パートナー",
  "金融ADR対応経験チーム",
  "地域金融機関連携ネットワーク",
];

const AIWorkflowShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ecf3ff] via-[#f4f8ff] to-white py-24 text-[#081a33]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(44,123,255,0.18),_transparent_60%)]" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#10294e]/10 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#10294e]/70 shadow-[0_10px_40px_rgba(16,41,78,0.08)]">
            What｜提供価値の全体像
          </span>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem]">
            AI × 専門家による経営再生支援で、再起のストーリーを一気通貫で描き直す
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-[#143057]/80 md:text-lg">
            データ統合と専門家の判断力を一つのダッシュボードに束ね、計画立案から金融交渉、現場実行まで“同じ地図”で走り切れる状態をつくります。論点の抜け漏れを無くし、金融機関と従業員双方の納得感を高める再生プロセスです。
          </p>
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
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2b7df4]">Dual Coding</p>
                                <p className="text-sm leading-relaxed text-[#143057]/75">
                                  KPIと意思決定の連動をフレーム図で共有。シナリオA/B/Cの粗利・キャッシュ・人員インパクトを一目で比較し、経営陣と現場の認識をそろえます。
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
                                After：AIがモンテカルロで収益変動を試算、専門家が交渉材料を整理し、説得力のあるロードマップに昇華
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
              <h3 className="mt-3 text-2xl font-semibold text-[#0b1f3f]">72時間で「状況把握 → 戦略 → 交渉」の土台を整備</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#143057]/80">
                現場ヒアリングとデータ取り込みを同時進行させ、初回72時間で意思決定の材料を提示。1ヶ月以内に金融機関合意に向けた対話ストーリーを固め、以降は週次で実行度をレビューします。
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {impactMetrics.map((metric) => (
                  <div
                    key={metric.value}
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
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#2b7df4]">Photo Testimonial</p>
                  <blockquote className="text-base font-medium leading-relaxed text-[#0b1f3f]">
                    「ヒアリングから72時間で粗利改善の仮説が共有され、銀行面談でも一枚のダッシュボードで説明できました。現場の動き方まで視覚化されるので、チーム全員が同じ方向を向けています。」
                  </blockquote>
                  <div className="flex flex-col gap-1 text-sm text-[#143057]/75">
                    <span className="font-semibold text-[#0b1f3f]">福岡県内 製造業 代表取締役（年商8.4億円）</span>
                    <span>粗利率 +3.8pt / 銀行折衝リードタイム 50%短縮</span>
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
              <h4 className="text-lg font-semibold text-[#0b1f3f]">最初の無料セッションで確認する3つのポイント</h4>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#143057]/80">
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" aria-hidden="true" />
                  <span>財務・商流データの取得状況とAI連携可否を診断し、初回72時間で可視化できる指標を特定</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" aria-hidden="true" />
                  <span>金融機関・主要ステークホルダーの論点を整理し、交渉資料のアウトラインと必要証憑を棚卸し</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-[#f97316]" aria-hidden="true" />
                  <span>経営チームの役割分担と意思決定プロセスを合意形成し、最初の30日プランを共通理解化</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowShowcase;
