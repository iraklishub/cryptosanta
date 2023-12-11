import { clsx } from 'clsx'

const LoadingSpinner = ({ className }) => {
  return (
    <div
      className={clsx(
        'w-4 h-4 rounded-full animate-spin border-current border-solid border-t-transparent border-2',
        className
      )}
    />
  )
}

export default LoadingSpinner
