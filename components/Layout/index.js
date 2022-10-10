import Head from "next/head";
import { Header } from '../Header'
import { Footer } from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Home | Finbar Maginn{`'`}s NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section>{children}</section>
        <Footer />
      </main>
    </div>
  )
}
