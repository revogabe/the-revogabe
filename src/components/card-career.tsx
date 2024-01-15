import React from 'react'
import Link from 'next/link'
import { Career } from '@/app/api/careers/route'
import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar'
import { Card } from '@/ui/card'
import { format } from 'date-fns'
import { ExternalLink } from 'lucide-react'

export const CardCareer = (career: Career) => {
  return (
    <Link
      key={career.id}
      className="w-full hover:no-underline"
      href={career.linkedin_url}
      target="_blank"
    >
      <Card className="start bg-card/25 text-foreground hover:bg-secondary/50 group flex w-full gap-5 rounded-lg border p-4 shadow-xl shadow-white/75 backdrop-blur-[4px] backdrop-brightness-110 transition-all duration-150 ease-out dark:shadow-black/15">
        <div className="center-start flex h-full flex-col gap-5">
          <Avatar className="rounded-md border">
            <AvatarFallback>{career.name.charAt(0)}</AvatarFallback>
            <AvatarImage src={career.image} alt={`Logo da ${career.name}`} />
          </Avatar>
        </div>

        <div className="flex h-max w-full flex-col gap-4">
          <div className="w-full">
            <div className="center-between mb-3 flex gap-4">
              <h4 className="bg-secondary/25 rounded-[10px] border px-3 py-1.5 text-sm">
                {career.name}
              </h4>
              <p>
                {`${format(career.period.start.toString(), 'PP')}  -  ${
                  career.period.end === 'in_moment'
                    ? 'At the moment'
                    : format(career.period.end.toString(), 'PP')
                }`}
              </p>
            </div>
            <h6>{career.title}</h6>

            <p>{career.location}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
