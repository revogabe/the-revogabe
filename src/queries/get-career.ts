import { Career } from '@/app/api/careers/route'

export async function getCareers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers`, {
    method: 'GET',
    cache: 'no-store',
    next: {
      tags: ['get-careers'],
    },
  })

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json() as Promise<Career[]>
}
