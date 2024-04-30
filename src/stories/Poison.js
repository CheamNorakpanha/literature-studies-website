import React, { useEffect } from "react";
import PoisonSummary from '../components/summary/PoisonSummary';

function Poison() {
    useEffect(() => {
        document.title = "Poison - Roald Dahl";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <PoisonSummary />
            </div>
        </div>
    );
}

export default Poison;