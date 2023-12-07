import { clsx } from 'clsx'

const LoadingSpinner = ({ color, size, thickness }) => {
  return (
    <div
      className={clsx(
        'rounded-full animate-spin border-solid border-t-transparent',
        color ? `border-${color}` : 'border-current',
        thickness ? `border-${thickness}` : 'border-2',
        size ? `w-${size} h-${size}` : 'w-4 h-4'
      )}
    />
  )
}

export default LoadingSpinner
