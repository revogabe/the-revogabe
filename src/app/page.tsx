import Image from 'next/image'
import Link from 'next/link'
import { CardCareer } from '@/components/card-career'
import { CardProject } from '@/components/card.project'
import { MapCard } from '@/components/map'
import { RoadmapItem } from '@/components/roadmap-item'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Badge } from '@/ui/badge'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { ScrollArea } from '@/ui/scroll-area'
import { ToggleTheme } from '@/ui/toggle-theme'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default async function Home() {
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
  ]

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
  ]

  const roadmap = [
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
  ]
  // const careers = await getCareers()
  // const projects = await getProjects()
  // const roadmap = await getRoadmap()

  return (
    <main className=" flex w-full max-2xl:mx-auto max-2xl:max-w-[900px] max-2xl:flex-col max-2xl:p-10 2xl:overflow-hidden">
      <div className="z-10 flex h-screen w-full flex-col gap-8 max-2xl:mx-auto 2xl:max-w-[640px] 2xl:p-16">
        <div className="start-center flex w-full flex-col gap-3">
          <Avatar className="border-border mb-6 size-24 rounded-xl border">
            <AvatarFallback>DG</AvatarFallback>
            <AvatarImage
              src="https://github.com/revogabe.png"
              alt="Imagem de perfil do Daniel Gabriel / Revogabe"
            />
          </Avatar>
          <div className="flex gap-4">
            <Badge variant="secondary" className="cursor-default select-none">
              The Revogabe
            </Badge>

            <ToggleTheme />
          </div>
          <h1>Daniel Gabriel</h1>
          <p className="w-[400px]">
            <span className="text-primary mb-1">
              Fundador da <Link href="/comaqui">@Comaqui</Link>,{' '}
              <Link href="/comakit">@Comakit</Link> e <Link href="/hyperloop">@Hyperloop</Link>
            </span>
            <br />
            Sou desenvolvedor porque amo resolver problemas reais e há 2 anos venho criando produtos
            que podem contribuir com o mundo de alguma forma.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-4">
            <div className="center-start my-2.5 flex gap-3">
              💼 <h4>Carreira</h4>
            </div>
            {careers && careers.map((career) => <CardCareer key={career.id} {...career} />)}
          </div>
        </div>
      </div>

      <ScrollArea className="mx-auto hidden h-screen w-full min-w-[940px] px-12 2xl:flex">
        <div className="center flex w-full flex-col gap-14 py-12">
          {/* Socials */}
          <div className="start w-full max-w-[840px] grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
            <Card className="start-center relative row-span-2  flex h-[400px] w-[400px] flex-col gap-5 overflow-hidden p-0 max-lg:w-full">
              <div className="absolute bottom-44 left-40">
                <div className="center relative inset-x-0 z-10 flex">
                  <div className="absolute   h-4  w-4 rounded-full bg-blue-500 ring-4 ring-white" />
                  <div className="animate-ping-static  inset-0  h-6 w-6 rounded-full bg-blue-500" />
                </div>
              </div>

              <div className="animated-cloud absolute inset-0 z-30">
                <div className="relative">
                  <Image
                    width={480}
                    height={480}
                    className="absolute z-20 opacity-75"
                    src="/cloud.png"
                    alt=""
                  />
                  <Image
                    width={480}
                    height={480}
                    className="absolute z-10 -translate-x-16 translate-y-28  opacity-15 blur-sm brightness-0"
                    src="/cloud.png"
                    alt=""
                  />
                </div>
              </div>

              <Image
                width={40}
                height={40}
                className="animated-plane absolute inset-0 z-10 object-contain"
                src="/plane.png"
                alt=""
              />

              <MapCard />
            </Card>

            <div className="row-span-2 grid max-h-[400px] max-w-[400px] grid-cols-2 grid-rows-2 gap-10">
              <a href="https://github.com/revogabe" target="_blank">
                <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="pointer-events-none h-14 w-14 rounded-xl border bg-black"
                  >
                    <FaGithub size={24} className="text-white" />
                  </Button>
                  <h6>Confirá meu Github 🖥️</h6>
                </Card>
              </a>

              <a href="https://www.linkedin.com/in/daniel-gabriel-70a565267/" target="_blank">
                <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="pointer-events-none h-14 w-14 rounded-xl border bg-sky-700"
                  >
                    <FaLinkedin size={24} className="text-white" />
                  </Button>
                  <h6>Connecte comigo no Linkedin 🤝🏼</h6>
                </Card>
              </a>
              <a href="https://discord.gg/hHaeCntW8Q" target="_blank">
                <Card className="start-center flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="pointer-events-none h-14 w-14 rounded-xl border bg-blue-900"
                  >
                    <FaDiscord size={24} className="text-white" />
                  </Button>
                  <h6>Entre em nossa comunidade 🌐</h6>
                </Card>
              </a>

              <a href="https://twitter.com/orevogabe" target="_blank">
                <Card className="start-center flex  h-full flex-col  gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="pointer-events-none h-14 w-14 rounded-xl border bg-black"
                  >
                    <FaXTwitter size={24} className="text-white" />
                  </Button>
                  <h6>Me siga no X</h6>

                  <Button variant="outline" size="sm" className="gap-2.5   rounded-sm">
                    Follow
                  </Button>
                </Card>
              </a>
            </div>

            <Card className="start-between col-span-2 flex h-full gap-8 p-6 max-lg:w-full">
              <a href="https://twitch.tv/revogabe" target="_blank" className="flex w-full gap-8">
                <div className="start-between flex h-full max-w-[380px] flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-14 w-14 rounded-xl border bg-purple-700"
                    >
                      <FaTwitch size={24} className="text-white" />
                    </Button>
                    <div>
                      <h5>Fique de olho no meu canal da Twitch</h5>
                      <p className="mt-2 leading-6">
                        Aqui eu faço live code com chat, sempre tentando ajudar pessoas que, assim
                        como eu, são apaixonadas por tecnologia.
                      </p>
                    </div>
                  </div>
                  <div className="end-start flex">
                    <p>twitch.tv/revogabe</p>
                  </div>
                </div>

                <div className="w-full">
                  <iframe
                    src="https://player.twitch.tv/?channel=revogabe&parent=revogabe.vercel.app&muted=true"
                    className="h-[240px] w-full rounded-lg"
                    allowFullScreen
                    allow="mute;"
                  ></iframe>
                </div>
              </a>
            </Card>
          </div>

          {/* Projects */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>🗒️ Projects</h4>
            <div className="grid w-max grid-cols-2 gap-8">
              {projects && projects.map((project) => <CardProject key={project.id} {...project} />)}
            </div>
          </div>

          {/* Roadmap */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>🗓️ Roadmap 2024</h4>
            <div className="flex w-full flex-col gap-8">
              {roadmap && roadmap.map((item) => <RoadmapItem key={item.id} {...item} />)}
            </div>
          </div>

          {/* Stacks */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>🎖️ My Golden Stacks</h4>
            <div className="start w-[820px] grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
              <Card
                draggable={false}
                className="start-center pointer-events-none relative col-span-2 row-span-2 flex h-full select-none flex-col gap-5 overflow-hidden p-0 hover:bg-none max-lg:w-full"
              >
                <Image
                  width={1500}
                  height={1500}
                  quality={100}
                  className="h-full w-full object-cover dark:mix-blend-screen"
                  src="/stacks.png"
                  alt="Minha Gata Yummi"
                  title="Yummi"
                />
              </Card>
            </div>
          </div>

          {/* Hobbys */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>💛 Passions and Hobbies</h4>
            <div className="start w-[820px] grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
              <div className="cols row-span-2 grid h-full grid-cols-2 grid-rows-2 gap-8">
                <Card className="start-center  flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                  <h6>🎮 Games</h6>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-primary">🐉</span> LOL
                    </li>
                    <li>
                      <span className="text-primary">🔥</span> Valorant
                    </li>
                    <li>
                      <span className="text-primary">♟️</span> Xadrez
                    </li>
                  </ul>
                </Card>

                <Card className="start-center row-span-2 flex h-full flex-col gap-5 overflow-hidden p-0 max-lg:w-full">
                  <Image
                    width={1500}
                    height={1500}
                    className="tra h-full w-full object-cover"
                    src="/yummi.jpeg"
                    alt="Minha Gata Yummi"
                    title="Yummi"
                  />
                </Card>

                <Card className="start-center   flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                  <h6>
                    <span className="text-primary">🌟</span> Dreams
                  </h6>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <span className="text-primary">🗽</span> Viver em NYC
                    </li>
                    <li>
                      <span className="text-primary">👨‍💻</span> Entrar em uma FAANG
                    </li>
                  </ul>
                </Card>
              </div>

              <Card className="start-center row-span-2 flex h-[400px] flex-col gap-5 overflow-hidden p-0 max-lg:w-full">
                <Image
                  width={1500}
                  height={1500}
                  className="h-full w-full -translate-x-10 -translate-y-10 scale-150 object-cover"
                  src="/zoe-and-luke.jpeg"
                  alt="Zoe & Luke"
                  title="Zoe & Luke"
                />
              </Card>

              <div className="ring-border bg-secondary h-max overflow-hidden rounded-lg ring-2">
                <iframe
                  className="bg-secondary h-[152px] w-full brightness-90 saturate-0"
                  src="https://open.spotify.com/embed/track/1MVqeIAwhD4T44AKVkIfic?utm_source=generator&theme=0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="ring-border bg-secondary h-max overflow-hidden rounded-lg ring-2">
                <iframe
                  className="bg-secondary h-[152px] w-full brightness-90 saturate-0"
                  src="https://open.spotify.com/embed/track/34204TEDsGFT2H1lYp3YL5?utm_source=generator&theme=0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="center w-full flex-col gap-14 max-2xl:flex  2xl:hidden ">
        {/* Socials */}
        <Card className="start-center relative row-span-2 flex  h-[280px] w-full flex-col gap-5 overflow-hidden p-0 max-lg:w-full">
          <div className="absolute bottom-52 left-52">
            <div className="center relative inset-x-0 z-10 flex">
              <div className="absolute h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white" />
              <div className="animate-ping-static  inset-0  h-6 w-6 rounded-full bg-blue-500" />
            </div>
          </div>

          <div className="animated-cloud absolute inset-0 z-30">
            <div className="relative">
              <Image
                width={480}
                height={480}
                className="absolute z-20 opacity-75"
                src="/cloud.png"
                alt=""
              />
              <Image
                width={480}
                height={480}
                className="absolute z-10 -translate-x-16 translate-y-28  opacity-15 blur-sm brightness-0"
                src="/cloud.png"
                alt=""
              />
            </div>
          </div>

          <Image
            width={40}
            height={40}
            className="animated-plane absolute inset-0 z-10 object-contain"
            src="/plane.png"
            alt=""
          />

          <MapCard />
        </Card>

        <div className="flex w-full flex-col gap-6">
          <a href="https://github.com/revogabe" target="_blank" className="w-full">
            <Card className="center-start flex h-full w-full  gap-5 p-4">
              <Button
                variant="secondary"
                size="icon"
                className="pointer-events-none h-10 w-10 rounded-xl border bg-black"
              >
                <FaGithub size={18} className="text-white" />
              </Button>
              <h6>Confirá meu Github 🖥️</h6>
            </Card>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-gabriel-70a565267/"
            target="_blank"
            className="w-full"
          >
            <Card className="center-start flex h-full w-full  gap-5 p-4">
              <Button
                variant="secondary"
                size="icon"
                className="pointer-events-none h-10 w-10 rounded-xl border bg-sky-700"
              >
                <FaLinkedin size={18} className="text-white" />
              </Button>
              <h6>Connecte comigo no Linkedin 🤝🏼</h6>
            </Card>
          </a>
          <a href="https://discord.gg/hHaeCntW8Q" target="_blank">
            <Card className="center-start flex h-full w-full  gap-5 p-4">
              <Button
                variant="secondary"
                size="icon"
                className="pointer-events-none h-10 w-10 rounded-xl border bg-blue-900"
              >
                <FaDiscord size={18} className="text-white" />
              </Button>
              <h6>Entre em nossa comunidade 🌐</h6>
            </Card>
          </a>
          <a href="https://twitter.com/orevogabe" target="_blank">
            <Card className="center-start flex h-full w-full  gap-5 p-4">
              <Button
                variant="secondary"
                size="icon"
                className="pointer-events-none h-10 w-10 rounded-xl border bg-black"
              >
                <FaXTwitter size={18} className="text-white" />
              </Button>
              <h6>Me siga no X</h6>
            </Card>
          </a>
          <Card className="start-between flex h-full w-full gap-8 p-6">
            <a
              href="https://twitch.tv/revogabe"
              target="_blank"
              className="flex w-full gap-8 max-md:flex-col"
            >
              <div className="start-between flex h-full max-w-[380px] flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-14 w-14 rounded-xl border bg-purple-700"
                  >
                    <FaTwitch size={24} className="text-white" />
                  </Button>
                  <div>
                    <h5>Keep an eye on my Twitch channel</h5>
                    <p className="mt-2 leading-6">
                      Here I do live code with chat, always trying to help people who, like me, are
                      passionate about technology.
                    </p>
                  </div>
                </div>
                <div className="end-start flex">
                  <p>twitch.tv/revogabe</p>
                </div>
              </div>

              <div className="w-full">
                <iframe
                  src="https://player.twitch.tv/?channel=revogabe&parent=revogabe.vercel.app&muted=true"
                  className="h-[240px] w-full rounded-lg"
                  allowFullScreen
                  allow="mute;"
                ></iframe>
              </div>
            </a>
          </Card>
        </div>

        {/* Projects */}
        <div className="start flex w-full flex-col gap-8">
          <h4>🗒️ Projects</h4>
          <div className="flex w-full flex-col gap-8">
            {projects && projects.map((project) => <CardProject key={project.id} {...project} />)}
          </div>
        </div>

        {/* Roadmap */}
        <div className="start flex w-full flex-col gap-8">
          <h4>🗓️ Roadmap 2024</h4>
          <div className="flex w-full flex-col gap-8">
            {roadmap && roadmap.map((item) => <RoadmapItem key={item.id} {...item} />)}
          </div>
        </div>

        {/* Stacks */}
        <div className="start flex w-full flex-col gap-8">
          <h4>🎖️ My Golden Stacks</h4>
          <div className="start w-full grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
            <Card className="start-center relative col-span-2 row-span-2 flex h-full flex-col gap-5 overflow-hidden p-0 max-lg:w-full">
              <Image
                width={1500}
                height={1500}
                quality={100}
                className="h-full w-full object-cover"
                src="/stacks.png"
                alt="Minha Gata Yummi"
                title="Yummi"
              />
            </Card>
          </div>
        </div>

        {/* Hobbys */}
        <div className="start flex w-full flex-col gap-8">
          <h4>💛 Passions and Hobbies</h4>
          <div className="start flex w-full flex-col gap-8">
            <Card className="start-center  flex h-full w-full  flex-col gap-5 p-4">
              <h6>🎮 Games</h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-primary">🐉</span> LOL
                </li>
                <li>
                  <span className="text-primary">🔥</span> Valorant
                </li>
                <li>
                  <span className="text-primary">♟️</span> Xadrez
                </li>
              </ul>
            </Card>

            <Card className="start-center   flex h-full w-full  flex-col gap-5 p-4">
              <h6>
                <span className="text-primary">🌟</span> Dreams
              </h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-primary">🗽</span> Viver em NYC
                </li>
                <li>
                  <span className="text-primary">👨‍💻</span> Entrar em uma FAANG
                </li>
              </ul>
            </Card>

            <div className="flex h-[400px] w-full gap-8">
              <Card className="start-center flex h-full w-full flex-col gap-5 overflow-hidden p-0 sm:w-1/2">
                <Image
                  width={1500}
                  height={1500}
                  className="h-full w-full object-cover"
                  src="/yummi.jpeg"
                  alt="Minha Gata Yummi"
                  title="Yummi"
                />
              </Card>

              <Card className="start-center flex h-full w-full flex-col gap-5 overflow-hidden p-0">
                <Image
                  width={1500}
                  height={1500}
                  className="h-full w-full scale-125 object-cover sm:-translate-x-10 sm:-translate-y-10"
                  src="/zoe-and-luke.jpeg"
                  alt="Zoe & Luke"
                  title="Zoe & Luke"
                />
              </Card>
            </div>

            <div className="flex w-full gap-8 max-sm:flex-col">
              <div className="ring-border bg-secondary h-max w-full overflow-hidden rounded-lg ring-2">
                <iframe
                  className="bg-secondary h-[152px] w-full brightness-90 saturate-0"
                  src="https://open.spotify.com/embed/track/1MVqeIAwhD4T44AKVkIfic?utm_source=generator&theme=0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="ring-border bg-secondary h-max w-full overflow-hidden rounded-lg ring-2">
                <iframe
                  className="bg-secondary h-[152px] w-full brightness-90 saturate-0"
                  src="https://open.spotify.com/embed/track/34204TEDsGFT2H1lYp3YL5?utm_source=generator&theme=0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
