
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const space = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'BLKLYT — Creative Tech • Music Direction • Design',
  description: 'BLKLYT builds shows, systems, and stories—music direction, playback engineering, and creative tech.',
  openGraph: {
    title: 'BLKLYT — Creative Tech • Music Direction • Design',
    description: 'BLKLYT builds shows, systems, and stories—music direction, playback engineering, and creative tech.',
    url: 'https://beta.blklyt.org',
    siteName: 'BLKLYT',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://beta.blklyt.org'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'BLKLYT',
              url: 'https://beta.blklyt.org',
              logo: '/logo.svg',
              sameAs: [
                'https://instagram.com/blklyt',
                'https://youtube.com/@blklyt'
              ],
            })
          }}
        />
      </body>
    </html>
  )
}
