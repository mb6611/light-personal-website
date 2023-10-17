import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__name">Matthew Banaag</div>
            <div className="navbar__subpages">
                <p>About Me</p>
                <p>Startups</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Navbar