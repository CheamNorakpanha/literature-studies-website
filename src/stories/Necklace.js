import React, { useEffect } from "react";
import NecklaceSummary from '../components/summary/NecklaceSummary';
import Navbar from "../components/nav/NavBar";

function Necklace() {
    useEffect(() => {
        document.title = "The Necklace - Guy de Maupassant";
    }, []);

    return (
        <div>
            <Navbar />

            <div className="bg-body-tertiary py-4">
                <NecklaceSummary />
            </div>
        </div>
    );
}

export default Necklace;