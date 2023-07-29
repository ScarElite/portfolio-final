import React from "react";
import pfp from "../../assets/other/pfp-icon.png"
import hamburger from "../../assets/other/hamburger-icon.png"

const NavBar = () => {
    const handleHamburgerClick = () => {
        console.log("Hamburger Button Clicked!")
    }

    return (
        <header className="flex justify-between" id="Header">
            <div className="header-info flex items-center">
                <img src={pfp} alt="Mitchell Armstrong" className="pfp-icon mr-2" />
                <h1 className="header-name mx-1">Mitchell Armstrong</h1>
            </div>
            <div className="hamburger-button flex items-center">
                <img src={hamburger} alt="hamburger button icon" className="hamburger-icon" onClick={handleHamburgerClick} />
            </div>
        </header>
    )
}

export default NavBar;