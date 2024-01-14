import { NextResponse } from 'next/server'

export type Roadmap = {
  id: string
  title: string
  description: string
  badges: string[]
}

const roadmaps = [
  {
    id: 'rust',
    title: 'Estudar Rust',
    description:
      'Recentemente eu tenho estudado Rust ocasionalmente, e estou gostando bastante da linguagem. Acredito que ela tem um potencial enorme, e que pode ser uma das linguagens mais usadas no uturo. Por isso, estou estudando ela para me preparar para o futuro e para o que está por vir.',
    badges: ['Rust'],
  },
  {
    id: 'rust',
    title: 'Estudar Rust',
    description:
      'Recentemente eu tenho estudado Rust ocasionalmente, e estou gostando bastante da linguagem. Acredito que ela tem um potencial enorme, e que pode ser uma das linguagens mais usadas no uturo. Por isso, estou estudando ela para me preparar para o futuro e para o que está por vir.',
    badges: ['Rust'],
  },
  {
    id: 'rust',
    title: 'Estudar Rust',
    description:
      'Recentemente eu tenho estudado Rust ocasionalmente, e estou gostando bastante da linguagem. Acredito que ela tem um potencial enorme, e que pode ser uma das linguagens mais usadas no uturo. Por isso, estou estudando ela para me preparar para o futuro e para o que está por vir.',
    badges: ['Rust'],
  },
] as Roadmap[]

export async function GET() {
  const data = roadmaps

  return NextResponse.json(data)
}
