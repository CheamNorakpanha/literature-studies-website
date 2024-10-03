import React, { useEffect } from "react";
import OliverTwistSummary from '../components/summary/OliverTwistSummary';
import NavBar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function OliverTwist() {
    useEffect(() => {
        document.title = "Oliver Twist - Charles Dickens";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4 overflow-hidden">
                        <OliverTwistSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default OliverTwist;