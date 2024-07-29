import { Triangle } from 'lucide-react';
import Image from 'next/image';

interface Props {
    crypto: CryptoCoin
    index: number
}

const CoinCard = ({ crypto, index} : Props) => {
    return (
        <>
            <div className="hidden lg:block">
                <div key={crypto.id} className="flex justify-start items-center flex-row gap-1 p-2 text-l w-full rounded-md hover:bg-zinc-50">
                    <div className="w-1/12">{crypto.market_cap_rank}</div>
                    <div className="w-2/12 flex flex-row gap-1 items-center">
                        <Image src={crypto.image} alt="crypto logo" width={28} height={28} />
                        {crypto.name}
                    </div>
                    <div className="w-1/12">{crypto.symbol.toUpperCase()}</div>
                    <div className="w-2/12">${crypto.current_price.toLocaleString()}</div>
                    <div className="w-2/12">${crypto.market_cap.toLocaleString()}</div>
                    <div className={crypto.price_change_percentage_1h_in_currency >= 0 ? 'w-1/12 flex flex-row text-green-500 gap-1 items-center' : 'w-1/12 flex flex-row gap-1 items-center text-rose-400'}>
                        {crypto.price_change_percentage_1h_in_currency >= 0 ? <Triangle size={16} className="text-green-800" fill="green" /> : <Triangle size={16} className="text-red-600 rotate-180" fill="red" />}
                        {crypto.price_change_percentage_1h_in_currency ? crypto.price_change_percentage_1h_in_currency.toFixed(2) : 'N/A'}%
                    </div>
                    <div className={crypto.price_change_percentage_24h_in_currency >= 0 ? 'w-1/12 flex flex-row text-green-500 gap-1 items-center' : 'w-1/12 flex flex-row gap-1 items-center text-rose-400'}>
                        {crypto.price_change_percentage_24h_in_currency >= 0 ? <Triangle size={16} className="text-green-800" fill="green" /> : <Triangle size={16} className="text-red-600 rotate-180" fill="red" />}
                        {crypto.price_change_percentage_24h_in_currency ? crypto.price_change_percentage_24h_in_currency.toFixed(2) : 'N/A'}%
                    </div>
                    <div className={crypto.price_change_percentage_7d_in_currency >= 0 ? 'w-1/12 flex flex-row text-green-500 gap-1 items-center' : 'w-1/12 flex flex-row gap-1 items-center text-rose-400'}>
                        {crypto.price_change_percentage_7d_in_currency >= 0 ? <Triangle size={16} className="text-green-800" fill="green" /> : <Triangle size={16} className="text-red-600 rotate-180" fill="red" />}
                        {crypto.price_change_percentage_7d_in_currency ? crypto.price_change_percentage_7d_in_currency.toFixed(2) : 'N/A'}%
                    </div>
                 </div>
            </div>
            
            <div className="lg:hidden">
            <div key={crypto.id} className="flex justify-star flex-col gap-1 p-2 text-l w-full rounded-md border border-zinc-300 my-2 hover:bg-zinc-50">
                    <div><span className="font-bold">Rank: </span> {crypto.market_cap_rank}</div>
                    <div className=" flex flex-row gap-1 items-center">
                        <span className="font-bold">Name: </span> <Image src={crypto.image} alt="crypto logo" width={28} height={28} />
                        {crypto.name}
                    </div>
                    <div ><span className="font-bold">Symbol: </span> {crypto.symbol.toUpperCase()}</div>
                    <div><span className="font-bold">Price: </span> ${crypto.current_price.toLocaleString()}</div>
                    <div><span className="font-bold">Market Cap: </span> ${crypto.market_cap.toLocaleString()}</div>
                    <div className=" flex flex-row gap-2">
                        <span className="font-bold">1h Change: </span>
                        <div className={crypto.price_change_percentage_1h_in_currency >= 0 ? ' flex flex-row text-green-500 gap-1 items-center' : ' flex flex-row gap-1 items-center text-rose-400'}>
                            {crypto.price_change_percentage_1h_in_currency ? crypto.price_change_percentage_1h_in_currency.toFixed(2) : 'N/A'}%
                            {crypto.price_change_percentage_1h_in_currency >= 0 ? <Triangle size={16} className="text-green-800" fill="green" /> : <Triangle size={16} className="text-red-600 rotate-180" fill="red" />}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="font-bold">24h Change: </span>
                        <div className={crypto.price_change_percentage_24h_in_currency >= 0 ? ' flex flex-row text-green-500 gap-1 items-center' : ' flex flex-row gap-1 items-center text-rose-400'}>
                            {crypto.price_change_percentage_24h_in_currency ? crypto.price_change_percentage_24h_in_currency.toFixed(2) : 'N/A'}%
                            {crypto.price_change_percentage_24h_in_currency >= 0 ? <Triangle size={16} className="text-green-800" fill="green" /> : <Triangle size={16} className="text-red-600 rotate-180" fill="red" />}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="font-bold">7d Change: </span> 
                        <div className={crypto.price_change_percentage_7d_in_currency >= 0 ? ' flex flex-row text-green-500 gap-1 items-center' : 'flex flex-row gap-1 items-center text-rose-400'}>
                            {crypto.price_change_percentage_7d_in_currency ? crypto.price_change_percentage_7d_in_currency.toFixed(2) : 'N/A'}%
                            {crypto.price_change_percentage_7d_in_currency >= 0 ? <Triangle size={16} className="text-green-800" fill="green" /> : <Triangle size={16} className="text-red-600 rotate-180" fill="red" />}
                        </div>
                    </div>
                    
                 </div>
            </div>
        </>
      );
}
 
export default CoinCard;