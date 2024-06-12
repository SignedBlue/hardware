import prisma from "@/lib/db";
import { cookies } from "next/headers";

export const fetchCache = 'force-no-store'

export async function DELETE(req: Request) {

  cookies()

  if (req.method !== 'DELETE') {
    return Response.json({ status: 405, message: 'Method not allowed' })
  }

  await prisma.data.deleteMany()

  return Response.json({ status: 200, message: 'All data deleted' })
}