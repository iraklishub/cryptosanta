import Link from 'next/link'
import { LeftArrowExit } from '@/src/components'
import Image from 'next/image'
import { games } from '@/src/constants'

export default async function Page() {
  const { christmasGames, otherGames } = games

  const gameSections = [
    {
      id: 1,
      section_title: 'Christmas Games',
      games: christmasGames
    },
    {
      id: 2,
      section_title: 'Other Games',
      games: otherGames
    }
  ]

  return (
    <>
      <header className="w-full pt-2 pl-2 flex">
        <Link
          href="/"
          className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
          <span className="ml-2 capitalize">Back</span>
        </Link>
      </header>
      <main className="text-white font-semibold p-4 w-full h-fit flex flex-col gap-4">
        {gameSections.map(({ id, section_title, games }) => (
          <section
            key={id}
            className="flex flex-col items-center bg-slate-900/70 rounded-md p-6 pb-12"
          >
            <h3
              className="text-xl font-bold capitalize underline underline-offset-8 italic"
              style={{ fontFamily: 'monospace' }}
            >
              {section_title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center mt-8 gap-6 w-full">
              {games.map(({ title, link, image }) => (
                <Link href={link} key={title} className="flex flex-col gap-1 text-center">
                  <Image
                    src={image}
                    alt={title}
                    width={250}
                    height={250}
                    quality={100}
                    placeholder="blur"
                    className="border-4"
                  />
                  <span
                    className="text-white font-semibold h-fit text-xl"
                    style={{ fontFamily: 'cursive' }}
                  >
                    {title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}
