import { Roadmap } from '@/app/api/roadmap/route'

export async function getRoadmap() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roadmap`, {
    method: 'GET',
    cache: 'no-store',
    next: {
      tags: ['get-roadmap'],
    },
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json() as Promise<Roadmap[]>
}
