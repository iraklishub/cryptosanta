import { getDictionary } from './dictionaries/dictionaries'
import { LanguageSwitcher, Letter } from 'src/app/components'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default async function Page({ params: { lng } }) {
  const dict = await getDictionary(lng)

  return (
    <>
      <header className="flex justify-end p-4 w-full">
        <LanguageSwitcher title={dict.language} />
      </header>
      <main className="p-4 w-full h-full flex justify-center items-center">
        <Letter t={dict.form} sitekey={process.env.RECAPTCHA_SITE_KEY} lng={lng} />
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Flip}
        />
      </main>
    </>
  )
}
