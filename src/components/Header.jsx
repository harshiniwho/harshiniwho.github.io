import React from 'react';
import { HashLink } from 'react-router-hash-link';
function Header() {
    return (
        <div id="header" className="container">
            <h1 id="logo"><a href="/">WELCOME</a></h1>
            <nav id="nav">
                <ul>
                    <li>
                        <HashLink smooth to="#about"> ABOUT
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#experience"> EXPERIENCE
                        </HashLink>
                    </li>
                    <li className="break">
                        <HashLink smooth to="#portfolio"> WRITING
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#contact"> CONTACT
                        </HashLink>
                    </li>
                </ul>
            </nav>
    </div>
    );
}

export default Header;