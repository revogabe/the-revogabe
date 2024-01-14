import React from 'react'
import { Roadmap } from '@/app/api/roadmap/route'
import { Badge } from '@/ui/badge'

export const RoadmapItem = (roadmap: Roadmap) => {
  return (
    <div>
      <div className="center-start flex w-full gap-4">
        <h3>{roadmap.title}</h3>
        {roadmap.badges.map((badge, index) => (
          <Badge key={index} className="px-2.5">
            {badge}
          </Badge>
        ))}
      </div>
      <p className="mt-4 w-full max-w-[680px]">{roadmap.description}</p>
    </div>
  )
}
