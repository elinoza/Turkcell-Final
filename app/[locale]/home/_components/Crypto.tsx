"use client";

import { Container } from "react-bootstrap";
import { useState } from "react";
import CryptoCard from "./CryptoCard";
import NavList from "./NavList";

const Crypto = () => {
  const [selectedKey, setSelectedKey] = useState<string>("CRYPTO");

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

  return (
    <Container className="bg-body rounded px-5 shadow" >
      <div className="d-flex align-items-center justify-content-start border-bottom py-3 flex-wrap">
        {" "}
        {cryptoList.map((item) =>
     <NavList key={item} parentKey="Crypto-list" location="HomePage" item={item} selectedKey={selectedKey} setSelectedKey={setSelectedKey}/>
        )}
      </div>
      <div className="d-flex justify-content-around justify-content-center align-items-center py-3">
    <CryptoCard/>
    </div>
    </Container>
  );
};

export default Crypto;
