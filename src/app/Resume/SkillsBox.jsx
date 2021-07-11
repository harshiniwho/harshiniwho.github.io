import React from 'react';

import { Grid, makeStyles, Typography, ListItem, List } from '@material-ui/core';
import { listify } from '../commons/methods';
import content from '../commons/content';


function SkillsBox() {
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
    return (
        <Grid className={classes.grid}>
            <List>
                {courseWork}
            </List>
            <List>
                {progLangs}
                {tools}
            </List>
        </Grid>
    );
}

export default SkillsBox;