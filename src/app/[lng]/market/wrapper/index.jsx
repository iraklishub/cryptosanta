'use client'

import { useState } from 'react'
import MarketHeader from './header'
import MarketMain from './main'

const MarketPageWrapper = ({ t, lng }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MarketHeader t={t} isOpen={isOpen} setIsOpen={setIsOpen} lng={lng} />
      <MarketMain t={t} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default MarketPageWrapper
