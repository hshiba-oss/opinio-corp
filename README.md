# Opinio Corporate Website

株式会社Opinioのコーポレートサイトです。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel (推奨)

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 静的ファイルの出力
# next.config.js で output: 'export' が設定されているため、
# build コマンドで out/ ディレクトリに静的ファイルが出力されます
```

## ディレクトリ構成

```
src/
├── app/                    # ページコンポーネント (App Router)
│   ├── page.tsx           # トップページ
│   ├── about/             # 会社情報
│   ├── service/           # 事業内容
│   ├── recruit/           # 採用情報
│   ├── news/              # お知らせ
│   ├── contact/           # お問い合わせ
│   └── privacy/           # プライバシーポリシー
├── components/            # 共通コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── HubSpotForm.tsx
├── content/               # コンテンツデータ
│   ├── news/              # お知らせ記事
│   └── recruit/           # 求人情報
└── lib/                   # ユーティリティ
```

## コンテンツの更新

### お知らせの追加

`src/content/news/posts.ts` にお知らせを追加してください。

```typescript
{
  id: 'your-post-id',
  title: 'タイトル',
  date: '2025-01-01',
  category: 'お知らせ',
  excerpt: '概要',
  content: `本文`,
}
```

### 求人の追加

`src/content/recruit/jobs.ts` に求人を追加してください。

```typescript
{
  id: 'your-job-id',
  title: '職種名',
  department: '部署名',
  type: '正社員',
  location: '勤務地',
  description: '業務内容',
  requirements: ['必須条件1', '必須条件2'],
  preferred: ['歓迎条件1'],
  benefits: ['福利厚生1'],
  published: true,
  publishedAt: '2025-01-01',
}
```

## HubSpotフォームの設定

`src/components/HubSpotForm.tsx` の以下の定数を、実際のHubSpotポータルIDとフォームIDに置き換えてください。

```typescript
const HUBSPOT_PORTAL_ID = 'YOUR_PORTAL_ID'
const HUBSPOT_FORM_ID = 'YOUR_FORM_ID'
```

## デプロイ

### Vercel (推奨)

1. GitHubにリポジトリをプッシュ
2. Vercelでリポジトリをインポート
3. デプロイ

### その他のホスティング

```bash
npm run build
```

`out/` ディレクトリに出力された静的ファイルを任意のホスティングサービスにアップロードしてください。

## ライセンス

© 株式会社Opinio
