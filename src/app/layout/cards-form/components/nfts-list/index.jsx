'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LoadingSpinner } from '@/src/app/components'
import { getNFTs } from '@/src/utils/actions'
import { ConnectButton } from '@rainbow-me/rainbowkit'
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
      <div className="flex justify-center col-span-full mb-3">
        <ConnectButton chainStatus="icon" showBalance={false} />
      </div>
      {isLoading ? (
        <LoadingSpinner className="col-span-full border-4 w-8 h-8" />
      ) : isLoggedIn && !nfts.length ? (
        <span className="col-span-full">No NFTs Found.</span>
      ) : (
        nfts.map(({ identifier, display_image_url, image_url }) => (
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
        ))
      )}
    </>
  )
}

export default NFTsList
