"use client"
import React from 'react';
 import { useEffect, useState } from "react";
 import { useTranslations } from "next-intl";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from './Logo';
import ButtonDefault from '@/app/_components/ui/Buttons/ButtonDefault';
import {useNavigation} from "../../../../utils/navigation"


function NavBar() {
  const t = useTranslations("Navbar");
  const { goToHomePage, goToMarkets } = useNavigation();

  // const [theme, setTheme] = useState<"light" | "dark">("light");

  // useEffect(() => {
  //   const isDarkPreffered = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   const newTheme = isDarkPreffered ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-bs-theme", newTheme);
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-bs-theme", newTheme);
  // };
    return (
      <Navbar expand="lg" className="bg-transparent py-3">
        <Container fluid>
          <Navbar.Brand href="#"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link  onClick={goToHomePage}className="bg-primary"> {t("HOME_PAGE")}</Nav.Link>
              <Nav.Link  onClick={goToHomePage}>{t("BUY_CRIPTO")}</Nav.Link>
              <Nav.Link>{t("MARKETS")}</Nav.Link>
              <Nav.Link>{t("EXCHANGE")}</Nav.Link>
              <Nav.Link>{t("SPOT")}</Nav.Link>
              <Nav.Link>{t("BITUSDT")}</Nav.Link>
              <Nav.Link>{t("BITUSDT")}</Nav.Link> 
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
}

export default NavBar;
