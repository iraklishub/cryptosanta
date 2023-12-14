import Link from 'next/link'
import { LeftArrowExit } from '../../components'
import Image from 'next/image'
import { games } from '../../constants'

export default function Page() {
  const { christmasGames, otherGames } = games

  return (
    <>
      <header className="w-full pt-2 pl-2 flex">
        <Link
          href="/"
          className="text-white font-semibold flex items-center w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrowExit className="w-6 h-6 md:h-8 md:w-8" />
          <span className="ml-2">Back</span>
        </Link>
      </header>
      <main className="text-white font-semibold p-4 w-full h-fit flex flex-col">
        <section className="flex flex-col items-center bg-slate-900/70 rounded-md py-4">
          <h3 className="text-lg font-bold">Christmas Games</h3>
          <div className="flex flex-wrap mt-4 gap-y-6 w-full justify-evenly">
            {christmasGames.map(({ title, link, image }) => (
              <Link href={link} key={title} className="basis-2/5 md:basis-auto text-center">
                <Image
                  src={image}
                  alt={title}
                  width={250}
                  height={250}
                  quality={100}
                  placeholder="blur"
                  className="border-4"
                />
                <span className="text-white font-semibold h-fit">{title}</span>
              </Link>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center bg-slate-900/70 rounded-md py-4 mt-4">
          <h3 className="text-lg font-bold">Other Games</h3>
          <div className="flex flex-wrap mt-4 gap-y-6 w-full justify-evenly">
            {otherGames.map(({ title, link, image }) => (
              <Link href={link} key={title} className="basis-2/5 md:basis-auto text-center">
                <Image
                  src={image}
                  alt={title}
                  width={250}
                  height={250}
                  quality={100}
                  placeholder="blur"
                  className="border-4"
                />
                <span className="text-white font-semibold h-fit">{title}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
