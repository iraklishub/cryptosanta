import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  // subsets: ['latin', 'cyrillic'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

// Georgian custom fonts
export const bpgBanner = localFont({
  src: './ka/bpg_banner.ttf',
  display: 'swap'
})
export const bpgBannerCaps = localFont({
  src: './ka/bpg_banner_caps.ttf',
  display: 'swap'
})
