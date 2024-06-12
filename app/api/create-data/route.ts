import prisma from "@/lib/db"
import { cookies } from "next/headers"

export const fetchCache = 'force-no-store'

export async function POST(req: Request) {

  cookies()

  if (req.method !== 'POST') {
    return Response.json({ status: 405, message: 'Method not allowed' })
  }

  const { name, value } = await req.json()

  const newData = await prisma.data.create({
    data: {
      name,
      value
    }
  })

  return Response.json({ status: 201, data: newData })
}