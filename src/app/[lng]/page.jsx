import Link from 'next/link'
import { getDictionary } from './dictionaries/dictionaries'
import { LanguageSwitcher, ThemeSwitcher, JoystickIcon, MarketIcon } from 'src/app/components'
import { WriteLetter } from '../layout'

export default async function Page({ params: { lng } }) {
  const t = await getDictionary(lng)

  return (
    <>
      <header className="flex justify-between md:justify-end items-start w-full p-2 pt-4 md:p-4">
        <ThemeSwitcher className="mr-3" />
        <LanguageSwitcher />
      </header>
      <main className="p-4 w-full h-full flex flex-col justify-center items-center">
        <WriteLetter t={t} sitekey={process.env.RECAPTCHA_SITE_KEY} lng={lng} />
        <div className="flex flex-col items-center">
          <Link
            href={`/${lng}/market`}
            className="shadow-lg shadow-red-400 hover:shadow-red-600 mt-6 py-1 min-w-40 flex items-center justify-center bg-white hover:bg-gray-100 active:bg-white rounded"
          >
            <MarketIcon />
            <span className="ml-1.5 text-slate-600 font-semibold capitalize">
              {t.market || 'Market'}
            </span>
          </Link>
          <Link
            href={`/${lng}/games`}
            className="shadow-lg shadow-red-400 hover:shadow-red-600 mt-4 py-1 min-w-40 flex items-center justify-center bg-white hover:bg-gray-100 active:bg-white rounded"
          >
            <JoystickIcon />
            <span className="ml-1.5 text-slate-600 font-semibold capitalize">
              {t.games || 'Games'}
            </span>
          </Link>
        </div>
      </main>
    </>
  )
}
