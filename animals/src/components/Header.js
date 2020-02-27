import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    return (
        <div className="header">
            <Link to="/" className="title">Safari App</Link>
            <nav className="nav-links">
                <Link className="nav-link" to ="/login">Login</Link>
                <Link className="nav-link" to ="/creatures">Animals</Link>
                <Link className="nav-link" to ="/login" onClick={signOut}>Sign out</Link>
            </nav>
        </div>
    )
}