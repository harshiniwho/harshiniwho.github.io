import React from 'react';
import Contact from './Contact';

import content from '../commons/content';
import Copyright from './Copyright';
import YoutubeEmbed from './YouTubeEmbed';

function Footer() {
    return (
        <div id="footer-wrapper">
            <div id="footer" className="container">
                <header className="major">
                    <h2>{content.contactTitle}</h2>
                    <p>{content.contactTitle1}</p>
                </header>
                    <div>
                        <section id="sidebar">
                            <section className="col-6 col-12-narrower feature">
                                <YoutubeEmbed embedId="KH9PY49ttLs" />
                            </section>
                            {/* <section className="col-6 col-12-narrower feature">
                                <YoutubeEmbed embedId="cMcQ1nnaOXU" />
                            </section> */}
                        </section>
                        <header id="contact" className="major">
                            <h4> 
                                {content.contactDetails1}<br />
                                {content.contactDetails2}<br />
                                {content.email}
                            </h4>
                        </header>
                    </div>
                <Contact />
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;