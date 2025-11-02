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
  label: "年商5,000万〜15億円の社長専用｜AI×診断士の再生設計図を無料確認",
  benefitCopy: "生成AI診断と専門家コメントを同時に受け取る",
  benefitCopyAlt: "粗利・資金・現場の再生シナリオを事前に把握",
  supportText:
    "・株式会社創和経営コンサルティング（福岡）の中小企業診断士が直接ヒアリングし、再生を阻む論点とデータ環境を30分で整理します。\n・翌営業日に“再生の設計図”ドラフト（例）と優先アクション候補をご共有します。",
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
