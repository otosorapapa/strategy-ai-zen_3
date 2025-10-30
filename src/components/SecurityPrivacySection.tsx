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
      "NDA締結・暗号化・アクセス権限管理を徹底。契約終了時は速やかにデータを削除し、監査対応ログも共有します。",
  },
  {
    icon: Award,
    title: "信頼を裏付ける認定と実績",
    description:
      "経営革新等支援機関としての認定に加え、九州を中心に多くの再生プロジェクトを支援。金融機関との共同プロジェクトも経験豊富です。",
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
            再生の道のりを一緒に歩むための、信頼と守りの体制
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            机上の理論では終わらせません。判断の根拠、現場の納得、データの安心を揃えるための仕組みをセットで提供します。
          </p>
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
