'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from '@/src/utils/store'
import { MenuIcon } from '@/src/components'

const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'contact', title: 'Contact' },
  { id: 'nfts', title: 'NTF Collection' },
  { id: 'token', title: 'Token' }
]

const Navigation = ({ className }) => {
  const { id } = useTheme((state) => state.theme)
  const isGrinch = id === 'grinch'

  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null) // Ref for the mobile menu
  const buttonRef = useRef(null) // Ref for the hamburger button

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      // If the click is outside the menu and the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false) // Close the menu
      }
    }

    // Add event listener for click events on the document
    document.addEventListener('mousedown', handleClickOutside)

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className={`flex items-center relative w-fit ${className || ''}`}>
      <button
        ref={buttonRef} // Attach the ref to the hamburger button
        type="button"
        className={`text-white border-2 rounded-lg ${
          isGrinch ? 'border-green-600' : 'border-red-600'
        }`}
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <ul
          ref={menuRef} // Attach the ref to the mobile menu
          className={`px-4 py-1 h-fit flex flex-col text-center bg-slate-100 rounded font-bold ${
            isGrinch ? 'text-green-500' : 'text-red-500'
          } absolute top-14 right-0`}
        >
          {navLinks.map(({ id, title }, index) => (
            <React.Fragment key={id}>
              <li key={id} className="flex hover:animate-pulse">
                <Link href={`/${id}`} onClick={() => setIsOpen(false)} className={`w-full p-4`}>
                  {title}
                </Link>
              </li>
              {index < navLinks.length - 1 && (
                <hr
                  className={`w-full border ${isGrinch ? 'border-green-600' : 'border-red-600'}`}
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navigation
