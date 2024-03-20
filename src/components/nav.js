import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="navBar">
            <NavLink to="/">
                <h1 className="title">FigNewt</h1>
            </NavLink>
            <NavLink to="/main">Main</NavLink>
        </div>
    );
};

export default Nav