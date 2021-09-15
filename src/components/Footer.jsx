import React from 'react';
import Contact from './Contact';

import content from './content';
import Copyright from './Copyright';

function Footer() {
    return (
        <div id="footer-wrapper">
            <div id="footer" className="container">
                <header className="major">
                    <h2>{content.contactTitle}</h2>
                    <p>
                        {content.contactDetails1}<br />
                        {content.contactDetails2}
                    </p>
                </header>
                <div className="row">
                </div>
                <Contact />
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;