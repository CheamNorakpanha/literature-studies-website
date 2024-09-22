import React, { useEffect } from "react";
import VillageByTheSeaSummary from '../components/summary/VillageByTheSeaSummary';
import NavBar from "../components/nav/NavBar";

function VillageByTheSea() {
    useEffect(() => {
        document.title = "The Village by the Sea - Anita Desai";
    }, []);

    return (
        <div>
            <NavBar />

            <div className="bg-body-tertiary py-4">
                <VillageByTheSeaSummary />
            </div>
        </div>
    );
}

export default VillageByTheSea;