import React from "react";
import { motion } from "framer-motion";

const slideLeft = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 }
};

function ContactForm() {
    return (
        <div className="container" style={{ marginTop: '3rem' }}>
            <div className="row justify-content-center text-center mb-2 mb-lg-4">
                <div className="col-lg-8 col-xxl-7">
                    <motion.h2
                        initial={slideLeft.initial}
                        animate={slideLeft.animate}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="display-5 fw-bold mb-3">Contact Us
                    </motion.h2>
                    <motion.p
                        className="lead mb-0"
                        initial={slideLeft.initial}
                        animate={slideLeft.animate}
                        transition={{ duration: 0.6, ease: "easeInOut" }}>Hearing comments on how our content has been helpful to instructors and IFL students and how they have applied it to their work is an honor. It shows why it's worthwhile to create this website! Please inform us if you have found us to be helpful.
                    </motion.p>
                </div>
            </div>
            <motion.div
                initial={slideLeft.initial}
                animate={slideLeft.animate}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="row justify-content-center"
            >
                <div className="col-md-10 col-lg-6">
                    <form>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input className="bg-light p-2 w-100 border border-secondary" placeholder="First name" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <input className="bg-light p-2 w-100 border border-secondary" placeholder="Last name" type="text" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <textarea className="bg-light p-2 w-100 border border-secondary" placeholder="Your message" rows="4"></textarea>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-grid">
                                    <button className="text-bg-dark px-4 py-2" type="submit">Send message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default ContactForm;