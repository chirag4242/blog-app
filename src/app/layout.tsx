import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Chirag's blog",
  description: 'Portfolio application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-zinc-950 ${inter.className}`}>
        <Navbar/>  
        <ProfilePic />
        {children}
      </body>
    </html>
  )
}
