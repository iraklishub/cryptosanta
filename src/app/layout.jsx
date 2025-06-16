import '@/src/styles/globals.css'

import { Inter } from 'next/font/google'
import { ToastContainer, Flip } from 'react-toastify'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowProviders, ThemedImage } from '@/src/components'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { getConfig } from '@/src/utils/config'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  return {
    title: 'Write Christmas/NewYear Letters To Loved Ones',
    description: 'Merry Christmas and Happy New Year, Best Wishes!',
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`)
  }
}

export default async function RootLayout({ children }) {
  const initialState = cookieToInitialState(getConfig(), (await headers()).get('cookie'))
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemedImage />
        <RainbowProviders initialState={initialState}>{children}</RainbowProviders>
        <ToastContainer
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Flip}
        />
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  )
}
