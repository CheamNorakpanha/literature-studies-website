import React, { useEffect } from "react";
import NotPoorJustBrokeSummary from '../components/summary/NotPoorJustBrokeSummary';
import NavBar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function NotPoorJust() {
    useEffect(() => {
        document.title = "Not Poor, Just Broke - Dick Gregory";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4">
                        <NotPoorJustBrokeSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotPoorJust;