import { prisma } from '../../lib/prisma'
import { getSession } from 'next-auth/react'
export default async function handler(req, res) {
  const { topic, sensei } = req.body
  const session = await getSession({ req })

  try {
    await prisma.sensei.create({
      data: {
        topic,
        sensei,
        author: { connect: { email: session?.user?.email } },
      },
    })
    res.status(200).json({ message: 'new sensei created successfully' })
  } catch (error) {
    res.status(error.status)
  }
}
