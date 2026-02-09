import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const posts = await prisma.blogPost.findMany({
    orderBy: { date: 'desc' },
  })
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const post = await prisma.blogPost.create({
    data: {
      slug: body.slug,
      title: body.title,
      date: new Date(body.date),
      category: body.category,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author || 'Opinio編集部',
      tags: body.tags || [],
      published: body.published ?? false,
    },
  })

  revalidatePath('/blog')
  if (post.published) {
    revalidatePath(`/blog/${post.slug}`)
  }

  return NextResponse.json(post, { status: 201 })
}
