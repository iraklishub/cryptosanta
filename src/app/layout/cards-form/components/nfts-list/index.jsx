'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LoadingSpinner, Button } from '@/src/app/components'
import { getNFTs } from '@/src/utils/actions'

const NFTsList = ({ choosedCardID, onClick, isGrinch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [nfts, setNfts] = useState([])

  const address = '0x1a811AF6AD8C8A37973e7ee42cE45c360ae24033'

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
  }, [isLoggedIn])

  return isLoggedIn ? (
    isLoading ? (
      <LoadingSpinner className="md:absolute top-24 left-40 border-4 w-8 h-8" />
    ) : !nfts.length ? (
      <span>No NFTs Found.</span>
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
    )
  ) : (
    <div className="md:absolute top-24 left-0 w-full flex justify-center">
      <Button type="button" onClick={() => setIsLoading(true)}>
        {isLoading ? (
          <>
            <LoadingSpinner className="mr-2" /> Connecting...
          </>
        ) : (
          'Connect Wallet'
        )}
      </Button>
    </div>
  )
}

export default NFTsList
