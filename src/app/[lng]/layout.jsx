import '@/src/styles/globals.css'
import { Inter } from 'next/font/google'
import { i18n } from '@/i18n'
import Image from 'next/image'
import backgroundImage from '@/public/assets/images/background.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Letter to Santa',
  description: 'Send Letter to Santa Claus!'
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
        <div className="fixed w-full h-full -z-10">
          <Image
            src={backgroundImage}
            fill={true}
            priority={true}
            quality={100}
            alt="background"
            className="object-cover"
          />
        </div>
        {children}
      </body>
    </html>
  )
}
