import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const post = await prisma.newsPost.findUnique({ where: { id: params.id } })
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const post = await prisma.newsPost.update({
    where: { id: params.id },
    data: {
      slug: body.slug,
      title: body.title,
      date: new Date(body.date),
      category: body.category,
      excerpt: body.excerpt,
      content: body.content,
      published: body.published,
    },
  })
  return NextResponse.json(post)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await prisma.newsPost.delete({ where: { id: params.id } })
  return NextResponse.json({ success: true })
}
