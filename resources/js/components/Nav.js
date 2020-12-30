import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
        <Link to="/" className="navbar-brand" href="#">Contact</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/addContact"  className="nav-link" href="#">Add Contact</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>

    )
}

export default Nav;