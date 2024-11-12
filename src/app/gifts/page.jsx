import Image from 'next/image'
import backgroundMarket from '@/public/assets/images/hd.jpg'
import GiftsPageWrapper from './wrapper'

export default async function Page() {
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
      <GiftsPageWrapper />
    </>
  )
}
