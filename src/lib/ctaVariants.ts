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
  label: "48時間で“再生ボード”を受け取る",
  benefitCopy: "経営の霧が晴れる。判断が動き出す。",
  benefitCopyAlt: "粗利・資金・人材の判断材料を一本化",
  supportText:
    "代表・古町（中小企業診断士）が直接ヒアリングし、AIと機械学習エンジニアが抽出した歪みを48時間で再生ボード化。金融機関説明や経営会議にそのまま使える判断材料をご提供します。",
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
