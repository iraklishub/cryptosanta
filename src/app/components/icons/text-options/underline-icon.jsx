import clsx from 'clsx'

const UnderlineIcon = ({ className }) => {
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
        stroke-width="2"
        d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
      />
    </svg>
  )
}

export default UnderlineIcon
