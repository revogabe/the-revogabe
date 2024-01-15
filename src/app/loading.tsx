import { Skeleton } from '@/ui/skeleton'

const Loading = () => {
  return (
    <main className="center flex h-screen w-full">
      <Skeleton className="h-24 w-[140px]" />
    </main>
  )
}

export default Loading
