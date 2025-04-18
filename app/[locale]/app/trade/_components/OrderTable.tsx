"use client"
import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import CryptoLogo from "@/app/_components/ui/CryptoLogo";
import Icon from "@/app/_components/ui/Icon";
import { CoinData } from "@/constants/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const orderCols: string[] = [
  "date",
  "pair",
  "buy/sell",
  "price",
  "excuted",
  "total",
];

function OrderTable({ orderHistory }: { orderHistory: any }) {
  const t = useTranslations("TradePage");

  return (
    <Table hover responsive className="body2">
      <thead>
        <tr>
          {orderCols.map((column) => (
            <th key={column} className={clsx("text-secondary")}>
              {t(`orderCols.${column}`)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderHistory && orderHistory.slice(0, 6).map((order: any) => {
          const isBuy = order.side === "BUY";
          const date = new Date(order.time).toLocaleString();
      
          return (
            <tr key={order.orderId}>
              <td className="text-secondary">{date}</td>
      
              <td className="fw-bold">
                {order.symbol.slice(0, -4)}/{order.symbol.slice(-4)}
              </td>
      
              <td className={clsx(isBuy ? "text-success" : "text-critical", "fw-bold")}>
                {order.side}
              </td>
      
              <td>${Number(order.price).toLocaleString()}</td>
      
              <td>{Number(order.executedQty)}</td>
      
              <td>${Number(order.cummulativeQuoteQty).toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default OrderTable;
