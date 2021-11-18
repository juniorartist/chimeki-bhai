import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chimeki Bhai Chahiyo!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ChimekiBhai!" />
        <p className="description">
          Get Help From Pros
         
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
