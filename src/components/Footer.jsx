import React from 'react';
import Contact from './Contact';

import content from './content';
import Copyright from './Copyright';
import YoutubeEmbed from './YouTubeEmbed';

function Footer() {
    return (
        <div id="footer-wrapper">
            <div id="footer" className="container">
                <header className="major">
                    <h2>{content.contactTitle}</h2>
                    <h2>{content.contactTitle1}</h2>
                    <br />
                    <YoutubeEmbed embedId="KH9PY49ttLs" />
                    <YoutubeEmbed embedId="cMcQ1nnaOXU" />
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