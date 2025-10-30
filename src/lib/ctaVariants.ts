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
  label: "30分相談で改善ロードマップを描く",
  benefitCopy: "生成AIと専門家の伴走体制を確認",
  benefitCopyAlt: "粗利・キャッシュ改善の優先順位を整理",
  supportText:
    "・代表 古町（中小企業診断士）が直接ヒアリングし、AIに学習させる指標と改善テーマを48時間で棚卸しします。\n・翌営業日に意思決定ボードの雛形と優先施策（例）をご共有し、経営陣と共有できるストーリーを整えます。",
};

export const SECONDARY_CTA: SecondaryCtaContent = {
  id: "secondary",
  label: "72時間で生成AI経営診断を受け取る",
  benefitCopy: "粗利・在庫・資金の14指標を先読み",
  description:
    "ヒアリングシートに回答いただくと、生成AIが粗利率・在庫回転・資金余力・判断スピードの現状と改善幅（例）を算出し、専門家のコメントと共にお送りします。",
};

export const TERTIARY_CTA: TertiaryCtaContent = {
  id: "tertiary",
  label: "サービス概要資料をダウンロード",
  href: "https://furumachi-smec.lognowa.com/public/lp_2/assets/strategy-ai-brief.pdf",
  description:
    "生成AI改善ワークフロー、週次レポート、意思決定ボードのサンプルをまとめたPDFを即時に取得できます。",
};
