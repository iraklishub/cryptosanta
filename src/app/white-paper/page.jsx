import Link from 'next/link'
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
          <h1 className="text-center">SantaBabu's Token (SANTA) Whitepaper</h1>
          <span className="w-full px-2 font-bold bg-red-300 text-center">
            Fictional example, does not represent an actual project.
          </span>
          <hr className="border-black" />
          <article>
            <h2>Abstract</h2>
            <p>
              Santa's Web App Token (SANTA) is a utility token designed to power a festive ecosystem
              where users can engage with holiday-themed experiences through a decentralized web
              app. With features such as creating personalized NFT greeting cards, writing letters
              to Santa, a gift marketplace, and interactive games, the SANTA token is used for
              in-app purchases, staking rewards, governance, and more. Built on the Ethereum
              blockchain, SANTA brings the magic of Christmas into the digital age by allowing users
              to send gifts, collect holiday-themed NFTs, and engage with the community through
              governance, while ensuring a transparent and rewarding user experience.
            </p>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Introduction</h2>
            <p>
              The holiday season is a time for joy, connection, and celebration, and Santa's Web App
              aims to bring that experience online in a modern, digital format. By combining the
              festive traditions of gift-giving, letter-writing, and holiday games with the power of
              blockchain technology, Santa’s Web App creates an immersive ecosystem where users can
              interact with Santa-themed virtual experiences, earn rewards, and participate in the
              platform’s governance. <br />
              <br /> At the heart of the Santa Web App ecosystem is SANTA, a native token used for
              purchasing digital goods, minting NFTs, sending gifts, staking, and voting on platform
              decisions.
            </p>
            <ul>
              The app allows users to:
              <li>
                Generate NFT Greeting Cards: Mint unique, digital holiday greeting cards that can be
                personalized and shared as NFTs.
              </li>
              <li>
                Write Letters to Santa: Send virtual letters to Santa with the option to include
                digital gifts or custom messages.
              </li>
              <li>
                Gifts Market: Buy, sell, or trade digital gifts, such as NFTs, tokens, and other
                holiday-themed items.
              </li>
              <li>
                Holiday Games: Participate in interactive, Santa-themed games to earn rewards and
                special prizes.
              </li>
            </ul>
            <p>
              The SANTA token facilitates all transactions within the app, and its utility will
              continue to grow as the platform evolves with new holiday-themed functionalities.
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
              Santa’s Web App Token offers a unique value proposition by blending NFT technology
              with holiday-themed experiences. SANTA allows users to create and exchange
              personalized NFTs, a novelty in the seasonal market, while also introducing a new way
              to interact with traditional holiday activities like letter-writing and gift-giving.
            </p>
            <h3>Use Case Examples:</h3>
            <ol>
              <li>
                <strong>NFT Greeting Cards:</strong> Users can create and mint personalized holiday
                greeting cards as NFTs, which can be gifted or sold within the platform’s
                marketplace. Each NFT card is a unique collectible that can include personal
                messages, animated graphics, and special effects.
              </li>
              <li>
                <strong>Write Letters to Santa:</strong> Users can compose letters to Santa and
                customize them with digital gifts, which can be sent to friends and family or used
                to earn rewards. These letters are stored on the blockchain for authenticity and
                nostalgia.
              </li>
              <li>
                <strong>Gifts Market:</strong> Users can buy and sell digital items such as NFT art,
                collectibles, and tokens, creating a virtual holiday marketplace where both gifts
                and experiences can be traded.
              </li>
              <li>
                <strong>Games and Rewards:</strong> Users can participate in holiday-themed games to
                earn SANTA tokens, exclusive NFTs, or other in-app rewards. These games might
                include puzzle challenges, gift-wrapping contests, and treasure hunts across the
                North Pole.
              </li>
            </ol>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Tokenomics</h2>
            <h3>Token Overview</h3>
            <ul>
              <li>Token Name: Santa’s Web App Token</li>
              <li>Symbol: SANTA</li>
              <li>Blockchain: Base (ERC-20)</li>
              <li>Total Supply: 10,000,000,000 SANTA tokens</li>
              <li>Initial Circulating Supply: 1,000,000,000 SANTA tokens</li>
            </ul>
            <h3>Token Allocation</h3>
            <ul>
              <li>Public Sale: 30% (3,000,000,000 SANTA)</li>
              <li>
                Team and Advisors: 15% (1,500,000,000 SANTA) — subject to a 2-year vesting schedule
              </li>
              <li>Partnerships and Marketing: 10% (1,000,000,000 SANTA)</li>
              <li>Ecosystem Development: 15% (1,500,000,000 SANTA)</li>
              <li>Staking Rewards: 20% (2,000,000,000 SANTA)</li>
              <li>Reserve: 10% (1,000,000,000 SANTA)</li>
            </ul>
            <h3>Incentive Model</h3>
            <ul>
              <li>
                NFT Minting and Transactions: SANTA tokens will be used to mint custom holiday NFT
                greeting cards, purchase gifts in the marketplace, and perform other in-app
                transactions.
              </li>
              <li>
                Staking Rewards: Users can stake their SANTA tokens to earn additional tokens or
                exclusive NFTs as holiday rewards.
              </li>
              <li>
                Governance: Token holders will have the ability to vote on proposals for new app
                features, community events, and charity initiatives.
              </li>
              <li>
                Gift Exchange and Rewards: Users can send gifts and tokens to friends and family as
                part of the holiday gift exchange, with both sender and recipient earning rewards in
                the form of tokens, NFTs, or unique experiences.
              </li>
            </ul>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Technical Architecture</h2>
            <h3>Blockchain Platform</h3>
            <p>
              Santa’s Web App is built on Base, using the ERC-20 token standard for the SANTA token.
              Base's robust security features, scalability solutions (Layer 2), and widespread
              adoption make it the ideal choice for managing transactions and minting NFTs on the
              platform.
            </p>
            <h3>Smart Contracts</h3>
            <ul>
              <li>
                Token Contract: The SANTA token will be deployed as an ERC-20 token, allowing users
                to trade, stake, and store tokens securely across Ethereum-compatible wallets.
              </li>
              <li>
                NFT Minting Contract: Users can mint personalized NFT greeting cards via a custom
                smart contract. These NFTs will be minted as ERC-721 tokens, making each card unique
                and verifiable on the blockchain.
              </li>
              <li>
                Marketplace Contract: A decentralized marketplace will allow users to buy, sell, and
                trade digital holiday gifts, NFTs, and tokens. This contract will facilitate secure
                transactions and ownership transfers.
              </li>
              <li>
                Staking Contract: A smart contract will manage staking pools, rewarding users who
                lock up their SANTA tokens with additional tokens or exclusive NFTs.
              </li>
              <li>
                Governance Contract: A decentralized autonomous organization (DAO) framework will
                empower SANTA token holders to vote on proposals affecting the app’s development,
                governance, and charitable donations.
              </li>
            </ul>
          </article>
          <hr className="border-black" />
          <article>
            <h2>Community and Ecosystem</h2>
            <span>Santa’s Web App aims to build a strong, family-friendly community.</span>
            <ul>
              We will engage with users through:
              <li>
                Social Media: Active Twitter, Telegram, and Discord channels for real-time updates
                and community discussions.
              </li>
              <li>
                Influencers: Partnering with holiday-themed influencers and content creators to
                promote the app and engage a broader audience.
              </li>
              <li>
                Charity Programs: Involving users in donating SANTA tokens or digital gifts to
                children’s charities and holiday causes.
              </li>
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
                User Adoption: The platform’s success depends on user adoption and engagement, which
                may be influenced by competition or lack of awareness.
              </li>
              <li>
                Regulatory Changes: As blockchain technology and NFTs continue to evolve, future
                regulations may impact the platform’s operations.
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
              https://www.santababu.online
            </p>
          </article>
          <hr className="border-black" />
          <article>
            <p>
              This whitepaper example outlines an exciting, innovative way to celebrate the holidays
              through Blockchain technology, Tokens and NFTs, blending modern digital tools with
              timeless holiday joy. <br />
              <br />
              <strong>
                P.S whitepaper will be modified, it is a fictional example and does not represent an
                full/actual project.
              </strong>
            </p>
          </article>
        </div>
      </main>
    </>
  )
}
