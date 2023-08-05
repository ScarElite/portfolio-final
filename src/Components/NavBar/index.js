import React, { useState } from "react";
import pfp from "../../assets/other/pfp-icon.png";
import hamburger from "../../assets/other/hamburger-icon.png";
import close from "../../assets/other/close-icon.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState(hamburger);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
    setIcon(menuOpen ? hamburger : close);
  };

  return (
    <nav className={menuOpen ? "menu-open" : ""}>
      <header className="flex justify-between" id="Header">
        <div className="header-info flex items-center">
          <img src={pfp} alt="Mitchell Armstrong" className="pfp-icon mr-2" />
          <h1 className="header-name mx-1">Mitchell Armstrong</h1>
        </div>
        <div className="hamburger-button flex items-center">
          <img
            src={icon}
            alt="hamburger button icon"
            className="hamburger-icon"
            onClick={handleHamburgerClick}
          />
        </div>
      </header>

      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <a href="/#Home" onClick={handleHamburgerClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" onClick={handleHamburgerClick}>
                About
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={handleHamburgerClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={handleHamburgerClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
