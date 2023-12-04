import Link from 'next/link'

export default function Game({ params: { lng } }) {
  return (
    <>
      <header>
        <Link href="/">
          <span className="text-white font-semibold">Exit Game</span>
        </Link>
      </header>
      <main className="text-white font-semibold p-4 w-full h-full flex justify-center items-center">
        Game
      </main>
    </>
  )
}
