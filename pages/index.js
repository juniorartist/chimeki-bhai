import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ChimekiBhai!" />
        <p className="description">
          Get Help From Pros
         
          BY REBIKA RAI
         
          I LOVE YOU
        </p>
      </main>

      <Footer />
    </div>
  )
}
