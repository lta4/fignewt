import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./nav.css";

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    Navigation Bar
                </NavLink>
                <div className={"nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink to="/" className="nav__link">
                            Home
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/fav" className="nav__link">
                            Fav
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/about" className="nav__link">
                            About
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/review" className="nav__link">
                            Review
                        </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/get-started" className="nav__link nav__cta">
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <IoClose />
                    </div>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Nav