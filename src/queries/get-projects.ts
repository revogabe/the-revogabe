import { Project } from '@/app/api/projects/route'

export async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: 'GET',
    cache: 'no-store',
    next: {
      tags: ['get-projects'],
    },
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json() as Promise<Project[]>
}
