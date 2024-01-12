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
    name: 'Translify GO',
    url: 'https://github.com/',
    icon: 'https://github.com/favicon.ico',
    og_image: 'https://github.com/og.png',
  },
  {
    id: 'translify',
    name: 'Translify GO',
    url: 'https://github.com/',
    icon: 'https://github.com/favicon.ico',
    og_image: 'https://github.com/og.png',
  },
  {
    id: 'translify',
    name: 'Translify GO',
    url: 'https://github.com/',
    icon: 'https://github.com/favicon.ico',
    og_image: 'https://github.com/og.png',
  },
  {
    id: 'translify',
    name: 'Translify GO',
    url: 'https://github.com/',
    icon: 'https://github.com/favicon.ico',
    og_image: 'https://github.com/og.png',
  },
] as Project[]

export async function GET() {
  const data = projects

  return NextResponse.json(data)
}
