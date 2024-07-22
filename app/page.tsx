
import {getMarketData} from '@/lib/utils';
import CryptoTable from "./components/CryptoTable";

export default async function Home() {
  //const marketData = await getMarketData();
  //console.log(marketData);
  return (
    <div className="bg-white">
      <CryptoTable />
    </div>
  );
}
