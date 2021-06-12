import React from 'react';

import { Grid, makeStyles, Typography } from '@material-ui/core';
import content from '../commons/content';

function Skills() {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
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
    return (
        <React.Fragment>
            <Typography className={classes.name} variant={"h2"}>
                    {content.skillsTitle}
            </Typography>
        </React.Fragment>
    );
}

export default Skills;