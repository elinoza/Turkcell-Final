"use client";

import clsx from "clsx";

const fakeOrderBook = {
    asks: [
      { price: 38210.75, quantity: 0.6, amount: 38210.75 * 0.6 }, 
      { price: 38220.1, quantity: 1.3, amount: 38220.1 * 1.3 },   
      { price: 38230.5, quantity: 0.7, amount: 38230.5 * 0.7 },   
      { price: 38230.5, quantity: 1.1, amount: 38230.5 * 1.1 },   
      { price: 38230.5, quantity: 0.9, amount: 38230.5 * 0.9 },   
    ],
    bids: [
      { price: 38200.25, quantity: 0.8, amount: 38200.25 * 0.8 }, 
      { price: 38190.15, quantity: 1.1, amount: 38190.15 * 1.1 }, 
      { price: 38185.5, quantity: 0.5, amount: 38185.5 * 0.5 },   
      { price: 38190.15, quantity: 1.4, amount: 38190.15 * 1.4 }, 
      { price: 38190.15, quantity: 1.3, amount: 38190.15 * 1.3 },
    ],
  };

const OrderBook = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <h5 className="fw-bold">Order Book</h5>
      <div className="d-flex justify-content-between text-secondary body2 fw-bold">
        <span>Price(BTC)</span>
        <span>Amount(ETH)</span>
        <span>Total(BTC)</span>
      </div>
      {Object.entries(fakeOrderBook).map(([side, orders]) => (
  <div key={side}>
    {orders.map((order, i) => (
      <div
        key={i}
        className={`d-flex justify-content-between body3 fw-bold ${
          side === "bids" ? "text-success" : "text-critical"
        }`}
      >
        <span>{order.price}</span>
        <span>{order.quantity}</span>
      </div>
    ))}
  </div>
))}
    </div>
  );
};

export default OrderBook;
