import React from 'react';

function Header() {
    return (
        <div id="header" className="container">
            <h1 id="logo"><a href="/">WELCOME!</a></h1>
            <nav id="nav">
                <ul>
                    <li><a href="#experience">ABOUT</a></li>
                    <li><a href="#promo-wrapper">EXPERIENCE</a></li>
                    <li className="break"><a href="#portfolio">WRITING</a></li>
                    <li><a href="#footer-wrapper">CONTACT</a></li>
                </ul>
            </nav>
    </div>
    );
}

export default Header;