import React from 'react';

import content from './content';

function Jumbotron() {
    return (
        <section id="hero" className="container">
            <header>
                <h2>{content.opening}</h2>
            </header>
            <p>
                {content.shortBio1} <br/>
                {content.shortBio2}
            </p>
            <ul className="actions">
                <li><a href={content.linkedin} target="_blank" className="button">Connect with me <br/> on LinkedIn</a></li>
            </ul>
        </section>
    );
}

export default Jumbotron;