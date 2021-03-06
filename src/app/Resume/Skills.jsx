import React from 'react';

import { Grid, makeStyles, Typography, ListItem, List } from '@material-ui/core';
import content from '../commons/content';
import ProjectTile from './ProjectTile';
import SkillsBox from './SkillsBox';

function listify(list) {
    return list.map(el => {
        return (<li>{el}</li>);
    });
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
        },
        course: {
            display: 'block',
            textAlign: 'left',
            listStyleType: 'circle'
        },
        courseItem: {
            display: 'block',
        }
     });
    const classes = useStyles();
    const progLangs = listify(content.skills["Programming Languages"]);
    const tools = listify(content.skills["Tools & Technologies"]);
    const courseWork = (<List className={classes.course}> {listify(content.courseWork)} </List>);
    const courseProjects = (content.courseProjects.map(project => {
        return (
            <ProjectTile link={project.link}
            projectTitle={project.projectTitle}
            description={project.description}/>
        );
    }));
    return (
        <React.Fragment>
            <SkillsBox />
            <Typography className={classes.name} variant={"h2"}>
                    {content.courseWorkTitle}
            </Typography>
            <Grid className={classes.grid}>
                {courseWork}
                <div>
                    {courseProjects}
                </div>
            </Grid>
            <Typography className={classes.name} variant={"h2"}>
                    {content.skillsTitle}
            </Typography>
            {progLangs}
            {tools}
        </React.Fragment>
    );
}

export default Skills;