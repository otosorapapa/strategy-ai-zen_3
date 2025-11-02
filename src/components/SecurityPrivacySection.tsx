import {
  ArrowRight,
  Award,
  BookOpen,
  Lock,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import supportVisual from "@/assets/strategic-meeting.jpg";

const kpiSnapshots = [
  {
    title: "仮説提示まで",
    value: "48h",
    description: "初回診断後48時間以内に因果構造と優先論点を整理。経営判断が止まらない状態をつくります。",
  },
  {
    title: "週次ボード",
    value: "90%",
    description: "週次レビュー参加率。Slack連携で全員の視線をKPIと進捗に誘導し、推進力を維持。",
  },
  {
    title: "金融機関連携",
    value: "3営業日",
    description: "必要資料の再構成・承認プロセスを3営業日以内に完結。説明責任とスピードを両立。",
  },
];

const supportItems = [
  {
    icon: Users,
    title: "専門家チームの伴走",
    description:
      "代表・古町（中小企業診断士）を中心に、財務・人材・販売の専門家が案件ごとにチームを編成。経営会議のファシリテーションまで支援します。",
    evidence: "因果性と論理性を担保するディスカッション議事をその場で可視化。",
  },
  {
    icon: BookOpen,
    title: "運用ガイドと教育プログラム",
    description:
      "AIプロンプト集、判断ログのテンプレート、現場向けトレーニングを提供。導入初月は週次で伴走し、社内にノウハウが残る仕組みを整えます。",
    evidence: "納得性の高いロールプレイとリファレンス動画をクラウドで共有。",
  },
  {
    icon: Lock,
    title: "データガバナンスと守秘体制",
    description:
      "暗号化クラウドとアクセス権限管理を徹底。NDA締結・監査ログ共有・契約終了時のデータ削除まで透明性を担保します。",
    evidence: "スマートな権限移行フローで現場と経営が同じ基準で運用可能。",
  },
  {
    icon: Award,
    title: "信頼を裏付ける認定と実績",
    description:
      "経営革新等支援機関としての認定に加え、九州を中心に100社以上の再生プロジェクトを支援。金融機関との共同プロジェクトも豊富です。",
    evidence: "九州北部5行との共同スキームで平均粗利+3.2ptを実現した実績。",
  },
];

const processSteps = [
  {
    label: "STEP 1",
    title: "初回相談（30分）",
    detail: "経営課題と外部環境を棚卸し。AIで抽出した初期シグナルと優先論点をその場で共有します。",
  },
  {
    label: "STEP 2",
    title: "仮診断（2週間）",
    detail: "データを預かり、生成AIが粗利・キャッシュの歪みをヒートマップ化。診断士が現場ヒアリングを実施。",
  },
  {
    label: "STEP 3",
    title: "再生設計ワークショップ",
    detail: "複数シナリオを比較し、優先施策と数値目標を合意。金融機関へ伝えるストーリーも整理します。",
  },
  {
    label: "STEP 4",
    title: "実行伴走（3〜12ヶ月）",
    detail: "週次レビューと月次ボードで進捗とリスクを確認。必要に応じて計画をリライトし続けます。",
  },
];

const trustSignals = [
  "経営革新等支援機関",
  "福岡県 DXパートナー登録",
  "金融庁 事業再生ガイドライン順守",
  "日経クロスウーマン掲載",
];

const SecurityPrivacySection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ecf3ff] via-[#f4f8ff] to-white py-24 text-[#0b1f3f]">
      <div className="pointer-events-none absolute -top-32 right-16 h-64 w-64 rounded-full bg-[#79c5ff]/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-[-120px] h-80 w-80 rounded-full bg-[#4aa6ff]/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-[1] mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70 shadow-[0_10px_25px_rgba(8,40,75,0.08)]">
            Support System
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            再生の道のりを一緒に歩むための、導入ステップと伴走体制
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            因果で語れる経営再生の筋道を、初動から実行まで切れ目なくデザイン。判断の根拠・現場の納得・データの安心を同時に整える伴走スキームで、年商5,000万円〜15億円規模の企業変革を加速させます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal variant="fade-up" className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0b1f3f] shadow-[0_16px_40px_rgba(6,27,70,0.08)]">
              <ShieldCheck className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
              戦略・財務・現場を一枚のロジックで束ねる伴走体制
            </div>
            <p className="text-base leading-relaxed text-[#1e3359]/80">
              仮説の提示から施策の実装まで、AIが提示するインサイトと専門家の判断を統合。各フェーズで重視すべき因果関係を可視化し、現場の合意形成を高速化します。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {kpiSnapshots.map((snapshot) => (
                <div
                  key={snapshot.title}
                  className="group rounded-3xl border border-[#0b1f3f]/10 bg-white/90 p-5 shadow-[0_20px_45px_rgba(9,30,70,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0584c6]/40 hover:shadow-[0_30px_60px_rgba(9,30,70,0.14)]"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-[#0584c6]">{snapshot.value}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/50">KPI</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#0b1f3f]">{snapshot.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#1e3359]/70">{snapshot.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="fade-up"
            className="relative overflow-hidden rounded-[36px] border border-white/40 bg-gradient-to-tr from-[#07224a] via-[#0c3a73] to-[#1460a3] p-6 shadow-[0_35px_70px_rgba(7,24,57,0.35)]"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_65%)]" aria-hidden="true" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-3 text-white/80">
                <Target className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-[0.28em] uppercase">Dual Coding Map</span>
              </div>
              <img
                src={supportVisual}
                alt="戦略ミーティングでAIダッシュボードを共有しながら伴走体制の流れを確認する様子"
                className="h-56 w-full rounded-[28px] object-cover"
                loading="lazy"
              />
              <div className="space-y-2 rounded-2xl bg-white/10 p-4 text-white">
                <p className="text-sm font-semibold">データと現場の納得が同時に走る再生ストーリー</p>
                <p className="text-xs leading-relaxed text-white/70">
                  因果マップ・数値インパクト・意思決定ログをひとつにまとめ、次のアクションと誰が動くかを即座に共有。判断の迷いを断ち切る「一枚絵」で合意形成を高速化します。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="fade-up"
          className="relative mt-16 rounded-[40px] border border-[#0b1f3f]/10 bg-white/90 p-8 shadow-[0_30px_70px_rgba(8,27,64,0.12)]"
        >
          <div className="absolute inset-x-6 top-16 hidden h-px bg-gradient-to-r from-transparent via-[#0584c6]/40 to-transparent lg:block" aria-hidden="true" />
          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.label} className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0584c6]/12 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                    {step.label}
                  </span>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 text-[#0584c6]/70 lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[#0b1f3f]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#1e3359]/75">{step.detail}</p>
                {index < processSteps.length - 1 && (
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#1e3359]/60 lg:hidden">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    次フェーズへ
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {supportItems.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                variant="fade-up"
                className="group flex h-full flex-col gap-5 rounded-[32px] border border-[#0b1f3f]/10 bg-white/90 p-7 shadow-[0_30px_70px_rgba(7,24,57,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0584c6]/30 hover:shadow-[0_40px_90px_rgba(7,24,57,0.18)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
                  <div className="flex items-start gap-2 text-xs font-semibold text-[#0584c6]">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>{item.evidence}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="fade-up" className="mt-16 space-y-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#1e3359]/60">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-2 text-[0.65rem] text-[#0b1f3f]/70 shadow-[0_12px_28px_rgba(8,32,68,0.08)]"
              >
                {signal}
              </span>
            ))}
          </div>
          <div className="mx-auto max-w-3xl rounded-[32px] border border-[#0584c6]/20 bg-gradient-to-r from-white via-[#f7fbff] to-white p-6 text-left shadow-[0_25px_60px_rgba(7,26,60,0.12)]">
            <p className="text-sm font-semibold text-[#0b1f3f]">
              「金融機関との打ち合わせ資料がフレームと数値根拠つきで自動生成されるので、役員会での説明が驚くほどスムーズになりました。再生ストーリーの因果が整理され、現場の納得感も高まっています。」
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-[#1e3359]/70">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0584c6]/15 text-[#0584c6]">代表</span>
              福岡県 製造業／年商9.8億円
            </div>
          </div>
        </ScrollReveal>
      </div>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="守秘体制や支援体制の詳細も、無料相談で具体的にご説明"
        description="NDAや権限設計、週次レビューの進め方など、気になるリスク項目を洗い出しながらチェックリスト形式で回答します。"
        ctaId="security-support"
      />
    </section>
  );
};

export default SecurityPrivacySection;
