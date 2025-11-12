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
  label: "「自社の再生ボード」を無料で体験",
  benefitCopy: "48時間以内に次の一手が見える再生ボードを共有",
  benefitCopyAlt: "判断の根拠と優先順位をAI×診断士が整理",
  supportText:
    "・株式会社創和経営コンサルティング（福岡）の中小企業診断士が45分のヒアリングで現状を棚卸し、48時間以内に“迷わない経営”の設計図ドラフトをご提示します。\n・お急ぎの方はお電話（092-231-2920）でも承ります。",
};

export const SECONDARY_CTA: SecondaryCtaContent = {
  id: "secondary",
  label: "現状を見直し、未来を再設計する",
  benefitCopy: "粗利・資金・人材の再生余地をAIが72時間で可視化",
  description:
    "ヒアリングシートに回答いただくと、AIが粗利率・キャッシュ残高・人材稼働など18指標の再生ポテンシャル（例）を算出。中小企業診断士が行動順序と注意点を添えて返信します。",
};

export const TERTIARY_CTA: TertiaryCtaContent = {
  id: "tertiary",
  label: "未来の設計図を描き直す資料を見る",
  href: "https://furumachi-smec.lognowa.com/public/lp_2/assets/strategy-ai-brief.pdf",
  description: "サービス全体像、AIが生成する再生ダッシュボード、金融機関連携のサンプル資料をまとめたPDFを即時ダウンロードできます。",
};
