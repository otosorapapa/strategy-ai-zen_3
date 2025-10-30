diff --git a/src/components/CTASection.tsx b/src/components/CTASection.tsx
index 08cd13701c1b3d021d882e28c40a0d4733487ee7..6a7b711b49f3621ecd8766adcb1daea042ed8ca9 100644
--- a/src/components/CTASection.tsx
+++ b/src/components/CTASection.tsx
@@ -8,145 +8,145 @@ import { Textarea } from "@/components/ui/textarea";
 import { Checkbox } from "@/components/ui/checkbox";
 import { Progress } from "@/components/ui/progress";
 import { useToast } from "@/hooks/use-toast";
 import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/ctaVariants";
 import { cn } from "@/lib/utils";
 import { submitContactFormToWordPress } from "@/lib/wordpress";
 import {
   AlertCircle,
   ArrowRight,
   Building2,
   CalendarClock,
   CheckCircle,
   CheckCircle2,
   JapaneseYen,
   Loader2,
   Lock,
   Mail,
   ShieldCheck,
   Timer,
   UserRound,
 } from "lucide-react";
 
 const requestOptions = [
   {
     value: "consultation",
-    title: "30分相談で意思決定の詰まりを棚卸し",
+    title: "30分相談でWhyを言語化",
     description:
-      "代表・古町（中小企業診断士）が直接ヒアリングし、粗利・資金・需要のボトルネックとAI活用余地を整理。翌営業日に優先度と根拠をまとめた検証メモ（例）を共有します。",
+      "代表・古町が直接ヒアリングし、再生の目的と制約を整理。翌営業日に“再生の設計図”ドラフト（例）と優先アクション候補を共有します。",
     badge: "無料相談",
   },
   {
     value: "diagnostic",
-    title: "14指標の仮診断で次の一手を決める",
+    title: "AI診断でHowを描く",
     description:
-      "粗利率・在庫回転・資金余力・意思決定リードタイムなど14指標をAIが試算。72時間以内に改善インパクト（例）と優先順位を添えて返信します。",
-    badge: "仮診断",
+      "粗利・キャッシュ・人材の18指標をAIが分析し、専門家が行動順序とリスク注意点をコメント。72時間で実行の土台を把握できます。",
+    badge: "AI診断",
   },
   {
     value: "materials",
-    title: "要点資料を今すぐ確認する",
+    title: "資料でWhatを共有",
     description:
-      "サービス概要・導入ステップ・AIレポートと意思決定ボードのサンプルをまとめたPDFを即時ダウンロードできます。",
+      "再生設計図の全体像、成果事例、金融機関連携のテンプレートをまとめたPDFを即時ダウンロード。社内外への共有にご活用ください。",
     badge: "資料DL",
   },
 ] as const;
 
 type RequestType = (typeof requestOptions)[number]["value"];
 
 const resolveRequestTypeLabel = (value: RequestType) => {
   const option = requestOptions.find((entry) => entry.value === value);
   return option?.title ?? "";
 };
 
 const assuranceBadges = [
   {
-    label: "中小企業診断士・登録専門家",
-    description: "代表 古町 聖文が直接伴走し、経営計画・資金調達・投資判断の打ち手まで責任を持って確認します。",
+    label: "中小企業診断士が直接伴走",
+    description: "株式会社創和経営コンサルティング（福岡）の専門チームが再生計画・金融交渉・実行支援を一貫サポートします。",
   },
   {
-    label: "ISMS/Pマーク取得ベンダーと連携",
-    description: "財務データは暗号化とアクセス制御で保管し、AI学習には匿名化した情報のみを利用。守秘義務契約も締結します。",
+    label: "データと守秘の徹底",
+    description: "財務・人材データは暗号化とアクセス制御で保管し、AI学習には匿名化した情報のみを使用。NDA締結も標準対応です。",
   },
 ];
 
 const confettiPieces = Array.from({ length: 12 }, (_, index) => {
   const left = 6 + index * 7;
   const delay = index * 55;
   const direction = index % 2 === 0 ? -1 : 1;
   const drift = direction * (18 + index * 3);
   const rotation = direction * (10 + index * 2);
 
   return {
     id: `confetti-piece-${index}`,
     left,
     delay,
     drift,
     rotation,
     endRotation: rotation + direction * 42,
     hue: 150 + index * 7,
   };
 });
 
 const bookingMetrics = [
   {
     icon: Timer,
     value: "30分以内",
     label: "最短返信",
-    helper: "社長・役員案件は優先回線で即時フォロー", 
+    helper: "無料相談の希望日時を即日ご案内",
   },
   {
     icon: ShieldCheck,
-    value: "14指標",
-    label: "経営スコア",
-    helper: "財務×現場データでボトルネックを可視化",
+    value: "18指標",
+    label: "AI診断",
+    helper: "粗利・資金・人材の再生余地を一括可視化",
   },
   {
     icon: Building2,
-    value: "累計210社",
-    label: "実行支援",
-    helper: "年商5,000万〜15億規模の改善プロジェクト",
+    value: "100社超",
+    label: "再生伴走",
+    helper: "年商1〜50億規模の事業再生を支援",
   },
 ];
 
 const followUpSteps = [
   {
     icon: Mail,
-    title: "資料とヒアリングシートを即送付",
-    description: "送信直後に生成AIレポートのサンプルとヒアリングシート（Excel）を自動返信します。",
+    title: "設計図サンプルとヒアリングシート送付",
+    description: "送信直後に再生設計図のサンプルPDFと事前ヒアリングシート（Excel）を自動返信します。",
     duration: "送信直後",
   },
   {
     icon: CalendarClock,
-    title: "担当者が希望日時をすり合わせ",
-    description: "無料相談・仮診断をご希望の場合は当日～翌営業日に代表または担当者が候補日時をご案内します。",
+    title: "代表が日程をご提案",
+    description: "無料相談・AI診断をご希望の場合は当日〜翌営業日に代表または専門チームが候補日時をご連絡します。",
     duration: "当日〜翌営業日",
   },
   {
     icon: CheckCircle,
-    title: "初回30分で意思決定のボトルネック整理",
-    description: "粗利・資金の感度分析とAIが提案する施策案（例）を共有し、意思決定時間を週9時間創出するプランを提案します。迷いを削った状態でチームに方向性を伝えられるよう伴走します。",
+    title: "初回30分でWhy/How/Whatを棚卸し",
+    description: "粗利・資金・人材のギャップと優先施策を整理し、行動順序と金融機関への伝え方まで描いた“再生の設計図”を提示します。",
     duration: "30分",
   },
 ];
 
 const formSteps = [
   {
     id: 1,
     label: "メールアドレスと希望内容",
     helper: "まずは診断結果の送付先を入力",
     fields: ["email"] as const,
   },
   {
     id: 2,
     label: "会社情報と詳細",
     helper: "会社名・お名前・任意の共有事項を入力",
     fields: ["company", "name", "consent"] as const,
   },
 ] as const;
 
 const CTASection = () => {
   const { toast } = useToast();
   const formId = useId();
   const requestLabelId = `${formId}-request-type`;
   const helperIds = {
     email: `${formId}-email-help`,
