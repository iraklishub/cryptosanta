import Image from 'next/image'
import Link from 'next/link'
import { OpenseaIcon } from '..'

const Card = ({ title, description, imgUrl, link }) => (
  <div className="max-w-80 border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col gap-4">
    <div className="flex flex-col">
      <Link href={link} target="_blank">
        <Image
          src={imgUrl}
          alt="nft image"
          width={320}
          height={320}
          className="rounded-t-lg w-80 h-auto"
        />
      </Link>
      <div className="px-4 pt-6">
        <Link href={link} target="_blank">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-400 text-sm truncate">{description}</p>
      </div>
    </div>
    <Link
      href={link}
      target="_blank"
      className="inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
    >
      View on OpenSea
      <OpenseaIcon />
    </Link>
  </div>
)

export default Card
