import { Career } from '@/app/api/careers/route'

export async function getCareers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      tags: ['get-careers'],
    },
  })
  const data = await response.json()
  if (!data) {
    throw new Error("Couldn't get careers")
  }
  return data as Career[]
}
