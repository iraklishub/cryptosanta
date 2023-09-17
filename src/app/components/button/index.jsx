import { clsx } from 'clsx'

const Button = ({ type, disabled, onClick, variant, className, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        variant === 'outline'
          ? 'bg-transparent text-black hover:bg-gray-100 hover:text-gray-800 font-bold py-2 px-4 border border-black hover:border-gray-400 rounded shadow inline-flex items-center'
          : 'bg-blue-500 font-bold text-white py-2 px-4 rounded inline-flex items-center',
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700',
        className
      )}
      onClick={onClick || null}
    >
      {children}
    </button>
  )
}

export default Button
