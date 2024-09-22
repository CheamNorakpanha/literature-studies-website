import React, { useEffect } from "react";
import HitchHikerSummary from '../components/summary/HitchHikerSummary';
import NavBar from "../components/nav/NavBar";

function HitchHiker() {
    useEffect(() => {
        document.title = "The Hitch-Hiker - Roald Dahl";
    }, []);

    return (
        <div>
            <NavBar />

            <div className="bg-body-tertiary py-4">
                <HitchHikerSummary />
            </div>
        </div>
    );
}

export default HitchHiker;