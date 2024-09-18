import React, { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import Gallery from "../components/contact/Gallery";
import '../styles/styles.css';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us';
    }, []);

    return (
        <div className="pt-5">
            <ContactForm />

            <div className="my-5">
                <Gallery />
            </div>
        </div>
    );
};

export default Contact;