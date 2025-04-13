import { useRouter } from "next/router";
import { ROUTE } from "../constants/index";

export const Navigation = () => {
  const router = useRouter();

  const goToHomePage = () => router.push(ROUTE.HOME_PAGE);
  const goToBuyCripto = () => router.push(ROUTE.BUY_CRIPTO);
  const goToMarkets = () => router.push(ROUTE.MARKETS);
  const goToExchange = () => router.push(ROUTE.EXCHANGE);
  const goToSpot = () => router.push(ROUTE.SPOT);
  const goToBITUSDT = () => router.push(ROUTE.BITUSDT);
  const goToPages = () => router.push(ROUTE.PAGES);

  const goToAssets = () => router.push(ROUTE.ASSETS);
  const goToOrdersTrades = () => router.push(ROUTE.ORDERS_TRADES);
  const goToENUSD = () => router.push(ROUTE.EN_USD);
  const goToTheme = () => router.push(ROUTE.THEME);
  const goToWalletIcon = () => router.push(ROUTE.WALLET_ICON);
  const goToUserIcon = () => router.push(ROUTE.USER_ICON);

  return {
    goToHomePage,
    goToBuyCripto,
    goToMarkets,
    goToExchange,
    goToSpot,
    goToBITUSDT,
    goToPages,
    goToAssets,
    goToOrdersTrades,
    goToENUSD,
    goToTheme,
    goToWalletIcon,
    goToUserIcon,
  };
};
