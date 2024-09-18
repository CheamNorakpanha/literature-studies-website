import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex justify-content-center py-3 fixed-top bg-white shadow-sm">
            <ul className="nav nav-pills">
                <li className="nav-item"><h6><Link to="/home" className="nav-link" aria-current="page">Home</Link></h6></li>
                <li className="nav-item"><h6><Link to="/about" className="nav-link">About</Link></h6></li>
                <li className="nav-item"><h6><Link to="/contact" className="nav-link">Contact</Link></h6></li>
            </ul>
        </div>
    );
};

export default NavBar;