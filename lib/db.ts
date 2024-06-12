import { PrismaClient } from "@prisma/client"

const prisma = () => {
  return new PrismaClient()
}

export default prisma