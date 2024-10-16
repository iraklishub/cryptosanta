/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
