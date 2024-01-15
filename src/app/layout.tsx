import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import '../css/globals.css'

import Image from 'next/image'
import { ThemeProvider } from '@/providers/theme.provider'
import { ToggleTheme } from '@/ui/toggle-theme'

export const metadata: Metadata = {
  title: 'The Revogabe',
  description: "Flowers are red, violets are blue, I'm a schizophrenic, and so am I.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['light', 'dark']}
          disableTransitionOnChange
        >
          <Image
            src="/background-wide.png"
            alt=""
            width={7800}
            height={3080}
            quality={100}
            className="absolute inset-x-0 h-screen object-cover object-left opacity-50 brightness-150 invert max-2xl:hidden dark:opacity-25 dark:invert-0"
          />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
