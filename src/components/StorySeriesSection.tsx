import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const episodeTimeline = [
  {
    id: "EP0",
    label: "Episode 0",
    title: "眠れない夜の独白",
    summary:
      "黒字でも資金が残らない理由、銀行面談の重圧、社員の表情の曇り。経営者だけが抱え込んでいる不安を、短いモノローグで描きます。",
    cues: ["資金繰り表を更新するたびに不安が増していく", "改善計画書の締切が迫る", "次の打ち手が感覚で決まってしまう"],
    icon: MessageCircle,
  },
  {
    id: "EP1",
    label: "Episode 1",
    title: "停滞期の葛藤",
    summary:
      "粗利が沈む製造ライン、離職率が高止まりのサービス現場、在庫が膨らむ卸。業種別のリアルなシーンを対話形式で紹介し、自社の状況と重ねてもらいます。",
    cues: ["役員会が数字合わせで終わる", "現場が改善策に納得していない", "金融機関との会話が守り一辺倒"],
    icon: Users,
  },
  {
    id: "EP2",
    label: "Episode 2",
    title: "希望の兆し",
    summary:
      "無料相談で棚卸した論点をもとに、AIヒートマップと改善計画ドラフトが届く瞬間を描写。判断材料が揃ったときの安堵感と、新たな課題へのワクワクを両立させます。",
    cues: ["粗利とキャッシュの歪みが一目でわかる", "改善幅とリスクラインが数字で提示される", "社員が自分ごと化して会話に加わる"],
    icon: Sparkles,
  },
  {
    id: "EP3",
    label: "Episode 3",
    title: "再生への決断",
    summary:
      "診断士と現場リーダーがホワイトボードを囲み、優先施策と金融機関への説明シナリオを固めるセッション。躍動感のある会話で“自社でもできそう”を喚起します。",
    cues: ["金融機関向け資料がその場でアップデートされる", "各部署のアクションとKPIが結びつく", "銀行担当者から前向きな質問が増える"],
    icon: BookOpen,
  },
  {
    id: "EP4",
    label: "Episode 4",
    title: "V字回復の朝",
    summary:
      "資金ショートの恐怖から解放され、次の投資判断に挑める状態へ。経営者・銀行・社員それぞれの言葉で成果を語り、感情と数字の両面から成功イメージを定着させます。",
    cues: ["粗利率とキャッシュが同時に改善", "金融機関との面談が未来志向になる", "社員が再び挑戦を語り始める"],
    icon: TrendingUp,
  },
];

const nurtureCadence = [
  {
    title: "メール連載（Day1→Day14）",
    description:
      "診断結果と洞察、類似企業の成功ストーリー、改善プランの具体策、無料相談のリマインダーを時系列で届けます。",
    icon: CalendarClock,
  },
  {
    title: "ウェビナー・資料の連動",
    description:
      "月1回のオンラインセミナーと、生成AI×再生計画のホワイトペーパーをセットで案内。複数チャネルで信頼を積み上げます。",
    icon: BookOpen,
  },
  {
    title: "チャットボット＆匿名相談",
    description:
      "24時間受付のチャットボットで不安をすぐに解消。匿名相談やNDA対応の案内も行い、心理的ハードルを下げます。",
    icon: CheckCircle2,
  },
];

const StorySeriesSection = () => {
  const handlePrimaryCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="story-series"
      className="fade-in-section relative overflow-hidden bg-gradient-to-b from-[#031024] via-[#061530] to-[#04122c] py-24 text-white"
      aria-labelledby="story-series-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.25),_transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto max-w-6xl px-5">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Emotion Series｜共感から確信へ
          </span>
          <h2 id="story-series-heading" className="text-3xl font-bold leading-tight md:text-4xl">
            経営者の感情に寄り添い、決断を後押しする5つのストーリー
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-slate-200/85 md:text-lg">
            LPを訪れた瞬間から成約後まで、段階的に共感と信頼を積み上げるシナリオを用意しました。どのエピソードも、年商5,000万円〜15億円の経営者が直面するリアルなシーンと数字を起点に設計しています。
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <ScrollReveal
            variant="fade-up"
            className="space-y-5 rounded-[32px] border border-white/12 bg-white/5 p-8 shadow-[0_30px_80px_rgba(3,16,36,0.45)]"
          >
            {episodeTimeline.map((episode) => {
              const Icon = episode.icon;
              return (
                <article
                  key={episode.id}
                  className="group rounded-[24px] border border-white/12 bg-[#0b1f3f]/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-[#0f264d]/80"
                >
                  <div className="flex flex-col gap-4 text-left">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1">
                        <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                        {episode.label}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                        感情フック
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">{episode.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-100/85">{episode.summary}</p>
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-200/80">
                      {episode.cues.map((cue) => (
                        <li key={cue} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                          <span>{cue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="flex flex-col gap-6 rounded-[32px] border border-white/12 bg-white/5 p-8 shadow-[0_30px_80px_rgba(3,16,36,0.45)]"
          >
            <div className="space-y-4 text-left">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                Touch Point Design
              </span>
              <h3 className="text-2xl font-semibold text-white">
                接触頻度を高め、熱量を育てるナーチャリング導線
              </h3>
              <p className="text-sm leading-relaxed text-slate-100/85">
                ストーリーで共感を生んだ後は、データと体験で納得感を育てます。メール、ウェビナー、チャットの三位一体で“相談してみたい”という主体的な決断を引き出します。
              </p>
            </div>
            <div className="space-y-4">
              {nurtureCadence.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/12 bg-[#0b1f3f]/60 p-5 text-left shadow-[0_20px_55px_rgba(3,16,36,0.4)]"
                  >
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
                      <Icon className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-100/85">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="rounded-[28px] border border-cyan-300/40 bg-cyan-500/10 p-6 text-left text-sm leading-relaxed text-cyan-100/90">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
                Story → Action
              </p>
              <p className="mt-3">
                Episode 2で提示したAIヒートマップのサンプルと、Episode 3の金融機関説明資料をまとめたPDFを無料提供。社内共有や銀行面談の準備にすぐ使えるテンプレートです。
              </p>
              <Button
                type="button"
                variant="cta"
                size="lg"
                data-cta-id={`${PRIMARY_CTA.id}-story-series`}
                className={cn("interactive-cta mt-6 w-full justify-center rounded-full text-sm font-bold")}
                onClick={handlePrimaryCta}
              >
                {PRIMARY_CTA.label}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <SectionMicroCta
        variant="dark"
        eyebrow="Micro CTA"
        title="ストーリーで描いた未来を、45分の相談で現実の計画へ"
        description="エピソードで触れた課題や感情に合わせ、実際のAIレポートとアクションプランをお見せしながら貴社に置き換えます。"
        ctaId="story-series"
      />
    </section>
  );
};

export default StorySeriesSection;
