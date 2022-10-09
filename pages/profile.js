import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/Footer'
// import './style.css  '
import { Header } from '../components/Header'

export default function Profile() {
  return (
    <div className="container">
        <Head>
            <title>Projects | Finbar Maginn's NextJS App</title>
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