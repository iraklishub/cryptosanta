import Link from 'next/link'
import Image from 'next/image'
import token from '@/public/assets/icons/token.png'
import { LeftArrowExit, UniswapIcon, GeckoTerminalIcon, ETHIcon } from '@/src/components'

export default function Page() {
  return (
    <>
      <header className="w-full pt-2 pl-2 flex">
        <Link
          href="/"
          className="text-white font-semibold flex w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrowExit className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Home Page</span>
        </Link>
      </header>
      <main className="p-4 w-full h-fit flex justify-center">
        <div className="bg-slate-200 p-8 rounded-md w-full prose prose-stone">
          <div className="flex items-center gap-4">
            <h1 className="text-center m-0 text-2xl md:text-4xl">SantaBabu (SANTA) Token</h1>
            <Image
              src={token}
              alt="token icon"
              width={80}
              height={96}
              quality={100}
              priority
              className="md:w-[100px] md:h-[116px]"
            />
          </div>

          <section>
            <h2 className="text-xl font-semibold mt-6">Token Overview</h2>
            <p>
              The SantaBabu (SANTA) token is a fun and community-driven ERC-20 token built on the
              Base Chain. It's designed to enhance the experience on the SantaBabu platform.
            </p>
            <hr className="border-black" />

            <h2 className="text-xl font-semibold mt-6">Technical Info</h2>
            <ul className="list-none p-0">
              <li>
                <strong>Blockchain:</strong> Base Chain (ERC-20)
              </li>
              <li>
                <strong>Total Supply:</strong> 1,000,000,000 SANTA tokens
              </li>
              <li>
                <strong>Token Address:</strong>{' '}
                <Link
                  href="https://basescan.org/token/0x5a4C81600dF2f76a19aC97eE1d31E82eCFd5C33D"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="basescan.org explorer"
                  className="text-sm md:text-base token-address"
                >
                  0x5a4C81600dF2f76a19aC97eE1d31E82eCFd5C33D
                </Link>
              </li>
            </ul>
            <hr className="border-black" />

            <h2 className="text-xl font-semibold mt-6">Where to Buy</h2>
            <p>
              You can buy or trade SantaBabu (SANTA) tokens on the decentralized exchange (DEX):
            </p>
            <ul className="ps-0 md:ps-6">
              <li className="list-none">
                <Link
                  href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5a4C81600dF2f76a19aC97eE1d31E82eCFd5C33D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit"
                >
                  <UniswapIcon />
                  Uniswap (ETH/SANTA)
                  <span className="flex items-center gap-1">
                    <ETHIcon className="-mr-1" />|
                    <Image src={token} alt="token icon" width={22} height={22} quality={100} />
                  </span>
                </Link>
              </li>
            </ul>
            <hr className="border-black" />

            <h2 className="text-xl font-semibold mt-6">Token Analytics</h2>
            <p>
              Access real-time market data, performance metrics, and analytical insights for the
              token:
            </p>
            <ul className="ps-0 md:ps-6">
              <li className="list-none">
                <Link
                  href="https://www.geckoterminal.com/base/pools/0x7ce1a029c36e1c416189f6591d463d44f394ef19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 no-underline w-fit"
                >
                  <GeckoTerminalIcon />
                  <span className="font-medium">
                    <span className="text-[#725ef6] font-bold">Gecko</span>Terminal (ETH/SANTA)
                  </span>

                  <span className="flex items-center gap-1">
                    <ETHIcon className="-mr-1" />|
                    <Image src={token} alt="token icon" width={22} height={22} quality={100} />
                  </span>
                </Link>
              </li>
            </ul>
            <hr className="border-black" />

            <h2 className="text-xl font-semibold mt-6">Use Cases</h2>
            <p>
              The SANTA token is going to power the SantaBabu ecosystem, enabling users to unlock
              premium features and create personalized holiday experiences. Users can earn rewards
              and participate in exclusive app features!
            </p>
            <hr className="border-black" />

            <h2 className="text-xl font-semibold mt-6">Future Plans</h2>
            <p>
              As the project grows, we plan to list SANTA on more exchanges, enhance the ecosystem
              with new features, integrate token with them. Hodlers and active participants will be
              rewarded as the SantaBabu community expands.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
