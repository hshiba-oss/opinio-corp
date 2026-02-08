import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // 管理者ユーザー作成
  const hashedPassword = await hash('opinio2026!', 12)
  await prisma.user.upsert({
    where: { email: 'admin@opinio.co.jp' },
    update: {},
    create: {
      email: 'admin@opinio.co.jp',
      password: hashedPassword,
      name: '管理者',
    },
  })
  console.log('✅ 管理者ユーザー作成: admin@opinio.co.jp / opinio2026!')

  // 既存のお知らせをマイグレーション
  const newsData = [
    {
      slug: 'company-name-change-2025',
      title: '商号変更のお知らせ',
      date: new Date('2025-06-24'),
      category: 'お知らせ',
      excerpt: '商号を変更いたしましたのでお知らせいたします。',
      content: 'この度、弊社は商号を変更いたしましたのでお知らせいたします。\n\n今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。',
      published: true,
    },
    {
      slug: 'website-launch-2025',
      title: 'WEBサイト公開のお知らせ',
      date: new Date('2025-05-06'),
      category: 'お知らせ',
      excerpt: 'コーポレートサイトを公開いたしました。',
      content: '株式会社Opinioのコーポレートサイトを公開いたしました。\n\n当サイトでは、弊社の事業内容や採用情報などをお伝えしてまいります。\n今後ともよろしくお願いいたします。',
      published: true,
    },
    {
      slug: 'soccer-sponsor-2025',
      title: '関東大学女子サッカー連盟のスポンサーになりました',
      date: new Date('2025-03-05'),
      category: 'お知らせ',
      excerpt: '関東大学女子サッカー連盟のスポンサー契約を締結いたしました。',
      content: '株式会社Opinioは、関東大学女子サッカー連盟とスポンサー契約を締結いたしました。\n\n女子サッカーの発展と、選手の皆様のキャリア形成を支援してまいります。',
      published: true,
    },
  ]

  for (const news of newsData) {
    await prisma.newsPost.upsert({
      where: { slug: news.slug },
      update: news,
      create: news,
    })
  }
  console.log(`✅ お知らせ ${newsData.length}件 作成`)

  console.log('\n🎉 シード完了！')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
