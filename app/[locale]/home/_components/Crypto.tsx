"use client";

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import NavList from "./NavList";
import { getMarketList } from "@/app/utils/queries";

const Crypto = () => {
  const [selectedKey, setSelectedKey] = useState<string>("CRYPTO");
  const [marketData, setMarketData] = useState<any[]>([]); // tip vermiyoruz şimdilik

  const cryptoList = [
    "CRYPTO",
    "DEFI",
    "BSC",
    "NFT",
    "METAVERSE",
    "POLKADOT",
    "SOLANS",
    "OPENSEAS",
    "MAKERSPLACE",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMarketList();
      setMarketData(res?.data || []);
      console.log("crypto", res?.data);
    };

    fetchData();
  }, []);

  return (
    <Container className="bg-body rounded px-5 shadow">
      <div className="d-flex align-items-center justify-content-start border-bottom py-3 flex-wrap">
        {cryptoList.map((item) => (
          <NavList
            key={item}
            parentKey="Crypto-list"
            location="HomePage"
            item={item}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        ))}
      </div>
      <div className="d-flex flex-nowrap gap-3 py-4">
  {marketData.slice(0,4).map((coin) => (
    <CryptoCard key={coin.id} coin={coin} />
  ))}
</div>

    </Container>
  );
};

export default Crypto;
