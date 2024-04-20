import React, { useEffect } from "react";
import Form from "../components/form";
import ContactForm from "../components/contactForm";

const Main = (props) => {
    return (
        <>
        <header>
            <div className="page-divider"></div>
        </header>
        <section>
            <div style={{ backgroundImage: `url("https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg")` }}>
                <h1>DJ K Fig</h1>
                <p>DJ K Fig in the house. We are all about the hard bass and fury electronics.</p>
                <Form />
                <ContactForm />
            </div>
        </section>
        <section>
            <div id="dj">
                <div className="page-image">
                    <div className="image-wrapper">
                        <img data-src="https://images.squarespace-cdn.com/content/v1/594b217b5016e15137faa842/1610998725789-XQP5OU2KJKWAUSB1WEI8/holston_house-grand_opening-HIGH_RES-105.jpg" data-image="https://images.squarespace-cdn.com/content/v1/594b217b5016e15137faa842/1610998725789-XQP5OU2KJKWAUSB1WEI8/holston_house-grand_opening-HIGH_RES-105.jpg" data-image-dimensions="2500x1667" data-image-focal-point="0.5,0.5" alt="holston_house-grand_opening-HIGH_RES-105.jpg" class data-image-resolution="2500w" src="https://images.squarespace-cdn.com/content/v1/594b217b5016e15137faa842/1610998725789-XQP5OU2KJKWAUSB1WEI8/holston_house-grand_opening-HIGH_RES-105.jpg?format=2500w"></img>
                    </div>
                </div>
            </div>
        </section>
        <div className="info-footer">
            <p>San Diego, California</p>
        </div>
        </>
    );
};

export default Main