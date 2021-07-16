import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import CryptoTable from '../pages/CryptoTable';
import Footer from '../pages/Footer';
import Navbar from '../pages/Navbar';
import ModalButton from './Modal';

const Home = ({ topCoins }) => {
  return (  <div>
    <Head>
      <title>Cryptocurrency Prices</title>
      <meta name="Cryptocurrency" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar topCoins={topCoins}>
    <ModalButton />
    </Navbar>
    <CryptoTable topCoins={topCoins} />
      <Footer />
  </div>
)
}
   // This gets called on every request
   export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')

    const topCoins = await res.json()
    // Pass data to the page via props
    return { 
        props: { 
            topCoins
        } ,
    }
  };
 
export default Home;
   