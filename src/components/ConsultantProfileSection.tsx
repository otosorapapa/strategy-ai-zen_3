import { Award, Banknote, BarChart3, Building2, FileCheck, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import profilePhoto from "@/assets/representative.jpg";

const profileStats = [
  {
    label: "支援社数",
    value: "128社",
    description: "九州・中国エリアを中心に、製造・建設・サービスまで幅広く再生と成長の両面を支援。",
    icon: Building2,
  },
  {
    label: "再生案件成功率",
    value: "82%",
    description: "過去3年間の主要案件で金融機関合意と計画達成を同時に実現した割合。",
    icon: ShieldCheck,
  },
  {
    label: "金融機関連携実績",
    value: "58件",
    description: "福岡銀行・北九州銀行・日本政策金融公庫などとの協働案件数（累計）。",
    icon: Banknote,
  },
];

const credentialHighlights = [
  {
    icon: Award,
    title: "中小企業診断士 / 経営革新等支援機関",
    detail: "再生計画策定や補助金申請の支援で評価され、地域金融機関と共催する再生セミナーを定期開催。",
  },
  {
    icon: BarChart3,
    title: "AI×財務データによる歪み検出",
    detail: "独自の指標群と意思決定ログのテンプレートを構築。現場ヒアリングとAI解析を掛け合わせた再現性ある伴走が強み。",
  },
  {
    icon: FileCheck,
    title: "公的支援スキームの実績",
    detail: "経営改善計画策定支援補助金・事業再構築補助金など20件超をサポートし、採択率は直近2年で78%。",
  },
];

const ConsultantProfileSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f3f7ff] to-white py-24 text-[#0b1f3f]">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(90,154,255,0.18),_transparent_70%)]" aria-hidden="true" />
      <div className="relative z-[1] mx-auto flex max-w-6xl flex-col gap-12 px-4">
        <ScrollReveal variant="fade-up" className="text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60 shadow-[0_14px_40px_rgba(11,31,63,0.08)]">
            Lead Consultant
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">地域再生に伴走する中小企業診断士のプロフィール</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
            経営再生の現場で得た知見をもとに、AIで抽出した因果シグナルと現場の意思を接続。数値で語れるストーリーづくりと金融機関との信頼構築を担います。
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal
            variant="fade-up"
            className="relative overflow-hidden rounded-[40px] border border-white/60 bg-white/90 p-6 shadow-[0_35px_80px_rgba(8,30,70,0.18)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.15),_transparent_65%)]" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-5">
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_45px_rgba(8,30,70,0.25)]">
                <img
                  src={profilePhoto}
                  alt="代表診断士・古町の顔写真"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center text-[#0b1f3f]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">代表 / 中小企業診断士</p>
                <h3 className="mt-2 text-2xl font-bold">古町 俊亮</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#1e3359]/80">
                  元地方銀行の法人融資担当。製造業の再生案件をきっかけに独立し、財務と現場の視点を統合した再生デザインを提供。AIを活用した判断ログ整備を推進中。
                </p>
              </div>
              <div className="grid w-full gap-4 sm:grid-cols-3">
                {profileStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="group rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 text-center shadow-[0_18px_40px_rgba(9,32,78,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0584c6]/40 hover:shadow-[0_24px_60px_rgba(9,32,78,0.18)]"
                    >
                      <Icon className="mx-auto h-5 w-5 text-[#0584c6]" aria-hidden="true" />
                      <p className="mt-2 text-2xl font-bold text-[#0b1f3f]">{stat.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#0b1f3f]/60">{stat.label}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[#1e3359]/70">{stat.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[40px] border border-[#0b1f3f]/10 bg-white/85 p-8 shadow-[0_35px_85px_rgba(7,27,65,0.18)]"
          >
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#0584c6]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]">
                Strength
              </p>
              <h3 className="text-xl font-semibold text-[#0b1f3f]">金融と現場をつなぐ意思決定デザイン</h3>
              <p className="text-sm leading-relaxed text-[#1e3359]/80">
                銀行稟議に必要な定量指標と、現場が納得する定性ストーリーを一枚で示す資料構成を得意としています。AIのシミュレーション結果を、経営会議・金融機関・自治体に通じる言語へ翻訳し、合意形成を滑らかにします。
              </p>
            </div>
            <div className="grid gap-4">
              {credentialHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-[#0b1f3f]/10 bg-[#f7faff] p-5 text-sm leading-relaxed text-[#1e3359]/80"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0584c6]/15 text-[#0584c6]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[#0b1f3f]">{item.title}</p>
                      <p className="text-xs leading-relaxed text-[#1e3359]/75">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-3xl border border-[#0b1f3f]/10 bg-gradient-to-r from-[#ecf4ff] via-white to-[#f4f9ff] p-6 text-sm leading-relaxed text-[#1e3359]/80">
              <h4 className="text-base font-semibold text-[#0b1f3f]">メッセージ</h4>
              <p className="mt-2">
                「スピード感が求められる再生案件でも、意思決定の裏付けを丁寧に積み上げれば、金融機関も現場も自然と同じ方向を向きます。AIと人の強みを掛け合わせ、納得感ある打ち手を一緒につくりましょう。」
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ConsultantProfileSection;
