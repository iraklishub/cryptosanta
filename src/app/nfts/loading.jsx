import { LoadingSpinner } from '@/src/components'

export default function ContactLoading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-900/80 md:bg-transparent">
      <LoadingSpinner className="border-white w-8 h-8 border-4" />
    </div>
  )
}
