export default function manifest() {
  return {
    name: 'Letter to Claus Santa',
    short_name: 'Claus Santa',
    description: 'Send letter to Santa Claus',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#9c2d2d',
    theme_color: '#9c2d2d',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
