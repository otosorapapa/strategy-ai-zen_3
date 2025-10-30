export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社創和経営コンサルティング",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  logo: "https://furumachi-smec.lognowa.com/public/lp_2/assets/logo.png",
  description:
    "生成AIと中小企業診断士が連携し、福岡・九州の中小企業が事業再生と経営改善の設計図を描き直すための伴走型支援を提供",
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
  name: "AI×専門家 再生デザインスタジオ",
  description:
    "生成AIによるデータ解析と中小企業診断士の戦略設計を組み合わせ、粗利・キャッシュ・人材の歪みを再構築する伴走型再生プログラム",
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
  name: "生成AI×専門家による経営再生支援",
  serviceType: "事業再生・経営改善伴走",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  description:
    "AIが財務・市場データを解析し、中小企業診断士が再生ロードマップを設計。粗利+12%・債務超過解消率80%（例）を目指す統合型支援",
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
    audienceType: "年商5,000万円～15億円の再生・改善を検討する中小企業経営者",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "再生支援モジュール",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "現状分析と数値シミュレーション",
          description: "AIが粗利・キャッシュ・人材指標を横断分析し、改善余地を定量化",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "再生シナリオ策定",
          description: "専門家が収益構造の再設計と優先施策を合意形成",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "金融機関交渉・モニタリング",
          description: "交渉資料とモニタリングレポートを整備し、合意形成を支援",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "経営者コーチング",
          description: "意思決定リズムを整え、実行の質を維持する対話プログラム",
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
      name: "無料相談では何が確認できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "30分で粗利・キャッシュ・人材の歪みを棚卸しし、翌営業日にAI分析のサマリーと再生の優先シナリオを共有します。",
      },
    },
    {
      "@type": "Question",
      name: "AI診断の内容は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "18指標のスコアリングと損益・資金のシミュレーション、専門家のリスクコメントを72時間でお届けします。",
      },
    },
    {
      "@type": "Question",
      name: "金融機関連携の支援範囲は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "交渉資料の作成、面談同席、モニタリングレポートの更新まで伴走し、合意事項の管理ログも共有します。",
      },
    },
    {
      "@type": "Question",
      name: "データ管理は安全ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "暗号化・アクセス権限管理・NDA締結を徹底し、契約終了時は速やかにデータを削除します。",
      },
    },
    {
      "@type": "Question",
      name: "費用と期間の目安は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "月額18万円〜（税別）。初月はトライアルとして主要KPIの改善状況を検証し、3ヶ月で再生ロードマップを定着させます。",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://furumachi-smec.lognowa.com/" },
    { "@type": "ListItem", position: 2, name: "AI×専門家 経営再生支援", item: "https://furumachi-smec.lognowa.com/public/lp_2" },
  ],
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "生成AI×専門家で描く再生の設計図",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  description:
    "株式会社創和経営コンサルティング（福岡）が提供する、生成AIと中小企業診断士の共同伴走で事業再生と経営改善を実現するランディングページ",
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
