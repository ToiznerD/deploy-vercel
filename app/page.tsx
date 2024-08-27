
import { getServerSession } from "next-auth";
import CryptoTable from "./components/CryptoTable";
import LogoutButton from './components/LogoutButton';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/Login');
  }

  return (
    <div className="bg-white">
      <div className="text-center p-4 flex sticky justify-between">
        <h1 className="text-gray-400 text-2xl font-bold font-serif">Top 100 Cryptocurrencies by Market Cap</h1>
        <LogoutButton />
      </div>
      
      <CryptoTable />
    </div>
  );
}
