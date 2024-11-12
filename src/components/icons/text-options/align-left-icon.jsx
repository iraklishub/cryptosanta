import clsx from 'clsx'

const AlignLeftIcon = ({ className }) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
      />
    </svg>
  )
}

export default AlignLeftIcon
