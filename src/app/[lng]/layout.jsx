import '../../styles/globals.css'
import { Inter } from 'next/font/google'
import { i18n } from '@/i18n'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getDictionary } from './dictionaries/dictionaries'
import { ThemedImage } from '../components'
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }) {
  const lng = params.lng
  const t = await getDictionary(lng)

  return {
    title: t.meta_data.title,
    description: t.meta_data.description
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lng: locale }))
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lng}>
      <body
        className={`${inter.className} h-screen bg-cover bg-center flex flex-col items-center justify-between relative`}
      >
        <ThemedImage />
        {children}
        <Analytics />
        <SpeedInsights />
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Flip}
        />
      </body>
    </html>
  )
}
