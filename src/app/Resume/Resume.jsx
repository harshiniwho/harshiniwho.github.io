import React from 'react';

import ExperienceTimeline from './ExperienceTimeline';
import Skills from './Skills';


function Resume() {
    return (
        <React.Fragment>
            <ExperienceTimeline />
            <Skills />
        </React.Fragment>
    );
}

export default Resume;