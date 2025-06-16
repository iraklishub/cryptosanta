import '../styles/globals.css'

import { Inter } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'

import { ThemedImage } from '../components'

import { ToastContainer, Flip } from 'react-toastify'

// rainbow imports

import '@rainbow-me/rainbowkit/styles.css'
import { RainbowProviders } from '@/src/utils/providers'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  return {
    title: 'Write Christmas/NewYear Letters To Loved Ones',
    description: 'Merry Christmas and Happy New Year, Best Wishes!',
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`)
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  )
}
