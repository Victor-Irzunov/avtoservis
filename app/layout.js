import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: '',
  description: '',
  alternates: {
		canonical: ''
	}
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
