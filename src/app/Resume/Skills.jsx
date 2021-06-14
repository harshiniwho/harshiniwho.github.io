import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';
import content from '../commons/content';
import ProjectTile from './ProjectTile';

function listify(list) {
    return list.map(el => {
        return (<li>{el}</li>);
    });
}

function courseProject(project) {
    return (<div>
        
    </div>);
}

function Skills() {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
            backgroundColor: 'black'
        },
        grid: {
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            gridTemplateColumns: 'repeat(2, 30rem)', 
            // gridTemplateRows: 'repeat(2, 250px)',
            margin: '2rem auto 0 auto'
        },
        name: {
            textAlign: 'center',
            color: 'black',
            alignItems: 'center',
            fontFamily: "'Lato', serif",
            margin: '8rem auto 0 auto'
        }
     });
    const classes = useStyles();
    const progLangs = listify(content.skills["Programming Languages"]);
    const tools = listify(content.skills["Tools & Technologies"]);
    const courseWork = listify(content.courseWork)
    const courseProjects = (content.courseProjects.map(project => {
        return (
            <ProjectTile link={project.link}
            projectTitle={project.projectTitle}
            description={project.description}/>
        );
    }));
    return (
        <React.Fragment>
            <Typography className={classes.name} variant={"h2"}>
                    {content.courseWorkTitle}
            </Typography>
            {courseWork}
            {courseProjects}
            <Typography className={classes.name} variant={"h2"}>
                    {content.skillsTitle}
            </Typography>
            {progLangs}
            {tools}
        </React.Fragment>
    );
}

export default Skills;