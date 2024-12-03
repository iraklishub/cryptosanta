'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LeftArrowExit, LoadingSpinner, Card } from '@/src/components'
import { useAccount } from 'wagmi'
import { getNFTs } from '@/src/utils/actions'

export default function Page() {
  const { address } = useAccount()
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(address))
  const [isLoading, setIsLoading] = useState(true)
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    setIsLoggedIn(Boolean(address))
  }, [address])

  useEffect(() => {
    if (isLoggedIn) {
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
    }

    if (!isLoggedIn) {
      setNfts([])
    }
  }, [isLoggedIn])

  return (
    <>
      <header className="w-full pt-2 pl-2 flex justify-between">
        <Link
          href="/"
          className="text-white font-semibold flex w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrowExit className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Home Page</span>
        </Link>
      </header>
      <main className="p-4 w-full h-fit flex justify-center relative">
        {isLoading ? (
          <LoadingSpinner className="border-4 w-8 h-8 border-white" />
        ) : (
          <div className="bg-slate-900/70 p-8 rounded-md w-full max-w-fit flex flex-wrap justify-evenly gap-4">
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
        )}
      </main>
    </>
  )
}
