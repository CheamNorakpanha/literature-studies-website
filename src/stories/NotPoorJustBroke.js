import React, { useEffect } from "react";
import NotPoorJustBrokeSummary from '../components/summary/NotPoorJustBrokeSummary';

function NotPoorJust() {
    useEffect(() => {
        document.title = "Not Poor, Just Broke - Dick Gregory";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <NotPoorJustBrokeSummary />
            </div>
        </div>
    );
}

export default NotPoorJust;