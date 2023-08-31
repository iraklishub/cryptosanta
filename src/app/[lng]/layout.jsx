import '@/src/styles/globals.css'
import { Inter } from 'next/font/google'
import { i18n } from '@/i18n'
import { LanguageSwitcher } from 'src/app/components'

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
      <body className={inter.className}>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  )
}
