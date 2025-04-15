import fetchService from "./Service";

export const getMarketList = () => {
  return fetchService("/api/market", "GET");
};