import React, { useEffect } from "react";
import Form from "../components/form";
import ContactForm from "../components/contactForm";

const Main = (props) => {
    return (
        <div style={{ backgroundImage: `url("https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg")` }}>
            <h1>DJ K Fig</h1>
            <p>DJ K Fig in the house. We are all about the hard bass and fury electronics.</p>
            <Form />
            <ContactForm />
        </div>
    );
};

export default Main