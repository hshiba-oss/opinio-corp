import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
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
      targetAudience: body.targetAudience || null,
      locationDetail: body.locationDetail || null,
      workHours: body.workHours || null,
      employmentDetail: body.employmentDetail || null,
      salary: body.salary || null,
      welfare: body.welfare || null,
      holidays: body.holidays || null,
      published: body.published,
      publishedAt: body.published ? new Date() : null,
    },
  })

  // 公開ページのキャッシュを即座に無効化
  revalidatePath('/recruit')
  revalidatePath(`/recruit/${job.slug}`)

  return NextResponse.json(job)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // 削除前にslugを取得（キャッシュ無効化用）
  const job = await prisma.job.findUnique({ where: { id: params.id } })
  await prisma.job.delete({ where: { id: params.id } })

  // 公開ページのキャッシュを即座に無効化
  revalidatePath('/recruit')
  if (job?.slug) {
    revalidatePath(`/recruit/${job.slug}`)
  }

  return NextResponse.json({ success: true })
}
