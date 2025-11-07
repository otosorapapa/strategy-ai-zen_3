import ScrollReveal from "@/components/ScrollReveal";
import SectionMicroCta from "@/components/SectionMicroCta";

const metricHighlights = [
  {
    value: "+12%",
    label: "営業利益の改善",
    description: "再生計画実行後12ヶ月の平均改善幅（例）",
  },
  {
    value: "80%",
    label: "債務超過解消率",
    description: "金融機関との再交渉で合意に至った割合（例）",
  },
  {
    value: "100社超",
    label: "相談企業数",
    description: "九州・西日本の伴走実績",
  },
];

const covenantStatus = [
  { label: "返済余力スコア", status: "安定", helper: "最新月 158%" },
  { label: "資金クッション日数", status: "注意", helper: "45日 → 37日" },
  { label: "在庫回転日数", status: "改善中", helper: "68日 → 55日" },
];

const actionItems = [
  {
    owner: "営業部長",
    task: "高粗利3商品の価格見直し案を提示",
    due: "今週中",
  },
  {
    owner: "管理部",
    task: "銀行モニタリング資料のドラフト共有",
    due: "木曜",
  },
  {
    owner: "人事",
    task: "シフト最適化のAI提案を検証",
    due: "来週初",
  },
];

const milestoneBadges = [
  { label: "Week0", text: "48H診断" },
  { label: "Week2", text: "再生シナリオ合意" },
  { label: "Week6", text: "金融機関レビュー" },
  { label: "Week12", text: "粗利+3pt達成" },
];

const DashboardShowcase = () => {
  return (
    <section className="bg-[#010a1d] py-24 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <ScrollReveal
            variant="fade-up"
            className="relative overflow-hidden rounded-[32px] border border-white/8 bg-gradient-to-b from-[#071a3b] via-[#04122d] to-[#020a1d] p-10 shadow-[0_35px_80px_rgba(2,8,23,0.6)]"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              <span className="rounded-full bg-white/10 px-3 py-1">Impact</span>
              <span className="text-white/70">再現性で語る</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-snug md:text-[2.1rem]">
              「再生の設計図」が整うと、数字と行動が同じ未来を指すコンパスに変わる
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-slate-200/80 md:text-base">
              仮説を語るだけでは反転は起こりません。ZENは実行に耐えるプロセスを作り込み、粗利・資金・人材の波形を同時に整えることで、経営者が迷いなく次のステップを選べる状態を守り抜きます。
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {metricHighlights.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
                >
                  <p className="text-3xl font-black text-cyan-100 md:text-4xl">{metric.value}</p>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-[0.8rem] leading-relaxed text-slate-200/75">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["製造業｜粗利とキャッシュを同時に立て直し", "卸売業｜金融機関との信頼を再構築", "サービス業｜人材活用の設計図を刷新"].map(
                (title) => (
                  <div
                    key={title}
                    className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#062147] via-[#041735] to-[#021024] p-5 text-left"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/70">Case</p>
                    <p className="mt-2 text-sm font-semibold leading-snug text-white">{title}</p>
                  </div>
                )
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            delay={0.1}
            className="relative h-full overflow-hidden rounded-[32px] border border-white/6 bg-gradient-to-br from-[#24165f] via-[#1d1f63] to-[#0c1740] p-8 shadow-[0_35px_80px_rgba(13,5,34,0.65)]"
          >
            <div className="flex items-center justify-between text-sm font-semibold text-white/80">
              <span className="flex items-center gap-2 text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg">📊</span>
                ZEN Board｜経営判断ビュー
              </span>
              <div className="flex gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                {milestoneBadges.map((item) => (
                  <span key={item.label} className="rounded-full bg-white/10 px-3 py-1">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-[0_18px_45px_rgba(8,14,35,0.45)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Cash Buffer</p>
                <p className="mt-3 text-3xl font-bold text-emerald-200">45日</p>
                <p className="text-xs text-emerald-200/80">前月比 +12日</p>
                <div className="mt-5 grid grid-cols-6 gap-1">
                  {["-4", "-3", "-2", "-1", "今週", "+1週"].map((label, index) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <div className="flex h-14 w-10 items-end justify-center rounded-full bg-gradient-to-b from-emerald-300/60 to-emerald-500/40 p-1">
                        <div
                          className="w-full rounded-full bg-emerald-100"
                          style={{ height: `${Math.max(10, ((45 - index * 4) / 50) * 100)}%` }}
                        />
                      </div>
                      <span className="text-[0.55rem] text-white/60">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a5cf6] via-[#4e46e5] to-[#1a1a5c] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Gross Margin Recovery</p>
                <p className="mt-3 text-3xl font-bold text-white">+3.2pt</p>
                <p className="text-xs text-white/70">重点3ラインの改善幅（ローリング8週）</p>
                <div className="mt-4 flex h-20 w-full items-end gap-1">
                  {[28, 32, 35, 37, 39, 41, 43, 45].map((value) => (
                    <span
                      key={value}
                      className="flex-1 rounded-t-lg bg-white/20"
                      style={{ height: `${Math.min(100, (value / 50) * 100)}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0f1637]/70 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">金融対応サマリー</p>
                <ul className="mt-3 space-y-3">
                  {covenantStatus.map((item) => (
                    <li key={item.label} className="flex items-start justify-between gap-3 text-xs">
                      <div>
                        <p className="font-semibold text-white/80">{item.label}</p>
                        <p className="text-white/60">{item.helper}</p>
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                        {item.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">交渉アジェンダ</p>
                <div className="mt-3 space-y-2 text-xs text-white/80">
                  <p className="font-semibold text-white">・条件変更案：据置3ヶ月＋返済額調整</p>
                  <p>・必要資料：月次PL、受注残、AI需要予測</p>
                  <p>・担当：代表／財務責任者／ZEN伴走PM</p>
                </div>
                <div className="mt-4 rounded-2xl bg-white/10 p-4 text-xs text-white/70">
                  <p className="font-semibold text-white">次の面談</p>
                  <p>〇月〇日（木）14:00｜地方銀行 本店</p>
                  <p>目的：返済条件リスケ＋成長投資計画の説明</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff8b5b] via-[#f55f96] to-[#8047f2] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">今週のアクション</p>
                <ul className="mt-3 space-y-2 text-xs">
                  {actionItems.map((item) => (
                    <li key={item.task} className="rounded-xl bg-white/10 px-3 py-2">
                      <p className="font-semibold text-white">{item.task}</p>
                      <p className="text-white/70">担当：{item.owner}｜期限：{item.due}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#1f2a5f]/80 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">週次レビュー予定</p>
                <div className="mt-3 space-y-2 text-xs text-white/75">
                  <p>Mon｜経営会議：粗利/キャッシュアップデート</p>
                  <p>Wed｜現場チーム：改善タスク進捗共有</p>
                  <p>Fri｜ZEN伴走：AIレポートと交渉資料を更新</p>
                </div>
                <div className="mt-4 rounded-full bg-white/10 px-3 py-1 text-center text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  実行ログは自動保存
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <SectionMicroCta
        variant="dark"
        eyebrow="Micro CTA"
        title="ダッシュボードの操作感を、共有画面で一緒に確認"
        description="キャッシュ・粗利・現場タスクの可視化例をデモし、貴社データを載せた場合の構成や更新サイクルをその場でご提案します。"
        ctaId="dashboard-demo"
      />
    </section>
  );
};

export default DashboardShowcase;
