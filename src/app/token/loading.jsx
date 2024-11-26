import { LoadingSpinner } from '@/src/components'

export default function TokenLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoadingSpinner className="border-white w-8 h-8 border-4" />
    </div>
  )
}
