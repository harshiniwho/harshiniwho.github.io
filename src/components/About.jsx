import React from 'react';

import content from './commons/content';

function About() {
    return (
        <div className="container">
            <br />
            <div className="row gtr-150">
                <div className="col-8 col-12-narrower">
                        <article id="content">
                            <header>
                                <h2>{content.aboutTitle}</h2>
                            </header>
                            <div className="image featured"><img src="images/pic01.jpg"  /></div>
                            <p>{content.about1}</p>
                            <p>{content.about2}</p>
                            <p>{content.about3}</p>
                        </article>

                </div>
                <div className="col-4 col-12-narrower">

                <section id="sidebar">
                    <section>
                        <header>
                            <h3>{content.readerTitle}</h3>
                        </header>
                        <p>{content.readerContent}</p>
                        <ul class="actions">
                            <li><a href={content.readerLink} class="button">{content.readerButton}</a></li>
                        </ul>
                    </section>
                    <section>
                        {/* <img src="images/pic07.jpg" alt="" /> */}
                        <header>
                            <h3>{content.speakerTitle}</h3>
                        </header>
                        <p>{content.speakerContent}</p>
                        <ul class="actions">
                            <li><a href="#" class="button">{content.speakerButton}</a></li>
                        </ul>
                    </section>
                </section>
                <br />
                <br />
            </div>
        </div>
    </div>
    );
}

export default About;