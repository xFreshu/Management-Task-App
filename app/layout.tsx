import './globals.scss'
import Sidebar from '@/components/molecules/Sidebar/Sidebar'
import classes from './Layout.module.scss'
import Header from '@/components/molecules/Header/Header'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Management Task App - Home',
  description: 'Ykies! A management task app!',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`${classes.container} ${roboto.className}`}>
          <Sidebar />
          <div>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
