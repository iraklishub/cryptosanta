import Link from 'next/link'
import { routeNames } from '../../constants'
import { LeftArrow } from '../../components'
import Image from 'next/image'
import stickSantaImage from '@/public/assets/images/games/sticksanta.jpg'
import santasWarehouseImage from '@/public/assets/images/games/santaswarehouse.jpg'
import santaOnSkateImage from '@/public/assets/images/games/santaonskates.jpg'
import zballChristmasImage from '@/public/assets/images/games/zballchristmas.jpg'
import towerTwistImage from '@/public/assets/images/games/towertwist.jpg'
import ticTacToeImage from '@/public/assets/images/games/tictactoe.jpg'
import brickPlungeImage from '@/public/assets/images/games/brickplunge.jpg'
import mergeManiaImage from '@/public/assets/images/games/mergemania.jpg'
import wordFinderImage from '@/public/assets/images/games/wordfinder.jpg'
import blazingBladeImage from '@/public/assets/images/games/blazingblade.jpg'
import escapeRunImage from '@/public/assets/images/games/escaperun.jpg'

export default function Page({ params: { lng } }) {
  const {
    santaOnSkateRoute,
    stickSantaRoute,
    zballChristmasRoute,
    santasWarehouseRoute,
    mergeManiaRoute,
    blazingBladeRoute,
    wordFinderRoute,
    ticTacToeRoute,
    brickPlungeRoute,
    escapeRunRoute,
    towerTwistRoute
  } = routeNames(lng)

  const christmasGames = [
    { title: 'Stick Santa', link: stickSantaRoute, image: stickSantaImage },
    { title: 'zBall Christmas', link: zballChristmasRoute, image: zballChristmasImage },
    { title: "Santa's Warehouse", link: santasWarehouseRoute, image: santasWarehouseImage },
    { title: 'Santa On Skate', link: santaOnSkateRoute, image: santaOnSkateImage }
  ]

  const otherGames = [
    { title: 'Tower Twist', link: towerTwistRoute, image: towerTwistImage },
    { title: 'Tic Tac Toe', link: ticTacToeRoute, image: ticTacToeImage },
    { title: 'Brick Plunge', link: brickPlungeRoute, image: brickPlungeImage },
    { title: 'Merge Mania', link: mergeManiaRoute, image: mergeManiaImage },
    { title: 'Word Finder', link: wordFinderRoute, image: wordFinderImage },
    { title: 'Blazing Blade', link: blazingBladeRoute, image: blazingBladeImage },
    { title: 'Escape Run', link: escapeRunRoute, image: escapeRunImage }
  ]

  return (
    <>
      <header className="w-full pt-2 pl-2 flex">
        <Link href="/" className="text-white font-semibold flex w-auto">
          <LeftArrow className="w-7 h-7" />
          <span className="ml-2 hidden md:inline">Back</span>
        </Link>
      </header>
      <main className="text-white font-semibold p-4 w-full h-fit flex flex-col">
        <section className="flex flex-col items-center bg-slate-900/70 rounded-md py-4">
          <h3 className="text-lg font-bold">Christmas Games</h3>
          <div className="flex flex-wrap mt-4 gap-y-6 w-full justify-evenly">
            {christmasGames.map(({ title, link, image }) => (
              <Link href={link} key={title} className="basis-2/5 md:basis-auto text-center">
                <Image src={image} alt={title} className="border-4" width={250} height={250} />
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
