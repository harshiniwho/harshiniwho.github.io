import React from 'react';

import content from './content';

function Feature() {
    return (
        <div id="experience" className="wrapper">
            <div className="container">
                <div className="row">
                    <section className="col-6 col-12-narrower feature">
                        <div className="image-wrapper first">
                            <a href="#" className="image featured first"><img src="images/pic01.jpg" alt="" /></a>
                        </div>
                        <header>
                            <h2>{content.professionalExperienceTitle}</h2>
                        </header>
                        <p>{content.professionalExperienceDescription}</p>
                        <ul className="actions">
                            <li><a href={content.linkedin} className="button">{content.professionalExperienceButton}</a></li>
                        </ul>
                    </section>
                    <section className="col-6 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                        </div>
                        <header>
                            <h2>{content.projectsTitle}</h2>
                        </header>
                        <p>{content.projectsDescription}</p>
                        <ul className="actions">
                            <li><a href={content.github} className="button">{content.projectsButton}</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Feature;