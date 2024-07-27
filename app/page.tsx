
import {getMarketData} from '@/lib/utils';
import CryptoTable from "./components/CryptoTable";

export default async function Home() {
  //const marketData = await getMarketData();
  //console.log(marketData);
  return (
    <div className="bg-white">
      <div className="text-center p-2 flex sticky justify-center">
        <h1 className="text-gray-400 text-2xl font-bold font-serif">Top 100 Cryptocurrencies by Market Cap</h1>
      </div>
      
      <CryptoTable />
    </div>
  );
}
