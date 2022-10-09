import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Finbar Maginn's NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Header />

        <h2>Home</h2>

        <div className="grid">
          <Link href="/projects">
            <a className="card">
              <div>
                <h3>Projects</h3>
                <p>View First Post</p>
              </div>
            </a>
          </Link>
            <a href="https://github.com/finbarmaginn?tab=repositories" target="_blank" className="card">
              <div>
                <h3>Github</h3>
                <p>View First Post</p>
              </div>
            </a>
        </div>

        <Footer />
      </main>

    </div>
  )
}
