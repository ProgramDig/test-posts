import React from 'react';
// import classes from "./NavBar.module.sass"

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Лого</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;