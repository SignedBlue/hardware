import prisma from "@/lib/db"

export const fetchCache = 'force-no-store'

export async function GET(request: Request) {

  const data = await prisma.data.findMany()

  return Response.json(data)
}