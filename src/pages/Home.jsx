import React, { useEffect } from "react";
import HomeBody from "../components/home/HomeBody";
import Navbar from "../components/nav/NavBar";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div>
            <Navbar />

            <div className="pt-5">
                <HomeBody />
            </div>
        </div>
    );
};

export default Home;