# Opinio Corporate Website - Handover Document

## プロジェクト概要

株式会社Opinioのコーポレートサイト。Next.js 14 + Tailwind CSS + TypeScriptで構築。

- **本番URL**: https://opinio-corp.vercel.app
- **GitHub**: https://github.com/HayanoRyuki/opinio-corp
- **ホスティング**: Vercel

---

## 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| フォーム | HubSpot Forms API |
| ホスティング | Vercel |
| リポジトリ | GitHub |

---

## ディレクトリ構成

```
src/
├── app/                    # ページ (App Router)
│   ├── page.tsx           # トップページ
│   ├── about/page.tsx     # 会社情報（MVV含む）
│   ├── service/page.tsx   # 事業内容（コンサル + SaaS）
│   ├── recruit/page.tsx   # 採用情報
│   ├── news/              # お知らせ
│   │   ├── page.tsx       # 一覧
│   │   └── [id]/page.tsx  # 詳細
│   ├── contact/page.tsx   # お問い合わせ
│   └── privacy/page.tsx   # プライバシーポリシー
├── components/
│   ├── Header.tsx         # ヘッダー（レスポンシブ対応）
│   ├── Footer.tsx         # フッター
│   └── HubSpotForm.tsx    # HubSpotフォーム埋め込み
├── content/
│   ├── news/posts.ts      # お知らせデータ
│   └── recruit/jobs.ts    # 求人データ
└── lib/                   # ユーティリティ（未使用）
```

---

## ブランドカラー

```typescript
// tailwind.config.ts
primary: {
  800: '#2d2a5b',  // メインカラー（紺）
}
accent: {
  500: '#e67635',  // アクセントカラー（オレンジ）
}
```

---

## HubSpot連携

**設定ファイル**: `src/components/HubSpotForm.tsx`

```typescript
const HUBSPOT_PORTAL_ID = '244556311'
const HUBSPOT_FORM_ID = 'd9167c75-37be-4434-9f06-e99abd5d1e03'
const HUBSPOT_REGION = 'na2'
```

フォーム送信 → HubSpot CRMに自動連携

---

## コンテンツ更新方法

### お知らせの追加

`src/content/news/posts.ts` を編集:

```typescript
{
  id: 'unique-slug',
  title: 'タイトル',
  date: '2025-01-01',
  category: 'お知らせ',  // 'お知らせ' | 'プレスリリース' | '採用'
  excerpt: '概要',
  content: `本文`,
}
```

### 求人の追加

`src/content/recruit/jobs.ts` を編集:

```typescript
{
  id: 'job-slug',
  title: '職種名',
  department: '部署名',
  type: '正社員',
  location: '東京都港区（リモート可）',
  description: '業務内容',
  requirements: ['必須条件1', '必須条件2'],
  preferred: ['歓迎条件1'],
  benefits: ['福利厚生1'],
  published: true,
  publishedAt: '2025-01-01',
}
```

---

## デプロイフロー

```bash
# ローカルで変更
git add .
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

## MVV（ミッション・ビジョン・バリュー）

- **VISION**: すべての選択肢に、納得のいくストーリーを。
- **MISSION**: AI時代のキャリアインフラになる。
- **VALUE**:
  - The Dream Team（最高のチームを作る）
  - Truth First（真実を最優先に）
  - Think Big（大きく考える）

---

## 事業内容

1. **キャリアコンサルティング事業**: 転職支援 & キャリアコンサルティング
2. **HR Tech SaaS事業**: ATS, Candidate, Interview, Career Site

---

## 今後の作業（TODO）

- [ ] OGP画像の設定（`public/og-image.png`）
- [ ] ロゴ画像の設置（現在はSVGインライン）
- [ ] Google Analytics / Search Console連携
- [ ] カスタムドメイン設定（opinio.co.jp）
- [ ] お知らせ記事の追加
- [ ] 求人情報の追加（必要時）

---

## 注意事項

- `not-found.tsx` は削除済み（ビルドエラー回避）
- `next.config.js` の `output: 'export'` は削除済み（Vercel標準デプロイ使用）
- Framework PresetはVercel設定で「Next.js」に変更済み

---

## 参考リンク

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Dashboard](https://vercel.com/hayano-ryukis-projects/opinio-corp)
- [HubSpot Forms](https://app.hubspot.com/)
