import Image from 'next/image'
import Link from 'next/link'
import { CardCareer } from '@/components/card-career'
import { CardProject } from '@/components/card.project'
import { RoadmapItem } from '@/components/roadmap-item'
import { getCareers } from '@/queries/get-career'
import { getProjects } from '@/queries/get-projects'
import { getRoadmap } from '@/queries/get-roadmap'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Badge } from '@/ui/badge'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { ScrollArea } from '@/ui/scroll-area'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default async function Home() {
  const careers = await getCareers()
  const projects = await getProjects()
  const roadmap = await getRoadmap()

  return (
    <main className="flex min-h-screen max-2xl:flex-col">
      <div className="bg-background z-10 flex h-screen w-full max-w-[640px] flex-col gap-8 p-12 ">
        <div className="start-center flex w-full flex-col gap-3">
          <Avatar className="border-border mb-6 size-24 rounded-xl border">
            <AvatarFallback>DG</AvatarFallback>
            <AvatarImage
              src="https://github.com/revogabe.png"
              alt="Imagem de perfil do Daniel Gabriel / Revogabe"
            />
          </Avatar>
          <Badge variant="secondary" className="cursor-default select-none">
            The Revogabe
          </Badge>
          <h1>Daniel Gabriel</h1>
          <p className="w-[400px]">
            <span className="text-primary mb-0.5">
              Fundador da <Link href="/comaqui">@Comaqui</Link>,{' '}
              <Link href="/comakit">@Comakit</Link> e <Link href="/hyperloop">@Hyperloop</Link>
            </span>
            <br />
            Me tornei um desenvolvedor porque amo resolver problemas reais e criar produtos que
            possam contribuir com o mundo está sendo uma experiência incrível.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full flex-col gap-4">
            <div className="center-start my-2.5 flex gap-3">
              💼 <h4>Carreira</h4>
            </div>
            {careers.map((career) => (
              <CardCareer key={career.id} {...career} />
            ))}
          </div>
        </div>
      </div>

      <ScrollArea className="mx-auto flex h-screen w-full min-w-[940px] px-12">
        <div className="center flex w-full flex-col gap-14 py-12">
          {/* Socials */}
          <div className="start w-full max-w-[840px] grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
            <Card className="start-center relative row-span-2  flex h-[400px] w-[400px] flex-col gap-5 overflow-hidden p-0 max-lg:w-full">
              <div className="absolute bottom-52 left-52">
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

              <Image
                className="scale-110 object-cover saturate-[1.2]"
                width={1080}
                height={1080}
                src="/map.png"
                alt=""
              />
            </Card>

            <div className="row-span-2 grid max-h-[400px] max-w-[400px] grid-cols-2 grid-rows-2 gap-10">
              <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-14 w-14 rounded-xl border bg-black"
                >
                  <FaGithub size={24} />
                </Button>
                <h6>Confirá meu Github.</h6>

                <Button variant="outline" size="sm">
                  Seguir
                </Button>
              </Card>

              <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-14 w-14 rounded-xl border bg-sky-700"
                >
                  <FaLinkedin size={24} />
                </Button>
                <h6>Confirá meu Linkedin.</h6>
                <Button variant="outline" size="sm" className="gap-2.5">
                  Ver perfil
                </Button>
              </Card>

              <Card className="start-center flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-14 w-14 rounded-xl border bg-blue-900"
                >
                  <FaDiscord size={24} />
                </Button>
                <h6>Confirá meu Discord.</h6>

                <Button variant="outline" size="sm" className="gap-2.5">
                  Entrar
                </Button>
              </Card>

              <Card className="start-center flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-14 w-14 rounded-xl border bg-black"
                >
                  <FaXTwitter size={24} />
                </Button>
                <h6>Confirá meu Twitter.</h6>

                <Button variant="outline" size="sm" className="gap-2.5">
                  Seguir
                </Button>
              </Card>
            </div>

            <Card className="start-center col-span-2 flex h-full flex-col gap-5 p-4 max-lg:w-full">
              <Button
                variant="secondary"
                size="icon"
                className="h-14 w-14 rounded-xl border bg-purple-700"
              >
                <FaTwitch size={24} />
              </Button>
              <h6>Minha Twitch.</h6>

              <Button variant="outline" size="sm">
                Seguir
              </Button>
            </Card>
          </div>

          {/* Projects */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>Projetos</h4>
            <div className="grid w-max grid-cols-2 gap-8">
              {projects.map((project) => (
                <CardProject key={project.id} {...project} />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>Roadmap - 1624</h4>
            <div className="flex w-full flex-col gap-8">
              {roadmap.map((item) => (
                <RoadmapItem key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="start flex w-full max-w-[840px] flex-col gap-8">
            <h4>Meus gostos e paixões</h4>
            <div className="start w-[820px] grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
              <div className="cols row-span-2 grid h-full grid-cols-2 grid-rows-2 gap-8">
                <Card className="start-center row-span-2 flex h-full flex-col gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-14 w-14 rounded-xl border bg-black"
                  >
                    <FaGithub size={24} />
                  </Button>
                  <h6>Confirá meu Github.</h6>

                  <Button variant="outline" size="sm">
                    Seguir
                  </Button>
                </Card>

                <Card className="start-center   flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-14 w-14 rounded-xl border bg-blue-900"
                  >
                    <FaDiscord size={24} />
                  </Button>
                  <h6>Confirá meu Discord.</h6>

                  <Button variant="outline" size="sm" className="gap-2.5">
                    Entrar
                  </Button>
                </Card>

                <Card className="start-center   flex h-full flex-col  gap-5 p-4 max-lg:w-full">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-14 w-14 rounded-xl border bg-blue-900"
                  >
                    <FaDiscord size={24} />
                  </Button>
                  <h6>Confirá meu Discord.</h6>

                  <Button variant="outline" size="sm" className="gap-2.5">
                    Entrar
                  </Button>
                </Card>
              </div>

              <Card className="start-center  row-span-2 flex h-full flex-col  gap-5 p-0 max-lg:w-full"></Card>

              <Card className="start-center  flex h-full flex-col gap-5 p-4 max-lg:w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-14 w-14 rounded-xl border bg-purple-700"
                >
                  <FaTwitch size={24} />
                </Button>
                <h6>Minha Twitch.</h6>

                <Button variant="outline" size="sm">
                  Seguir
                </Button>
              </Card>

              <Card className="start-center flex h-full flex-col gap-5 p-4 max-lg:w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-14 w-14 rounded-xl border bg-purple-700"
                >
                  <FaTwitch size={24} />
                </Button>
                <h6>Minha Twitch.</h6>

                <Button variant="outline" size="sm">
                  Seguir
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </ScrollArea>
    </main>
  )
}
