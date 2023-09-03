import React from 'react'

const Button = ({ type, disabled, onClick, className, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        bg-blue-500 font-bold text-white py-2 px-4 rounded inline-flex items-center 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} 
        ${className}       
      `}
      onClick={onClick || null}
    >
      {children}
    </button>
  )
}

export default Button
