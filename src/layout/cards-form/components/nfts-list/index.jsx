'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { LoadingSpinner, OpenseaBadgeIcon, ConnectWallet } from '@/src/components'
import { getNFTs } from '@/src/utils/actions'
import { useAccount } from 'wagmi'

const NFTsList = ({ choosedCardID, onClick, isGrinch }) => {
  const { address } = useAccount()

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(address))
  const [isLoading, setIsLoading] = useState(false)
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    setIsLoggedIn(Boolean(address))
  }, [address])

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true)

      const fetchNFTs = async () => {
        try {
          const data = await getNFTs(address)
          setNfts(data.nfts)
          setIsLoading(false)
        } catch (err) {
          console.error(err)
          setIsLoading(false)
        }
      }

      fetchNFTs()
    }

    if (!isLoggedIn) {
      setNfts([])
    }
  }, [isLoggedIn])

  return (
    <>
      {!isLoggedIn && (
        <div className="col-span-full flex flex-col gap-4 items-center justify-center">
          <span className="text-xs md:text-sm text-center">Connect To Use Your NFTs</span>
          <ConnectWallet className="col-span-full mb-3" />
        </div>
      )}
      {isLoading ? (
        <LoadingSpinner className="col-span-full border-4 w-8 h-8 mt-8" />
      ) : isLoggedIn && !nfts.length ? (
        <Link
          href="https://opensea.io/collection/santababu"
          title="Buy on OpenSea"
          target="_blank"
          className="col-span-full flex flex-col gap-4 items-center justify-center"
        >
          <span className="text-xs md:text-sm text-center">No NFTs Found. Buy on OpenSea.</span>
          <OpenseaBadgeIcon className="w-24 md:w-32" />
        </Link>
      ) : (
        <div className="flex gap-2 justify-items-center overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3">
          {nfts.map(({ identifier, display_image_url, image_url }) => (
            <Image
              key={identifier}
              src={display_image_url}
              width={80}
              height={80}
              alt="card"
              placeholder="blur"
              blurDataURL={
                isGrinch
                  ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUuSm1CgADwwGz6P/1bwAAAABJRU5ErkJggg=='
                  : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DgAgAESgFFab83HQAAAABJRU5ErkJggg=='
              }
              className={clsx(
                'cursor-pointer rounded-sm md:w-24 lg:w-28',
                choosedCardID === identifier && 'border-white border-2'
              )}
              onClick={() => onClick({ id: identifier, img: image_url })}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default NFTsList
