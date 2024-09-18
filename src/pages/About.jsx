import React, { useEffect } from "react";
import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";

const About = () => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    return (
        <div>
            <div className="pt-5">
                <AboutHeader />
                <div className="container">
                    <AboutBody />
                </div>
            </div>
        </div>
    );
};

export default About;
