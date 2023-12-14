import clsx from 'clsx'
import Link from 'next/link'
import { getDictionary } from './dictionaries/dictionaries'
import {
  LanguageSwitcher,
  Letter,
  ThemeSwitcher,
  JoystickIcon,
  MarketIcon
} from 'src/app/components'

export default async function Page({ params: { lng } }) {
  const dict = await getDictionary(lng)

  return (
    <>
      <header className="flex justify-between md:justify-end items-start w-full p-2 pt-4 md:p-4">
        <div className="flex flex-col md:flex-row items-center">
          <ThemeSwitcher />
          <Link
            href={`/${lng}/games`}
            className={clsx(
              'mt-2 w-full flex items-center justify-center bg-white hover:bg-gray-100 active:bg-white rounded-lg py-1',
              'md:w-fit md:px-2 md:mt-0 md:justify-start md:mx-2'
            )}
          >
            <JoystickIcon />
            <span className="ml-1.5 text-slate-500 font-semibold">Games</span>
          </Link>
          <Link
            href={`/${lng}/market`}
            className={clsx(
              'mt-2 w-full flex items-center justify-center bg-white hover:bg-gray-100 active:bg-white rounded-lg py-1',
              'md:w-fit md:px-2 md:mt-0 md:justify-start md:mx-2'
            )}
          >
            <MarketIcon />
            <span className="ml-1.5 text-slate-500 font-semibold">Market</span>
          </Link>
        </div>
        <LanguageSwitcher />
      </header>
      <main className="p-4 w-full h-full flex justify-center items-center">
        <Letter t={dict.form} sitekey={process.env.RECAPTCHA_SITE_KEY} lng={lng} />
      </main>
    </>
  )
}
