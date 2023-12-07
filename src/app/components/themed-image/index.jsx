'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/src/utils/store'
import Image from 'next/image'
import backgroundSanta from '@/public/assets/images/santa.jpg'
import backgroundGrinch from '@/public/assets/images/grinch.jpg'

const ThemedImage = () => {
  const { id } = useTheme((state) => state.theme)
  const [current, setcurrent] = useState(0)
  const isGrinch = id === 'grinch'

  useEffect(() => {
    if (isGrinch) {
      setcurrent(1)
    } else {
      setcurrent(0)
    }
  }, [id])

  return (
    <div
      className="fixed w-screen h-screen -z-10 flex transition ease-linear duration-0"
      style={{ transform: `translateX(-${current * 100}%` }}
    >
      <Image
        src={backgroundSanta}
        fill
        priority
        quality={100}
        placeholder="blur"
        alt="backgroundSanta"
        sizes="100vw"
        className="object-cover"
      />
      <Image
        src={backgroundGrinch}
        fill
        quality={100}
        placeholder="blur"
        alt="backgroundGrinch"
        sizes="100vw"
        className="object-cover !left-full"
      />
    </div>
  )
}

export default ThemedImage
