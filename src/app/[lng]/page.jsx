import { getDictionary } from './dictionaries/dictionaries'
import { LanguageSwitcher, ThemeSwitcher } from 'src/app/components'
import { CardsButton, WriteToSantaButton, MarketGameButtons } from '../layout'

export default async function Page({ params: { lng } }) {
  const t = await getDictionary(lng)

  return (
    <div className="h-screen flex flex-col items-center justify-between relative">
      <header className="flex justify-between md:justify-end items-start w-full p-2 pt-4 md:p-4">
        <ThemeSwitcher className="mr-3" />
        <LanguageSwitcher />
      </header>
      <main className="p-4 w-full h-full flex flex-col justify-center items-center">
        <WriteToSantaButton t={t} />
        <CardsButton t={t} />
        <MarketGameButtons t={t} lng={lng} />
      </main>
    </div>
  )
}
