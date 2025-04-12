"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isDarkPreffered = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log(isDarkPreffered);
    const newTheme = isDarkPreffered ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };
  return (
    <Navbar className="bg-transparent text-light">
      <Container>
        <Button onClick={toggleTheme}>Tema</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
