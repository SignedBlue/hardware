import prisma from "@/lib/db"

export async function GET() {

  const data = await prisma().data.findMany()

  return Response.json(data)
}