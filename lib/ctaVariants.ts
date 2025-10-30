diff --git a/lib/ctaVariants.ts b/lib/ctaVariants.ts
index 52d289c35698fadd829f8a560e3d56c297bbee8d..39087437a22bc0eb1bbe00f92b3981a00db3ec97 100644
--- a/lib/ctaVariants.ts
+++ b/lib/ctaVariants.ts
@@ -1,44 +1,45 @@
 export type PrimaryCtaContent = {
   id: string;
   label: string;
   benefitCopy: string;
   benefitCopyAlt: string;
   supportText: string;
 };
 
 export type SecondaryCtaContent = {
   id: string;
   label: string;
   benefitCopy: string;
   description: string;
 };
 
 export type TertiaryCtaContent = {
   id: string;
   label: string;
   href: string;
   description: string;
 };
 
 export const PRIMARY_CTA: PrimaryCtaContent = {
   id: "primary",
-  label: "30分相談で次の一手を決める",
-  benefitCopy: "ZENナビゲーションと週次AIレポートを確認",
-  benefitCopyAlt: "粗利・資金の先読みと施策仮説を提示",
+  label: "AIと専門家が描く“再生の設計図”を無料で確認する",
+  benefitCopy: "生成AI診断と専門家コメントを同時に受け取る",
+  benefitCopyAlt: "粗利・資金・現場の再生シナリオを事前に把握",
   supportText:
-    "・代表 古町（中小企業診断士）が直接ヒアリングし、判断を止めている論点とデータ接続状況を整理します。\n・翌営業日にZENナビゲーションメモと優先課題（例）をご共有します。",
+    "・株式会社創和経営コンサルティング（福岡）の中小企業診断士が直接ヒアリングし、再生を阻む論点とデータ環境を30分で整理します。\n・翌営業日に“再生の設計図”ドラフト（例）と優先アクション候補をご共有します。",
 };
 
 export const SECONDARY_CTA: SecondaryCtaContent = {
   id: "secondary",
-  label: "72時間でZENスキャンを受け取る",
-  benefitCopy: "粗利・在庫・資金の18指標を試算",
-  description: "ヒアリングシートにご回答いただくと、AIが粗利率・在庫回転・資金余力・意思決定リードタイムなど18指標の現状と改善幅（例）を算出し、専門家がコメントを添えて返信します。",
+  label: "現状を見直し、未来を再設計する",
+  benefitCopy: "粗利・資金・人材の再生余地をAIが72時間で可視化",
+  description:
+    "ヒアリングシートに回答いただくと、AIが粗利率・キャッシュ残高・人材稼働など18指標の再生ポテンシャル（例）を算出。中小企業診断士が行動順序と注意点を添えて返信します。",
 };
 
 export const TERTIARY_CTA: TertiaryCtaContent = {
   id: "tertiary",
-  label: "資料を今すぐ確認する",
+  label: "未来の設計図を描き直す資料を見る",
   href: "https://furumachi-smec.lognowa.com/public/lp_2/assets/strategy-ai-brief.pdf",
-  description: "サービス概要、AIダッシュボードの画面、週次レポートのサンプルをまとめたPDFを即時ダウンロードできます。",
+  description: "サービス全体像、AIが生成する再生ダッシュボード、金融機関連携のサンプル資料をまとめたPDFを即時ダウンロードできます。",
 };
