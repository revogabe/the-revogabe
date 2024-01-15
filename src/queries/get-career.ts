import { Career } from '@/app/api/careers/route'

export async function getCareers() {
  const res = await fetch(`/api/careers`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      tags: ['get-careers'],
    },
  })

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json() as Promise<Career[]>
}
