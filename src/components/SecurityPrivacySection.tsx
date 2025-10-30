import { ShieldCheck, Lock, FileText, CreditCard, Database, Radar, ClipboardCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import securityOpsMock from "@/assets/dashboard-preview.jpg";

const auditHighlights = [
  {
    title: "SOC2/ISMSレベルの統制",
    description: "権限付与は職務分掌に連動。アクセスリクエストは四半期ごとに棚卸し。",
  },
  {
    title: "ログの即時可視化",
    description: "24時間以内のアクセスログ照会・証跡提出に標準対応。",
  },
  {
    title: "BCPの年2回訓練",
    description: "災害時は福岡・東京の二拠点で復旧フローを即時切り替え。",
  },
];

const securityMeasures = [
  {
    icon: Lock,
    title: "通信・保管の暗号化",
    detail:
      "TLS1.2+の常時SSLとAES-256暗号化ストレージ。端末紛失時はMDMで即時リモートワイプ。",
  },
  {
    icon: Database,
    title: "データ利用の限定",
    detail:
      "生成AIの再学習は匿名化データに限定。契約終了時は削除証明＋再現不可テストを実施。",
  },
  {
    icon: ShieldCheck,
    title: "中小企業診断士による監督",
    detail:
      "代表・古町（中小企業診断士）がプロジェクトごとの守秘義務・再現性を監督し、意思決定ログを定例レビュー。",
  },
  {
    icon: Radar,
    title: "リスク検知の自動化",
    detail:
      "異常検知エンジンが外部持ち出し・異常値を監視。検知時はCIO・顧客責任者へ30分以内に共有。",
  },
  {
    icon: ClipboardCheck,
    title: "第三者監査と保険",
    detail:
      "年1回の第三者監査と情報漏洩保険（5,000万円）加入で、万一の際の損害補償まで手当。",
  },
];

const complianceBadges = [
  "Pマーク申請準備中",
  "NDA/秘密保持契約",
  "Microsoft Azure Japan Region",
];

const policyLinks = [
  {
    icon: FileText,
    label: "プライバシーポリシー",
    href: "/privacy-policy",
    description: "個人情報の取り扱い・第三者提供基準を公開し、改定履歴もアーカイブ。",
  },
  {
    icon: CreditCard,
    label: "安全な決済ゲートウェイ",
    href: "https://payments.example.com/security",
    description: "決済処理はPCI DSS準拠サービスを利用し、カード情報は当社で保持しません。",
  },
];

const SecurityPrivacySection = () => {
  return (
    <section
      className="fade-in-section relative overflow-hidden bg-slate-950 py-16 text-slate-50 md:py-24"
      aria-labelledby="security-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18)_0%,_rgba(15,23,42,0.95)_55%,_rgba(2,6,23,1)_100%)]" aria-hidden="true" />
      <div className="container relative mx-auto px-3 sm:px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <ScrollReveal
              as="span"
              variant="fade"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.38em] text-emerald-300"
            >
              SECURITY
            </ScrollReveal>
            <ScrollReveal
              as="h2"
              variant="fade-up"
              delay={80}
              id="security-heading"
              className="text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            >
              信頼を支える守秘統制とデータ保全ガバナンス
            </ScrollReveal>
            <ScrollReveal as="p" variant="fade-up" delay={140} className="text-lg leading-relaxed text-slate-200">
              年商5,000万円〜15億円の企業でも即日運用できるよう、意思決定ログ・アクセス権限・削除証明までワンストップで提供。中小企業診断士が監督する審査フローで、経営会議に提出できる透明性を担保します。
            </ScrollReveal>

            <ScrollReveal as="div" variant="fade-up" delay={200} className="grid gap-4 sm:grid-cols-2">
              {auditHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-emerald-400/20 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-emerald-200">{highlight.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200">{highlight.description}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal as="div" variant="fade-up" delay={260} className="flex flex-wrap items-center gap-2">
              {complianceBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </ScrollReveal>
          </div>

          <ScrollReveal
            as="figure"
            variant="fade-left"
            delay={120}
            className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_40px_90px_-50px_rgba(16,185,129,0.7)]"
          >
            <img
              src={securityOpsMock}
              alt="監査ログとアクセス統制を可視化したセキュリティダッシュボード"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-slate-900/0 to-emerald-500/10" aria-hidden="true" />
            <figcaption className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-2xl bg-slate-950/75 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">Security Pulse</p>
                  <p className="text-lg font-semibold text-white">24時間以内の証跡提出 SLA</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-300">平均提供時間</p>
                  <p className="text-xl font-bold text-emerald-300">4.2h</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                監査ログ・アクセス権限・削除証明をワンクリックで出力。意思決定の根拠をそのまま会議資料へ転用できます。
              </p>
            </figcaption>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {securityMeasures.map((measure, index) => {
            const Icon = measure.icon;
            return (
              <ScrollReveal
                key={measure.title}
                variant="fade-up"
                delay={index * 90}
                className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/12 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-emerald-300/30"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-white">{measure.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200">{measure.detail}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {policyLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <ScrollReveal
                key={link.label}
                variant="fade-up"
                delay={300 + index * 90}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/12 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a
                    href={link.href}
                    className="text-lg font-semibold text-white underline decoration-emerald-300 decoration-2 underline-offset-4 hover:text-emerald-200"
                  >
                    {link.label}
                  </a>
                </div>
                <p className="text-sm leading-relaxed text-slate-200">{link.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityPrivacySection;
