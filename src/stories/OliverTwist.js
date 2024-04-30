import React, { useEffect } from "react";
import OliverTwistSummary from '../components/summary/OliverTwistSummary';

function OliverTwist() {
    useEffect(() => {
        document.title = "Oliver Twist - Charles Dickens";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <OliverTwistSummary />
            </div>
        </div>
    );
}

export default OliverTwist;