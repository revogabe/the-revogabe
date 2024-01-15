import { Roadmap } from '@/app/api/roadmap/route'

export async function getRoadmap() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roadmap`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      tags: ['get-roadmap'],
    },
  })
  const data: Roadmap[] = await response.json()

  try {
    if (!data) {
      throw new Error("Couldn't get roadmap")
    }
    return data
  } catch (error) {
    console.log(error)
  }
}
