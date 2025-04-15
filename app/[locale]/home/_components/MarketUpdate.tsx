"use client";

import { useState } from "react";
import NavList from "./NavList";
import { useTranslations } from "next-intl";
import MarketTable from "./MarketTable";

const MarketUpdate = () => {
  const t = useTranslations("HomePage");
  const [selectedKey, setSelectedKey] = useState<string>("view-all");

  const marketNavs = [
    "view-all",
    "metaverse",
    "entertainment",
    "energy",
    "nft",
    "gaming",
    "music",
  ];

  return (
    <div className="d-flex justify-content-center flex-column gap-5">
      <h2>{t("market-title")}</h2>
      <div className="d-flex align-items-center justify-content-start py-3 flex-wrap">
        {" "}
        {marketNavs.map((item) => (
          <NavList
            key={item}
            parentKey="market-navs"
            location="HomePage"
            item={item}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        ))} 
      </div>
      <MarketTable />
    </div>
  );
};

export default MarketUpdate;
