import clsx from 'clsx';
import React from 'react'
import { Badge } from 'react-bootstrap'

type CoinData = {
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      market_cap: number;
      percent_change_24h: number;
    };
  };
};

type CryptoCardProps = {
  coin: CoinData;
};

const CryptoCard = ({ coin }: CryptoCardProps) => {
  console.log(coin)
  const change = coin?.quote?.USD?.percent_change_24h ?? 0;
  const isPositive = change >= 0;

  return (  
    <div className={clsx(isPositive && "shadow-sm","rounded py-4 px-4 d-flex flex-column gap-3 w-100")} style={{ minWidth: "220px" }}>
      <div className="currency-logo-group d-flex gap-2 align-items-center">
        <span className="rounded-circle bg-secondary2" style={{ width: 24, height: 24 }}></span>
        <span className='caption1 fw-bold'>{coin?.name}</span>
        <span className="caption1 fw-bold text-secondary">{coin?.symbol}</span>
      </div>
      <div className="value-group d-flex gap-2 align-items-end">
        <h5 className="m-0">${coin?.quote?.USD.price.toFixed(2)}</h5>
        <span className="text-secondary caption1">USD</span>
      </div>
      <div className="crypto-footer d-flex justify-content-between align-items-center">
        <span className='caption1 text-secondary'>MCap ${coin?.quote.USD.market_cap.toLocaleString()}</span>
        <Badge pill bg={isPositive ? "success" : "critical"} className="caption2">
          {isPositive ? "+" : ""}{change.toFixed(2)}%
        </Badge>
      </div>
    </div>
  )
}

export default CryptoCard;
