import React, { useEffect } from "react";
import DroversWifeSummary from '../components/summary/DroversWifeSummary';

function DroversWife() {
    useEffect(() => {
        document.title = "The Drover's Wife - Henry Lawson";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <DroversWifeSummary />
            </div>
        </div>
    );
}

export default DroversWife;