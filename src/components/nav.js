import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <header className="header">
            <nav className="navBar">
                <NavLink to="/" className="nav__logo">FigNewt
                </NavLink>
                <div className={"nav__menu"} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><NavLink to="/" className="nav__link">
                            Home
                        </NavLink></li>
                        <li className="nav__item"><NavLink to="/fav" className="nav__link">
                            Fav
                        </NavLink></li>
                    </ul>
                    {/* <NavLink to="/fav">Fav</NavLink> */}
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/review">Review</NavLink>
                    {/* <NavLink to="/main">Main</NavLink> */}
                </div>
            </nav>
        </header>
    );
};

export default Nav