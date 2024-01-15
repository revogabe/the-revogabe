import { NextResponse } from 'next/server'

export type Career = {
  id: string
  name: string
  title: string
  description: string
  image: string
  location: string
  linkedin_url: string
  period: {
    start: Date
    end: Date | string
  }
}

export type CareerResponse = {
  data: Career[]
}

const careers = [
  {
    id: 'comaqui',
    name: 'Comaqui',
    title: 'Software Engineer | Full-Stack',
    description:
      'Com a Comaqui estou tendo muitos desafios interessantes, como: Realtime, Experiência Mobile First, Geolocalização e muito mais. Sou um dos Fundadores por trás da Comaqui, uma plataforma pensada pra trazer tecnologia para os restaurantes Brasileiros e Globais. Faço parte do time que cuida da parte do Cliente, temos que pensar em features como delivery, QrCodes e muito mais.',
    image:
      'https://media.licdn.com/dms/image/D4D0BAQEK4Mz19P6jiw/company-logo_100_100/0/1696713344980/comaqui_logo?e=1713398400&v=beta&t=3wbY-3MQCkO8IW5rstGhM1xsm4Oq83uSHHPrZ97mSZo',
    location: 'São Paulo, São Paulo, Brasil · Remota',
    linkedin_url: 'https://www.linkedin.com/company/100715600/',
    period: {
      start: new Date('2023-06-12'),
      end: 'in_moment',
    },
  },
  {
    id: 'muden',
    name: 'Muden',
    title: 'Pleno Software Engineer | Front-end',
    description:
      'Com minha promoção para Desenvolvedor Pleno, comecei a tomar mais responsabilidades de certos processos e a guiar como iriamos desenvolver novas features. Também revisava códigos de colegas oque me ajudou a conseguir um conhecimento ainda mais profundo e padrões de códigos.',
    image:
      'https://media.licdn.com/dms/image/C4D0BAQE2NP1MQpqWgA/company-logo_200_200/0/1643934045526/mudenoficial_logo?e=1713398400&v=beta&t=843Hq7RzZrgavCfCBdhE3Lxa8QbpCLVWoCRWACUJwOU',
    location: 'São Paulo, São Paulo, Brasil · Remota',
    linkedin_url: 'https://www.linkedin.com/company/mudenoficial/',
    period: {
      start: new Date('2022-01-24'),
      end: new Date('2023-06-15'),
    },
  },
  {
    id: 'muden-2',
    name: 'ExpressoTS',
    title: 'Software Engineer | Front-end',
    description:
      'Participar do ExpressoTS foi uma jornada simplesmente fantástica e inspiradora! 💫 Como apaixonado por desenvolvimento web e entusiasta de tecnologias inovadoras, fazer parte desse framework para Node voltado para os princípios SOLID e clean architecture, com nuances inspiradas no incrível mundo .NET, foi uma oportunidade única.',
    image:
      'https://media.licdn.com/dms/image/D4D0BAQHwpR-dKkp6Ng/company-logo_100_100/0/1682544232002/expresso_ts_logo?e=1713398400&v=beta&t=ix5MjLMBgGFYQfWP7CYYpE3f9Hv1iYAnGIZWCFArr-0',
    location: 'Vancouver, Colúmbia Britânica, Canadá · Remota',
    linkedin_url: 'https://www.linkedin.com/company/mudenoficial/',
    period: {
      start: new Date('2022-06-03'),
      end: new Date('2022-12-08'),
    },
  },
] as Career[]

export async function GET() {
  const data = careers as Career[]

  return NextResponse.json(data)
}
