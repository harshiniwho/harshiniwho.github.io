import React from 'react';

import Education from './Education';
import Skills from './Skills';
import WorkTiles from './WorkTiles';

function Resume() {
    return (
        <React.Fragment>
            <WorkTiles />
            <Skills />
            <Education />
        </React.Fragment>
    );
}

export default Resume;