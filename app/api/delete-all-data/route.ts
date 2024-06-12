import prisma from "@/lib/db";

export async function DELETE(req: Request) {

  if (req.method !== 'DELETE') {
    return Response.json({ status: 405, message: 'Method not allowed' })
  }

  await prisma.data.deleteMany()

  return Response.json({ status: 200, message: 'All data deleted' })
}