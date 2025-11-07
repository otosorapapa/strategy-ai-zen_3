import {
  ArrowRight,
  Award,
  BookOpen,
  Cpu,
  Database,
  Lock,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import supportVisual from "@/assets/strategic-meeting.jpg";

const kpiSnapshots = [
  {
    title: "初回診断後のご提案",
    value: "48h",
    description:
      "診断開始から48時間以内に主要な論点と経営資源の活かし方を整理。迷いを生まない意思決定の起点を共有します。",
  },
  {
    title: "週次レビュー参加",
    value: "90%",
    description:
      "週次レビューの参加率。コミュニケーションツールと連携し、役員も現場も同じ進捗に目を向け続けられる環境を整えます。",
  },
  {
    title: "金融機関共有",
    value: "3営業日",
    description:
      "必要資料の再整理と承認プロセスを3営業日以内に完了。関係者へ胸を張って提示できるストーリーを整えます。",
  },
];

const supportItems = [
  {
    icon: Users,
    title: "専門家チームの伴走",
    description:
      "代表・古町（中小企業診断士）を核に、財務・人材・販売の実務家がプロジェクトごとに編成。経営陣の思考と現場の声を結び、意思統一の場づくりまで支援します。",
    evidence: "議事録と論点整理を即時に共有し、誰が見ても筋道が分かる形で保存します。",
  },
  {
    icon: BookOpen,
    title: "運用ガイドと教育プログラム",
    description:
      "AIの指示文集、判断記録の型、現場向けの研修を一式提供。導入初月は週次で伴走し、自社で使いこなせる手順として定着させます。",
    evidence: "演習と動画教材を共有し、いつでも振り返れる安心感をつくります。",
  },
  {
    icon: Lock,
    title: "データガバナンスと守秘体制",
    description:
      "暗号化したクラウド環境と職務に応じた権限管理を徹底。契約の開始から終了まで一貫した情報管理で、安心してお任せいただけます。",
    evidence: "引き継ぎ時もワンクリックで権限を更新でき、現場と経営が同じ基準で運用できます。",
  },
  {
    icon: Award,
    title: "信頼を裏付ける認定と実績",
    description:
      "公的支援の現場で培ったノウハウと、九州を中心に培った多様な再生案件の経験があります。地域金融機関との共同支援も数多く手がけています。",
    evidence: "案件ごとに共有する報告書は、金融機関や出資者からも評価されています。",
  },
];

const processSteps = [
  {
    label: "STEP 1",
    title: "初回相談（30分）",
    detail:
      "経営課題と外部環境、これまでの挑戦を丁寧に棚卸し。AIが抽出した気づきと専門家の視点をその場でお伝えし、目指す姿を共に描きます。",
  },
  {
    label: "STEP 2",
    title: "仮診断（2週間）",
    detail:
      "データをお預かりし、生成AIで粗利や資金のゆがみを可視化。診断士が現場をヒアリングし、競合・顧客・コスト構造を多面的に分析します。",
  },
  {
    label: "STEP 3",
    title: "再生設計ワークショップ",
    detail:
      "複数のシナリオを比較し、5年先まで見据えた優先施策と指標を合意。金融機関や支援者へ語れるストーリーまで整えます。",
  },
  {
    label: "STEP 4",
    title: "実行伴走（3〜12ヶ月）",
    detail:
      "週次レビューと月次ボードで進捗とリスクを確認し、必要に応じて計画を書き換え続けます。国の補助金の活用も視野に、実行体制まで伴走します。",
  },
];

const trustSignals = [
  "中小企業診断士が主導する再生支援チーム",
  "地域金融機関との協働による支援ネットワーク",
  "事業改善計画の策定と運用を一貫して支援",
  "メディア・専門誌からの取材多数",
];

const safetyPillars = [
  {
    icon: Cpu,
    title: "使用モデル",
    description:
      "Azure OpenAI（GPT-4o mini）を基盤に、財務や人材データの読み解きに合わせた指示文の層を設計。通信はすべて暗号化し、安全な経路だけを使用します。",
    bullets: ["モデル更新前に検証環境で再確認を行い、品質を保証", "生成結果と操作履歴を30日サイクルで保管し、いつでも追跡可能"],
  },
  {
    icon: Database,
    title: "データ管理方針",
    description:
      "財務や人材の情報は国内の暗号化ストレージで管理し、職務ごとに細かく権限を設定。閲覧の記録も見える化します。",
    bullets: ["保存時も移動時も暗号化を施し、外部流出を防止", "AIが学習する際は情報を伏せたうえで専用環境に移行"],
  },
  {
    icon: Workflow,
    title: "カスタム学習フロー",
    description:
      "意思決定の記録と施策の結果を学習データに変換し、毎月のフィードバック会議で再学習。専門家が監督し、現場で再現できる状態を保ちます。",
    bullets: ["再学習前に検証指標を確認し、基準を満たさない場合は調整", "共有資料の言葉遣いも合わせ、外部説明の質を守ります"],
  },
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
            迷わず進む決断を支える、創和経営コンサルティングの伴走体制
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            私たちは、中小企業の力を再び輝かせるために、判断の速さと質を高める仕組みづくりにこだわってきました。生成AIと中小企業診断士の知見を掛け合わせ、現場が胸を張って実行できる経営改善計画を共に描きます。
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            業界・競合・顧客・コスト・商品を多角的に読み解き、経営管理アプリやダッシュボードを貴社仕様に設計。判断の根拠が一枚で伝わるよう整え、次の一手を自信をもって選べる状態をつくります。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal variant="fade-up" className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0b1f3f] shadow-[0_16px_40px_rgba(6,27,70,0.08)]">
              <ShieldCheck className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
              戦略・財務・現場を一枚の構造図で束ねる伴走体制
            </div>
            <p className="text-base leading-relaxed text-[#1e3359]/80">
              経営者の思いとデータを結び付け、AIが導き出した示唆と専門家の判断を統合。各段階で注目すべき因果関係を見える化し、社内外から信頼される合意形成を加速させます。
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
                <p className="text-sm font-semibold">データと現場の納得がそろう再生ストーリー</p>
                <p className="text-xs leading-relaxed text-white/70">
                  因果マップ、影響度、意思決定の記録をひとつにまとめ、次の行動と担当をすぐに共有。納得度の高いストーリーで、社内外の支持を得ながら進められます。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="fade-up"
          className="relative mt-16 grid gap-10 rounded-[40px] border border-[#0b1f3f]/10 bg-white/90 p-8 shadow-[0_30px_70px_rgba(8,27,64,0.12)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
              Safety &amp; Reliability
            </p>
            <h3 className="text-2xl font-semibold text-[#0b1f3f]">生成AIの安全性と安定した結果を生む設計</h3>
            <p className="text-sm leading-relaxed text-[#1e3359]/80">
              再生案件で扱う重要情報を守りながら、毎回同じ品質で意思決定の記録を出すために仕組みを標準化しています。モデル、データ、学習の流れを三つの層で管理し、必ず専門家が確認することで判断のぶれを抑えます。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-[#1e3359]/78">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                <span>アクセス権限は案件ごとに付与し、共有時は使い切りの認証で期限を管理します。</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                <span>週次レビューで生成結果の安定度を確認し、基準を下回れば設定を戻して再調整します。</span>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-[#0b1f3f]/10 bg-gradient-to-br from-[#0d2f5b] via-[#12447c] to-[#1d64ab] p-8 text-white shadow-[0_35px_80px_rgba(7,24,57,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_65%)]" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-md flex-col items-center gap-8">
              <div className="relative flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 text-center text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                  Safety Core
                </div>
                <div className="absolute left-1/2 top-24 hidden h-20 w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/60 to-white/0 md:block" aria-hidden="true" />
                <div className="absolute left-[20%] top-24 hidden h-px w-[60%] -translate-y-1/2 bg-gradient-to-r from-white/0 via-white/60 to-white/0 md:block" aria-hidden="true" />
              </div>
              <div className="grid w-full gap-4 md:grid-cols-3">
                {safetyPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="relative flex h-full flex-col gap-3 rounded-3xl border border-white/25 bg-white/10 p-5 text-sm leading-relaxed"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs font-semibold">
                        0{index + 1}
                      </span>
                      <div className="flex items-center gap-2 text-white">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/20 text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <p className="text-sm font-semibold">{pillar.title}</p>
                      </div>
                      <p className="text-xs text-white/85">{pillar.description}</p>
                      <ul className="space-y-2 text-[0.7rem] text-white/75">
                        {pillar.bullets.map((point) => (
                          <li key={point} className="flex items-start gap-1.5">
                            <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-200" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

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
