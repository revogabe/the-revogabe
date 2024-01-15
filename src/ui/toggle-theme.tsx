'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Badge } from './badge'

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  return (
    <Badge
      onClick={theme === 'light' ? () => setTheme('dark') : () => setTheme('light')}
      variant="secondary"
      className="center hover:bg-primary hover:text-background flex cursor-pointer select-none gap-2 duration-100"
    >
      <Sun className="flex h-[0.9rem] w-[0.9rem] rotate-0 transition-all dark:hidden dark:-rotate-90" />
      <Moon className="hidden h-[0.9rem] w-[0.9rem] rotate-90 transition-all dark:flex dark:rotate-0" />
      Toggle theme
    </Badge>
  )
}
