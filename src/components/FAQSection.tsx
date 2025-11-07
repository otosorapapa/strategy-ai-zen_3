import type { ReactNode } from "react";

import methodologyDiagram from "@/assets/problem-infographic.svg";
import representativeImage from "@/assets/representative_.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";
import { CheckCircle2 } from "lucide-react";

type FAQ = {
  question: string;
  lead: string;
  metric: string;
  metricLabel: string;
  answer: ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "費用の目安と支払い方法は？",
    lead: "結果にこだわる定額伴走で、歩みが止まれば費用調整を選べます。",
    metric: "18万円〜",
    metricLabel: "月額目安",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          標準伴走（月額18万円）と成長加速（月額28万円）の二本立て。いずれも初月はお試し期間とし、取り決めた指標に届かなければ返金または翌月無料サポートをお選びいただけます。
        </p>
        <div className="grid gap-4 rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">標準伴走プラン</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>粗利と資金繰りの土台を3か月で整え、週次の振り返りと金融資料を整備します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>推奨体制：経営者と管理担当。投資回収の目安は約2.7か月（実績値）。</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">成長加速プラン</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>AIによる需要予測と投資シナリオの運用を伴走し、常時チャット相談と週次訪問を組み合わせます。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>推奨体制：経営陣と推進担当。投資回収の目安は約3.1か月（実績値）。</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-[#1e3359]/75">
          お支払いは銀行振込または請求書払いに対応。国の補助金を使う場合も、採択のスケジュールに合わせた請求タイミングを柔軟に整えます。
        </p>
      </div>
    ),
  },
  {
    question: "無料相談では何が分かりますか？",
    lead: "48時間以内に、経営判断の核心と初動計画を見える化します。",
    metric: "48時間",
    metricLabel: "初期診断",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          財務・顧客・業務の三つの視点から現状を分析し、課題どうしのつながりを整理した「優先仮説メモ」と、改善アクションの初動プランをお渡しします。
        </p>
        <div className="grid gap-4 rounded-2xl bg-[#e9f0ff]/80 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">お渡しする資料</p>
            <p className="mt-1 font-semibold text-[#0b1f3f]">AI起点の優先仮説メモ</p>
            <p className="mt-2 text-sm text-[#1e3359]/75">主要指標を矢印で結び、判断の焦点を一枚で共有できる形にします。</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">判断のポイント</p>
            <ul className="mt-1 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>粗利・在庫・資金の感度を試算し、優先順位を納得しやすい形で提示します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>効果が見込める仮説ごとに、やるべきことと担当配置の初期案をセットで共有します。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "補助金の活用も相談できますか？",
    lead: "国の補助金を前提とした資金づくりも、計画立案と同じ歩幅で支援します。",
    metric: "伴走",
    metricLabel: "補助金支援",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          初回相談で補助金を使いたい目的と時期を伺い、必要な数字や体制を整理します。48時間以内に活用の見通しと不足情報の棚卸し表を共有し、計画書づくりと並行して準備を進めます。
        </p>
        <div className="grid gap-4 rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">支援内容</p>
            <ul className="mt-1 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>金融機関との打合せで使える論点メモと提出スケジュールを設計します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>経営改善計画のドラフトを作り、必要書類の差分をその場で確認します。</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">進め方</p>
            <ul className="mt-1 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>初回面談後48時間で不足資料リストと役割分担をお送りします。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>必要に応じて面談やプレゼンにも同席し、準備の要点を整理します。</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-[#1e3359]/75">
          採択結果が見えない段階でも、再挑戦の準備や金融機関との調整までワンチームで支えます。
        </p>
      </div>
    ),
  },
  {
    question: "福岡エリアでの支援実績はありますか？",
    lead: "福岡市・北九州市を中心に、地域の商習慣を踏まえた再生支援を重ねています。",
    metric: "福岡",
    metricLabel: "地域実績",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          製造・卸売・サービスなど幅広い業種で、金融機関や専門家と連携しながら計画づくりと実行を支えてきました。現場の声を拾い上げ、地域特有の調達サイクルや商談の進め方に合わせて対策を編み上げます。
        </p>
        <div className="grid gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 text-sm text-[#1e3359]/80">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="font-semibold text-[#0b1f3f]">製造業</p>
              <span>設備投資と在庫コントロールを両立し、3か月で黒字転換の目処を共有。</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="font-semibold text-[#0b1f3f]">卸売業</p>
              <span>主要仕入先との条件見直しを支援し、資金の安定化を実現。</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="font-semibold text-[#0b1f3f]">サービス業</p>
              <span>来店データを分析し、単価向上と来店頻度アップの両輪で回復を支援。</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-[#1e3359]/75">
          福岡エリアで蓄積したテンプレートと会議運営の型を持ち込み、地域ならではのスピード感で前進させます。無料相談では、業種別のシナリオを具体的にお見せします。
        </p>
      </div>
    ),
  },
  {
    question: "フォーム入力はどれくらい時間がかかりますか？",
    lead: "所要時間は約60秒。必須項目はメールアドレスと会社規模だけです。",
    metric: "約60秒",
    metricLabel: "入力時間",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          手順1ではメールアドレスと会社規模を入力し、仮説メモをお送りする準備を整えます。手順2で会社名・担当者名・任意の課題を共有いただくと、翌営業日までに再生仮説メモと優先アクション案をお届けします。
        </p>
        <div className="grid gap-3 rounded-2xl border border-dashed border-[#0b1f3f]/15 bg-white/80 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#0b1f3f]">手順1（約30秒）</p>
              <p className="text-sm text-[#1e3359]/75">メール・会社規模のみ入力で次に進め、優先仮説メモの準備が開始されます。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#0b1f3f]">手順2（約30秒）</p>
              <p className="text-sm text-[#1e3359]/75">会社名・ご担当者名・任意の課題を共有いただくと、翌営業日に優先アクション案をお送りします。</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "データが整っていなくても大丈夫ですか？",
    lead: "紙・Excelベースからスタートし、90日で分析が回る土台を整備します。",
    metric: "90日",
    metricLabel: "データ整備",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          現状の帳票を棚卸しし、必要項目をテンプレート化。AIによる文字認識と自動処理を活用して入力を効率化し、段階的にデータ基盤へ移行します。
        </p>
        <div className="rounded-2xl border border-dashed border-[#0b1f3f]/15 bg-white/70 p-4 shadow-sm">
          <dl className="grid gap-3 md:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-[#0b1f3f]/60">第1段階</dt>
              <dd className="mt-1 text-sm text-[#1e3359]/80">既存帳票を収集し、欠損・粒度・更新頻度を見える化。</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-[#0b1f3f]/60">第2段階</dt>
              <dd className="mt-1 text-sm text-[#1e3359]/80">テンプレート化とガバナンス設計を実施し、業務の止まらない移行計画を策定。</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-[#0b1f3f]/60">第3段階</dt>
              <dd className="mt-1 text-sm text-[#1e3359]/80">ダッシュボードと連動させ、日次の経営指標を自動集計。</dd>
            </div>
          </dl>
        </div>
      </div>
    ),
  },
  {
    question: "金融機関との交渉はどこまで支援してくれますか？",
    lead: "交渉戦略・資料・場の設計までワンストップで伴走します。",
    metric: "全体支援",
    metricLabel: "交渉支援",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          金融機関の審査観点を踏まえた再生ストーリーを構築し、打合せでは議事と合意事項をAIで即時要約。次アクションの責任者まで明文化します。
        </p>
        <div className="grid gap-3 rounded-2xl bg-[#0b1f3f]/5 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/70">交渉の型</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">仮説→データ→合意→実行の4ステップで資料とトークスクリプトを整備。</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/70">成果管理</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">融資条件・コベナンツをダッシュボードへ連携し、遵守状況を共有。</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "社内にAIやデジタル活用の担当者がいません。",
    lead: "現場マネージャーが自走できるよう、週次伴走と育成フレームを提供します。",
    metric: "週次伴走",
    metricLabel: "伴走体制",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          AI活用ガイド、ワークショップ教材、業務ハンドブックを組み合わせ、属人化せずに運用できる体制を共創します。
        </p>
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#0b1f3f]/8">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
              <span>週次レビューで重要指標（KPI）の意味合いと改善仮説の打ち手を整理。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
              <span>人材育成カリキュラムと評価指標をセットで用意し、属人化リスクを抑制。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
              <span>対話型AI（ChatGPT等）の活用例と、部門別の成功事例ライブラリを提供。</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "費用と期間の目安は？",
    lead: "月額18万円〜。6ヶ月で再生の重要指標が経営判断に耐える状態を整えます。",
    metric: "18万円〜",
    metricLabel: "投資水準",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          1ヶ月目はトライアルとして定めた指標の改善率を検証し、2ヶ月目以降は成果に応じたスプリント設計で投資対効果を最大化します。
        </p>
        <div className="grid gap-4 rounded-2xl bg-gradient-to-br from-white via-[#eef3ff] to-white p-4 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0b1f3f]/60">第1段階</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">お試し期間：重要指標（KPI）の改善仮説を検証し、投資判断の妥当性を数値化。</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0b1f3f]/60">第2段階</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">本導入：資金繰り・人員・需要予測を横串管理し、再生計画の改善サイクルを加速。</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0b1f3f]/60">第3段階</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">半年後：投資判断資料を定例化し、金融機関や株主との対話を一つの物語で牽引。</p>
          </div>
        </div>
      </div>
    ),
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#edf3ff] via-white to-[#f3f6ff] py-24"
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(58,99,209,0.12),_transparent_70%)]" />
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-10">
            <ScrollReveal variant="fade-up" className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0b1f3f]/15 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]/70 shadow-sm">
                FAQ
              </span>
              <div className="space-y-4">
                <h2 id="faq-heading" className="text-3xl font-bold leading-tight text-[#0b1f3f] md:text-4xl">
                  よくあるご質問
                  <span className="ml-3 inline-flex items-center rounded-full bg-[#0b1f3f] px-3 py-1 text-sm font-semibold text-white shadow-md">
                    再生の疑問をロジカルに解消
                  </span>
                </h2>
                <p className="text-[1.05rem] leading-relaxed text-[#1e3359]/85 md:text-lg">
                  変化の気配をいち早く捉え、次の一手を堂々と示したい経営者のための質問集です。未来の兆しと足元の数字を結び付け、腹落ちする意思決定を後押しします。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal
              as="figure"
              variant="fade-up"
              delay={120}
              className="relative overflow-hidden rounded-3xl border border-[#0b1f3f]/10 bg-white/70 p-6 shadow-[0_20px_50px_-25px_rgba(11,31,63,0.35)] backdrop-blur"
            >
              <img
                src={methodologyDiagram}
                alt="再生プロセスのフレームワーク図"
                className="mx-auto w-full max-w-md object-contain"
                loading="lazy"
              />
              <figcaption className="mt-4 text-center text-sm font-medium text-[#1e3359]/75">
                課題・打ち手・成果のつながりを一目で共有できる図解で、現場にも伝わる物語を形にします。
              </figcaption>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200} className="grid gap-4 md:grid-cols-3">
              {[
                {
                  value: "3週間",
                  label: "資金繰りの見える化",
                  description: "資金の動きと背景を整理し、金融機関との面談で胸を張れる説明資料を共創。",
                },
                {
                  value: "+18%",
                  label: "粗利率改善の事例中央値",
                  description: "利益を生む商品構成をAIで試算し、納得感のある販売計画に組み替えます。",
                },
                {
                  value: "94%",
                  label: "伴走継続率",
                  description: "週次伴走と成果ダッシュボードで前進を可視化し、チームが自ら語れる状態を育てます。",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl bg-white/90 p-5 shadow-[0_18px_40px_-30px_rgba(11,31,63,0.55)] ring-1 ring-[#0b1f3f]/10"
                >
                  <p className="text-2xl font-bold text-[#0b1f3f]">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">{item.label}</p>
                  <p className="mt-2 text-sm text-[#1e3359]/75">{item.description}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal
              variant="fade-up"
              delay={260}
              className="flex flex-col gap-6 rounded-3xl bg-white/85 p-6 shadow-[0_24px_50px_-32px_rgba(11,31,63,0.55)] ring-1 ring-[#0b1f3f]/10 backdrop-blur"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <img
                  src={representativeImage}
                  alt="代表・古町が顧客に寄り添ってヒアリングするシーン"
                  className="h-20 w-20 rounded-full object-cover shadow-md"
                  loading="lazy"
                />
                <blockquote className="text-sm leading-relaxed text-[#1e3359]/80">
                  「再生の現場では『なぜその打ち手なのか』を示すストーリーが命です。AIによる定量分析と現場ヒアリングの定性知をつなぎ、金融機関も納得する計画書を共に描きます。」
                </blockquote>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-dashed border-[#0b1f3f]/15 bg-[#f6f9ff]/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">トラスト・シグナル</p>
                  <p className="mt-2 text-sm text-[#1e3359]/75">行政再生支援協議会・地域金融機関・専門士業と連携したプロジェクト実績を蓄積。</p>
                </div>
                <div className="rounded-2xl border border-[#0b1f3f]/10 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0b1f3f]/60">伴走チーム</p>
                  <p className="mt-2 text-sm text-[#1e3359]/75">財務・デジタル活用・人材開発の専門家が横断的に支援。</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal
              variant="fade-up"
              delay={160}
              className="relative overflow-hidden rounded-[2.5rem] border border-[#0b1f3f]/10 bg-white/80 shadow-[0_30px_60px_-35px_rgba(11,31,63,0.6)] ring-1 ring-[#0b1f3f]/8"
            >
              <img
                src={dashboardPreview}
                alt="再生ダッシュボードの画面イメージ"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-[#0b1f3f]/90 p-4 text-white shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">視覚と言葉の連携</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  指標のつながりと改善前後の差を一画面に整理。言葉だけでは伝わりづらい優先順位を、図とコメントでそろえます。
                </p>
              </div>
            </ScrollReveal>

            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="group overflow-hidden rounded-3xl bg-white/95 p-1 shadow-[0_18px_48px_-30px_rgba(11,31,63,0.65)] !border-0 ring-1 ring-[#0b1f3f]/10"
                >
                  <AccordionTrigger className="flex items-start gap-4 rounded-3xl bg-transparent px-6 py-5 text-left text-base font-semibold text-[#0b1f3f] transition-colors group-data-[state=open]:bg-[#eef3ff]">
                    <div className="flex-1 space-y-1 text-left">
                      <p className="text-lg font-semibold leading-snug text-[#0b1f3f]">{faq.question}</p>
                      <p className="text-sm font-medium text-[#1e3359]/70">{faq.lead}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center rounded-full bg-[#0b1f3f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f3f]">
                        {faq.metric}
                      </span>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#1e3359]/50">
                        {faq.metricLabel}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-[#1e3359]/85">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <SectionMicroCta
        eyebrow="追加のご案内"
        title="費用・補助金・導入スケジュールをまとめた回答シートをお送りします"
        description="FAQで触れた論点を整理し、無料相談後に貴社専用の回答シートと次の一歩をお届けします。迷いが残る場合はチャットでいつでもご相談いただけます。"
        ctaId="faq-summary"
      />
    </section>
  );
};

export default FAQSection;
