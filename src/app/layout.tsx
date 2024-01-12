import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import '../css/globals.css'

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToggleTheme />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
