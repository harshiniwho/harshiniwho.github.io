import React from 'react';

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Education from './Education';
import WorkTiles from './WorkTiles';

function ExperienceTimeline() {
    let elements = (<React.Fragment>
        <WorkTiles />
        <Education />
    </React.Fragment>);
    return (
        <VerticalTimeline>
            {elements}
        </VerticalTimeline>
    );
}

export default ExperienceTimeline;