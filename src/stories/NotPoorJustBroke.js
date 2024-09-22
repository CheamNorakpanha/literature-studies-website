import React, { useEffect } from "react";
import NotPoorJustBrokeSummary from '../components/summary/NotPoorJustBrokeSummary';
import NavBar from "../components/nav/NavBar";

function NotPoorJust() {
    useEffect(() => {
        document.title = "Not Poor, Just Broke - Dick Gregory";
    }, []);

    return (
        <div>
            <NavBar />

            <div className="bg-body-tertiary py-4">
                <NotPoorJustBrokeSummary />
            </div>
        </div>
    );
}

export default NotPoorJust;