import Link from 'next/link'
import Image from 'next/image'
import token from '@/public/assets/icons/token.png'
import { LeftArrowExit } from '@/src/components'

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
        <div className="bg-slate-200 p-8 rounded-md prose prose-stone">
          <div className="flex items-center gap-4">
            <h1 className="text-center m-0">SantaBabu (SANTA) Token Whitepaper</h1>
            <Image src={token} alt="token icon" width={100} height={116} quality={100} priority />
          </div>
          <hr className="border-black" />
          <article>
            <h2>Abstract</h2>
            <p>
              SantaBabu (SANTA) Token is the native token of the SantaBabu WebApp, a platform where
              users can create and send personalized Christmas and New Year letters/cards. It also
              features interactive holiday-themed games and a catalog/marketplace of gifts. The
              token unlocks premium features, exclusive rewards, and enhances user engagement within
              the SantaBabu ecosystem. Through active participation, users can earn tokens and enjoy
              a richer, more rewarding experience, strengthening the community and the platform's
              unique holiday interactions.
            </p>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Introduction</h2>
            <p>
              The holiday season is a time for joy, connection, and celebration, and SantaBabu Web
              App aims to bring that experience online in a modern, digital format. By combining the
              festive traditions of letter-writing, gift-giving, and holiday games with the power of
              blockchain technology, SantaBabu Web App creates an ecosystem where users can interact
              with Santa-themed virtual experiences.
            </p>
            <ul>
              The app allows users to:
              <li>
                Write Letters to Santa: Send virtual letters to Santa with the premium features
                accessible via SANTA tokens.
              </li>
              <li>
                Generate Greeting/Holiday Cards: digital holiday greeting cards that can be
                personalized, shared and printed. Basic card designs are available for free, while
                premium cards can be unlocked using SANTA tokens. Additionally, NFTs from the
                SantaBabu collection can also be used to customize these cards.
              </li>
              <li>
                Gifts Market: In the SantaBabu Gifts Market, Users can link their external stores,
                i.e such as Amazon or Shopify, to their Gifts Market page, allowing other users to
                easily view and purchase items from their storefronts. This feature connecting
                e-commerce with the SantaBabu platform. <br /> Also users can set up internal store
                to showcase and sell holiday-themed digital items, such as
                <ul>
                  <li>
                    NFTs: Unique holiday-themed NFTs, such as collectible art, animations, or
                    avatars.
                  </li>
                  <li>
                    Virtual Assets: Items like digital clothing, accessories, or skins for avatars
                    in games.
                  </li>

                  <li>
                    Digital Collectibles: Special edition holiday-themed digital items like
                    wallpapers, GIFs, or soundtracks.
                  </li>
                  <li>
                    Game-Related Items: Gaming avatar items, in-game skins, or virtual gifts tied to
                    popular games.
                  </li>
                </ul>
              </li>
              <li>
                Holiday Games: Participate in games from SantaBabu's partner game studios for
                rewards and exclusive prizes.
              </li>
            </ul>
            <p>
              The SANTA token facilitates transactions within the app, and its utility will continue
              to grow as the platform evolves with new holiday-themed functionalities.
            </p>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Market Opportunity and Use Case</h2>
            <p>
              The global digital entertainment and NFT markets are growing at an accelerated pace.
              In 2023, the NFT market alone surpassed $20 billion in transaction volume, with a
              significant portion coming from the collectibles, arts, and holiday-based segments.
              Similarly, the demand for digital gifting is projected to continue growing, with
              consumers seeking unique, personalized ways to share the holiday spirit. <br />
              <br />
              SantaBabu taps into this trend by bringing holiday traditions to "Web3", offering a
              platform for digital gifts, NFTs, and virtual collectibles. As demand grows for
              digital assets and holiday gifting is a tradition, SantaBabu is positioned to capture
              this evolving space, enabling users to engage with the holidays in innovative ways.
            </p>
            <h3>Use Case Examples:</h3>
            <ol>
              <li>
                <strong>Write Letters to Santa:</strong> Users can compose letters to Santa and
                customize them with digital gifts, which can be sent to friends and family or used
                to earn rewards. These letters can be stored on the blockchain for authenticity and
                nostalgia.
              </li>
              <li>
                <strong>NFT Greeting Cards:</strong> Users can create personalized holiday greeting
                cards with their SantaBabu NFTs, which can be shared to friends and family or
                printed.
              </li>
              <li>
                <strong>Gifts Market:</strong> Users can explore and purchase holiday-themed items,
                digital and physical gifts, digital items such as NFTs, collectibles, and virtual
                assets and physical by link to external e-commerce platforms - Users that have
                e-commerce accounts on platforms like Amazon or Shopify, can add their online stores
                to Gifts Market, this connects SantaBabu to the broader e-commerce world, allowing
                for a seamless digital shopping experience.
              </li>
              <li>
                <strong>Games and Rewards:</strong>
                Users can participate in games from SantaBabu's partner game studios for rewards and
                exclusive prizes.
              </li>
            </ol>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Tokenomics</h2>
            <h3>Token Overview</h3>
            <ul>
              <li>Token Name: SantaBabu</li>
              <li>Symbol: SANTA</li>
              <li>Blockchain: Base (Ethereum L2)</li>
              <li>Total Supply: 25 000 000 000 000 (25 trillion) SANTA tokens</li>
            </ul>
            <h3>Token Allocation</h3>
            <ul>
              <li>Public Sale 2024: 20% (5 000 000 000 000 SANTA)</li>
              <li>Owner: 80% (20 000 000 000 000 SANTA)</li>
            </ul>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Technical Architecture</h2>
            <h3>Blockchain Platform</h3>
            <p>
              Web App is built on Base chain. NFTs (ERC-1155) and SANTA token (ERC-20). Base's
              robust security features, scalability solutions (Layer 2), and widespread adoption
              make it the ideal choice for managing transactions and minting NFTs.
            </p>
            <h3>Smart Contracts</h3>
            <ul>
              <li>
                Token: The SANTA token is deployed as an ERC-20 token, allowing users to trade and
                store tokens securely across Eth/Base-compatible wallets.
              </li>
              <li>
                NFT Minting: NFTs are minted on Base chain and available for sale on Opensea NFT
                platform. These NFTs are minted as ERC-1155 tokens, making each card unique and
                verifiable on the blockchain.
              </li>
            </ul>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Community and Ecosystem</h2>
            <span>
              SantaBabu Web App aims to build a strong, christmas holiday lovers community.
            </span>
            <ul>
              We will engage with users through:
              <li>X Account - for real-time updates and community discussions.</li>
              <li>Telegram Channel - for real-time updates and community discussions.</li>
            </ul>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Risk Factors and Challenges</h2>
            <ul>
              <li>
                Market Volatility: The value of SANTA tokens can fluctuate due to market forces, and
                users should be aware of the risks associated with cryptocurrency investments.
              </li>
              <li>
                User Adoption: The project's success depends on user adoption and engagement, which
                may be influenced by competition or lack of awareness.
              </li>
              <li>
                Regulatory Changes: As blockchain technology and NFTs continue to evolve, future
                regulations may impact the platform's operations.
              </li>
            </ul>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Conclusion</h2>
            <p>
              SantaBabu's Web App Token (SANTA) offers a novel way to blend blockchain technology
              with the timeless holiday spirit. By creating an ecosystem of NFTs, personalized
              experiences, digital gifts, and games, SANTA provides an exciting and rewarding way
              for users to engage with the magic of Christmas. As the platform continues to grow,
              SANTA will evolve to offer even more ways for users to connect, create, and celebrate
              the season with their loved ones.
            </p>
          </article>
          <hr className="border-black" />
          <article>
            <p>
              <strong>Join us in celebrating the magic of the holidays with SANTA!</strong> <br />
              <Link href="https://santababu.online" className="underline">
                Santababu.online
              </Link>
              <br />
              <Link href="https://x.com/santababux" className="underline" target="_blank">
                X.com
              </Link>
              <br />
              <Link href="https://t.me/santababutg" className="underline" target="_blank">
                Telegram
              </Link>
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
