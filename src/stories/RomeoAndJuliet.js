import React, { useEffect } from "react";
import RomeoAndJulietSummary from '../components/summary/RomeoAndJulietSummary';

function RomeoAndJuliet() {
    useEffect(() => {
        document.title = "Romeo and Juliet - William Shakespeare";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <RomeoAndJulietSummary />
            </div>
        </div>
    );
}

export default RomeoAndJuliet;