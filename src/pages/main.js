import React, { useEffect } from "react";
import Form from "../components/form";
import ContactForm from "../components/contactForm";

const Main = (props) => {
    return (
        <div>
            <h1>This is the main feed</h1>
            <Form />
            <ContactForm />
        </div>
    );
};

export default Main