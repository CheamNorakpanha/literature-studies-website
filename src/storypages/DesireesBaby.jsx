import React, { useEffect } from "react";
import DesireesBabySummary from '../components/summary/DesireesBabySummary';
import Navbar from "../components/nav/NavBar";
import UseLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function DesireesBaby() {
    useEffect(() => {
        document.title = "Desiree's Baby - Kate Chopin";
    }, []);

    const loading = UseLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4">
                        <DesireesBabySummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DesireesBaby;