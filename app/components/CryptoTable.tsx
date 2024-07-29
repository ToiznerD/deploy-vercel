"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import CoinCard from './CoinCard';

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
      <div className="hidden lg:block w-full">

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
      </div>
      <div className="w-full h-[85vh] overflow-auto">
      {sortedCryptos.map((crypto: CryptoCoin, index) => (
        <CoinCard crypto={crypto} index={index} key={index} />
      ))}
      </div>
      
    </div>
  );
};

export default CryptoTable;
