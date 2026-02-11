import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export const maxDuration = 10
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const logo = await prisma.logo.findUnique({ where: { id: params.id } })
  if (!logo) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(logo)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const logo = await prisma.logo.update({
    where: { id: params.id },
    data: {
      name: body.name,
      imageUrl: body.imageUrl,
      category: body.category,
      order: body.order,
      published: body.published,
    },
  })

  revalidatePath('/service')

  return NextResponse.json(logo)
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await prisma.logo.delete({ where: { id: params.id } })

  revalidatePath('/service')

  return NextResponse.json({ success: true })
}
