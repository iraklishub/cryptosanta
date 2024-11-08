import { clsx } from 'clsx'

const Field = ({ id, type, value, onChange, required, placeholder, className }) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
      className={clsx(
        'outline-0 placeholder:text-neutral-500 border-neutral-700 border-b-2 p-1',
        className
      )}
    />
  )
}

export default Field
