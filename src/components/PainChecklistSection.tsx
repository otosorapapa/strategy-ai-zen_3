import { useMemo, useState } from "react";

import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
import { cn } from "@/lib/utils";

import executiveDashboard from "@/assets/financial-analysis.jpg";

import { ArrowRight, ClipboardList, LifeBuoy, LineChart, Stethoscope } from "lucide-react";

const painPatterns = [
  {
    id: "cash-bottleneck",
    title: "入金タイミングと支払いが合わず、資金繰りが枯渇しがち",
    summaryTag: "キャッシュギャップ",
    summary:
      "入出金のズレと銀行資料の更新遅れで、資金ショートの不安が常につきまとう",
    signals: [
      "毎月の支払いシミュレーションがExcelの手作業に依存している",
      "金融機関との面談で根拠資料の更新が追いつかない",
      "仕入れ先への支払い猶予交渉を直前に迫られる",
    ],
    icon: LifeBuoy,
    recommendation: {
      headline: "資金繰り耐性を“15分診断”で可視化し、即時の資金計画に反映",
      description:
        "キャッシュアウトが集中する週次パターンをAIが抽出し、銀行との対話資料を当日共有します。まずは短時間のヒアリングで資金繰りリスクを整理しましょう。",
      action: {
        label: "15分で受診する無料資金繰りチェック",
        ctaId: "mid-cta-diagnostic",
        type: "scroll" as const,
        targetId: "mid-cta-section",
      },
    },
  },
  {
    id: "gross-margin",
    title: "粗利率が下がり、利益改善の打ち手が定まらない",
    summaryTag: "粗利ダウン",
    summary:
      "値上げや投資判断が止まり、粗利低下の要因が曖昧なまま現場が動けない",
    signals: [
      "価格転嫁・値上げの意思決定が社内で停滞している",
      "稼働の高いラインほど粗利が圧迫されている",
      "どの施策が財務へ効くのか根拠を示せず会議が長期化",
    ],
    icon: LineChart,
    recommendation: {
      headline: "粗利の落ち込み要因をAIが色分けし、優先改善策を45分で提示",
      description:
        "粗利率の低下を引き起こす商品・案件を可視化し、どこから着手するかを専門家が同席で整理。週次の利益インパクト試算も提供します。",
      action: {
        label: PRIMARY_CTA.label,
        ctaId: `${PRIMARY_CTA.id}-pain-check`,
        type: "scroll" as const,
        targetId: "cta-section",
      },
    },
  },
  {
    id: "people-process",
    title: "人材稼働が分断され、現場の改善が前に進まない",
    summaryTag: "現場分断",
    summary:
      "タスクとKPIが噛み合わず、改善プロジェクトが属人的に止まってしまう",
    signals: [
      "担当者ごとにToDoが属人化し、会議で同じ議論が繰り返される",
      "採用・育成の指標が定まらず、離職が止まらない",
      "現場KPIと財務KPIが結びつかず、投資判断が後手に回る",
    ],
    icon: ClipboardList,
    recommendation: {
      headline: "人材・現場KPIを再設計し、週次レビューで改善サイクルを再起動",
      description:
        "タスクとKPIの紐づけをAIが棚卸し、診断士が現場ヒアリングで優先順位を整えます。改善ロードマップと教育プログラム案をセットで提示。",
      action: {
        label: SECONDARY_CTA.label,
        ctaId: `${SECONDARY_CTA.id}-pain-check`,
        type: "scroll" as const,
        targetId: "cta-section",
      },
    },
  },
] as const;

const fallbackRecommendation = {
  headline: "症状に当てはまる項目を選ぶと、最適な次の一手をご案内します",
  description:
    "福岡・九州の再生支援実績を持つ専門家が、粗利・資金・人材の状態を48時間で棚卸します。気になる症状にチェックを入れてください。",
  action: {
    label: TERTIARY_CTA.label,
    ctaId: `${TERTIARY_CTA.id}-pain-check`,
    type: "link" as const,
    href: TERTIARY_CTA.href,
  },
};

const credibilitySignals = [
  {
    label: "診断レポート提出まで",
    value: "48時間",
    description: "財務・現場KPIの差分を可視化した速報レポートを、ヒアリング後すぐに共有。判断スピードを阻害しません。",
  },
  {
    label: "累計改善インパクト",
    value: "▲3.8pt",
    description: "粗利率改善幅の平均値。原因特定から施策伴走までの一連プロセスを定型化し、再現性を担保しています。",
  },
  {
    label: "経営層の満足度",
    value: "9.4/10",
    description: "年商5,000万円〜15億円の経営者へのアフターアンケート結果。仮説の納得感と意思決定の速さで評価されています。",
  },
] as const;

const PainChecklistSection = () => {
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [expandedPattern, setExpandedPattern] = useState<string | null>(null);

  const activeRecommendation = useMemo(() => {
    if (!selectedCauses.length) {
      return fallbackRecommendation;
    }

    const latestSelected = selectedCauses[selectedCauses.length - 1];
    const match = painPatterns.find((pattern) => pattern.id === latestSelected);
    return match?.recommendation ?? fallbackRecommendation;
  }, [selectedCauses]);

  const toggleCause = (causeId: string) => {
    setSelectedCauses((prev) => {
      const isAlreadySelected = prev.includes(causeId);
      setExpandedPattern((current) => {
        if (isAlreadySelected) {
          return current === causeId ? null : current;
        }
        return causeId;
      });

      if (isAlreadySelected) {
        return prev.filter((id) => id !== causeId);
      }
      return [...prev, causeId];
    });
  };

  const toggleExpand = (patternId: string) => {
    setExpandedPattern((current) => (current === patternId ? null : patternId));
  };

  const handleAction = () => {
    if (activeRecommendation.action.type === "link") {
      window.open(activeRecommendation.action.href, "_blank", "noreferrer noopener");
      return;
    }

    if (activeRecommendation.action.type === "scroll" && activeRecommendation.action.targetId) {
      document.getElementById(activeRecommendation.action.targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="fade-in-section relative overflow-hidden bg-[#f4f8ff] py-20"
      aria-labelledby="pain-checklist-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.1),_transparent_60%)]" aria-hidden="true" />
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal variant="fade-up" className="space-y-6 text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1f3f]/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70">
            背景共有｜停滞を生む見えない断片
          </span>
          <h2 id="pain-checklist-heading" className="text-3xl font-bold leading-tight text-[#0b1f3f] md:text-4xl">
            情熱は十分なのに前に進めない──その原因は情報がバラバラに積み上がっているからです
          </h2>
          <p className="mx-auto max-w-4xl text-[1.05rem] leading-relaxed text-[#1e3359]/80 md:text-lg">
            私たちが伴走してきた企業でも、数字と現場の手応えが別々に管理され、月次資料づくりで手一杯になるケースがほとんどでした。下のチェックリストは、その断片化がどこで起きているのかを整理するためのもの。該当する項目を選ぶだけで、何から整えるべきかが見えてきます。
          </p>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-up"
          className={cn(
            "mt-10 rounded-[28px] border border-[#0b1f3f]/12 p-6 shadow-[0_20px_55px_rgba(6,21,48,0.12)]",
            "bg-white/75 backdrop-blur-sm"
          )}
        >
          <div className="space-y-4 text-left text-[#1e3359]/80">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/75">
              症状ダイジェスト
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {painPatterns.map((pattern) => (
                <div
                  key={`${pattern.id}-summary`}
                  className="rounded-[20px] border border-[#0b1f3f]/10 bg-white/90 p-4 shadow-[0_14px_35px_rgba(6,21,48,0.08)]"
                >
                  <p className="text-sm font-semibold text-[#0b1f3f]">{pattern.summaryTag}</p>
                  <p className="mt-2 text-xs leading-relaxed">{pattern.summary}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#1e3359]/70">
              詳細チェックリストは各カードの「症状詳細を見る」から確認できます。所要時間は約10秒です。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="mt-10 grid gap-4 md:grid-cols-3">
          {credibilitySignals.map((signal) => (
            <div
              key={signal.label}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-[#0b1f3f]/10 bg-white/80 p-6 text-left",
                "shadow-[0_18px_45px_rgba(6,21,48,0.12)] transition",
                "hover:-translate-y-1 hover:border-[#0584c6]/40 hover:shadow-[0_30px_70px_rgba(5,132,198,0.18)]"
              )}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b1f3f]/6 via-transparent to-[#0584c6]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/60">
                {signal.label}
              </p>
              <p className="mt-3 text-3xl font-bold text-[#0b1f3f]">{signal.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#1e3359]/75">{signal.description}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <ScrollReveal
            variant="fade-up"
            className="space-y-6 rounded-[32px] border border-[#0b1f3f]/15 bg-white/90 p-8 shadow-[0_24px_60px_rgba(6,21,48,0.12)]"
          >
            {painPatterns.map((pattern) => {
              const Icon = pattern.icon;
              const isSelected = selectedCauses.includes(pattern.id);
              const isExpanded = expandedPattern === pattern.id;

              return (
                <label
                  key={pattern.id}
                  className={cn(
                    "group flex cursor-pointer flex-col gap-4 rounded-[24px] border px-5 py-4 transition",
                    isSelected || isExpanded
                      ? "border-[#0584c6] bg-[#eef7ff] shadow-[0_18px_40px_rgba(5,132,198,0.18)]"
                      : "border-[#0b1f3f]/10 bg-white/70 hover:border-[#0584c6]/60 hover:bg-[#f6fbff]"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => toggleCause(pattern.id)}
                      aria-label={`${pattern.title}を選択する`}
                    />
                    <div className="flex-1 space-y-4 text-left">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0584c6]/10 text-[#0584c6]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <p className="text-left text-lg font-semibold text-[#0b1f3f] md:text-[1.1rem]">{pattern.title}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-[#0584c6]/30 bg-[#0584c6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0584c6]">
                          {pattern.summaryTag}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#1e3359]/80">{pattern.summary}</p>
                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows] duration-500",
                          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                        aria-hidden={!isExpanded}
                        id={`pain-signals-${pattern.id}`}
                      >
                        <div className="min-h-0">
                          <ul className="space-y-2 pt-1 text-sm leading-relaxed text-[#1e3359]/80">
                            {pattern.signals.map((signal) => (
                              <li key={signal} className="flex items-start gap-2">
                                <Stethoscope className="mt-1 h-4 w-4 flex-shrink-0 text-[#0584c6]" aria-hidden="true" />
                                <span>{signal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          toggleExpand(pattern.id);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0584c6]/80 transition hover:text-[#0584c6]"
                        aria-expanded={isExpanded}
                        aria-controls={`pain-signals-${pattern.id}`}
                      >
                        {isExpanded ? "症状詳細を閉じる" : "症状詳細を見る"}
                        <ArrowRight
                          className={cn(
                            "h-3.5 w-3.5 transition-transform",
                            isExpanded ? "rotate-90" : "translate-x-0"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </label>
              );
            })}
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            className="flex flex-col gap-8 rounded-[32px] border border-[#0b1f3f]/15 bg-white p-8 shadow-[0_28px_70px_rgba(6,21,48,0.16)]"
          >
            <figure className="relative overflow-hidden rounded-[26px] border border-[#0584c6]/10 bg-[#eef7ff]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(5,132,198,0.18),_transparent_55%)]" aria-hidden="true" />
              <img
                src={executiveDashboard}
                alt="経営ダッシュボードの可視化イメージ"
                className="relative z-10 h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 text-left text-xs text-[#0b1f3f]/70">
                <span className="font-semibold uppercase tracking-[0.28em] text-[#0584c6]">Evidence</span>
                <span>
                  財務ダッシュボードと現場ヒアリングを統合した「因果マッピング」で、改善仮説の納得性を引き上げます。
                </span>
              </figcaption>
            </figure>

            <div className="space-y-3 text-left text-[#1e3359]/85">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0584c6]/80">
                Next Action Guide
              </span>
              <h3 className="text-2xl font-semibold text-[#0b1f3f]">{activeRecommendation.headline}</h3>
              <p className="text-sm leading-relaxed">{activeRecommendation.description}</p>
            </div>
            <div className="rounded-[24px] border border-[#0b1f3f]/10 bg-[#f6f9ff] p-5 text-sm leading-relaxed text-[#1e3359]/80">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">
                <ClipboardList className="h-4 w-4 text-[#0584c6]" aria-hidden="true" />
                推奨アクション
              </p>
              <p className="mt-3 text-base font-semibold text-[#0b1f3f]">
                {activeRecommendation.action.label}
              </p>
              <p className="mt-2 text-xs text-[#1e3359]/70">
                AISASの「Action」を後押しする導線です。チェックした症状に応じて最短ルートでご案内します。
              </p>
            </div>
            <Button
              type="button"
              size="lg"
              className="w-full justify-center rounded-full bg-[#0584c6] text-sm font-bold text-white shadow-[0_18px_40px_rgba(5,132,198,0.28)] transition hover:bg-[#0aa3e0]"
              data-cta-id={activeRecommendation.action.ctaId}
              onClick={handleAction}
            >
              {activeRecommendation.action.label}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1f3f]/50">
              チェックリストは送信不要｜入力は約10秒
            </p>
          </ScrollReveal>
        </div>
      </div>

      <SectionMicroCta
        eyebrow="Micro CTA"
        title="チェック結果をもとに、48時間で優先仮説メモをお届け"
        description="選んだ症状に合わせたヒアリング項目とデータリストを準備し、無料相談後に再生ヒートマップと次の一手をメールで共有します。"
        ctaId="pain-checklist"
        variant="subtle"
      />
    </section>
  );
};

export default PainChecklistSection;
