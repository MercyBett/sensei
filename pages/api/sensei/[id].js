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
  if (req.method === 'PUT') {
    const { topic, sensei } = req.body
    try {
      const ssensei = await prisma.sensei.update({
        where: { id: Number(id) },
        data: { topic, sensei },
      })
      res.status(200).json(ssensei)
    } catch (error) {
      console.log(error)
    }
  }
}
