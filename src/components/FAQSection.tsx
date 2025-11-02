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
    lead: "月額18万円〜の伴走プランに成果コミットメントを付帯し、未達時は返金または翌月無料をお選びいただけます。",
    metric: "¥180k~",
    metricLabel: "月額目安",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          伴走スタンダード（¥180,000/月）と成長アクセラレート（¥280,000/月）の2プランをご用意。いずれも初月トライアル付きで、合意した成果指標を満たせなかった場合は返金または翌月無料サポートを選択可能です。
        </p>
        <div className="grid gap-4 rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">伴走スタンダード</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>粗利・資金繰りの土台を3ヶ月で構築し、週次レビューと金融資料を整備。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>推奨体制：社長 + 管理/営業責任者。平均投資回収2.7ヶ月（例）。</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">成長アクセラレート</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>AI需要予測・投資シナリオ運用を伴走し、Slack常時サポートを含む週次伴走。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>推奨体制：経営陣 + PMO。平均投資回収3.1ヶ月（例）。</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-[#1e3359]/75">
          お支払いは銀行振込または請求書払いに対応。補助金を活用する場合は採択スケジュールに合わせた請求タイミングも調整可能です。
        </p>
      </div>
    ),
  },
  {
    question: "無料相談では何が分かりますか？",
    lead: "48時間以内に優先仮説と改善ロードマップの骨子をご提示します。",
    metric: "48h",
    metricLabel: "初期診断",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          財務・顧客・業務の3視点から現状データを解析し、課題の因果関係を可視化した「優先仮説メモ」と、改善アクションの初動プランをお渡しします。
        </p>
        <div className="grid gap-4 rounded-2xl bg-[#e9f0ff]/80 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">Deliverables</p>
            <p className="mt-1 font-semibold text-[#0b1f3f]">AI起点の優先仮説メモ</p>
            <p className="mt-2 text-sm text-[#1e3359]/75">主要KPIのドライバーを矢印で連結し、意思決定の焦点を一枚で共有します。</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">意思決定のポイント</p>
            <ul className="mt-1 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>粗利・在庫・キャッシュの感度をシミュレーションし、優先順位を納得感ある形で提示。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>改善のROIが高い仮説に対し、ToDoと担当配置の初期案をセットで共有。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "補助金の申請支援は可能ですか？",
    lead: "経営改善計画策定支援補助金の申請要件から書類作成まで伴走します。",
    metric: "Full",
    metricLabel: "補助金対応",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          初回相談時に補助金活用の意向とスケジュールを確認し、必要な財務指標や実行体制をヒアリングします。48時間で申請可否の見立てと不足情報を棚卸しし、経営改善計画のドラフトアウトラインを共有します。
        </p>
        <div className="grid gap-4 rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">提供するサポート</p>
            <ul className="mt-1 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>金融機関ヒアリング用の論点メモと申請スケジュールの設計</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
                <span>経営改善計画書（様式5号）ドラフトの作成と差分レビュー</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1f3f]/60">参考リソース</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">
              制度の詳細は中小企業庁の案内ページをご確認いただけます。
              <br />
              <a
                href="https://www.chusho.meti.go.jp/keiei/saisei/05.html"
                target="_blank"
                rel="noreferrer"
                className="text-[#0b5cff] underline decoration-dotted underline-offset-4"
              >
                経営改善計画策定支援事業（公式サイト）
              </a>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "福岡エリアで補助金を活用した再生事例はありますか？",
    lead: "福岡市・北九州市の中小企業で『福岡 中小企業再生 補助金』検索ニーズに対応した実績があります。",
    metric: "福岡",
    metricLabel: "地域実績",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          製造・卸売・サービスの各業種で、経営改善計画策定支援補助金を活用した再生事例があります。福岡県内の主要金融機関と連携し、補助金採択後もキャッシュフロー監視と週次レビューを継続することで、再生計画の実効性を高めています。
        </p>
        <div className="grid gap-3 rounded-2xl border border-[#0b1f3f]/10 bg-white/85 p-4 text-sm text-[#1e3359]/80">
          <div className="font-semibold text-[#0b1f3f]">代表的な成果指標</div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0b5cff]" aria-hidden="true" />
              <span>福岡市内製造業：補助金採択後6ヶ月で営業利益+9%、資金繰り耐性+30日を達成。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0b5cff]" aria-hidden="true" />
              <span>北九州市の卸売業：追加融資と補助金を併用し、債務超過を8ヶ月で解消。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#0b5cff]" aria-hidden="true" />
              <span>サービス業：福岡観光需要に合わせたDX投資を補助金で支援し、平均客単価+15%を実現。</span>
            </li>
          </ul>
        </div>
        <p className="text-sm">
          福岡エリア特有の金融慣行や商習慣を踏まえ、補助金の採択後も「福岡 中小企業再生 補助金」で検索される論点（資金繰り表の更新、モニタリング資料、銀行との協議記録）をテンプレート化しています。無料相談では、エリア別の参考シナリオを具体的にお見せします。
        </p>
      </div>
    ),
  },
  {
    question: "フォーム入力はどれくらい時間がかかりますか？",
    lead: "所要時間は約60秒。必須項目はメールアドレスと会社規模だけです。",
    metric: "60sec",
    metricLabel: "入力時間",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          STEP1ではメールアドレスと会社規模を入力し、仮説メモをお送りする準備を整えます。STEP2で会社名・担当者名・任意の課題を共有いただくと、翌営業日までに再生仮説メモと優先アクション案をお届けします。
        </p>
        <div className="grid gap-3 rounded-2xl border border-dashed border-[#0b1f3f]/15 bg-white/80 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#0b1f3f]">STEP1（約30秒）</p>
              <p className="text-sm text-[#1e3359]/75">メール・会社規模のみ入力で次に進め、優先仮説メモの準備が開始されます。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#0b5cff]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#0b1f3f]">STEP2（約30秒）</p>
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
    metric: "90d",
    metricLabel: "データ整備",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          現状の帳票を棚卸しし、必要項目をテンプレート化。OCRとRPAを活用して自動入力を設計し、段階的にデータレイクへ移行します。
        </p>
        <div className="rounded-2xl border border-dashed border-[#0b1f3f]/15 bg-white/70 p-4 shadow-sm">
          <dl className="grid gap-3 md:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-[#0b1f3f]/60">Phase1</dt>
              <dd className="mt-1 text-sm text-[#1e3359]/80">既存帳票を収集し、欠損・粒度・更新頻度を見える化。</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-[#0b1f3f]/60">Phase2</dt>
              <dd className="mt-1 text-sm text-[#1e3359]/80">テンプレート化とガバナンス設計を実施し、業務の止まらない移行計画を策定。</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.28em] text-[#0b1f3f]/60">Phase3</dt>
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
    metric: "End-to-End",
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
    question: "社内にAIやDXの担当者がいません。",
    lead: "現場マネージャーが自走できるよう、週次伴走と育成フレームを提供します。",
    metric: "Weekly",
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
              <span>週次レビューでKPIの意味合いと改善仮説の打ち手を整理。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
              <span>人材育成カリキュラムと評価指標をセットで用意し、属人化リスクを抑制。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#0b5cff]" />
              <span>ChatGPT等のプロンプト集と、部門別の成功事例ライブラリを提供。</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "費用と期間の目安は？",
    lead: "月額18万円〜。6ヶ月で再生のKPIが経営判断に耐える状態を整えます。",
    metric: "¥180k〜",
    metricLabel: "投資水準",
    answer: (
      <div className="space-y-4 text-base text-[#1e3359]/85">
        <p>
          1ヶ月目はトライアルとして定めた指標の改善率を検証し、2ヶ月目以降は成果に応じたスプリント設計で投資対効果を最大化します。
        </p>
        <div className="grid gap-4 rounded-2xl bg-gradient-to-br from-white via-[#eef3ff] to-white p-4 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0b1f3f]/60">Phase1</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">トライアル：重点KPIの改善仮説を検証し、投資判断の妥当性を数値化。</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0b1f3f]/60">Phase2</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">本導入：資金繰り・人員・需要予測を横串管理し、再生計画のPDCAを高速化。</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#0b1f3f]/60">Phase3</p>
            <p className="mt-1 text-sm text-[#1e3359]/80">半年後：投資判断資料を定例化し、銀行・株主との対話を一貫したストーリーで牽引。</p>
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
                  中小企業の再生を支える経営者の皆さまに、意思決定の根拠を明瞭に伝えるためのFAQです。因果関係を可視化し、納得感のある伴走体制を整えています。
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
                課題→介入→成果を3コマで整理したナラティブ・ビジュアライゼーションで、現場にも共有しやすい構成。
              </figcaption>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200} className="grid gap-4 md:grid-cols-3">
              {[
                {
                  value: "3週間",
                  label: "資金繰りの可視化",
                  description: "キャッシュの流出入と因果を可視化し、金融機関との対話をリード。",
                },
                {
                  value: "+18%",
                  label: "粗利率改善の平均値",
                  description: "高粗利商品の稼働率をAIで予測し、販売計画を組み替え。",
                },
                {
                  value: "94%",
                  label: "プロジェクト継続率",
                  description: "週次伴走と成果ダッシュボードで離脱を抑止。",
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
                  <p className="mt-2 text-sm text-[#1e3359]/75">財務・DX・人材開発のスペシャリストがクロスファンクショナルで支援。</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Dual Coding</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  KPIの相関と改善前後のギャップを1画面で可視化。文章だけでは伝わりにくい優先順位を、視覚とテキストで同期させます。
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
        eyebrow="Micro CTA"
        title="費用・補助金・導入スケジュールをまとめた回答シートをお送りします"
        description="FAQで触れた論点を踏まえ、無料相談後に貴社専用のQ&Aシートと次のステップをお渡しします。迷いが残る場合はチャットでも個別質問が可能です。"
        ctaId="faq-summary"
      />
    </section>
  );
};

export default FAQSection;
