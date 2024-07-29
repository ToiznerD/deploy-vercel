
import CryptoTable from "./components/CryptoTable";
import LogoutButton from './components/LogoutButton';

export default async function Home() {
  return (
    <div className="bg-white">
      <div className="text-center p-3 flex sticky justify-between">
        <h1 className="text-gray-400 text-2xl font-bold font-serif">Top 100 Cryptocurrencies by Market Cap</h1>
        <LogoutButton />
      </div>
      
      <CryptoTable />
    </div>
  );
}
