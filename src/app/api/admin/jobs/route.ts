import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(jobs)
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const job = await prisma.job.create({
    data: {
      slug: body.slug,
      title: body.title,
      department: body.department,
      type: body.type || '正社員',
      location: body.location || '東京都港区（リモート可）',
      description: body.description,
      requirements: body.requirements || [],
      preferred: body.preferred || [],
      targetAudience: body.targetAudience || null,
      locationDetail: body.locationDetail || null,
      workHours: body.workHours || null,
      employmentDetail: body.employmentDetail || null,
      salary: body.salary || null,
      welfare: body.welfare || null,
      holidays: body.holidays || null,
      published: body.published ?? false,
      publishedAt: body.published ? new Date() : null,
    },
  })

  // 公開ページのキャッシュを即座に無効化
  revalidatePath('/recruit')
  if (job.published) {
    revalidatePath(`/recruit/${job.slug}`)
  }

  return NextResponse.json(job, { status: 201 })
}
