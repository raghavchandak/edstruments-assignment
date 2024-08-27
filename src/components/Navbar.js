import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navOptions = [
    { title: "Home", url: "/" },
    { title: "One", url: "/one" },
    { title: "Two", url: "/two" },
    { title: "Three", url: "/three" },
  ];

  return (
    <nav className="nav">
      <div className="nav-toggle" onClick={toggleNavbar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={`nav-elements ${isOpen ? "open" : ""}`}>
        {navOptions.map((option) => (
          <Link
            key={option.title}
            to={option.url}
            className="nav-links"
            style={{
              color: location.pathname === option.url ? "#FF7F7F" : "black",
            }}
            onClick={() => setIsOpen(false)}
          >
            {option.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
