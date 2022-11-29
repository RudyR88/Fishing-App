import React from "react"
import "../scss/components/Navbar.css"

function Navbar({logo}) {
    return (
        <header>
            <nav className="container flex-between">
                <h1><a href="index.html">{logo}</a></h1>
                <div className="mobile-menu flex-column">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="flex links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Map</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
