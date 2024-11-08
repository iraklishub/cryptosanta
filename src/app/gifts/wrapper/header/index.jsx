import Link from 'next/link'
import { LeftArrowExit } from '@/src/components'

const GiftsHeader = ({ isOpen, setIsOpen }) => (
  <header className="w-full pt-2 pl-2 flex justify-between">
    {isOpen ? (
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
      >
        <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
        <span className="ml-2 capitalize">Exit</span>
      </button>
    ) : (
      <Link
        href="/"
        className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
      >
        <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
        <span className="ml-2 capitalize">Exit</span>
      </Link>
    )}
  </header>
)

export default GiftsHeader
