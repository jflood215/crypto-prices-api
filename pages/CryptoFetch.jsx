import React, { useEffect } from 'react';
import styles from '../styles/CryptoFetch.module.css';

function CryptoFetch({ data }) {

    useEffect(() => {
        console.log(data);
    }, [])

    return (
      <div className={styles.container}>
        <h1>Cryptocurrency Prices Display Here</h1>
      </div>
    );
  }

      // This gets called on every request
export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
    const data = await res.json()
    // Pass data to the page via props
    return { 
        props: { 
            data
        } ,
    }
  };

  export default CryptoFetch;