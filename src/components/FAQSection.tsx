diff --git a/src/components/FAQSection.tsx b/src/components/FAQSection.tsx
index fc59cb221cbb6cc7179a191b36eb141d4a881eb4..335fac159fa79d4f334b708b3f0af2df17f71582 100644
--- a/src/components/FAQSection.tsx
+++ b/src/components/FAQSection.tsx
@@ -1,105 +1,105 @@
 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
 import { Button } from "@/components/ui/button";
-import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/ctaVariants";
+import { PRIMARY_CTA, SECONDARY_CTA, TERTIARY_CTA } from "@/lib/ctaVariants";
 import ScrollReveal from "@/components/ScrollReveal";
 import consultationScene from "@/assets/strategy-planning.jpg";
 import { HelpCircle, BarChart4, Sparkles, Users } from "lucide-react";
 
 const faqs = [
   {
     question: "費用とトライアルの仕組みは？",
     answer:
-      "月額18万円〜（税別）。初月は1ヶ月トライアルとして位置づけ、粗利率・在庫回転・意思決定リードタイムなどの合意指標を週次でレビューします。指標が改善しなければ追加費用なく改善案を再設計し、継続可否をご判断いただけます。",
+      "月額18万円〜（税別）。初月は“設計図トライアル”として、営業利益・キャッシュ余力・実行完了率の3指標を週次でレビューします。指標が改善しない場合は改善案を再設計し、継続可否を自由にご判断いただけます。",
   },
   {
     question: "導入期間とスケジュールは？",
     answer:
-      "Week0-2で現状診断とデータ整備、Week3-6でAIレポートと意思決定ボードを運用開始、Week7-12で施策実行と検証を回します。3ヶ月で判断の前倒しを実感いただき、以降は四半期ごとに戦略レビューを行います。",
+      "Day0-3でWhyの言語化とAI診断、Day4-10でHow（再生シナリオ）を設計、Week3-8でWhat（実行・モニタリング）を共創します。以降は四半期ごとに戦略レビューを行い、再投資フェーズまで伴走します。",
   },
   {
     question: "必要な社内体制は？",
     answer:
-      "社長と管理部・営業責任者を中心とした3〜5名体制を推奨します。週次レポートとタスクボードは当社で整備し、会議ファシリテーションとAIレポート配信まで伴走するため、専任のDX人材がいなくても運用可能です。",
+      "社長と管理部・営業責任者を中心とした3〜5名体制が理想です。週次レポート・タスクボード・金融交渉資料は当社が整備するため、専任のDX人材がいなくても運用できます。",
   },
   {
     question: "データと守秘義務の取り扱いは？",
     answer:
-      "NDAを締結のうえ、財務・人事・顧客データは暗号化されたクラウドで保管します。アクセス権限は役割ベースで管理し、AIモデルは匿名化データのみ学習。契約終了時は速やかにデータを削除します。",
+      "NDAを締結のうえ、財務・人材・顧客データは暗号化されたクラウドに保管。アクセス権限は役割ベースで管理し、AI学習には匿名化したデータのみを使用します。契約終了時は速やかに削除します。",
   },
   {
     question: "生成AIの精度と監査体制は？",
     answer:
-      "AIが生成したシナリオは因果グラフと根拠データを必ず添付し、中小企業診断士がダブルチェックします。異常値や前提のズレは自動アラートで検知し、監査ログに保存。社長が納得できる判断材料のみを会議に上げます。",
+      "AIが生成したシナリオには根拠データと感度分析を添付し、中小企業診断士がダブルチェック。異常値は自動アラートで検知し、金融機関や監査に提出できる証跡ログを同時に保存します。",
   },
   {
     question: "社内で成果を共有する仕組みは？",
     answer:
-      "週次レポートと意思決定ボードにコメント機能を持たせ、経営陣と現場リーダーが同じ画面で根拠と判断を確認できます。導入初月は会議のファシリテーションまで伴走し、経営方針を自信を持って伝えられる言葉と資料の整備を支援します。",
+      "再生設計図とダッシュボードを共有し、コメント機能で現場と経営陣が同じ情報を確認できます。導入初月は会議ファシリテーションと経営者コーチングまで伴走し、伝え方を整えます。",
   },
 ];
 
 const quickFacts = [
   {
     icon: BarChart4,
-    label: "導入3ヶ月の平均改善",
-    value: "+12.8%",
-    description: "粗利率・在庫回転・意思決定スピードの平均改善幅。",
+    label: "平均営業利益改善",
+    value: "+12pt",
+    description: "設計図トライアル後12ヶ月の中央値（例）。",
   },
   {
     icon: Users,
-    label: "経営会議の参加体制",
+    label: "伴走チーム",
     value: "3〜5名",
-    description: "社長・管理部・営業責任者が中心。現場レポートは伴走サポート。",
+    description: "社長・管理部門・営業責任者＋当社専門家で共創。",
   },
   {
     icon: Sparkles,
-    label: "意思決定ボード稼働まで",
-    value: "6週",
-    description: "Week3からAIレポートを稼働させ、Week6で定例会議へ本格導入。",
+    label: "設計図完成まで",
+    value: "72時間",
+    description: "AI診断と専門家コメントをセットでご提供。",
   },
 ];
 
 const FAQSection = () => {
   const scrollToSection = (id: string) => () => {
     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
   };
 
   return (
     <section id="faq" className="fade-in-section bg-slate-50 py-16 md:py-20">
       <div className="container mx-auto px-3 sm:px-4">
         <div className="mx-auto max-w-5xl">
           <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
             <div className="space-y-6 text-center lg:text-left">
               <ScrollReveal as="p" variant="fade" className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.38em] text-primary">
                 <HelpCircle className="h-4 w-4" /> FAQ
               </ScrollReveal>
               <ScrollReveal as="h2" variant="fade-up" delay={60} className="text-balance text-3xl font-bold md:text-4xl">
-                経営判断のスピードを上げるための疑問にすべて回答します
+                再生の設計図づくりで気になる疑問にすべてお答えします
               </ScrollReveal>
               <ScrollReveal as="p" variant="fade-up" delay={120} className="text-base leading-relaxed text-muted-foreground">
-                コスト・導入体制・守秘義務・AIの精度といった、社長が意思決定前に確認したい論点を1ページに集約しました。疑問点はその場でチャット相談いただけます。
+                費用・期間・体制・データ管理・AIの監査体制など、再生プロジェクトで必ず確認される論点を整理しました。疑問はチャットからすぐにご相談ください。
               </ScrollReveal>
 
               <ScrollReveal as="div" variant="fade-up" delay={180} className="grid gap-4 sm:grid-cols-3">
                 {quickFacts.map((fact) => {
                   const Icon = fact.icon;
                   return (
                     <div
                       key={fact.label}
                       className="flex flex-col gap-2 rounded-2xl border border-border bg-white p-4 text-left shadow-sm"
                     >
                       <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                         <Icon className="h-5 w-5" aria-hidden="true" />
                       </span>
                       <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{fact.label}</p>
                       <p className="text-2xl font-bold text-foreground">{fact.value}</p>
                       <p className="text-xs text-muted-foreground">{fact.description}</p>
                     </div>
                   );
                 })}
               </ScrollReveal>
             </div>
 
             <ScrollReveal
               as="figure"
               variant="fade-left"
@@ -127,62 +127,62 @@ const FAQSection = () => {
             variant="fade-up"
             delay={220}
             className="mt-12 rounded-3xl border border-border bg-card shadow-lg"
           >
             <Accordion type="single" collapsible>
               {faqs.map((faq) => (
                 <AccordionItem key={faq.question} value={faq.question}>
                   <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                     {faq.question}
                   </AccordionTrigger>
                   <AccordionContent className="text-muted-foreground leading-relaxed">
                     {faq.answer}
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </ScrollReveal>
 
           <ScrollReveal
             as="div"
             variant="fade-up"
             delay={280}
             id="consultation-cta"
             className="mt-12 space-y-5 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white to-primary/5 p-8 text-center shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)]"
           >
-            <h3 className="text-2xl font-bold text-foreground">三つのオファーから最適なスタートを選べます</h3>
+            <h3 className="text-2xl font-bold text-foreground">Why→How→Whatに沿った三つの入り口</h3>
             <p className="text-sm text-muted-foreground">
-              {PRIMARY_CTA.label}・{SECONDARY_CTA.label}・資料ダウンロードの3種類をご用意しました。貴社の意思決定スピードに合わせてお選びください。
+              {PRIMARY_CTA.label}・{SECONDARY_CTA.label}・{TERTIARY_CTA.label}の3種類をご用意しました。再生の設計図を信じて動き出すきっかけとしてご活用ください。
             </p>
             <ul className="mx-auto grid max-w-3xl gap-3 text-left text-xs text-muted-foreground sm:grid-cols-3">
               <li className="rounded-2xl border border-primary/20 bg-white/80 p-3">
-                <p className="font-semibold text-primary">経営課題ヒアリング</p>
-                <p className="mt-1 leading-relaxed">現状のKPI・ボトルネックを整理し、AI導入の適合性を30分で診断。</p>
+                <p className="font-semibold text-primary">無料相談（Why）</p>
+                <p className="mt-1 leading-relaxed">再生の目的と制約を整理し、守るべき価値と優先施策を30分で可視化。</p>
               </li>
               <li className="rounded-2xl border border-primary/20 bg-white/80 p-3">
-                <p className="font-semibold text-primary">ダッシュボード体験</p>
-                <p className="mt-1 leading-relaxed">自社データをダミー連携した画面で、意思決定ボードの動きを確認。</p>
+                <p className="font-semibold text-primary">AI診断（How）</p>
+                <p className="mt-1 leading-relaxed">粗利・資金・人材の18指標をAIが解析し、専門家が行動順序と注意点をコメント。</p>
               </li>
               <li className="rounded-2xl border border-primary/20 bg-white/80 p-3">
-                <p className="font-semibold text-primary">契約・運用サポート</p>
-                <p className="mt-1 leading-relaxed">NDA締結・決裁フロー整備まで当社が伴走。初月から運用負荷を最小化。</p>
+                <p className="font-semibold text-primary">資料DL（What）</p>
+                <p className="mt-1 leading-relaxed">再生設計図のサンプル、成果指標、金融機関連携テンプレを即時ダウンロード。</p>
               </li>
             </ul>
             <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
               <Button variant="outline" onClick={scrollToSection("offer-heading")}>
                 オファーを比較する
               </Button>
               <Button variant="cta" onClick={scrollToSection("cta-section")}>
                 {PRIMARY_CTA.label}
               </Button>
             </div>
             <p className="text-xs text-muted-foreground">
               相談日時や送付希望の資料はフォーム備考欄にご記載ください。翌営業日までに代表または担当者からご連絡します。
             </p>
           </ScrollReveal>
         </div>
       </div>
     </section>
   );
 };
 
 export default FAQSection;
