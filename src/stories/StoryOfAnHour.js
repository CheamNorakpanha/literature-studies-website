import React, { useEffect } from "react";
import StoryOfAnHourSummary from '../components/summary/StoryOfAnHourSummary';

function StoryOfAnHour() {
    useEffect(() => {
        document.title = "The Story of an Hour - Kate Chopin";
    }, []);

    return (
        <div>
            <div className="bg-body-tertiary py-4">
                <StoryOfAnHourSummary />
            </div>
        </div>
    );
}

export default StoryOfAnHour;