import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import CryptoTable from '../pages/CryptoTable';
import Footer from '../pages/Footer';
import Navbar from '../pages/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cryptocurrency Prices</title>
        <meta name="Cryptocurrency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <CryptoTable />
        <Footer />
    </div>
  )
}
