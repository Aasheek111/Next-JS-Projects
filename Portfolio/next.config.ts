import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
   hostname: "source.unsplash.com"
      },
    ],
  },
}
 
export default config