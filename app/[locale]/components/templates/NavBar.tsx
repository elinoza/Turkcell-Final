"use client";
import { useTranslations } from "next-intl";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import { useNavigation } from "../../../../utils/navigation";
import { usePathname } from "@/i18n/navigation";
import { ROUTE } from "../../../../constants/index";
import clsx from "clsx";
import Avatar from "./Avatar";
import Icon from "@/app/_components/ui/Icon";
import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import { useThemeStore } from "../../store/ThemeStore";

function NavBar() {
  const t = useTranslations("Navbar");
  const {
    goToHomePage,
    goToBuyCripto,
    goToMarkets,
    goToExchange,
    goToSpot,
    goToBITUSDT,
    goToAssets,
    goToOrdersTrades,
    goToProfile,
  } = useNavigation();
  const pathname = usePathname();
  const { theme, setTheme } = useThemeStore();

  
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Navbar
      expand="xl"
      className="bg-transparent py-0 my-0"
      style={{ minHeight: "50px" }}
    >
      <Container fluid>
        <Navbar.Brand className="p-0">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              onClick={goToHomePage}
              className={clsx(
                pathname === ROUTE.HOME_PAGE && "bg-primary text-content-100"
              )}
            >
              {t("HOME_PAGE")}
            </Nav.Link>

            <Nav.Link
              onClick={goToBuyCripto}
              className={clsx(
                pathname === ROUTE.BUY_CRIPTO && "bg-primary text-content-100"
              )}
            >
              {t("BUY_CRIPTO")}
            </Nav.Link>

            <Nav.Link
              onClick={goToMarkets}
              className={clsx(
                pathname === ROUTE.MARKETS && "bg-primary text-content-100"
              )}
            >
              {t("MARKETS")}
            </Nav.Link>

            <Nav.Link
              onClick={goToExchange}
              className={clsx(
                pathname === ROUTE.EXCHANGE && "bg-primary text-content-100"
              )}
            >
              {t("EXCHANGE")}
            </Nav.Link>

            <Nav.Link
              onClick={goToSpot}
              className={clsx(
                pathname === ROUTE.SPOT && "bg-primary text-content-100"
              )}
            >
              {t("SPOT")}
            </Nav.Link>

            <Nav.Link
              onClick={goToBITUSDT}
              className={clsx(
                pathname === ROUTE.BITUSDT && "bg-primary text-content-100"
              )}
            >
              {t("BITUSDT")}
            </Nav.Link>
          </Nav>

          <Nav className="d-flex">
            <Nav.Link
              onClick={goToAssets}
              className={clsx(
                pathname === ROUTE.ASSETS && "bg-primary text-content-100"
              )}
            >
              {t("ASSETS")}
            </Nav.Link>

            <Nav.Link
              onClick={goToOrdersTrades}
              className={clsx(
                pathname === ROUTE.ORDERS_TRADES &&
                  "bg-primary text-content-100"
              )}
            >
              {t("ORDERS_TRADES")}
            </Nav.Link>

            <Nav.Link>{t("CURRENCY")}</Nav.Link>

            <Nav.Link onClick={toggleTheme}>
              {theme === "light" ? (
                <Icon name="sun" className="border-start border-end px-2" />
              ) : (
                <Icon name="moon" className="border-start border-end px-2" />
              )}
            </Nav.Link>

            <Nav.Link>
              <Icon name="bell" />
            </Nav.Link>

            <Nav.Link>
              <ButtonDefault className="btn-outline-dark">
                {t("WALLET")}
              </ButtonDefault>
            </Nav.Link>

            <Nav.Link
              onClick={goToProfile}
              className={clsx(
                pathname === ROUTE.PROFILE && "bg-primary text-content-100"
              )}
            >
              <Avatar imgUrl="/IMG.svg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
