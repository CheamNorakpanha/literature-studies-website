import React, { useEffect } from "react";
import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
import Navbar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

const About = () => {
    useEffect(() => {
        document.title = 'About Us';
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="pt-5 overflow-hidden">
                        <AboutHeader />
                        <div className="container">
                            <AboutBody />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
