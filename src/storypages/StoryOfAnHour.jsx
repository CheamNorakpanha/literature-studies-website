import React, { useEffect } from "react";
import StoryOfAnHourSummary from '../components/summary/StoryOfAnHourSummary';
import NavBar from "../components/nav/NavBar";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";
import useLoading from "../hooks/UseLoading";

function StoryOfAnHour() {
    useEffect(() => {
        document.title = "The Story of an Hour - Kate Chopin";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <NavBar />

                    <div className="bg-body-tertiary py-4">
                        <StoryOfAnHourSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StoryOfAnHour;