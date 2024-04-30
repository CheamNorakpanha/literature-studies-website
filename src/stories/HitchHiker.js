import React, { useEffect } from "react";
import HitchHikerSummary from '../components/summary/HitchHikerSummary';

function HitchHiker() {
    useEffect(() => {
        document.title = "The Hitch-Hiker - Roald Dahl";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <HitchHikerSummary />
            </div>
        </div>
    );
}

export default HitchHiker;