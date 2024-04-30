import React, { useEffect } from "react";
import DesireesBabySummary from '../components/summary/DesireesBabySummary';

function DesireesBaby() {
    useEffect(() => {
        document.title = "Desiree's Baby - Kate Chopin";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <DesireesBabySummary />
            </div>
        </div>
    );
}

export default DesireesBaby;