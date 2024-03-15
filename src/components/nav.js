import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="navBar">
            <Link to="/">
                <h1 className="title">MoviFi</h1>
            </Link>
        </div>
    );
};

export default Nav