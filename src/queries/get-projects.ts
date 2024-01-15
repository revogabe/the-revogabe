import { Project } from '@/app/api/projects/route'

export async function getProjects() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: 'GET',
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['get-projects'],
    },
  })
  const data = (await response.json()) as Project[]
  return data
}
