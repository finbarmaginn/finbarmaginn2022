import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function Projects() {
  return (
    <div className="container">
        <Head>
            <title>Projects | Finbar Maginn{`'`}s NextJS App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Header />

            <h2>Projects</h2>

            <div className="grid">
                <a href="https://www.jakesheppard.co.uk" target="_blank" className="card" rel="noreferrer">
                    <div>
                        <h3>Jake Sheppard - Art and apparel</h3>
                        <p>View First Post</p>
                    </div>
                </a>
                <a href="https://www.jimmaginn.com" target="_blank" className="card" rel="noreferrer">
                    <div>
                        <h3>Jim Maginn - Photography</h3>
                        <p>View First Post</p>
                    </div>
                </a>
            </div>
            
            <Footer />
        </main>
    </div>
  )
}