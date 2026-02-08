import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hash('robecar06', 12)
  const user = await prisma.user.upsert({
    where: { email: 'hshiba@opinio.co.jp' },
    update: { password: hashedPassword },
    create: {
      email: 'hshiba@opinio.co.jp',
      password: hashedPassword,
      name: 'H.Shiba',
    },
  })
  console.log('✅ ユーザー作成:', user.email)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
