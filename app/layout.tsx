import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orders',
  description: 'The First Dex Built On Bitcoin For Bitcoin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ' bg-primary-dark text-primary-gray mx-auto max-w-6xl px-4 lg:px-8 min-h-screen flex flex-col font-mono w-screen overflow-x-hidden'
        }
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
