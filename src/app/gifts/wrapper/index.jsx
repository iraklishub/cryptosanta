'use client'

import { useState } from 'react'
import GiftsHeader from './header'
import GiftsMain from './main'

const GiftsPageWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <GiftsHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <GiftsMain isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default GiftsPageWrapper
