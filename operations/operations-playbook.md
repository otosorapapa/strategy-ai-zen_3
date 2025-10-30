# 運用手順書

## 更新フロー
1. GitHubでfeatureブランチを作成し、コピー・デザインを更新。
2. `npm run lint` → `npm run build` → `npm run preview`で品質確認。
3. GrowthBookで実験フラグを設定し、GA4/GTMのイベント発火をテスト。
4. mainブランチへマージ後、Vercel/Netlify等でデプロイ。ステージングでLighthouseとフォーム送信テストを実施。
5. 公開後24時間はGA4リアルタイムで主要CTAとフォームイベントをモニタリング。

## 画像規格
- ヒーロー画像: 1600×900, AVIF/WEBP, 200KB以下
- セクション背景: 1200×800, WEBP, 150KB以下
- アイコン: SVGまたは24×24 PNG
- 画像命名: `section-purpose-size.ext`（例: `hero-dashboard-1600x900.avif`）

## 見出し・字数ガイド
- H1: 32文字以内、メインキーワード含む
- H2: 28〜32px相当、1文60文字以内
- 段落: 120〜160文字、漢字比率35％以下
- 箇条書き: 3〜5項目に統一、各項目50文字以内

## 公開チェックリスト
- [ ] Lighthouse Mobile/SEO/Accessibility/Best Practices 各90以上
- [ ] フォーム送信で`view_form`/`start_form`/`submit_form`/`book_meeting`が発火
- [ ] JSON-LD（Organization/LocalBusiness/Product/FAQ/Breadcrumb）がエラーなし
- [ ] CTAヒートマップ（Hotjar等）で主要ボタン視認率80%以上
- [ ] サンクスページから日程調整の案内が機能
- [ ] 404/500監視（UptimeRobot）に異常なし

## 運用リズム
- 週次: KPIレビュー（CVR、直帰率、フォーム完了率）、ABテスト結果確認
- 月次: 施策レポート、コンテンツ更新、SEO順位確認
- 四半期: プラン・料金見直し、E-E-A-T要素の更新、金融機関連携実績の刷新

## 問い合わせフォーム連携設定
- WordPress側でREST経由の受け口を用意し、エンドポイントURLとBasic認証（必要に応じて）を取得する。
  - Contact Form 7等のフォームプラグインは`wp-json`配下のエンドポイントにPOSTできるよう設定する。
  - 本番サイトは`https://furumachi-smec.lognowa.com/office/wp-json/contact-form-7/v1/contact-forms/53/feedback`にPOSTする（管理画面URL `post=53` より確認）。
  - `curl -X POST https://furumachi-smec.lognowa.com/office/wp-json/contact-form-7/v1/contact-forms/53/feedback`で`status: "mail_sent"`が返ることを事前確認する。Basic認証を掛けている場合は`-u user:pass`を追加。
  - 送信時の自動返信メールはWordPressではなく本リポジトリのAPIが担当するため、WordPress側の自動返信は無効化しておく。
- 環境変数は`.env.example`を参照し、以下を本番/ステージングのシークレットに登録する。
  - フロントエンド: `VITE_CONTACT_API_ENDPOINT=/api/contact`
  - サーバーレスAPI: `WORDPRESS_CONTACT_ENDPOINT`, `WORDPRESS_AUTH_USER`, `WORDPRESS_AUTH_PASSWORD`
  - 自動返信メール: `AUTOREPLY_ENABLED`, `AUTOREPLY_PROVIDER`, `RESEND_API_KEY`, `AUTOREPLY_FROM`, `AUTOREPLY_SUBJECT`, `AUTOREPLY_REPLY_TO`
  - 任意でCC/BCCやWebhook転送先が必要な場合は`AUTOREPLY_CC`, `AUTOREPLY_BCC`, `AUTOREPLY_WEBHOOK_ENDPOINT`などを設定する。
- Resendを利用する場合はドメイン認証を済ませ、`AUTOREPLY_FROM`に認証済みドメインの送信元を指定する。
- ローカル検証でWordPressへ直接POSTしたい場合は`.env.local`に`VITE_CONTACT_API_ENDPOINT=wordpress`を設定し、`VITE_WORDPRESS_CONTACT_ENDPOINT`とBasic認証情報を併せて記述する。
