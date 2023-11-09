'use client'

import { useTheme } from '@/src/utils/store'
import Image from 'next/image'

const ThemedImage = () => {
  const { background } = useTheme((state) => state.theme)

  return (
    <div className="fixed w-screen h-screen -z-10 overflow-hidden">
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
    </div>
  )
}

export default ThemedImage
