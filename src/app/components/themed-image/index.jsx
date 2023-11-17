'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/src/utils/store'
import Image from 'next/image'

const ThemedImage = () => {
  const { background } = useTheme((state) => state.theme)

  const [component, setComponent] = useState(() => (
    <Image
      src={background}
      fill={true}
      priority={true}
      quality={100}
      placeholder="blur"
      alt="background"
      sizes="100vw"
      className="object-cover"
    />
  ))

  useEffect(() => {
    setComponent(() => (
      <Image
        src={background}
        fill={true}
        priority={true}
        quality={100}
        placeholder="blur"
        alt="background"
        sizes="100vw"
        className="object-cover"
      />
    ))
  }, [background])

  return <div className="fixed w-screen h-screen -z-10 overflow-hidden">{component}</div>
}

export default ThemedImage
