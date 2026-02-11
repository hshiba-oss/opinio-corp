# Opinio Corporate Website

## ローカルパス

Mac: `/Users/hayanoryuki12/opinio/corporate`

---

## プロジェクト概要

株式会社Opinioのコーポレートサイト。Next.js 14 + Tailwind CSS + TypeScriptで構築。

- **本番URL**: https://opinio.co.jp
- **GitHub**: https://github.com/hshiba-oss/opinio-corp.git
- **ホスティング**: Vercel
- **ドメイン**: opinio.co.jp

---

## 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| データベース | Neon PostgreSQL |
| ORM | Prisma |
| 認証 | NextAuth.js v4 (Credentials) |
| フォーム | HubSpot Forms API |
| ホスティング | Vercel |

---

## ディレクトリ構成

```
src/
├── app/
│   ├── page.tsx               # トップページ
│   ├── about/page.tsx         # 会社情報（MVV含む）
│   ├── service/page.tsx       # 事業内容
│   ├── recruit/               # 採用情報（DBから取得）
│   │   ├── page.tsx           # 一覧（published: trueのみ表示）
│   │   └── [id]/page.tsx      # 詳細（slugで取得）
│   ├── blog/                  # ブログ（DBから取得）
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── news/                  # お知らせ（DBから取得）
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── contact/page.tsx       # お問い合わせ
│   ├── privacy/page.tsx       # プライバシーポリシー
│   ├── admin/                 # 管理画面（要認証）
│   │   ├── jobs/              # 求人管理
│   │   ├── blog/              # ブログ管理
│   │   └── news/              # お知らせ管理
│   └── api/admin/             # 管理API（revalidatePath付き）
│       ├── jobs/
│       ├── blog/
│       └── news/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── HubSpotForm.tsx
└── lib/
    ├── auth.ts                # NextAuth設定
    └── prisma.ts              # Prismaクライアント
```

---

## データベース（Neon PostgreSQL）

Prismaモデル: User, BlogPost, NewsPost, Job

環境変数（.env.local）:
- `DATABASE_URL` — Neon接続プーラー
- `DIRECT_URL` — Neon直接接続（マイグレーション用）
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

---

## コンテンツ管理

管理画面（`/admin`）からDB経由で管理。ファイル直接編集は不要。

- 求人: `/admin/jobs` → 公開ページ `/recruit`
- ブログ: `/admin/blog` → 公開ページ `/blog`
- お知らせ: `/admin/news` → 公開ページ `/news`

保存・更新・削除時に `revalidatePath` で公開ページのキャッシュを即座に無効化。

---

## ブランドカラー

```typescript
// tailwind.config.ts
primary: { 800: '#2d2a5b' }  // メインカラー（紺）
accent:  { 500: '#e67635' }  // アクセントカラー（オレンジ）
```

---

## HubSpot連携

Portal ID: `244556311` / Form ID: `d9167c75-37be-4434-9f06-e99abd5d1e03` / Region: `na2`

---

## デプロイフロー

```bash
cd /Users/hayanoryuki12/opinio/corporate
git add <files>
git commit -m "変更内容"
git push
```

→ Vercelが自動でビルド・デプロイ（1〜2分）

---

## ローカル開発

```bash
cd /Users/hayanoryuki12/opinio/corporate
npm install
npm run dev
```

→ http://localhost:3000 でプレビュー

---

## 注意事項

- `not-found.tsx` は削除済み（ビルドエラー回避）
- `next.config.js` の `output: 'export'` は削除済み（Vercel標準デプロイ使用）
- Framework PresetはVercel設定で「Next.js」に変更済み
- 管理画面ログイン: admin@opinio.co.jp

---

## 参考リンク

- [Vercel Dashboard](https://vercel.com/hayano-ryukis-projects/opinio-corp)
- [HubSpot](https://app.hubspot.com/)
