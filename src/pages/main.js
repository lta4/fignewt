import React, { useEffect } from "react";
import Form from "../components/form";
import ContactForm from "../components/contactForm";
import Shows from "../pages/shows";

const Main = (props) => {
    return (
        <>
            <div id="dj_j">
                <div className="page_image">
                    <div className="image_wrapper"> <img data-src="https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg" data-img="https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg" data-image-dimensions="2500x1667" alt="" data-image-focal-point="0.5,0.5" data-image-resolution="2500w" src="https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg"></img>
                    </div>
                </div>
            </div>
        <div className="page-divider"></div>
        <header>
            <div className="header_info">
                <div className="header_block">
                    <div className="header_content">
                        <h1>DJ J Fig</h1>
                    </div>
                    <div className="page-divider"></div>
                <div className="header_des">
                    <div className="header_block">
                    <div className="header_content">
                        <p>hello</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
        <section>
            <div></div>
        </section>
        <div className="info-footer">
            <p>San Diego, California</p>
            <Shows />
            <Form />
            <ContactForm />
        </div>
        </>
    );
};

export default Main

// style={{ backgroundImage: `url(