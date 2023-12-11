import Link from 'next/link'
import { LeftArrow } from '../../components'

export default function Page({ params: { lng } }) {
  return (
    <>
      <header className="w-full pt-2 pl-2 flex">
        <Link
          href="/"
          className="text-white font-semibold flex w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrow className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Home Page</span>
        </Link>
      </header>
      <main className="text-white font-semibold p-4 w-full h-fit flex flex-col"></main>
    </>
  )
}
