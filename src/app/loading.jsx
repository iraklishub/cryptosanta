import { LoadingSpinner } from '../components'

export default function HomeLoading() {
  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
      <LoadingSpinner className="border-white w-8 h-8 border-4" />
    </div>
  )
}
