import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

// base64画像を受け取るためbodyサイズ上限を引き上げ
export const maxDuration = 10
export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const logos = await prisma.logo.findMany({
    orderBy: [{ category: 'asc' }, { order: 'asc' }, { createdAt: 'desc' }],
  })
  return NextResponse.json(logos)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const logo = await prisma.logo.create({
    data: {
      name: body.name,
      imageUrl: body.imageUrl,
      category: body.category || 'consulting',
      order: body.order ?? 0,
      published: body.published ?? false,
    },
  })

  revalidatePath('/service')

  return NextResponse.json(logo, { status: 201 })
}
