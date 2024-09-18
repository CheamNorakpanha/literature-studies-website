import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Records from '../../json/records.json';
import { motion } from "framer-motion"

const slideLeft = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 }
};

function HomeBody() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRecords = Records.filter(record =>
        record.title.toLowerCase().includes(searchTerm.toLowerCase()) || record.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ marginTop: '5rem' }}>
            <div className="row justify-content-center text-center mb-2 mb-lg-4">
                <div className="col-lg-8 col-xxl-7">
                    <motion.h2 className="display-5 fw-bold mb-3"
                        initial={slideLeft.initial}
                        animate={slideLeft.animate}
                        transition={{ duration: 0.4, ease: "easeInOut" }}>Literature Review
                    </motion.h2>
                </div>
            </div>
            <form className="d-flex justify-content-center pb-4">
                <motion.input
                    initial={slideLeft.initial}
                    animate={slideLeft.animate}
                    transition={{ duration: 0.6, ease: "easeInOut" }}

                    id="searchBar"
                    type="search"
                    className="container border py-3 px-4 fs-5"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            {
                filteredRecords.map(record => (
                    <motion.div
                        className="container bg-body p-4 mb-4 border" key={record.id}

                        //  Framer Motion: fade up while in view
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="mb-4 fw-bolder">{record.title}</h1>
                        <h2 className="mb-4 fw-bold">{record.author}</h2>
                        <p className="fs-5">{record.desc}</p>

                        {(() => {
                            // Switch statement based on the value of record.title
                            switch (record.title) {

                                // If record.title is "Desiree's Baby"
                                case "Desiree's Baby":
                                    return (
                                        <NavLink to="/DesireesBaby" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is "The Drover's Wife"
                                case "The Drover's Wife":
                                    return (
                                        <NavLink to="/DroversWife" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "The Happy Prince":
                                    return (
                                        <NavLink to="/HappyPrince" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "The Hitch-Hiker":
                                    return (
                                        <NavLink to="/HitchHiker" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "Letters from Thailand":
                                    return (
                                        <NavLink to="/LettersFromThailand" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "The Necklace":
                                    return (
                                        <NavLink to="/Necklace" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "Not Poor, Just Broke":
                                    return (
                                        <NavLink to="/NotPoorJustBroke" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "Oliver Twist":
                                    return (
                                        <NavLink to="/OliverTwist" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "Poison":
                                    return (
                                        <NavLink to="/Poison" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "Romeo and Juliet":
                                    return (
                                        <NavLink to="/RomeoAndJuliet" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "The Story of an Hour":
                                    return (
                                        <NavLink to="/StoryOfAnHour" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );

                                // If record.title is ""
                                case "The Village by the Sea":
                                    return (
                                        <NavLink to="/VillageByTheSea" className="text-decoration-none">
                                            <button className="text-bg-dark px-4 py-2 fs-6 border-0">Read More</button>
                                        </NavLink>
                                    );
                                default:
                                    return null;
                            }
                        })()}
                    </motion.div>
                ))
            }
        </div>
    );
}

export default HomeBody;
