import React, { useEffect } from "react";
import HomeBody from "../components/home/HomeBody";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div>
            <div className="pt-5 bg-body-tertiary">
                <HomeBody />
            </div>
        </div>
    );
};

export default Home;