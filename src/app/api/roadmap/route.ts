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
    badges: ['Rust', 'Study'],
  },
  {
    id: 'comakit',
    title: 'Lançamento da Comakit',
    description:
      'A Comakit é uma lib ui que estou desenvolvendo com o intuito de ser um substituo ao ShadcnUI totalmente Open Source. Iremos lançar a primeira versão em breve, e estou muito animado para o lançamento dela. Acredito que ela será uma lib muito útil para a comunidade, e que irá ajudar muitos devs além de ser melhor que o Shadcn.',
    badges: ['Comakit', 'Open Source', 'UI'],
  },
  {
    id: 'yc-combinator',
    title: 'Comaqui no Y-Combinator',
    description:
      'Estou bem confiante no trabalho que estamos fazendo na Comaqui e acredito que temos uma chance de entrar no Y-Combinator. Por isso, estou me preparando para aplicar a Comaqui no YC, sinto que isso pode ser um grande passo para a Comaqui e para mim como profissional.',
    badges: ['Y-Combinator', 'Comaqui'],
  },
  {
    id: 'youtube',
    title: 'Iniciar canal no Youtube',
    description:
      'Estou bem empolgado nessa nova etapa da minha carreira e vida, em fevereiro vou estar iniciando meu canal no Youtube para compartilhar conhecimento e experiências. Acredito que isso vai me ajudar a crescer como profissional e como pessoa, e também sou apaixonado por ensinar e compartilhar conhecimento, sinto que nossa comunidade BR está carente de conteúdo explicativo e sobre stacks atuais do mercado e quero ajudar a mudar isso.',
    badges: ['Hyperloop', 'Youtube'],
  },
  {
    id: 'new-job',
    title: 'Conseguir uma nova oportunidade',
    description:
      'Estou em busca de uma nova oportunidade de trabalho para me desafiar e crescer como profissional. Estou em busca de uma oportunidade. Estou bem confiante que vou conseguir uma nova posição em breve, e estou bem animado para isso.',
    badges: ['New Job'],
  },
] as Roadmap[]

export async function GET() {
  const data = roadmaps as Roadmap[]

  return NextResponse.json(data)
}
