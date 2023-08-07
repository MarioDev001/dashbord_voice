import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: [], weight: ["300", "400", "500", "700", "800"] })

export const metadata = {
  title: 'Dashbord PDF',
  description: 'Dashbord PDF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
