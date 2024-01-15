import { Career } from '@/app/api/careers/route'

export async function getCareers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      tags: ['get-careers'],
    },
  })
  const data: Career[] = await response.json()
  try {
    if (!data) {
      throw new Error("Couldn't get career")
    }
    return data
  } catch (error) {
    console.log(error)
  }
}
