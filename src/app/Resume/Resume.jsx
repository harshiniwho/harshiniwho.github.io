import React from 'react';

import Education from './Education';
import Skills from './Skills';
import VerticalTimelineComponent from './VerticalTimeline';
import WorkTiles from './WorkTiles';

function Resume() {
    return (
        <React.Fragment>
            <WorkTiles />
            <VerticalTimelineComponent />
            <Skills />
            <Education />
        </React.Fragment>
    );
}

export default Resume;