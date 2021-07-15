import { Table } from 'reactstrap';
import Styles from '../styles/CryptoTable.module.css';

const CryptoTable = ({ topCoins }) => {
  return ( <Table dark>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Coin</th>
        <th>Price</th>
        <th>Marketcap</th>
        <th>24hr %</th>
      </tr>
    </thead>
    {topCoins.map(coin => {
      const { name, image, current_price, market_cap, market_cap_rank, price_change_percentage_24h } = coin
      return (
    <tbody>
      <tr>
        <th scope="row">{market_cap_rank}</th>
        <td><img className='image' src={image} alt={name} style={{ height: 30, width: 30}}/></td>
        <td className="name">{name}</td>
        <td>${current_price.toLocaleString("en-US")}</td>
        <td>${market_cap.toLocaleString("en-US")}</td>
        <td style={{
          color: price_change_percentage_24h > 0 ? 'lightgreen' : 'red'
          }}>
          {price_change_percentage_24h.toFixed(2)}%</td>
      </tr>
    </tbody>
      )})
    }
  </Table> );
}
 
export default CryptoTable;