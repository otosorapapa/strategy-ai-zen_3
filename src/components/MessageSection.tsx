import ScrollReveal from "@/components/ScrollReveal";
import {
  Gauge,
  LineChart,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Building2,
  Workflow,
} from "lucide-react";
import representativeImage from "@/assets/representative.jpg";

const MessageSection = () => {
  return (
    <section className="fade-in-section relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12)_0%,_transparent_55%)]" />
      <div className="container relative mx-auto px-3 sm:px-4">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal as="div" variant="fade-up" className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" /> 信頼できる伴走パートナー
            </span>
            <h2 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              代表<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">メッセージ</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
              生成AIと経営知見を融合し、意思決定と現場実装をつなぐ企業変革の共創者です
            </p>
          </ScrollReveal>

          <div className="grid items-stretch gap-12 lg:grid-cols-[1.05fr_1.25fr]">
            <ScrollReveal as="div" variant="fade-up">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-[40px] border border-primary/25 bg-white shadow-elegant">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-white/40 to-accent/10" />
                  <div className="absolute left-6 top-6 flex flex-col gap-3 text-left">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-card">
                      Executive Partner
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground shadow-card">
                      経営×AIの現場伴走
                    </span>
                  </div>
                  <img
                    src={representativeImage}
                    alt="代表取締役 / 中小企業診断士 古町 聖文"
                    className="relative aspect-[3/4] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-8">
                    <p className="text-2xl font-bold text-foreground">古町 聖文</p>
                    <p className="mt-2 text-lg font-semibold text-muted-foreground">
                      代表取締役 / 中小企業診断士
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      <span className="rounded-full border border-primary/30 bg-background/70 px-3 py-1">管理会計デザイン</span>
                      <span className="rounded-full border border-primary/30 bg-background/70 px-3 py-1">生成AI実装支援</span>
                      <span className="rounded-full border border-primary/30 bg-background/70 px-3 py-1">九州ローカルDX</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-primary/15 bg-white/80 p-5 shadow-card backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Gross Profit Lift</p>
                    <p className="mt-2 text-3xl font-bold text-primary">+7.4pt</p>
                    <p className="mt-1 text-sm text-muted-foreground">粗利率の中央値改善（導入後6ヶ月）</p>
                  </div>
                  <div className="rounded-3xl border border-primary/15 bg-white/80 p-5 shadow-card backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Cash Conversion</p>
                    <p className="mt-2 text-3xl font-bold text-primary">-32日</p>
                    <p className="mt-1 text-sm text-muted-foreground">運転資金回収までの平均短縮日数</p>
                  </div>
                  <div className="rounded-3xl border border-primary/15 bg-white/80 p-5 shadow-card backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Executive Trust</p>
                    <p className="mt-2 text-3xl font-bold text-primary">96%</p>
                    <p className="mt-1 text-sm text-muted-foreground">経営層満足度（NPS 48 / 直近調査）</p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-primary/20 bg-white/85 p-6 shadow-card backdrop-blur">
                  <h3 className="text-xl font-bold text-foreground">信頼の裏付け</h3>
                  <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">認定経営革新等支援機関 / 中小企業診断士</p>
                        <p>金融機関連携の再生・成長案件を多数支援。守秘義務契約とデータセキュリティを徹底。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">対象年商：5,000万円〜10億円未満</p>
                        <p>建設・製造・物流・医療・ITなど、多業種のスケールアップを伴走。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LineChart className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">経営ダッシュボードとAIモデリング</p>
                        <p>Power BI / Looker / Vertex AI 等を活用し、因果構造を解くアナリティクスを実装。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" variant="fade-up" delay={160} className="space-y-8">
              <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-white/90 p-10 shadow-card backdrop-blur">
                <div className="absolute -top-28 right-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
                <Quote className="absolute -top-6 -left-6 h-16 w-16 text-primary/15" />
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">因果ロジック</span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">現場実装</span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">意思決定支援</span>
                </div>
                <h3 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  3ヶ月で見える化
                  <br />
                  6ヶ月で成果定着
                </h3>

                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  財務・業務・顧客データを因果構造でひも解き、粗利率やキャッシュポジションへ直結する打ち手をデザイン。経営会議と現場オペレーションの双方で納得感ある意思決定を実現します。
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <LineChart className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">ファクトドリブン分析</p>
                      <p className="text-sm text-muted-foreground">
                        KPI間の相関と因果仮説を整理し、粗利・在庫・人員を同時に最適化するシナリオを提示。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <Workflow className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">経営会議アジェンダ設計</p>
                      <p className="text-sm text-muted-foreground">
                        週次・月次のレビューを標準化し、役員・現場長が即実行できる優先順位を合意形成。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <Target className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">成果指標のモニタリング</p>
                      <p className="text-sm text-muted-foreground">
                        キャッシュコンバージョンサイクルと顧客LTVをモニターし、先行指標での修正を徹底。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <Users className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">現場巻き込みと育成</p>
                      <p className="text-sm text-muted-foreground">
                        管理職・中堅社員のスキル移転プログラムを同時展開し、内製化と再現性を確保。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Transformation Roadmap</p>
                  <ol className="mt-6 space-y-5 text-left text-sm text-muted-foreground md:text-base">
                    <li className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                      <div>
                        <p className="font-semibold text-foreground">着地点の定義と課題診断</p>
                        <p>財務・業務データを統合し、ボトルネックとKPIの因果マップを可視化。</p>
                      </div>
                    </li>
                    <li className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                      <div>
                        <p className="font-semibold text-foreground">共創ワークショップ</p>
                        <p>現場ヒアリングとAIプロトタイピングで、効果検証プランと投資回収を明確化。</p>
                      </div>
                    </li>
                    <li className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                      <div>
                        <p className="font-semibold text-foreground">実装と定着サポート</p>
                        <p>業務フローと教育プログラムを整備し、モニタリング指標で改善サイクルを固定化。</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-primary/20 bg-white/85 p-6 shadow-card">
                    <div className="flex items-start gap-3">
                      <Gauge className="mt-1 h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">経営ダッシュボードの共同運用</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          週次レビューで数値→打ち手→成果の因果を検証し、意思決定のスピードを最大化。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-white/85 p-6 shadow-card">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-6 w-6 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">ガバナンスとリスクマネジメント</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          NDA・情報セキュリティ体制を完備し、金融機関・監査法人とも連携可能なレベルで提供。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-border/80 pt-6">
                  <p className="text-base text-muted-foreground">株式会社創和経営コンサルティング</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">代表取締役 / 中小企業診断士</p>
                  <p className="mt-4 text-3xl font-bold text-primary" style={{ fontFamily: "'Brush Script MT', cursive" }}>
                    Kiyofumi Furumachi
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
