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
    title: "初動提案",
    value: "48h",
    description: "初回ヒアリングから48時間以内に因果構造と優先打ち手を提示。迷いなく次の会議に臨めます。",
  },
  {
    title: "先読みボード",
    value: "Weekly",
    description: "週次レビューでAI解析と現場メモを統合し、変化の兆しとリスクを一目で判断できる体制を維持。",
  },
  {
    title: "金融機関連携",
    value: "迅速",
    description: "共有資料をAIで再構成し、診断士が語り口を整備。金融機関説明までの準備負担を抑えます。",
  },
];

const supportItems = [
  {
    icon: Users,
    title: "専門家チームの伴走",
    description:
      "代表・古町（中小企業診断士）を中心に、財務・人材・販売の専門家が案件ごとにチームを編成。生成AIが抽出した洞察を基に、経営管理アプリとダッシュボードを企業仕様に調整し、未来像を共通言語化します。",
    evidence: "意思決定の根拠と現場の気づきを同時に記録し、次の会議までの行動が一目で伝わります。",
  },
  {
    icon: BookOpen,
    title: "運用ガイドと教育プログラム",
    description:
      "AIプロンプト集、判断ログのテンプレート、現場向けトレーニングを提供。導入初月は週次で伴走し、社内で自走できる意思決定スタイルを育てます。",
    evidence: "現場がすぐ使える手順書と対話例をクラウドで共有し、チーム全体の理解を底上げ。",
  },
  {
    icon: Lock,
    title: "データガバナンスと守秘体制",
    description:
      "暗号化クラウドとアクセス権限管理を徹底。NDA締結・監査ログ共有・契約終了時のデータ削除まで透明性を担保します。",
    evidence: "権限移行やデータ削除を可視化し、誰が見ても安心できる運用ルールを維持。",
  },
  {
    icon: Award,
    title: "信頼を裏付ける認定と実績",
    description:
      "経営革新等支援機関としての認定に加え、九州を中心に再生プロジェクトを数多く支援。金融機関や自治体との共同支援も蓄積しています。",
    evidence: "九州北部の複数金融機関と連携したスキームで、信頼される説明体制を磨いてきました。",
  },
];

const processSteps = [
  {
    label: "STEP 1",
    title: "初回相談（30分）",
    detail: "経営課題と事業の存在意義を棚卸し。生成AIが抽出した初期シグナルと優先論点を共有し、目指す姿を言語化します。",
  },
  {
    label: "STEP 2",
    title: "仮診断（2週間）",
    detail: "財務・顧客・商品データを預かり、生成AIが粗利や資金の歪みを可視化。診断士が現場ヒアリングで強みと課題を整理します。",
  },
  {
    label: "STEP 3",
    title: "再生設計ワークショップ",
    detail: "複数シナリオを比較し、優先施策とマイルストーンを合意。国の補助金の活用可否も診断士が整理し、金融機関に伝えるストーリーを磨き上げます。",
  },
  {
    label: "STEP 4",
    title: "実行伴走（3〜12ヶ月）",
    detail: "週次レビューと月次ボードで進捗とリスクを確認。外部環境の変化も常時モニタリングし、5年計画をアップデートし続けます。",
  },
];

const trustSignals = [
  "経営革新等支援機関",
  "福岡県 DXパートナー登録",
  "金融庁 事業再生ガイドライン順守",
  "日経クロスウーマン掲載",
];

const safetyPillars = [
  {
    icon: Cpu,
    title: "使用モデル",
    description: "Azure OpenAI（GPT-4o mini）をベースに、財務・人材データの解釈に合わせたプロンプトレイヤーを設計。API通信はTLS1.2以上で暗号化。",
    bullets: ["モデル更新時はステージング環境でリグレッションテストを実施", "監査ログで生成結果・操作履歴を30日ローテーション保管"],
  },
  {
    icon: Database,
    title: "データ管理方針",
    description: "財務・人材情報は日本国内リージョンの暗号化ストレージで管理。アクセス権は職務ベースで細分化し、閲覧ログを可視化。",
    bullets: ["S3互換ストレージにてAES-256で静的暗号化", "データマスキング後にAI学習用サンドボックスへ転送"],
  },
  {
    icon: Workflow,
    title: "カスタム学習フロー",
    description: "意思決定ログと施策結果を教師データ化し、毎月のフィードバック会議で再学習。人が監督するガードレールで再現性を確保。",
    bullets: ["再学習前にバリデーション指標（再現率±3%以内）を確認", "金融機関共有用テンプレと突合して語彙統制"],
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
            経営改善支援フロー
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            変化を先取りして立て直す、生成AI×診断士の共同伴走プログラム
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            激変する市場でも自社の強みを語り切れるよう、業界・競合・顧客・コスト構造を多面的に把握し、生成AIで即座に要点化。診断士が経営管理アプリとダッシュボードを事業者ごとに組み上げ、5年先のシナリオと今打つべき一手を同じ画面で共有します。経営者が胸を張って前に進める判断環境を整えます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal variant="fade-up" className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#0b1f3f] shadow-[0_16px_40px_rgba(6,27,70,0.08)]">
              <ShieldCheck className="h-5 w-5 text-[#0584c6]" aria-hidden="true" />
              診断士と生成AIが描く、次の一手に迷わない判断軸
            </div>
            <p className="text-base leading-relaxed text-[#1e3359]/80">
              事業の存在意義と市場の変化を重ね合わせ、仮説検証から施策実行までを一気通貫で支援。AIが抽出した兆しを診断士が裏付け、意思決定ログに落とし込むことで、現場と金融機関の双方に納得感のあるストーリーを築きます。
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
          className="relative mt-16 grid gap-10 rounded-[40px] border border-[#0b1f3f]/10 bg-white/90 p-8 shadow-[0_30px_70px_rgba(8,27,64,0.12)] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
              Safety &amp; Reliability
            </p>
            <h3 className="text-2xl font-semibold text-[#0b1f3f]">生成AIの安全性・再現性を支える技術設計</h3>
            <p className="text-sm leading-relaxed text-[#1e3359]/80">
              再生案件で扱う機微情報を守りながら、毎回同じ視点で判断材料を提供できるよう技術基盤を統一。モデル・データ・学習フローを三層で制御し、診断士のレビューを必須化することで、迷いのない意思決定を後押しします。
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-[#1e3359]/78">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                <span>アクセス権限は案件単位で付与し、共有時は期限付きトークンで管理。誰が閲覧したかを即時確認できます。</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                <span>週次レビューで生成結果の再現率と一貫性を確認し、基準を下回れば即時にモデル設定を見直します。</span>
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
