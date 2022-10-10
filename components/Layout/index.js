import { Header } from '../Header'
import { Footer } from "../Footer";
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className='container'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        <section>{children}</section>
        <Footer />
      </main>
    </div>
  );
}
