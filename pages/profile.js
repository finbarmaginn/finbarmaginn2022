import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Profile() {
  return (
    <div className="container">
      <Head>
          <title>Profile | Finbar Maginn{`'`}s NextJS App</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <article>
          <header><h1>Profile</h1></header>

          <section>
            <h2>Name:</h2>
            <p>Finbar Maginn</p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}