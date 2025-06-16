export default function manifest() {
  return {
    name: 'Crypto Santa Christmas themed WebApp',
    short_name: 'Crypto Santa',
    description:
      'Send letter to Santa, Generate Holiday Cards, explore holiday market, and Play games.',
    start_url: '/',
    display: 'fullscreen',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon'
      },
      {
        src: '/favicon16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/favicon32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/icon512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
