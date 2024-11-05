import '../../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { i18n } from '@/i18n'
import { getDictionary } from './dictionaries/dictionaries'
import { ThemedImage } from '../components'

import { ToastContainer, Flip } from 'react-toastify'

// connect wallet (rainbow) imports
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowProviders } from '@/src/utils/providers'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }) {
  const lng = params.lng
  const t = await getDictionary(lng)

  return {
    title: t.meta_data.title,
    description: t.meta_data.description,
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`)
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lng: locale }))
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lng}>
      <body className={`${inter.className}`}>
        <ThemedImage />
        <RainbowProviders>{children}</RainbowProviders>
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Flip}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
