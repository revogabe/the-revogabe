import { Career, CareerResponse } from '@/app/api/careers/route'

export async function getCareers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['get-careers'],
    },
  })
  const data = (await response.json()) as Career[]
  if (!data) {
    throw new Error("Couldn't get careers")
  }
  return data
}
