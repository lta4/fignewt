import React from "react";

const About = (props) => {
    return (
        <>
        <header>
            <div className="page-divider"></div>
            {/* <div className="profileTitle" id="b">
                <h1>About DJ K Fig</h1>
            </div> */}
        </header>
        <section className="profile">
            <div className="profile__set">
                <div className="profile__set__image">
                    <img src="https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg" alt="profile of one's self" height="350px" />
                        <div className="profile__set__description">
                            <h2>I am DJ K Fig</h2>
                            <p>I'm a Full Stack Developer residing in San Diego, CA.
                            I have a serious passion for developing, animations, and creating intuitive/dynamic user experiences.</p>
                            <p>Let's create something special!</p>
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

export default About