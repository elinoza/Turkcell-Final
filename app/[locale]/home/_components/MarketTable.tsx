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

function MarketTable() {
  const t =useTranslations("HomePage")
  return (
    <>
      <Table hover>
      <thead>
        <tr>
        <th className='body2 bold text-secondary'>#</th>
          {marketCols.map((column) => (
            <th key={column} className='body2 bold text-secondary'>{t(`market-cols.${column}`)}</th>
          ))}
          <th className='opacity-0'>Trade</th>
        </tr>
   
      </thead>
      <tbody>
        {marketData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className='body2 fw-bold'>{rowIndex}</td>
            {marketCols.map((column) => (
              <td key={column} className='body2 fw-bold'>
            {  (column === 'last-7-days' )? (
                <span>grafik</span>
                ) : (
                  row[column]
                )}
              </td>
            ))}
           <td><ButtonDefault className="btn btn-outline-secondary btn-sm ">Trade</ButtonDefault></td> 
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default MarketTable;
