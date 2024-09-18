import React, { useEffect } from "react";
import HomeBody from "../components/home/HomeBody";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div className="pt-5">
            <HomeBody />
        </div>
    );
};

export default Home;