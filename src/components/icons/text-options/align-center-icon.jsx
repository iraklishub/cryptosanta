const AlignCenterIcon = ({ className }) => (
  <svg
    className={`w-5 h-5 ${className || ''}`}
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
      d="M8 6h8M6 10h12M8 14h8M6 18h12"
    />
  </svg>
)

export default AlignCenterIcon
