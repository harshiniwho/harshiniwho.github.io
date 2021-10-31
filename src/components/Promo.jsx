import React, { useState } from 'react';

import content from './commons/content';

function Promo() {
    const [storyId, setStoryId] = useState(0);
    const [story, setStory] = useState({
        ...content.stories[0]
    });

    function refreshHandler() {
        const updateStory = storyId + 1;
        console.log(updateStory);
        setStoryId(updateStory);
        setStory(content.stories[storyId%6])
    }
    return (
        <div id="promo-wrapper">
           <h2> {content.storiesTitle} </h2>
           <br />
            <div>
                <a style={{borderBottom: 'none'}} target="_blank" href={story.link}>
                <section id="promo">
                    <h2>{story.title}</h2>
                </section>
                </a>
            </div>
            
        <br />
        <a onClick={refreshHandler} className="button">{content.storyRefresh}</a>
        </div>
    );
}

export default Promo;