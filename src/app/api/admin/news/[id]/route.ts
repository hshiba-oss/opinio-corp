import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
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

  revalidatePath('/news')
  revalidatePath(`/news/${post.slug}`)

  return NextResponse.json(post)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const post = await prisma.newsPost.findUnique({ where: { id: params.id } })
  await prisma.newsPost.delete({ where: { id: params.id } })

  revalidatePath('/news')
  if (post?.slug) {
    revalidatePath(`/news/${post.slug}`)
  }

  return NextResponse.json({ success: true })
}
