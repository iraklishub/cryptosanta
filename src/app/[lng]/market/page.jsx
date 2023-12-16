'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { LeftArrowExit, AmazonIcon, AmazonLogoIcon, Button } from '../../components'
import Image from 'next/image'
import { marketItems } from '../../constants'
import backgroundMarket from '@/public/assets/images/hd.jpg'
import Lottie from 'lottie-react'
import saleAnimationData from '@/src/app/constants/christmas-sale-animation.json'
import giftsAnimationData from '@/src/app/constants/gifts-animation.json'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const saleRef = useRef(null)

  return (
    <>
      <div className="fixed w-screen h-screen -z-10">
        <Image
          src={backgroundMarket}
          fill
          quality={100}
          placeholder="blur"
          alt="backgroundMarket"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <header className="w-full pt-2 pl-2 flex justify-between">
        {isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
          >
            <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
            <span className="ml-2">Exit</span>
          </button>
        ) : (
          <Link
            href="/"
            className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
          >
            <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
            <span className="ml-2">Exit</span>
          </Link>
        )}
      </header>
      {isOpen ? (
        <main className="text-white font-semibold p-4 w-full h-fit flex flex-col">
          <section className="flex flex-col items-center bg-slate-900/70 rounded-md py-6">
            <h3 className="text-lg font-bold">Christmas Market</h3>
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
        <div className="flex flex-col items-center">
          <Lottie loop={true} animationData={giftsAnimationData} className="w-32 -mb-0.5" />
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            variant="outline"
            className={'w-fit h-fit shadow-2xl shadow-red-600 bg-white border-0 -mt-px'}
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
      )}
    </>
  )
}
