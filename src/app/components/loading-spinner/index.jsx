import { clsx } from 'clsx'

const LoadingSpinner = ({ color, size }) => {
  return (
    <div
      className={clsx(
        'rounded-full animate-spin border-2 border-solid border-t-transparent',
        color ? `border-${color}` : 'border-current',
        size ? `w-${size} h-${size}` : 'w-4 h-4'
      )}
    />
  )
}

export default LoadingSpinner
