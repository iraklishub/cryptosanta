import React from 'react'

const Field = ({ label, value, required, type, onChange, isTextarea, placeholder, className }) => {
  return (
    <label className={`flex ${isTextarea ? 'flex-col' : 'items-center'} ${className}`}>
      <span className={`capitalize ${isTextarea ? 'text-center text-2xl' : 'w-1/6'}`}>
        {label}
        {required && !isTextarea && ' *'}
      </span>
      {isTextarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-60 bg-orange-100/80 text-stone-950 placeholder:text-stone-700 placeholder:capitalize font-semibold mt-4 outline-0 rounded-md px-4 py-2"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className="bg-transparent outline-0 border-b-2 p-1 ml-2"
        />
      )}
    </label>
  )
}

export default Field
