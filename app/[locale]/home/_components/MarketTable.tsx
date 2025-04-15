import ButtonDefault from '@/app/_components/ui/Buttons/ButtonDefault';
import { useTranslations } from 'next-intl';
import React from 'react';
import Table from 'react-bootstrap/Table';

export type MarketDataItem = {
  name: string;
  'last-price': string;
  'market-cap': string;
  'last-7-days': string;
  '24h%': string;
};

const marketCols: (keyof MarketDataItem)[] = [
  'name', 
  'last-price', 
  'market-cap', 
  'last-7-days', 
  '24h%', 
];

const marketData : MarketDataItem[]= [
  {
    name: 'Bitcoin',
    'last-price': '$40,000',
    'market-cap': '$800B',
    'last-7-days': '2%',
    '24h%': '5%',
  },
  {
    name: 'Ethereum',
    'last-price': '$2,800',
    'market-cap': '$300B',
    'last-7-days': '1%',
    '24h%': '3%',
  },
  {
    name: 'Dogecoin',
    'last-price': '$0.50',
    'market-cap': '$70B',
    'last-7-days': '5%',
    '24h%': '10%',
  }
];

type MarketTableProps = {
  data: any[]; // şimdilik tip vermiyoruz
};

function MarketTable({ data }: MarketTableProps) {
  const t = useTranslations("HomePage");

  return (
    <Table hover>
      <thead>
        <tr>
          <th className="body2 bold text-secondary">#</th>
          <th className="body2 bold text-secondary">{t("market-cols.name")}</th>
          <th className="body2 bold text-secondary">{t("market-cols.last-price")}</th>
          <th className="body2 bold text-secondary">{t("market-cols.market-cap")}</th>
          <th className="body2 bold text-secondary">{t("market-cols.last-7-days")}</th>
          <th className="body2 bold text-secondary">{t("market-cols.24h%")}</th>
          <th className="opacity-0">Trade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin: any, i) => (
          <tr key={coin.id}>
            <td>{i + 1}</td>
            <td>{coin.name}</td>
            <td>${coin.quote?.USD?.price?.toFixed(2)}</td>
            <td>${coin.quote?.USD?.market_cap?.toLocaleString()}</td>
            <td>grafik</td>
            <td>{coin.quote?.USD?.percent_change_24h?.toFixed(2)}%</td>
            <td>
              <ButtonDefault className="btn btn-outline-secondary btn-sm">
                Trade
              </ButtonDefault>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


export default MarketTable;
