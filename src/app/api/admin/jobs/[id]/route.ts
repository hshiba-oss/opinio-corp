import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const job = await prisma.job.findUnique({ where: { id: params.id } })
  if (!job) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(job)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const job = await prisma.job.update({
    where: { id: params.id },
    data: {
      slug: body.slug,
      title: body.title,
      department: body.department,
      type: body.type,
      location: body.location,
      description: body.description,
      requirements: body.requirements,
      preferred: body.preferred,
      benefits: body.benefits,
      published: body.published,
      publishedAt: body.published ? new Date() : null,
    },
  })
  return NextResponse.json(job)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await prisma.job.delete({ where: { id: params.id } })
  return NextResponse.json({ success: true })
}
