import React, { useEffect } from "react";
import OliverTwistSummary from '../components/summary/OliverTwistSummary';
import NavBar from "../components/nav/NavBar";

function OliverTwist() {
    useEffect(() => {
        document.title = "Oliver Twist - Charles Dickens";
    }, []);

    return (
        <div>
            <NavBar />

            <div className="bg-body-tertiary py-4">
                <OliverTwistSummary />
            </div>
        </div>
    );
}

export default OliverTwist;