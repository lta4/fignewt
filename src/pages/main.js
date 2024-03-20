import React, { useEffect } from "react";
import Form from "../components/form";
import ContactForm from "../components/contactForm";

const Main = (props) => {
    return (
        <div>
            <p>This is the main feed</p>
            <Form />
            <ContactForm />
        </div>
    );
};

export default Main