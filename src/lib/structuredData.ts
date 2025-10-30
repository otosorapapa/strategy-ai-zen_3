export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社創和経営コンサルティング",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  logo: "https://furumachi-smec.lognowa.com/public/lp_2/assets/logo.png",
  description:
    "福岡・九州の年商5000万円～15億円企業に向けた、専門家×生成AIで意思決定の質・速さ・先見性を高める伴走型経営支援",
  founder: "古町 聖文",
  foundingDate: "2018-04-01",
  email: "10vance.re.silie.nce@gmail.com",
  telephone: "+81-92-231-2920",
  address: {
    "@type": "PostalAddress",
    streetAddress: "水谷3-14-17",
    addressLocality: "福岡市東区",
    addressRegion: "福岡県",
    postalCode: "839-0041",
    addressCountry: "JP",
  },
  sameAs: [
    "https://www.facebook.com/lognowa",
    "https://www.linkedin.com/company/lognowa",
    "https://note.com/lognowa",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "株式会社創和経営コンサルティング 福岡オフィス",
  image: "https://furumachi-smec.lognowa.com/public/lp_2/og-image.svg",
  priceRange: "¥180,000-¥280,000/月",
  address: organizationSchema.address,
  geo: { "@type": "GeoCoordinates", latitude: 33.5902, longitude: 130.4017 },
  areaServed: ["福岡県", "佐賀県", "熊本県", "大分県", "長崎県", "宮崎県", "鹿児島県"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  telephone: organizationSchema.telephone,
  email: organizationSchema.email,
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "伴走型AI経営顧問サービス",
  description: "専門家が設計した意思決定フレームに生成AIを掛け合わせ、粗利・資金・意思決定リードタイムを同時に改善する伴走型プラン",
  brand: { "@type": "Brand", name: "株式会社創和経営コンサルティング" },
  offers: {
    "@type": "Offer",
    priceCurrency: "JPY",
    price: "180000",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "180000",
      priceCurrency: "JPY",
      minPrice: "180000",
      maxPrice: "280000",
    },
    availability: "https://schema.org/InStock",
    url: "https://furumachi-smec.lognowa.com/public/lp_2#plans",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "26" },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "伴走型AI経営顧問",
  serviceType: "AI経営支援",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  description:
    "週1回のAIレポートと管理会計・資金繰り支援で、粗利+5.8pt／在庫回転+22%／意思決定リードタイム▲52%（例）を実現する伴走型サービス",
  provider: {
    "@type": "Organization",
    name: "株式会社創和経営コンサルティング",
    sameAs: organizationSchema.sameAs,
    url: organizationSchema.url,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "福岡県" },
    { "@type": "AdministrativeArea", name: "佐賀県" },
    { "@type": "AdministrativeArea", name: "熊本県" },
    { "@type": "AdministrativeArea", name: "大分県" },
    { "@type": "AdministrativeArea", name: "長崎県" },
    { "@type": "AdministrativeArea", name: "宮崎県" },
    { "@type": "AdministrativeArea", name: "鹿児島県" },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "年商5,000万円～10億円の中小企業経営者",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI経営顧問プログラム",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AIレポーティング・ダッシュボード",
          description: "AIが粗利とキャッシュの変動要因を可視化し、週次で意思決定資料を生成",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "管理会計・資金繰り伴走",
          description: "管理会計指標とキャッシュフロー計画を整備し、投資判断を支援",
        },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "JPY",
    price: "180000",
    availability: "https://schema.org/InStock",
    eligibleRegion: "JP",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "費用とトライアルの仕組みは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "月額18万円〜（税別）。初月は1ヶ月トライアルとして粗利率・在庫回転・意思決定リードタイムなど事前に合意した指標を週次でレビューし、改善が見られなければ追加費用なしで改善案を再設計します。",
      },
    },
    {
      "@type": "Question",
      name: "導入期間とスケジュールは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Week0-2で現状診断とデータ整備、Week3-6でAIレポートと意思決定ボードを運用開始、Week7-12で施策実行と検証を回します。以降は四半期ごとに戦略レビューを実施します。",
      },
    },
    {
      "@type": "Question",
      name: "必要な社内体制は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "社長と管理部・営業責任者を中心とした3〜5名体制を推奨。週次レポートとタスクボードは当社が整備するため、専任DX人材がいなくても運用できます。",
      },
    },
    {
      "@type": "Question",
      name: "データと守秘義務の取り扱いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NDAを締結し、財務・人事・顧客データは暗号化されたクラウドで保管。アクセス権限は役割ベースで管理し、契約終了時は速やかにデータを削除します。",
      },
    },
    {
      "@type": "Question",
      name: "生成AIの精度と監査体制は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AIが生成するシナリオには因果グラフと根拠データを添付し、中小企業診断士がダブルチェック。異常値は自動アラートで検知し、監査ログに保存します。",
      },
    },
    {
      "@type": "Question",
      name: "社内で成果を共有する仕組みは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "週次レポートと意思決定ボードにコメント機能を設け、経営陣と現場が同じ画面で根拠と判断を確認。導入初月は会議ファシリテーションも伴走し、方針を自信を持って伝えられる資料を整えます。",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://furumachi-smec.lognowa.com/" },
    { "@type": "ListItem", position: 2, name: "AI経営顧問", item: "https://furumachi-smec.lognowa.com/public/lp_2" },
  ],
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "迷いない意思決定へ導くAI経営伴走",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  description:
    "専門家×生成AIで意思決定の質・速さ・先見性を高め、粗利とキャッシュの先読みを週次で更新する福岡発の伴走型経営支援",
  inLanguage: "ja-JP",
  isPartOf: {
    "@type": "WebSite",
    name: "株式会社創和経営コンサルティング",
    url: "https://furumachi-smec.lognowa.com/",
  },
  primaryImageOfPage: "https://furumachi-smec.lognowa.com/public/lp_2/og-image.svg",
  speakable: {
    "@type": "SpeakableSpecification",
    xpath: [
      "/html/body//h1",
      "/html/body//section[1]//p[1]",
    ],
  },
};

export const structuredDataList = [
  organizationSchema,
  localBusinessSchema,
  productSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  webPageSchema,
];
