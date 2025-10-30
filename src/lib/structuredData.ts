export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社創和経営コンサルティング",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  logo: "https://furumachi-smec.lognowa.com/public/lp_2/assets/logo.png",
  description:
    "福岡・九州を中心に、生成AIと中小企業診断士の専門知を組み合わせて事業再生と経営改善を支援する伴走型コンサルティング",
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
  name: "生成AI×専門家による事業再生プログラム",
  description:
    "生成AIが数値と市場データを解析し、中小企業診断士が再生ロードマップを構築する伴走型サービス。粗利・キャッシュ・人材を同時に再設計します。",
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
  serviceType: "事業再生・経営改善支援",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  description:
    "AI解析と専門家伴走で未来の設計図を描き直し、粗利+12%・債務超過解消率80%（例）の実績を持つ再生支援サービスです。",
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
    audienceType: "年商1億〜50億円の中小企業経営者",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "経営再生サポートメニュー",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "現状分析とシミュレーション",
          description: "AIが粗利・キャッシュ・人材データを解析し、改善余地とリスクを可視化します。",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "再生シナリオ策定",
          description: "専門家が実行可能性を検証し、再生ロードマップを構築します。",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "金融機関交渉・モニタリング",
          description: "金融機関との対話資料とモニタリング体制を構築し、交渉を伴走します。",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "経営者コーチング",
          description: "週次対話と教育プログラムで意思決定の質とスピードを高めます。",
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
      name: "無料相談では何が得られますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "生成AIが抽出した粗利・キャッシュ・人材のシグナルを共有し、再生の設計図ドラフトと優先施策メモを即日で提示します。",
      },
    },
    {
      "@type": "Question",
      name: "AI診断はどのように進みますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "短期間で主要指標のスコアリングと再生シナリオの比較レポートを作成し、専門家のコメント付きでお届けします。",
      },
    },
    {
      "@type": "Question",
      name: "金融機関への説明は支援してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "交渉資料の作成、面談同席、モニタリング報告の整備まで伴走します。",
      },
    },
    {
      "@type": "Question",
      name: "データ管理は安全ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NDA締結、暗号化、アクセス権限管理を徹底し、契約終了時には速やかにデータを削除します。",
      },
    },
    {
      "@type": "Question",
      name: "費用の目安は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "状況に応じて個別にお見積りします。初月はトライアルとして、合意した指標の改善を検証します。",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://furumachi-smec.lognowa.com/" },
    { "@type": "ListItem", position: 2, name: "生成AI×専門家 経営再生支援", item: "https://furumachi-smec.lognowa.com/public/lp_2" },
  ],
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "生成AI×専門家で描く再生の設計図",
  url: "https://furumachi-smec.lognowa.com/public/lp_2",
  description:
    "生成AIと中小企業診断士が共創し、未来の設計図を構築する福岡発の伴走型サービス。粗利改善、債務超過解消、金融機関連携まで一貫支援します。",
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
