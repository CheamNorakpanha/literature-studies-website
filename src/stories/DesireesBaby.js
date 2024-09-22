import React, { useEffect } from "react";
import DesireesBabySummary from '../components/summary/DesireesBabySummary';
import Navbar from "../components/nav/NavBar";

function DesireesBaby() {
    useEffect(() => {
        document.title = "Desiree's Baby - Kate Chopin";
    }, []);

    return (
        <div>
            <Navbar />

            <div className="bg-body-tertiary py-4">
                <DesireesBabySummary />
            </div>
        </div>
    );
}

export default DesireesBaby;