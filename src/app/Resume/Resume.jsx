import React from 'react';

import ExperienceTimeline from './ExperienceTimeline';
import Skills from './Skills';


function Resume() {
    return (
        <React.Fragment>
            <ExperienceTimeline id="resume"/>
            <Skills />
        </React.Fragment>
    );
}

export default Resume;