import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// let prisma

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }

// export default prisma
