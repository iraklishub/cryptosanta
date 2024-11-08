import clsx from 'clsx'
import { ExitIcon } from '@/src/components'

const FormHeader = ({ title, isGrinch, onExit, className }) => {
  return (
    <div className={`relative text-center ${className || ''}`}>
      <span
        className={clsx(
          'capitalize text-center text-lg md:text-xl lg:text-2xl italic',
          isGrinch ? 'lightning-green' : 'lightning-red'
        )}
      >
        {title}
      </span>
      <button type="button" className="absolute right-4" onClick={onExit}>
        <ExitIcon className="hover:bg-white hover:text-black rounded-xl" />
      </button>
    </div>
  )
}

export default FormHeader
