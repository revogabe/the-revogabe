import React from 'react'
import Image from 'next/image'
import { Project } from '@/app/api/projects/route'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { cn } from '@/utils'
import { SiOpenai } from 'react-icons/si'

export const CardProject = (project: Project) => {
  return (
    <a href={project.url} target="_blank" className="group w-full hover:no-underline 2xl:w-[400px]">
      <Card className="start-center flex h-full gap-5 p-4 duration-100 ease-in-out hover:opacity-75 max-lg:w-full">
        <div className="start-center flex w-full flex-col gap-3">
          <Image
            width={1500}
            height={1500}
            quality={100}
            src={project.icon}
            className={cn('h-11 w-11 overflow-visible', {
              'scale-125': project.id === 'comakit',
            })}
            alt={`Icone do projeto ${project.name} criado por Revogabe / Daniel Gabriel`}
          />
          <h5>{project.name}</h5>
          <p className="line-clamp-1 max-w-[140px] leading-none">{project.url}</p>
        </div>
        <div className="h-[140px] w-[440px] overflow-hidden rounded-lg border">
          <Image
            width={480}
            height={480}
            className="h-full w-full object-cover"
            src={project.og_image}
            alt=""
          />
        </div>
      </Card>
    </a>
  )
}
