import { NextResponse } from 'next/server'

export type Project = {
  id: string
  name: string
  url: string
  icon: string
  og_image: string
}

const projects = [
  {
    id: 'translify',
    name: 'Translify AI',
    url: 'https://github.com/revogabe/translify-go',
    icon: '/translify.png',
    og_image: 'https://raw.githubusercontent.com/revogabe/translify-go/main/public/home.png',
  },
  {
    id: 'comaqui',
    name: 'Comaqui',
    url: 'https://www.linkedin.com/company/100715600/',
    icon: '/comaqui.png',
    og_image:
      'https://images.unsplash.com/photo-1646388286288-476b7329e2e0?q=100&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'jobsdev',
    name: 'Jobsdev GO',
    url: 'https://github.com/revogabe/go-jobsdev',
    icon: '/jobsdev.png',
    og_image: 'https://raw.githubusercontent.com/revogabe/go-jobsdev/main/public/home.png',
  },
  {
    id: 'comakit',
    name: 'Comakit',
    url: 'https://github.com/revogabe/comakit',
    icon: '/comakit.png',
    og_image:
      'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=100&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
] as Project[]

export async function GET() {
  const data = projects

  return NextResponse.json({ data })
}
