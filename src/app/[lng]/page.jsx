import { getDictionary } from './dictionaries/dictionaries'
import { LanguageSwitcher } from 'src/app/components'
// import Image from 'next/image'
// import Link from 'next/link'
// import Logo from '../../../public/assets/images'

export default async function Page({ params: { lng } }) {
  const dict = await getDictionary(lng)

  return (
    <>
      <header className="flex justify-end px-4 bg-cover bg-center h-1/6">
        {/* <Link href="/" className="flex items-center">
          <Image src={Logo} width={100} height={100} alt="logo" className="mr-4" />
          <h1 className="font-semibold text-6xl tracking-wide font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-600 via-red-200 to-cyan-200">
            {dict.ho_ho_ho}
          </h1>
          <Image src={Logo} width={100} height={100} alt="logo" className="ml-4" />
        </Link> */}
        <LanguageSwitcher title={dict.language} />
      </header>
      <main className="bg-contain bg-no-repeat bg-center h-5/6">{dict.home_page}</main>
    </>
  )
}
