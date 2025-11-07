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
  label: "48時間診断を予約し、先読みの経営改善プランを受け取る",
  benefitCopy: "48時間で次の会議に使える再生シナリオを共有",
  benefitCopyAlt: "粗利・キャッシュ・人材の課題を信頼指標で色分け",
  supportText:
    "代表・古町（中小企業診断士）が直接ヒアリングし、生成AIが抽出した兆候と優先仮説を48時間で整理。銀行説明や社内会議に堂々と示せる再生シナリオと資料の骨子をお渡しします。",
};

export const SECONDARY_CTA: SecondaryCtaContent = {
  id: "secondary",
  label: "短期間でAI診断レポートを受け取る",
  benefitCopy: "粗利・資金・人材の主要指標をスコアリング",
  description:
    "AIが粗利率・キャッシュ余力・需要トレンドを分析し、専門家のコメント付きで改善シナリオを提示。リスク注意点と実行順序も明記します。",
};

export const TERTIARY_CTA: TertiaryCtaContent = {
  id: "tertiary",
  label: "サービス資料で全体像を確認する",
  href: "https://furumachi-smec.lognowa.com/public/lp_2/assets/strategy-ai-brief.pdf",
  description:
    "再生ロードマップ、AIダッシュボード、金融機関連携テンプレートをまとめたPDFを即時に取得できます。",
};
