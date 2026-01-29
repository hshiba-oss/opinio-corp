export interface Job {
  id: string
  title: string
  department: string
  type: string // 正社員, 契約社員, 業務委託 etc.
  location: string
  description: string
  requirements: string[]
  preferred: string[]
  benefits: string[]
  published: boolean
  publishedAt?: string
}

export const jobs: Job[] = [
  // 求人がある場合はここに追加
  // 例:
  // {
  //   id: 'career-advisor-2024',
  //   title: 'キャリアアドバイザー',
  //   department: 'コンサルティング事業部',
  //   type: '正社員',
  //   location: '東京都港区（リモート可）',
  //   description: 'SaaS業界を中心とした転職支援を担当していただきます。',
  //   requirements: [
  //     '人材業界での実務経験2年以上',
  //     'SaaS/IT業界への知見',
  //   ],
  //   preferred: [
  //     'キャリアコンサルタント資格',
  //     'マネジメント経験',
  //   ],
  //   benefits: [
  //     'フレックスタイム制',
  //     'リモートワーク可',
  //     '書籍購入補助',
  //   ],
  //   published: true,
  //   publishedAt: '2024-01-01',
  // },
]

export const publishedJobs = jobs.filter((job) => job.published)
