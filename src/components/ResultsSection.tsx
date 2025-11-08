import ScrollReveal from "@/components/ScrollReveal";
import impactInfographic from "@/assets/data-infographic-growth.jpg";
import certificationBadge from "@/assets/hero-fukuoka.svg";
import partnerDiscussion from "@/assets/executive-meeting.jpg";
import manufacturingCase from "@/assets/business-dashboard-analytics.jpg";
import wholesaleCase from "@/assets/financial-analysis.jpg";
import serviceCase from "@/assets/one-on-one-consulting.jpg";
import { Building2, LineChart, ShieldCheck } from "lucide-react";

const impactHighlights = [
  {
    icon: LineChart,
    value: "+5.2pt",
    label: "平均粗利率改善幅",
    helper: "スタンダード/プレミアム導入企業の6ヶ月平均（2024年実績）",
  },
  {
    icon: ShieldCheck,
    value: "+28%",
    label: "在庫回転率向上",
    helper: "AIレポートと伴走で在庫滞留を解消した平均値",
  },
  {
    icon: Building2,
    value: "▲52%",
    label: "意思決定リードタイム",
    helper: "初回診断〜経営会議までの準備時間短縮（2024年実績）",
  },
];

const partnerVoices = [
  {
    name: "福岡シティバンク 企業再生部",
    role: "法人ソリューション統括責任者",
    quote:
      "計画書とダッシュボードの整合が取れており、稟議段階での確認が格段に速くなりました。数字の裏付けと現場の声が同じ画面に並ぶことで、意思決定のスピードが上がっています。",
    logo: certificationBadge,
    logoAlt: "福岡シティバンクとの共同検証ロゴ（イメージ）",
  },
  {
    name: "中小企業診断士協会 福岡支部",
    role: "共同検証チームリーダー",
    quote:
      "生成AIの分析を診断士が物語に落とし込み、経営者の覚悟を支えるフレームが整っています。伴走体制の透明性が高く、金融機関との協働にも安心して推薦できます。",
    logo: partnerDiscussion,
    logoAlt: "診断士チームの共同検証風景（イメージ）",
  },
];

const caseStudies = [
  {
    company: "A社（製造業）",
    scale: "年商8.5億円｜従業員65名",
    summary:
      "原材料高騰で粗利率が▲4.2pt。データ統合と価格再設計により、粗利率+3.4pt、資金交渉リードタイム▲40%を達成。",
    metrics: ["粗利率+3.4pt", "運転資金枠+1.2億円"],
    image: manufacturingCase,
    imageAlt: "製造業のダッシュボードを確認する担当者の様子",
  },
  {
    company: "B社（卸売業）",
    scale: "年商5.2億円｜従業員42名",
    summary:
      "在庫滞留による債務超過が進行。AIが需要と回収リスクを色分けし、交渉資料を再設計。金融機関との条件交渉が30日短縮。",
    metrics: ["資金交渉▲30日", "回収サイト▲18日"],
    image: wholesaleCase,
    imageAlt: "卸売業の財務指標をチェックする経営陣の会議",
  },
  {
    company: "C社（サービス業）",
    scale: "年商3.1億円｜従業員28名",
    summary:
      "離職率の高さでサービス提供が不安定。人材データの可視化と週次レビューを導入し、粗利率+2.1ptと採用コスト▲25%を実現。",
    metrics: ["粗利率+2.1pt", "採用コスト▲25%"],
    image: serviceCase,
    imageAlt: "サービス業の現場とマネージャーが伴走会議を行う様子",
  },
];

const ResultsSection = () => {
  return (
    <section className="bg-[#04112a] py-20 text-white">
      <div className="layout-shell space-y-16">
        <ScrollReveal variant="fade-up" className="space-y-5 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Evidence &amp; Trust
          </span>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.4rem]">
            データと現場の声で裏付けた実行力
          </h2>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-100/85 md:text-lg">
            実績データと第三者の視点を公開し、地域企業が安心して再挑戦できる根拠を提示します。生成AIと診断士の協働で、計画から交渉、日々のアップデートまで一気通貫で支援します。
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[32px] border border-white/12 bg-white/5 p-6 shadow-[0_24px_60px_rgba(4,18,45,0.45)]"
          >
            <figure className="space-y-4 text-left">
              <img
                src={impactInfographic}
                alt="粗利率改善と交渉リードタイム短縮の推移を示すインフォグラフィック"
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <figcaption className="text-xs uppercase tracking-[0.32em] text-cyan-100/80">
                出典：自社実績調査（2024年9月）
              </figcaption>
            </figure>
            <div className="grid gap-4 sm:grid-cols-3">
              {impactHighlights.map(({ icon: Icon, value, label, helper }) => (
                <div key={label} className="rounded-2xl border border-white/12 bg-[#072044]/80 p-4 text-left">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </div>
                  <p className="mt-2 text-2xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-100/75">{helper}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={0.1}
            className="space-y-6 rounded-[32px] border border-white/12 bg-white/5 p-6 text-left shadow-[0_24px_60px_rgba(4,18,45,0.35)]"
          >
            <h3 className="text-xl font-semibold text-white">第三者とともに磨いた信頼基盤</h3>
            <div className="space-y-6">
              {partnerVoices.map(({ name, role, quote, logo, logoAlt }) => (
                <div key={name} className="space-y-3 rounded-2xl border border-white/12 bg-[#061a38]/70 p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt={logoAlt}
                      className="h-12 w-12 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white/90">{name}</p>
                      <p className="text-xs text-slate-100/70">{role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100/85">{quote}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="fade-up"
          className="space-y-8 rounded-[32px] border border-white/12 bg-white/5 p-6 shadow-[0_24px_60px_rgba(4,18,45,0.35)]"
        >
          <div className="space-y-3 text-center">
            <h3 className="text-2xl font-semibold text-white">業種別のBtoB支援事例</h3>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-100/80 md:text-base">
              顔の見える伴走で得た成果を、業種・規模・定量結果とともにご紹介します。ご自身の状況に重ねてご覧ください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map(({ company, scale, summary, metrics, image, imageAlt }) => (
              <article
                key={company}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#061a38]/70"
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-1 flex-col gap-4 p-5 text-left">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-cyan-100/90">{company}</p>
                    <p className="text-xs text-slate-100/70">{scale}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100/85">{summary}</p>
                  <ul className="mt-auto space-y-2 text-xs text-cyan-100">
                    {metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResultsSection;
