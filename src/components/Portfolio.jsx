import React from 'react';

import content from './commons/content';

function article(props) {
    console.log("in here ", props.img);
    return (
        <section className="col-4 col-12-narrower feature">
            <div className="image-wrapper first">
                <a href={props.link} target="_blank" className="image featured"><img src={props.img} alt="" /></a>
            </div>
            <p>{props.description}</p>
        </section>
    );
}

const articles = (<React.Fragment>
        {content.writing.map((a) => {
            return (
                article(a)
            );
        })}
    </React.Fragment>) 

function Portfolio() {
    return (
        <div className="wrapper">
            <section id="portfolio" className="container">
                <header className="major">
                    <h2>{content.writingTitle}</h2>
                    <p>{content.writingDescription}</p>
                </header>
                <div className="row features">
                    {articles}
                </div>
                <ul className="actions major">
                    <li><a href={content.mediumLink} target="_blank" className="button">{content.writingButton}</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Portfolio;