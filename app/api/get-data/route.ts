import prisma from "@/lib/db"

import { headers } from 'next/headers'

export async function GET() {

  const headersList = headers()

  const data = await prisma.data.findMany()

  headersList.set('Cache-Control', 'no-store, max-age=0');
  headersList.set("Pragma", "no-cache");
  headersList.set("Expires", "0");
  headersList.set("Surrogate-Control", "no-store");

  return Response.json(data)
}