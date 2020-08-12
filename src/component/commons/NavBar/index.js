import React from 'react';
import {Link} from "react-router-dom";
import './index.css'

const NavBar = () => {
    return(
        <div className="box-navbar">
            <div className="navbar-logo">LOGO</div>
            <div className="navbar-item">
                <div className="navbar-item-one"><a><Link to="/">Login</Link></a></div>
                <div className="navbar-item-two"><a><Link to="/register">Register</Link></a></div>
            </div>
        </div>
    );
};
export default NavBar;