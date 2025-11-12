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
  label: "無料診断を予約して、48時間で“次の一手”を受け取る",
  benefitCopy: "生成AI診断と診断士レビューで再生の設計図を提示",
  benefitCopyAlt: "粗利・資金・心理のズレを48時間で言語化",
  supportText:
    "・株式会社創和経営コンサルティング（福岡）の中小企業診断士が45分で現状を整理し、48時間以内に再生の設計図ドラフトをご提示します。\n・お急ぎの方はお電話（092-231-2920）でも承ります。",
};

export const SECONDARY_CTA: SecondaryCtaContent = {
  id: "secondary",
  label: "迷いを断つ初回ヒアリングを予約する",
  benefitCopy: "粗利・資金・人材の再生余地をAIが72時間で可視化",
  description:
    "ヒアリングシートに回答いただくと、AIが粗利率・キャッシュ残高・人材稼働など18指標の再生ポテンシャル（例）を算出。中小企業診断士が行動順序と注意点を添えて返信します。",
};

export const TERTIARY_CTA: TertiaryCtaContent = {
  id: "tertiary",
  label: "48時間で再生ボードを受け取る",
  href: "https://furumachi-smec.lognowa.com/public/lp_2/assets/strategy-ai-brief.pdf",
  description: "サービス全体像、再生ボードのドラフト、金融機関連携サンプル資料をまとめたPDFを即時ダウンロードできます。",
};
