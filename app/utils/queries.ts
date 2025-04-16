import fetchService from "./Service";

export const getMarketList = (): Promise<{ data:any}| undefined> => {
  return fetchService("/api/market", "GET");
};
