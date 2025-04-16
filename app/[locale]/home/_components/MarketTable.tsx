import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import Icon from "@/app/_components/ui/Icon";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React from "react";
import Table from "react-bootstrap/Table";

export type MarketDataItem = {
  name: string;
  "last-price": string;
  "market-cap": string;
  "last-7-days": string;
  "24h%": string;
};

const marketCols: (keyof MarketDataItem)[] = [
  "name",
  "last-price",
  "market-cap",
  "last-7-days",
  "24h%",
];

const marketData: MarketDataItem[] = [
  {
    name: "Bitcoin",
    "last-price": "$40,000",
    "market-cap": "$800B",
    "last-7-days": "2%",
    "24h%": "5%",
  },
  {
    name: "Ethereum",
    "last-price": "$2,800",
    "market-cap": "$300B",
    "last-7-days": "1%",
    "24h%": "3%",
  },
  {
    name: "Dogecoin",
    "last-price": "$0.50",
    "market-cap": "$70B",
    "last-7-days": "5%",
    "24h%": "10%",
  },
];
const myFavoriteCoins: string[] = ["BTC"];

type MarketTableProps = {
  data: any[]; // şimdilik tip vermiyoruz
};

function MarketTable({ data }: MarketTableProps) {
  const t = useTranslations("HomePage");

  return (
    <Table hover responsive className="body2">
      <thead>
        <tr>
          <th className="opacity-0">Favorite</th>
          <th className="text-secondary">#</th>
          <th className="text-secondary className='me-9'">
            {t("market-cols.name")}
          </th>
          <th className="text-secondary ms-9 text-end">
            {t("market-cols.last-price")}
          </th>
          <th className="text-secondary text-end">{t("market-cols.24h%")}</th>
          <th className="text-secondary text-end">
            {t("market-cols.market-cap")}
          </th>
          <th className="text-secondary text-end">
            {t("market-cols.last-7-days")}
          </th>
          <th className="opacity-0">Trade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin: any, i) => {
          const isFavorite = myFavoriteCoins.includes(coin.symbol);

          return (
            <tr key={coin.id}>
              <td className="align-middle">
                <Icon name={isFavorite ? "favorite" : "nonfavorite"} />
              </td>
              <td>{i + 1}</td>
              <td>
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
