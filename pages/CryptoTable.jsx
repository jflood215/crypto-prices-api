import { Table } from 'reactstrap';
import Styles from '../styles/CryptoTable.module.css';

const CryptoTable = ({ topCoins }) => {

  

  return ( <Table dark hover>
    <thead>
      <tr>
        <th style={{paddingLeft: '1em'}}>#</th>
        <th></th>
        <th>Coin</th>
        <th>Price</th>
        <th>24hr %</th>
        <th>Marketcap</th>
        <th>Volume</th>
      </tr>
    </thead>
    {topCoins.map(coin => {
      const { name, image, current_price, market_cap, market_cap_rank, price_change_percentage_24h, total_volume } = coin
      return (
    <tbody>
      <tr>
        <th style={{paddingLeft: '1em'}} scope="row">{market_cap_rank}</th>
        <td><img className='image' src={image} alt={name} style={{ height: 20, width: 20}}/></td>
        <td className="name">{name}</td>
        <td>${current_price.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
        <td style={{
          color: price_change_percentage_24h > 0 ? 'lightgreen' : 'red'
          }}>
          {price_change_percentage_24h.toFixed(2)}%</td>
        <td>${market_cap.toLocaleString("en-US")}</td>
        <td>${total_volume.toLocaleString("en-US")}</td>
        
      </tr>
    </tbody>
      )})
    }
  </Table> );
}
 
export default CryptoTable;