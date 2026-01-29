export interface NewsPost {
  id: string
  title: string
  date: string
  category: 'お知らせ' | 'プレスリリース' | '採用'
  excerpt: string
  content: string
}

export const newsPosts: NewsPost[] = [
  {
    id: 'company-name-change-2025',
    title: '商号変更のお知らせ',
    date: '2025-06-24',
    category: 'お知らせ',
    excerpt: '商号を変更いたしましたのでお知らせいたします。',
    content: `
この度、弊社は商号を変更いたしましたのでお知らせいたします。

今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。
    `.trim(),
  },
  {
    id: 'website-launch-2025',
    title: 'WEBサイト公開のお知らせ',
    date: '2025-05-06',
    category: 'お知らせ',
    excerpt: 'コーポレートサイトを公開いたしました。',
    content: `
株式会社Opinioのコーポレートサイトを公開いたしました。

当サイトでは、弊社の事業内容や採用情報などをお伝えしてまいります。
今後ともよろしくお願いいたします。
    `.trim(),
  },
  {
    id: 'soccer-sponsor-2025',
    title: '関東大学女子サッカー連盟のスポンサーになりました',
    date: '2025-03-05',
    category: 'お知らせ',
    excerpt: '関東大学女子サッカー連盟のスポンサー契約を締結いたしました。',
    content: `
株式会社Opinioは、関東大学女子サッカー連盟とスポンサー契約を締結いたしました。

女子サッカーの発展と、選手の皆様のキャリア形成を支援してまいります。
    `.trim(),
  },
]

export const sortedNews = [...newsPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)
