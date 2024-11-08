import { LoadingSpinner } from '@/src/components'

export default function GamesLoading() {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <LoadingSpinner className="border-white w-8 h-8 border-4" />
    </div>
  )
}
