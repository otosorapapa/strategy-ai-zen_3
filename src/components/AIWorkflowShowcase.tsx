import { BarChart3, FileText, HandshakeIcon, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const serviceItems = [
  {
    title: "1. 現状分析と数値シミュレーション",
    description:
      "AIが財務・販売・人材データを統合。粗利、キャッシュ、需要の揺らぎをヒートマップで可視化し、改善余地を即座に算出します。",
    icon: BarChart3,
  },
  {
    title: "2. 再生シナリオ策定",
    description:
      "収益構造を再設計するシナリオを複数提示。専門家が実行可能性を検証し、優先順位とロードマップを整理します。",
    icon: FileText,
  },
  {
    title: "3. 金融機関交渉・モニタリング",
    description:
      "計画資料、交渉サマリー、モニタリング報告をAIが自動生成。専門家が交渉方針と行動計画を伴走します。",
    icon: HandshakeIcon,
  },
  {
    title: "4. 経営者コーチング",
    description:
      "週次の対話で意思決定の質とスピードを整える。自信を持って未来を語れるよう、判断の根拠を共に確認します。",
    icon: MessageSquare,
  },
];

const AIWorkflowShowcase = () => {
  return (
    <section className="fade-in-section bg-[#f2f7ff] py-20 text-[#0b1f3f]">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/15 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            提供価値
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            AI × 専門家による経営再生支援で、再起のストーリーを一気通貫で描き直す
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            四つのモジュールが互いに連動し、数字・現場・金融機関との対話まで途切れない再生プロセスを構築します。全体像が見えるから、必要な一歩を迷わず踏み出せます。
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceItems.map((item) => {
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

export default AIWorkflowShowcase;
