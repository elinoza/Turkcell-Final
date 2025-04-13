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


function NavBar() {
  const t = useTranslations("Navbar");
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
      <Navbar expand="lg" className="bg-transparent">
        <Container fluid>
          <Navbar.Brand href="#"><Logo/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 bg-primary text-main-surface body3"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="text-main-surface body3" href="#action1">{t("HOME_PAGE")}</Nav.Link>
              <Nav.Link className="text-main-surface body3" href="#action2">Link</Nav.Link>
              <NavDropdown className="text-main-surface body3" title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item className="text-main-surface body3" href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
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
