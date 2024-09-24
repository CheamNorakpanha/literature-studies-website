import React, { useEffect } from "react";
import HitchHikerSummary from '../components/summary/HitchHikerSummary';
import NavBar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function HitchHiker() {
    useEffect(() => {
        document.title = "The Hitch-Hiker - Roald Dahl";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                <NavBar />
    
                <div className="bg-body-tertiary py-4">
                    <HitchHikerSummary />
                </div>
            </div>
            )}
        </div>
    );
}

export default HitchHiker;