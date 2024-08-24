import Link from 'next/link'
import { LeftArrowExit } from '@/src/app/components'

const GiftsHeader = ({ t, isOpen, setIsOpen, lng }) => (
  <header className="w-full pt-2 pl-2 flex justify-between">
    {isOpen ? (
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
      >
        <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
        <span className="ml-2 capitalize">{t.exit || 'exit'}</span>
      </button>
    ) : (
      <Link
        href={`/${lng}`}
        className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
      >
        <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
        <span className="ml-2 capitalize">{t.exit || 'exit'}</span>
      </Link>
    )}
  </header>
)

export default GiftsHeader
