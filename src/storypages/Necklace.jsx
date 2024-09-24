import React, { useEffect } from "react";
import NecklaceSummary from '../components/summary/NecklaceSummary';
import Navbar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function Necklace() {
    useEffect(() => {
        document.title = "The Necklace - Guy de Maupassant";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4">
                        <NecklaceSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Necklace;