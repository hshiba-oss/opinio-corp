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

  // ロゴ一括登録（consulting カテゴリ）
  const logoData = [
    { name: 'Sansan',           imageUrl: '/images/logos/sansan.png',        order: 1 },
    { name: 'RevComm',          imageUrl: '/images/logos/revcomm.png',       order: 2 },
    { name: 'HENNGE',           imageUrl: '/images/logos/hennge.png',        order: 3 },
    { name: 'UPSIDER',          imageUrl: '/images/logos/upsider.png',       order: 4 },
    { name: 'TalentX',          imageUrl: '/images/logos/talentx.png',       order: 5 },
    { name: 'Loglass',          imageUrl: '/images/logos/loglass.png',       order: 6 },
    { name: 'tebiki',           imageUrl: '/images/logos/tebiki.png',        order: 7 },
    { name: 'Plaid',            imageUrl: '/images/logos/plaid.png',         order: 8 },
    { name: 'Skillnote',        imageUrl: '/images/logos/skillnote.png',     order: 9 },
    { name: 'MNTSQ',            imageUrl: '/images/logos/mntsq.jpg',         order: 10 },
    { name: 'estie',            imageUrl: '/images/logos/estie.png',         order: 11 },
    { name: 'xmile',            imageUrl: '/images/logos/xmile.png',         order: 12 },
    { name: 'nexta',            imageUrl: '/images/logos/nexta.png',         order: 13 },
    { name: 'Leverages',        imageUrl: '/images/logos/leverages.svg',     order: 14 },
    { name: 'batonz',           imageUrl: '/images/logos/batonz.png',        order: 15 },
    { name: 'micoworks',        imageUrl: '/images/logos/micoworks.png',     order: 16 },
    { name: 'TRUSTDOCK',        imageUrl: '/images/logos/trustdock.jpg',     order: 17 },
    { name: 'Ingage',           imageUrl: '/images/logos/ingage.png',        order: 18 },
    { name: 'Smart相談室',      imageUrl: '/images/logos/smart-soudan.png',  order: 19 },
    { name: 'Caddi',            imageUrl: '/images/logos/caddi.png',         order: 20 },
    { name: 'Plex',             imageUrl: '/images/logos/plex.png',          order: 21 },
    { name: 'Archivillage',     imageUrl: '/images/logos/archivillage.png',  order: 22 },
    { name: 'Terra Drone',      imageUrl: '/images/logos/terradrone.png',    order: 23 },
    { name: 'ソフトブレーン',    imageUrl: '/images/logos/softbrain.jpg',    order: 24 },
    { name: 'リーディングマーク', imageUrl: '/images/logos/leadingmark.png', order: 25 },
    { name: 'Laprass',          imageUrl: '/images/logos/laprass.png',       order: 26 },
    { name: 'salesnow',         imageUrl: '/images/logos/salesnow.jpeg',     order: 27 },
    { name: 'hurray3',          imageUrl: '/images/logos/hurray3.png',       order: 28 },
    { name: 'エピックベース',    imageUrl: '/images/logos/epicbase.jpeg',    order: 29 },
    { name: 'Plan-B',           imageUrl: '/images/logos/plan-b.png',        order: 30 },
    { name: 'コネクシオ',        imageUrl: '/images/logos/connexion.jpg',    order: 31 },
    { name: 'スマレジ',          imageUrl: '/images/logos/smaregi.png',      order: 32 },
  ]

  let logoCount = 0
  for (const logo of logoData) {
    const exists = await prisma.logo.findFirst({ where: { imageUrl: logo.imageUrl } })
    if (!exists) {
      await prisma.logo.create({
        data: {
          name: logo.name,
          imageUrl: logo.imageUrl,
          category: 'consulting',
          order: logo.order,
          published: true,
        },
      })
      logoCount++
    }
  }
  console.log(`✅ ロゴ ${logoCount}件 新規登録（既存スキップ）`)

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
