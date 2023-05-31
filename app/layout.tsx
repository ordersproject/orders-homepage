import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/header'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
const menlo = localFont({
  src: [
    {
      path: './fonts/Menlo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Menlo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata = {
  title: 'Orders',
  description: 'The First Dex Built On Bitcoin For Bitcoin',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          menlo.className +
          ' bg-primary-dark text-primary-gray mx-auto max-w-6xl px-4 lg:px-8 min-h-screen flex flex-col w-screen overflow-x-hidden'
        }
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
