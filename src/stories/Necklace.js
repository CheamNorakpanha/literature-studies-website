import React, { useEffect } from "react";
import NecklaceSummary from '../components/summary/NecklaceSummary';

function Necklace() {
    useEffect(() => {
        document.title = "The Necklace - Guy de Maupassant";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <NecklaceSummary />
            </div>
        </div>
    );
}

export default Necklace;