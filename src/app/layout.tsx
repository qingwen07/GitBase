import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AI Photo Editor Tools',
    template: '%s | AI Photo Editor Tools'
  },
  description: 'Discover and compare the best AI photo editing tools. A comprehensive directory of artificial intelligence powered image editing software, features, and resources.',
  keywords: ['AI photo editor', 'AI Image Editor', 'AI picture editor', 'AI image editing', 'artificial intelligence photo tools', 
    'photo editing software', 'AI image enhancement', 'photo editing tools', 'AI photography', 'AI image tools', 'AI logo generator'],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}