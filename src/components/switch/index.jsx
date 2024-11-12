import { clsx } from 'clsx'

const Switch = ({ id, value, onChange, title, bgColor, checked, disabled, className }) => {
  return (
    <label className={clsx('relative inline-flex items-center cursor-pointer', className)}>
      <input
        id={id}
        type="checkbox"
        value={value}
        className="sr-only peer"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <div
        className={clsx(
          'w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600',
          bgColor ? bgColor : 'bg-gray-700 peer-checked:bg-blue-600'
        )}
      />
      {title && <span className="ml-2 text-sm capitalize font-medium text-gray-200">{title}</span>}
    </label>
  )
}

export default Switch
