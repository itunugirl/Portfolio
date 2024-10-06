import './globals.css' // Import your global styles if needed
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio of [Your Name], a front-end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-main-color">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
