'use client'

import { useState } from 'react'
import GiftsHeader from './header'
import GiftsMain from './main'

const GiftsPageWrapper = ({ t, lng }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <GiftsHeader t={t} isOpen={isOpen} setIsOpen={setIsOpen} lng={lng} />
      <GiftsMain t={t} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default GiftsPageWrapper
