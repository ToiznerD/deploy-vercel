
import {getMarketData} from '@/lib/utils';
import CryptoTable from "./components/CryptoTable";
import getCurrentUser from './actions/getCurrentUser';

export default async function Home() {
  return (
    <div className="bg-white">
      <div className="text-center p-2 flex sticky justify-center">
        <h1 className="text-gray-400 text-2xl font-bold font-serif">Top 100 Cryptocurrencies by Market Cap</h1>
      </div>
      
      <CryptoTable />
    </div>
  );
}
