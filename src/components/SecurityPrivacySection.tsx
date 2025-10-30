import { Award, BookOpen, Lock, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const supportItems = [
  {
    icon: Users,
    title: "専門家チームの伴走",
    description:
      "代表・古町（中小企業診断士）を中心に、財務・人材・販売の専門家が案件ごとにチームを編成。経営会議のファシリテーションまで支援します。",
  },
  {
    icon: BookOpen,
    title: "運用ガイドと教育プログラム",
    description:
      "AIプロンプト集、判断ログのテンプレート、現場向けトレーニングを提供。導入初月は週次で伴走し、社内にノウハウが残る仕組みを整えます。",
  },
  {
    icon: Lock,
    title: "データガバナンスと守秘体制",
    description:
      "暗号化クラウドとアクセス権限管理を徹底。NDA締結・監査ログ共有・契約終了時のデータ削除まで透明性を担保します。",
  },
  {
    icon: Award,
    title: "信頼を裏付ける認定と実績",
    description:
      "経営革新等支援機関としての認定に加え、九州を中心に100社以上の再生プロジェクトを支援。金融機関との共同プロジェクトも豊富です。",
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

const SecurityPrivacySection = () => {
  return (
    <section className="fade-in-section bg-[#f2f7ff] py-20 text-[#0b1f3f]">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/15 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            Support System
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            再生の道のりを一緒に歩むための、導入ステップと伴走体制
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            初回相談で焦点を定め、仮診断で課題マップを描き、ワークショップでシナリオを合意し、実行伴走で波形を整える。判断の根拠と現場の納得、データの安心を同時に叶えるステップと体制をセットで提供します。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className="mt-12 grid gap-4 rounded-[32px] border border-[#0b1f3f]/12 bg-white p-6 shadow-[0_25px_60px_rgba(6,21,48,0.12)] sm:grid-cols-4"
        >
          {processSteps.map((step) => (
            <div key={step.label} className="space-y-3 rounded-2xl border border-[#0584c6]/20 bg-[#f4fbff] p-4 text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">{step.label}</span>
              <h3 className="text-base font-semibold text-[#0b1f3f]">{step.title}</h3>
              <p className="text-xs leading-relaxed text-[#1e3359]/75">{step.detail}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {supportItems.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                variant="fade-up"
                className="flex h-full flex-col gap-4 rounded-[30px] border border-[#0b1f3f]/12 bg-white p-6 shadow-[0_25px_60px_rgba(6,21,48,0.12)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-[#0b1f3f]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#1e3359]/75">{item.description}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityPrivacySection;
