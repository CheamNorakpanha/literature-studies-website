import React, { useEffect } from "react";
import DroversWifeSummary from '../components/summary/DroversWifeSummary';
import Navbar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function DroversWife() {
    useEffect(() => {
        document.title = "The Drover's Wife - Henry Lawson";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4">
                        <DroversWifeSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DroversWife;