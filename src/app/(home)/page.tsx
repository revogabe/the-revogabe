import Image from 'next/image'
import Link from 'next/link'
import { CardCareer } from '@/components/card-career'
import { CardProject } from '@/components/card.project'
import { getCareers } from '@/queries/get-career'
import { getProjects } from '@/queries/get-projects'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Badge } from '@/ui/badge'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { ScrollArea } from '@/ui/scroll-area'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiOpenai } from 'react-icons/si'

export default async function Home() {
  const careers = await getCareers()
  const projects = await getProjects()

  return (
    <main className="center flex h-screen w-full gap-10  max-lg:flex-col lg:overflow-hidden">
      <div className="border-border bg-background z-10 flex h-screen w-full max-w-[520px] flex-1 flex-col gap-10 border-r p-12 ">
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

      <ScrollArea className="flex h-screen w-full px-12">
        <div className="center flex w-full">
          <div className="center flex w-[1000px] flex-col gap-12 py-12">
            <div className="start w-full grid-cols-1 gap-8 max-lg:flex max-lg:flex-col lg:grid xl:grid-cols-2">
              <Card className="start-center  row-span-2 flex h-full flex-col  gap-5 p-0 max-lg:w-full"></Card>

              <div className="row-span-2 grid h-full grid-cols-2 grid-rows-2 gap-8">
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
            </div>

            <div className="start flex w-full flex-col gap-8">
              <h4>Projetos</h4>
              <div className="grid w-full grid-cols-2 gap-8">
                {projects.map((project) => (
                  <CardProject key={project.id} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </main>
  )
}
