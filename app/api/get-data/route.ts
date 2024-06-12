import prisma from "@/lib/db"
import { cookies } from "next/headers"

export const fetchCache = 'force-no-store'

export async function GET(request: Request) {

  cookies()

  const data = await prisma.data.findMany()

  return Response.json(data)
}