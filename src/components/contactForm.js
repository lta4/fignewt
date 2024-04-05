import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import "./contactForm.css";

function ContactForm() {
    const [state, handleSubmit] = useForm("xayanyye");

if (state.succeeded) {
    return <p>Thanks for reaching out!</p>
}

return (
    <form onSubmit={handleSubmit}
    className="contactForm">
        <h2>Newletter Sign Up!</h2>
        <input
            id="firstname"
            type="firstname"
            name="firstname"
            placeholder=" First Name"
        />
        <ValidationError
            prefix="First Name"
            field="firstname"
            errors={state.errors}
        />
        <input
            id="lastname"
            type="lastname"
            name="lastname"
            placeholder=" Last Name"
        />
        <ValidationError
            prefix="Last Name"
            field="lastname"
            errors={state.errors}
        />
        <input 
            id="email"
            type="email"
            name="email"
            placeholder=" Email Address"
        />
        <ValidationError 
            prefix="Email"
            field="email"
            error={state.errors}
        />
        <textarea
            prefix="Message"
            field="messsage"
            placeholder=" Drop a note!"
        />
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
);
}

export default ContactForm
