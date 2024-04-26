import React, { useState } from "react";
import "../Login.css";
import PropTypes from "prop-types";
// import { SocialIcon } from "react-social-icons";
import Footer from "./footer";

async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1 className="login">Welcome to Fignewt</h1>
                <p className="loginDetails">Login here using your username and password</p>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label>
                        <input type="text"
                        placeholder="@UserName"
                        id="username" onChange= {e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <input type="password"
                        placeholder="Password"
                        id="password" onChange=
                        {e => setPassword(e.target.value)}/>
                    </label>
                <div className="submit-wrapper">
                    <button type="submit"
                    className="loginSubmit">Log In</button>
                </div>
                </div>
            </form>
            <div className="loginFoot">
                <Footer />
            </div>
        </div>
    );
};

Login.propTypes= {
    setToken: PropTypes.func.isRequired
}