import { Project } from '@/app/api/projects/route'

export async function getProjects() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: 'GET',
    cache: 'force-cache',
    next: {
      tags: ['get-projects'],
    },
  })
  const data: Project[] = await response.json()
  try {
    if (!data) {
      throw new Error("Couldn't get projects")
    }
    return data
  } catch (error) {
    console.log(error)
  }
}
