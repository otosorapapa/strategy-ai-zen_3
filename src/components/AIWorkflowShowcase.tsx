diff --git a/src/components/AIWorkflowShowcase.tsx b/src/components/AIWorkflowShowcase.tsx
index 95670f407ae416eb7676da91698d2efc53de2328..72e4d81c12e30f45635ef1b61689c8f395a82ae5 100644
--- a/src/components/AIWorkflowShowcase.tsx
+++ b/src/components/AIWorkflowShowcase.tsx
@@ -1,224 +1,209 @@
 import AnimatedCounter from "@/components/AnimatedCounter";
 import ScrollReveal from "@/components/ScrollReveal";
 import dashboardPreview from "@/assets/dashboard-preview.jpg";
 import strategyPlanning from "@/assets/strategy-planning.jpg";
 import growthChart from "@/assets/growth-chart.jpg";
 import {
   ActivitySquare,
   AlarmClock,
   ArrowRight,
-  BarChart3,
   BrainCircuit,
   Database,
   FileText,
   LineChart,
   PlayCircle,
   ShieldCheck,
   Sparkles,
   Target,
   Workflow,
 } from "lucide-react";
 
 const flowSteps = [
   {
     icon: ActivitySquare,
-    title: "① 現状診断",
+    title: "① WHYマッピング",
     description:
-      "財務・販売・在庫・人員のデータを棚卸しし、外部環境スナップショットと合わせて経営の現在地を可視化。意思決定リードタイムや粗利構造のボトルネックを定量化します。",
-    output: "現状診断レポート／外部環境スナップショット",
-    inputs: ["会計・販売・在庫・人員", "取引条件・需給・競争データ"],
+      "経営者ヒアリングと財務データを突き合わせ、守り抜く価値と越えるべき壁を言語化。AIが14指標の診断を行い、“なぜ再生するのか”を共通認識にします。",
+    output: "Whyステートメント／再生診断レポート",
+    inputs: ["財務・販売・人員データ", "経営者インタビュー"],
     chain: [
-      { label: "Cause", text: "分断された数値・現場メモ・市場指標を統合" },
-      { label: "AI Insight", text: "粗利とキャッシュを左右する要因を抽出" },
-      { label: "Action", text: "改善余地と優先度を意思決定ボードに反映" },
+      { label: "Cause", text: "現状のゆがみと制約条件を抽出" },
+      { label: "AI Insight", text: "優先度の高い再生指標を可視化" },
+      { label: "Action", text: "守るべき価値と共有すべき危機感を明文化" },
     ],
   },
   {
     icon: BrainCircuit,
-    title: "② 仮説設計",
+    title: "② HOWデザイン",
     description:
-      "中小企業診断士が意思決定フレームを設計。粗利率・在庫回転・キャッシュ残高に効く仮説を立て、検証するKPIとリスク指標を定義します。",
-    output: "意思決定フレーム／検証すべき仮説リスト",
-    inputs: ["診断ヒアリング", "経営課題マップ"],
+      "粗利・キャッシュ・人材の因果をAIが学習。専門家が現場の声と照らし合わせ、複数シナリオを評価しながら実行ロードマップを描きます。",
+    output: "再生シナリオマップ／施策優先順位",
+    inputs: ["部門別KPI", "現場ヒアリング", "業界トレンド"],
     chain: [
-      { label: "Cause", text: "経営課題とデータの因果を整理" },
-      { label: "AI Insight", text: "仮説ごとの期待インパクトを試算" },
-      { label: "Action", text: "検証優先順位とマイルストーンを設定" },
+      { label: "Cause", text: "利益・資金・人材のギャップを分析" },
+      { label: "AI Insight", text: "施策ごとのインパクトとリスクを試算" },
+      { label: "Action", text: "実行順序と担当者を設定" },
     ],
   },
   {
     icon: Database,
-    title: "③ 生成AI分析",
+    title: "③ WHAT構築",
     description:
-      "生成AIが粗利・需要・資金を同時に分析し、差異要因と感度を提示。警戒ラインやチャンスを週次でアラートします。",
-    output: "AI分析ダッシュボード／差異要因レポート",
-    inputs: ["部門別KPI", "キャッシュフロー推移"],
+      "再生の設計図を金融機関・取引先・社員と共有できる形に整備。生成AIがダッシュボードと資料を自動生成し、専門家が論理性と表現を整えます。",
+    output: "再生ダッシュボード／金融機関向け資料",
+    inputs: ["キャッシュフロー", "施策スケジュール", "債権・債務情報"],
     chain: [
-      { label: "Cause", text: "粗利・在庫・受注の偏りを特定" },
-      { label: "AI Insight", text: "シナリオ別の確率とインパクトを算定" },
-      { label: "Action", text: "優先施策と必要リソースを提示" },
-    ],
-  },
-  {
-    icon: BarChart3,
-    title: "④ 経営計画",
-    description:
-      "粗利・資金計画・人員計画を一つの意思決定モデルで再構築。生成AIが数値計画のドラフトと施策ストーリーを作成し、専門家が整合性をチェックします。",
-    output: "経営計画ドラフト／意思決定ボード",
-    inputs: ["AI差異分析", "投資・資金条件"],
-    chain: [
-      { label: "Cause", text: "計画値と実績差を是正するレバーを選定" },
-      { label: "AI Insight", text: "粗利・キャッシュの波及を可視化" },
-      { label: "Action", text: "優先施策・資金使途・KPIを確定" },
+      { label: "Cause", text: "資金計画と収益モデルを同期" },
+      { label: "AI Insight", text: "シナリオ別の資金余力とリスクを算出" },
+      { label: "Action", text: "交渉資料とモニタリング指標を提示" },
     ],
   },
   {
     icon: Target,
-    title: "⑤ 実行管理",
+    title: "④ 実行・コーチング",
     description:
-      "週次の意思決定ボードと月次KPIレポートを運用。会議体・タスクボード・金融機関連携資料を生成AIが自動更新し、実行の抜け漏れを防ぎます。",
-    output: "月次KPIレポート／意思決定ボード",
-    inputs: ["会議ログ", "現場タスク進捗"],
+      "週次レビューで進捗とリスクを確認し、AIが生成するタスクと証跡で実行管理。経営者コーチングで判断の迷いを減らし、現場への伝え方を伴走します。",
+    output: "実行ログ／経営者コーチングノート",
+    inputs: ["会議ログ", "現場タスク", "金融機関フィードバック"],
     chain: [
-      { label: "Cause", text: "会議・現場のアクションを紐付け" },
-      { label: "AI Insight", text: "KPI進捗と資金影響を同時に監視" },
-      { label: "Action", text: "遅延タスクと代替案を提示" },
+      { label: "Cause", text: "施策状況と資金影響を連動" },
+      { label: "AI Insight", text: "遅延リスクと代替案を提案" },
+      { label: "Action", text: "次の一手と伝達メッセージを明確化" },
     ],
   },
   {
     icon: AlarmClock,
-    title: "⑥ 検証・改善",
+    title: "⑤ 検証・拡張",
     description:
-      "AIが施策ごとの成果とリスクを検証し、次の改善仮説を提案。四半期ごとに戦略レビューを実施し、投資案件への展開も支援します。",
-    output: "検証レポート／改善ロードマップ",
-    inputs: ["施策実績", "市場・競争アップデート"],
+      "四半期ごとに成果を検証し、再生計画の次なる投資へ展開。AIが実績を再学習し、専門家が新たな成長テーマを共創します。",
+    output: "検証レポート／拡張ロードマップ",
+    inputs: ["施策実績", "市場アップデート", "組織ヒアリング"],
     chain: [
-      { label: "Cause", text: "施策の成果差を要因分解" },
-      { label: "AI Insight", text: "改善余地と新規機会を算出" },
-      { label: "Action", text: "次の四半期計画と投資判断に反映" },
+      { label: "Cause", text: "施策の成果差と阻害要因を分解" },
+      { label: "AI Insight", text: "次の再生テーマと投資余地を算出" },
+      { label: "Action", text: "拡張フェーズの計画とガバナンスを更新" },
     ],
   },
 ];
 
 const alertScenarios = [
   {
-    label: "粗利が2週連続で計画比-8%",
-    detail: "AIが対象案件と値引き履歴を抽出し、即改善案を提示",
-    improvement: "改善までのリードタイム 5日→1日",
+    label: "資金繰りが3週後に赤信号",
+    detail: "AIが返済・仕入・売上のズレを警告し、交渉に必要な代替シナリオを提示",
+    improvement: "金融機関への相談を30日前倒し",
   },
   {
-    label: "翌月のキャッシュ残高が危険水域",
-    detail: "資金繰りシナリオを再計算し、借入・投資計画の調整案を提示",
-    improvement: "資金ショック検知を30日前倒し",
+    label: "重要顧客が離反リスク",
+    detail: "行動ログと粗利貢献を解析し、守るべき案件と再交渉ポイントを自動抽出",
+    improvement: "粗利損失を年間▲9%抑制",
   },
   {
-    label: "生成AIが経営計画書の初稿を自動生成",
-    detail: "部門別数値と現場ヒアリングを反映したドラフトを30分で作成",
-    improvement: "会議資料作成時間 210分→70分",
+    label: "施策の進捗が滞留",
+    detail: "AIが現場タスクと資金影響を紐付け、優先度と担当者にリマインド",
+    improvement: "実行遅延を60%削減",
   },
 ];
 
 const insightHighlights = [
   {
     icon: Workflow,
-    title: "因果性が可視化された意思決定フレーム",
+    title: "Why/How/Whatキャンバス",
     description:
-      "売上・粗利・在庫の連動を1枚の図に同期。施策ごとの因果チェーンを明確にし、経営会議の論点が迷子になりません。",
+      "存在意義・実現方法・提供価値を一体で可視化。経営者の言葉と数字のストーリーを揃えます。",
   },
   {
     icon: LineChart,
-    title: "論理性を担保するシナリオ比較",
+    title: "再生シナリオ比較",
     description:
-      "AIがベースラインと攻めのシナリオを週次で並列比較。キャッシュインパクトとリスク指標を同じフレームで提示します。",
+      "守り・攻め・再投資の3シナリオをAIが生成し、粗利とキャッシュの波形を色分けで提示。",
   },
   {
     icon: FileText,
-    title: "納得性を引き出す実行レポート",
+    title: "証跡付きレポート",
     description:
-      "経営陣・現場・金融機関への説明資料を自動生成。判断の背景と根拠を文章と数値でセットにして提供します。",
+      "金融機関や社内共有にそのまま使える実行レポートを自動生成し、根拠と判断を同時に残します。",
   },
 ];
 
 const executiveSnapshots = [
   {
     image: dashboardPreview,
-    title: "AIコントロールタワー",
-    metric: "週次レビュー10分",
+    title: "再生シグナルビュー",
+    metric: "優先指標 14項目",
     caption:
-      "部門横断のKPI・粗利感度・キャッシュ残高を一画面で把握。重要指標だけをハイライトし視線誘導を最適化。",
+      "粗利・資金・需要の警戒ラインを一画面で把握。青と緑のグラデーションで再生の進捗を示します。",
   },
   {
     image: strategyPlanning,
-    title: "因果マップ＆施策ボード",
-    metric: "仮説立案×3倍速",
+    title: "ゴールデンサークルキャンバス",
+    metric: "Why→How→What",
     caption:
-      "課題→介入→成果を3コマで整理。優先すべきレバーを矢印で示し、経営陣の合意形成を加速します。",
+      "経営者の言葉・AIの示唆・専門家の補足を重ね、組織全体が同じ設計図を共有できます。",
   },
   {
     image: growthChart,
-    title: "成長シナリオの比較",
-    metric: "キャッシュ確度+18%",
+    title: "キャッシュ未来予報",
+    metric: "交渉準備 30分",
     caption:
-      "投資・保守シナリオを色面で孤立化。推奨プランを視覚的にアンカーし、資金調達の説明資料としても活用可能。",
+      "金融機関に提示できるキャッシュフロー比較を自動生成。根拠データをワンクリックで添付できます。",
   },
 ];
 
 const impactMetrics = [
   {
-    label: "社長の意思決定時間削減",
-    value: 72,
-    suffix: "%削減",
-    description: "AIが論点と根拠データを先回りで整理",
+    label: "判断リードタイム短縮",
+    value: 52,
+    suffix: "%",
+    description: "Why→How→Whatが揃った設計図で会議が10分に",
   },
   {
-    label: "会議準備時間を1/3に短縮",
-    prefix: "1/",
-    value: 3,
-    suffix: "",
-    description: "経営計画書・ダッシュボード・議事録を自動生成",
+    label: "金融交渉準備",
+    value: 30,
+    suffix: "分",
+    description: "証跡レポートとシナリオ資料をAIが自動生成",
   },
   {
-    label: "キャッシュ創出シナリオ",
+    label: "再生シナリオ",
     value: 12,
     suffix: "本",
-    description: "優先順位付きの増収・資金繰り改善策を提示",
+    description: "増益・資金改善・人材再配置の選択肢を同時に提示",
   },
 ];
 
 const executiveBriefPoints = [
   {
-    title: "因果が見えるAIレポート",
-    detail: "粗利・キャッシュの差異要因と根拠データを1枚に整理。経営陣は意思決定論点を10分で把握できます。",
+    title: "設計図のアップデート履歴",
+    detail: "再生のWhy/How/Whatが更新されるたびに証跡を保存し、判断背景をチーム全員と共有。",
   },
   {
-    title: "経営判断の証跡を自動保存",
-    detail: "採択した施策と却下理由を記録し、次回会議での検証や金融機関への説明資料として再利用。",
+    title: "金融機関との共通言語",
+    detail: "資金シナリオと施策進捗を同じテンプレートで提示し、対話のスピードと信頼を高めます。",
   },
   {
-    title: "現場との合意形成を加速",
-    detail: "Slack/Teamsと連携し、現場アクション・KPI・オーナーを即共有。判断の納得感を高めます。",
+    title: "実行ボードと連動",
+    detail: "AIがタスクとリスクを自動連携。経営者コーチングで伝えたメッセージがそのまま現場に届きます。",
   },
 ];
 
 const decisionGuardrails = [
   {
     title: "データ品質の自動監査",
     detail: "会計・販売データの欠損や異常値を検知し、意思決定に使う前提条件を数値でチェック。",
   },
   {
     title: "リスクシナリオの検証",
     detail: "粗利・資金繰りの最悪ケースを同時試算し、投資判断に必要なダウンサイドも可視化。",
   },
   {
     title: "経営会議のガバナンス",
     detail: "議事録・タスク・KPIを紐付けて保存。社長不在時も判断プロセスを追跡できます。",
   },
 ];
 
 const AIWorkflowShowcase = () => {
   return (
     <section className="fade-in-section relative overflow-hidden bg-slate-950 py-14 text-slate-50 md:py-20">
       <div
         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]"
         aria-hidden="true"
       />
