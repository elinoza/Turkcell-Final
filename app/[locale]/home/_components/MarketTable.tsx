import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import Icon from "@/app/_components/ui/Icon";
import { CoinData } from "@/constants/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const marketCols: string[] = [
  "name",
  "last-price",
  "24h%",
  "market-cap",
  "last-7-days",
  
];

const myFavoriteCoins: string[] = ["BTC"];

function MarketTable({ data }:{ data:any}) {
  const [favoriteCoins,setFavoriteCoins]=useState<string[]>(myFavoriteCoins)
  const t = useTranslations("HomePage");

  const toggleFavorite = (isFavorite: boolean, coinSymbol: string) => {
    if (isFavorite) {
      setFavoriteCoins(prev => prev.filter((item) => item !== coinSymbol));
    } else {
      setFavoriteCoins(prev => [...prev, coinSymbol]);
    }
  };

  return (
    <Table hover responsive className="body2">
      <thead>
        <tr>
          <th className="opacity-0">Favorite</th>
          <th className="text-secondary">#</th>
          {marketCols.map((column)=>
          <th  key={column}
          className={clsx(
            "text-secondary",
            column !== "name" && "text-end"
          )}>
            {t(`market-cols.${column}`)}
          </th>)}
          <th className="opacity-0">Trade</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0,8).map((coin: CoinData, i:number) => {
          const isFavorite = favoriteCoins.includes(coin.symbol);

          return (
            <tr key={coin.id}>
              <td className="align-middle">
                <Icon name={isFavorite ? "favorite" : "nonfavorite"} onClick={()=>toggleFavorite(isFavorite,coin.symbol)}/>
              </td>
              <td>{i + 1}</td>
              <td className="d-flex gap-1 align-items-center ">
              <span
                    className="rounded-circle crypto-icon d-inline overflow-hidden bg-secondary2 d-flex justify-content-center align-items-center"
                    
                  >
                    <Image
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                      alt={`${coin.symbol} logo`}
                      width={24}
                      height={24}
                      className="w-100 h-100"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </span>
                <span className="pe-2 border-end fw-bold">{coin.name}</span>
                <span className="ps-2 text-secondary caption1 fw-bold">
                  {coin.symbol}
                </span>
              </td>
              <td className="fw-bold text-end">
                ${coin.quote?.USD?.price?.toFixed(2)}
              </td>
           
                <td
                  className={clsx(
                    coin.quote?.USD?.percent_change_24h < 0
                      ? "text-critical"
                      : "text-success",
                    "text-end"
                  )}
                >
                  {coin.quote?.USD?.percent_change_24h > 0 && <span>+</span>}
                  {coin.quote?.USD?.percent_change_24h?.toFixed(2)}%
                </td>
              <td className="fw-bold text-end">
                ${coin.quote?.USD?.market_cap?.toLocaleString()}
              </td>
              <td className="text-end">grafik</td>

              <td>
                <ButtonDefault className="btn btn-outline-secondary btn-sm">
                  Trade
                </ButtonDefault>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MarketTable;
