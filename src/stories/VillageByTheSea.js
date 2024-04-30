import React, { useEffect } from "react";
import VillageByTheSeaSummary from '../components/summary/VillageByTheSeaSummary';

function VillageByTheSea() {
    useEffect(() => {
        document.title = "The Village by the Sea - Anita Desai";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <VillageByTheSeaSummary />
            </div>
        </div>
    );
}

export default VillageByTheSea;