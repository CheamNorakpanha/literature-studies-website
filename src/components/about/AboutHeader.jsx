import React from "react";
import { motion } from "framer-motion";

const slideLeft = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 }
};

const AboutHeader = () => {
    return (
        <div className="container" style={{ marginTop: '5rem' }}>
            <div className="row justify-content-center text-center mb-2 mb-lg-4">
                <div className="col-lg-8 col-xxl-7">
                    <motion.h2 className="display-5 fw-bold mb-3"
                        initial={slideLeft.initial}
                        animate={slideLeft.animate}
                        transition={{ duration: 0.4, ease: "easeInOut" }}>About Us
                    </motion.h2>
                </div>
            </div>
        </div>
    );
};
export default AboutHeader;