import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./nav.css";

const Nav = () => {
    
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    DJ K Fig
                </NavLink>
                <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                            Home
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/shows" className="nav__link" onClick={closeMenuOnMobile}>
                            Shows
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                            About
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/video" className="nav__link" onClick={closeMenuOnMobile}>
                            Video
                        </NavLink>
                        </li>
                        <li
                        className="nav__item"><NavLink to="/dashboard"
                        className="nav__link"
                        onClick=
                        {closeMenuOnMobile}>
                            Dashboard
                        </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/get-started" className="nav__link nav__cta">
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Nav