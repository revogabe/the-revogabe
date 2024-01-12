import React from 'react'
import Image from 'next/image'
import { Project } from '@/app/api/projects/route'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { SiOpenai } from 'react-icons/si'

export const CardProject = (project: Project) => {
  return (
    <a href={project.url} target="_blank" className="hover:no-underline">
      <Card className="start-center flex h-full gap-5 p-4 duration-100 ease-in-out hover:opacity-75 max-lg:w-full">
        <div className="start-center flex w-full flex-col gap-2">
          <Avatar className="h-11 w-11 rounded-xl border bg-white">
            <AvatarFallback>{project.name.charAt(0)}</AvatarFallback>
            <AvatarImage
              src={project.icon}
              alt={`Icone do projeto ${project.name} criado por Revogabe / Daniel Gabriel`}
            />
          </Avatar>
          <h6>{project.name}</h6>
          <p className="leading-none">{project.url}</p>
        </div>
        <div className="h-[140px] w-[440px] overflow-hidden rounded-lg border">
          <Image
            width={480}
            height={480}
            className="h-full w-full object-cover saturate-0 group-hover:saturate-100"
            src={project.og_image}
            alt=""
          />
        </div>
      </Card>
    </a>
  )
}
