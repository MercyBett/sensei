import { prisma } from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query
  if (req.method === 'DELETE') {
    try {
      const sensei = await prisma.sensei.delete({
        where: {
          id: Number(id),
        },
      })
      res.json(sensei)
    } catch (error) {
      console.log(error)
    }
  }
}
