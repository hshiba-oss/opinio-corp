import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const posts = await prisma.newsPost.findMany({
    orderBy: { date: 'desc' },
  })
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const post = await prisma.newsPost.create({
    data: {
      slug: body.slug,
      title: body.title,
      date: new Date(body.date),
      category: body.category || 'お知らせ',
      excerpt: body.excerpt,
      content: body.content,
      published: body.published ?? false,
    },
  })
  return NextResponse.json(post, { status: 201 })
}
