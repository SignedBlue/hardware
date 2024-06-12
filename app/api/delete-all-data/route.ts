import prisma from "@/lib/db";

export async function GET() {

  await prisma.data.deleteMany()

  return Response.json({ status: 200, message: 'All data deleted' })
}