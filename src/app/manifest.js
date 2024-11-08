export default function manifest() {
  return {
    name: 'SantaBabu Christmas themed WebApp',
    short_name: 'SantaBabu',
    description:
      'Send letter to Santa, Generate Holiday Cards, explore holiday market, and Play games.',
    start_url: '/',
    display: 'fullscreen',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
