import { LoadingSpinner } from '../components'

export default function HomeLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoadingSpinner color="white" size="8" thickness="8" />
    </div>
  )
}
