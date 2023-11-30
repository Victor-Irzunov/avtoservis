import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'СТО в Минске | Ремонт в день обращения',
  description: 'Профессиональный автосервис в Минске предлагает быстрый и качественный ремонт. Доверьте нам заботу о вашем автомобиле, и мы обеспечим надежность и безупречное состояние вашего транспортного средства.',
  alternates: {
    canonical: '',
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
