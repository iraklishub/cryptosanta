const Field = ({ type, value, onChange, required, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete="off"
      className={`bg-transparent outline-0 placeholder:text-neutral-500 border-neutral-700 border-b-2 p-1 ${className}`}
    />
  )
}

export default Field
