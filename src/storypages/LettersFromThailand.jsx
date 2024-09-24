import React, { useEffect } from "react";
import LettersFromThailandSummary from '../components/summary/LettersFromThailandSummary';
import Navbar from "../components/nav/NavBar";
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

function LettersFromThailand() {
    useEffect(() => {
        document.title = "Letters from Thailand - Botan";
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="bg-body-tertiary py-4">
                        <LettersFromThailandSummary />
                    </div>
                </div>
            )}
        </div>
    );
}

export default LettersFromThailand;