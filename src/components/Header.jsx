import React from 'react';

function Header() {
    return (
        <div id="header" className="container">
            <h1 id="logo"><a href="/">WELCOME</a></h1>
            <nav id="nav">
                <ul>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#experience">EXPERIENCE</a></li>
                    <li className="break"><a href="#portfolio">WRITING</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
    </div>
    );
}

export default Header;