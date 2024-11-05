'use client'

import { useState } from 'react'
import GiftsHeader from './header'
import GiftsMain from './main'

const GiftsPageWrapper = ({ t, lng }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <GiftsHeader t={t} isOpen={isOpen} setIsOpen={setIsOpen} lng={lng} />
      <GiftsMain t={t} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default GiftsPageWrapper
