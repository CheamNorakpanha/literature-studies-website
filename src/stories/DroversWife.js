import React, { useEffect } from "react";
import DroversWifeSummary from '../components/summary/DroversWifeSummary';
import Navbar from "../components/nav/NavBar";

function DroversWife() {
    useEffect(() => {
        document.title = "The Drover's Wife - Henry Lawson";
    }, []);

    return (
        <div>
            <Navbar />

            <div className="bg-body-tertiary py-4">
                <DroversWifeSummary />
            </div>
        </div>
    );
}

export default DroversWife;