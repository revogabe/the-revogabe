'use client'

// Error components must be Client Components
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="center flex h-screen w-full flex-col gap-4 text-center">
      <h2>Something went wrong! </h2>
      <p className="max-w-[500px]">{error.message}</p>
    </main>
  )
}
