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
  label: "AIと専門家が描く“再生の設計図”を無料で確認する",
  benefitCopy: "48時間で再生シグナルのドラフトを提示",
  benefitCopyAlt: "粗利・キャッシュ・人材の歪みを即可視化",
  supportText:
    "代表・古町（中小企業診断士）が直接ヒアリングし、生成AIが抽出した歪みと優先仮説を24時間以内に共有します。次の会議で語れるストーリーと資料案をご用意します。",
};

export const SECONDARY_CTA: SecondaryCtaContent = {
  id: "secondary",
  label: "72時間でAI診断レポートを受け取る",
  benefitCopy: "粗利・資金・人材の18指標をスコアリング",
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
