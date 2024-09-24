import React, { useEffect } from "react";
import HappyPrinceSummary from '../components/summary/HappyPrinceSummary';
import NavBar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function HappyPrince() {
    useEffect(() => {
        document.title = "The Happy Prince - Oscar Wilde";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4">
                        <HappyPrinceSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HappyPrince;