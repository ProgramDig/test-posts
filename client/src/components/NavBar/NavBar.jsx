import React from 'react';
import {Link} from "react-router-dom";
// import classes from "./NavBar.module.sass"

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper teal">
                <a href="#" className="brand-logo">Лого</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/create-post'}>Створити пост</Link></li>
                    <li><Link to={'/post-list'}>Ліст постів</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;