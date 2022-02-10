import { prisma } from '../../lib/prisma'
export default async function handler(req, res) {
  const { topic, sensei } = req.body
  try {
    await prisma.sensei.create({
      data: {
        topic,
        sensei,
      },
    })
    res.status(200).json({ message: 'new sensei created successfully' })
  } catch (error) {
    res.status(error.status)
  }
}
