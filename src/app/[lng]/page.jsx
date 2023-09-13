import { getDictionary } from './dictionaries/dictionaries'
import { LanguageSwitcher, LetterForm } from 'src/app/components'
import { ToastContainer } from 'react-toastify'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css'

export default async function Page({ params: { lng } }) {
  const dict = await getDictionary(lng)

  return (
    <>
      <header className="flex justify-end p-4 w-full">
        <LanguageSwitcher title={dict.language} />
      </header>
      <main className="p-4 w-full h-full flex justify-center">
        <LetterForm t={dict.form} sitekey={process.env.RECAPTCHA_SITE_KEY} lng={lng} />
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
      <footer className="w-full p-4 text-white inline-flex justify-end font-semibold">
        <Link href="/contact" className="text_shadow">
          Contact
        </Link>
        <span className="ml-2">|</span>
        <Link href="/privacy-policy" className="ml-2 text_shadow">
          Privacy Policy
        </Link>
      </footer>
    </>
  )
}
