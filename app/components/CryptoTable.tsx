"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Triangle, ChevronDown, ChevronUp, Loader, Loader2 } from 'lucide-react';

const CryptoTable = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
            price_change_percentage: '1h,24h,7d'
          }
        });
        setCryptos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the crypto data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sortedCryptos = [...cryptos].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    }
    return null;
  };

  if (loading) return (
    <div className="flex justify-center items-center">
       <Loader2 size={30} className="text-zinc-300 animate-spin" />
    </div>
  );

  return (
    <div className="flex flex-col items-center mx-auto p-10">
      <div className="flex sticky justify-start items-center flex-row gap-1 p-2 text-l font-bold w-full bg-zinc-100 rounded-md">
        <div className="w-1/12 cursor-pointer flex flex-row" onClick={() => requestSort('market_cap_rank')}>
          Rank {getSortIcon('market_cap_rank')}
        </div>
        <div className="w-2/12 cursor-pointer flex flex-row" onClick={() => requestSort('name')}>
          Name {getSortIcon('name')}
        </div>
        <div className="w-1/12 cursor-pointer flex flex-row" onClick={() => requestSort('symbol')}>
          Symbol {getSortIcon('symbol')}
        </div>
        <div className="w-2/12 cursor-pointer flex flex-row" onClick={() => requestSort('current_price')}>
          Price {getSortIcon('current_price')}
        </div>
        <div className="w-2/12 cursor-pointer flex flex-row" onClick={() => requestSort('market_cap')}>
          Market Cap {getSortIcon('market_cap')}
        </div>
        <div className="w-1/12 cursor-pointer flex flex-row" onClick={() => requestSort('price_change_percentage_1h_in_currency')}>
          1h Change {getSortIcon('price_change_percentage_1h_in_currency')}
        </div>
        <div className="w-1/12 cursor-pointer flex flex-row" onClick={() => requestSort('price_change_percentage_24h_in_currency')}>
          24h Change {getSortIcon('price_change_percentage_24h_in_currency')}
        </div>
        <div className="w-1/12 cursor-pointer flex flex-row" onClick={() => requestSort('price_change_percentage_7d_in_currency')}>
          7d Change {getSortIcon('price_change_percentage_7d_in_currency')}
        </div>
      </div>
      <div className="w-full h-[85vh] overflow-auto">
      {sortedCryptos.map((crypto: CryptoCoin, index) => (
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
      ))}
      </div>
      
    </div>
  );
};

export default CryptoTable;
