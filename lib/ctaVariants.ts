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
  label: "30分相談で次の一手を決める",
  benefitCopy: "週次AIレポートと意思決定ボードを確認",
  benefitCopyAlt: "粗利・資金の先読みと施策仮説を提示",
  supportText:
    "・代表 古町（中小企業診断士）が直接ヒアリングし、判断を止めている論点とデータ接続状況を整理します。\n・翌営業日に意思決定ログの雛形と優先課題（例）をご共有します。",
};

export const SECONDARY_CTA: SecondaryCtaContent = {
  id: "secondary",
  label: "72時間で仮診断を受け取る",
  benefitCopy: "粗利・在庫・資金の14指標を試算",
  description: "ヒアリングシートにご回答いただくと、AIが粗利率・在庫回転・資金余力・意思決定リードタイムの現状と改善幅（例）を算出し、専門家がコメントを添えて返信します。",
};

export const TERTIARY_CTA: TertiaryCtaContent = {
  id: "tertiary",
  label: "資料を今すぐ確認する",
  href: "https://furumachi-smec.lognowa.com/public/lp/assets/strategy-ai-brief.pdf",
  description: "サービス概要、AIダッシュボードの画面、週次レポートのサンプルをまとめたPDFを即時ダウンロードできます。",
};
