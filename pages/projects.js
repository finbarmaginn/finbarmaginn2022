import Head from 'next/head'
import Link from 'next/link'
import { Header
 } from '../components/Header'
export default function FirstPost() {
    return (
    <div className="container">
        <Head>
            <title>Finbar Maginn's NextJS App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

            <Header />

            <h1>First Post</h1>
        </main>

    </div>
    )
}