'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LeftArrowExit, LoadingSpinner, Card } from '@/src/components'
import { getNFTs } from '@/src/utils/actions'
import collectionImage from '@/public/assets/images/collectionImage.jpg'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  const [nfts, setNfts] = useState([])

  useEffect(() => {
    setIsLoading(true)

    const fetchNFTs = async () => {
      try {
        const data = await getNFTs()
        setNfts(data.nfts)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
        setIsLoading(false)
      }
    }

    fetchNFTs()
  }, [])

  return (
    <>
      <header className="w-full pt-2 pl-2 flex justify-between bg-slate-900/80 md:bg-transparent">
        <Link
          href="/"
          className="text-white font-semibold flex w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrowExit className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Home Page</span>
        </Link>
      </header>
      <main className="md:p-4 w-full h-fit flex flex-col justify-center relative">
        {isLoading ? (
          <div className="w-full h-screen flex items-center justify-center bg-slate-900/80 md:bg-transparent">
            <LoadingSpinner className="border-white w-8 h-8 border-4" />
          </div>
        ) : (
          <>
            <div className="bg-slate-900/80 p-10 flex flex-col md:flex-row text-center md:text-left justify-center items-center gap-4">
              <Link href="https://opensea.io/collection/santababu" target="_blank">
                <Image
                  src={collectionImage}
                  alt="collection image"
                  placeholder="blur"
                  width={128}
                  height={128}
                  className="rounded-t-lg w-32 h-auto"
                />
              </Link>
              <div className="prose prose-h1:text-slate-50 prose-p:text-slate-50 prose-a:text-slate-50">
                <Link href="https://opensea.io/collection/santababu" target="_blank">
                  <h1 className="text-3xl">Crypto Santa's SantaBabu Collection</h1>
                </Link>
                <p>
                  🎅 SantaBabu NFT Collection 🎄 Get into the holiday spirit with the SantaBabu
                  Collection, featuring unique NFTs, Each piece captures the joy and magic of
                  Christmas/NewYear, perfect for collectors and fans of the season 🎁✨
                </p>
              </div>
            </div>
            <div className="bg-slate-900/80 p-2 md:p-8 rounded-md w-full max-w-fit flex flex-wrap justify-evenly gap-4">
              {nfts.map(({ identifier, name, description, display_image_url, opensea_url }) => (
                <Card
                  key={identifier}
                  id={identifier}
                  title={name}
                  description={description}
                  imgUrl={display_image_url}
                  link={opensea_url}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  )
}
