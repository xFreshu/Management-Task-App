import './globals.scss'

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
      <body>{children}</body>
    </html>
  )
}
