import { Roadmap } from '@/app/api/roadmap/route'

export async function getRoadmap() {
  const res = await fetch(`/api/roadmap`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      tags: ['get-roadmap'],
    },
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json() as Promise<Roadmap[]>
}
