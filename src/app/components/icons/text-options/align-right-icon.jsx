import clsx from 'clsx'

const AlignRightIcon = ({ className }) => {
  return (
    <svg
      className={clsx('w-5 h-5', className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18 6h-8m8 4H6m12 4h-8m8 4H6"
      />
    </svg>
  )
}

export default AlignRightIcon
