import React, { useEffect } from "react";
import HomeBody from "../components/home/HomeBody";
import Navbar from "../components/nav/NavBar";
import UseLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

const Home = () => {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    const loading = UseLoading(1000); // 1 seconds loading duration

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div className="pt-5">
                    <Navbar />

                    <div>
                        <HomeBody />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;