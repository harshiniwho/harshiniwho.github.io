import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import WorkTile from './WorkTile';
import content from '../commons/content';

// reference: https://github.com/stephane-monnot/react-vertical-timeline

function WorkTiles() {
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
    const tiles = (content.workTiles.map(workTile => {
        return (
            <WorkTile 
            company={workTile.company}
            title={workTile.title}
            duration={workTile.duration}
            details={workTile.details}/>
        );
    }));
    return (
        <React.Fragment>
                {tiles}
        </React.Fragment>
    )
}

export default WorkTiles;