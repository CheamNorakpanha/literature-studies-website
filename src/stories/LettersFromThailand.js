import React, { useEffect } from "react";
import LettersFromThailandSummary from '../components/summary/LettersFromThailandSummary';

function LettersFromThailand() {
    useEffect(() => {
        document.title = "Letters from Thailand - Botan";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <LettersFromThailandSummary />
            </div>
        </div>
    );
}

export default LettersFromThailand;