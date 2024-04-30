import React, { useEffect } from "react";
import HappyPrinceSummary from '../components/summary/HappyPrinceSummary';

function HappyPrince() {
    useEffect(() => {
        document.title = "The Happy Prince - Oscar Wilde";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <HappyPrinceSummary />
            </div>
        </div>
    );
}

export default HappyPrince;