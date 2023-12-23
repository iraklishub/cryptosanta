import Image from 'next/image'
import backgroundMarket from '@/public/assets/images/hd.jpg'
import MarketPageWrapper from './wrapper'
import { getDictionary } from '../dictionaries/dictionaries'

export default async function Page({ params: { lng } }) {
  const t = await getDictionary(lng)

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
      <MarketPageWrapper t={t} lng={lng} />
    </>
  )
}
