import React, { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import Gallery from "../components/contact/Gallery";
import Navbar from "../components/nav/NavBar";
import '../styles/styles.css';
import useLoading from "../hooks/UseLoading";
import LoadingScreen from "../components/loadingscreen/LoadingScreen";

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    const loading = useLoading(1000);

    return (
        <div>
            {loading ? (<LoadingScreen />) : (
                <div>
                    <Navbar />

                    <div className="pt-5 overflow-hidden">
                        <ContactForm />

                        <div className="my-5">
                            <Gallery />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;