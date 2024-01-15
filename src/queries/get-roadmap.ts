import { Roadmap } from '@/app/api/roadmap/route'

export async function getRoadmap() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roadmap`, {
    method: 'GET',
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['get-roadmap'],
    },
  })
  const data = await response.json()
  if (!data) {
    throw new Error("Couldn't get roadmap")
  }
  return data as Roadmap[]
}
