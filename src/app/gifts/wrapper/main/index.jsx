'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AmazonIcon, AmazonLogoIcon, Button } from '@/src/components'
import { marketItems } from '@/src/constants'
import Lottie from 'lottie-react'
import saleAnimationData from '@/src/constants/christmas-sale-animation.json'
import giftsAnimationData from '@/src/constants/gifts-animation.json'

const GiftsMain = ({ isOpen, setIsOpen }) => {
  const saleRef = useRef(null)

  return isOpen ? (
    <main className="text-white font-semibold p-4 w-full flex-grow flex items-center">
      <section className="flex flex-col items-center bg-slate-900/70 rounded-md py-6">
        <h3 className="text-lg font-bold capitalize">Christmas Market</h3>
        <div className="flex flex-wrap mt-8 gap-y-6 w-full justify-evenly">
          {marketItems.map(({ title, link, image }) => (
            <Link
              href={link}
              key={title}
              className="basis-4/5 relative md:basis-auto w-96 flex flex-col items-center text-center"
            >
              <AmazonIcon className="absolute left-0 top-0 w-4 md:w-6" />
              <Image
                src={image}
                alt={title}
                width={500}
                height={100}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DgAgAESgFFab83HQAAAABJRU5ErkJggg=="
                className="border-4"
              />
              <span className="text-xs md:text-sm text-white mt-2 flex flex-col md:flex-row items-center font-semibold">
                {title} <AmazonLogoIcon className="h-fit mt-2 md:ml-2" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  ) : (
    <div className="flex flex-col flex-grow items-center justify-center relative">
      <Lottie loop={true} animationData={giftsAnimationData} className="w-32 -mb-0.5" />
      <Button
        type="button"
        onClick={() => setIsOpen(true)}
        variant="outline"
        className={
          'min-w-[8rem] h-fit shadow-2xl shadow-red-600 bg-white border-0 -mt-px capitalize justify-center'
        }
      >
        Enter Market
      </Button>
      <Lottie
        onComplete={() => saleRef.current?.goToAndPlay(112, true)}
        lottieRef={saleRef}
        loop={false}
        animationData={saleAnimationData}
        className="w-52"
      />
    </div>
  )
}

export default GiftsMain
