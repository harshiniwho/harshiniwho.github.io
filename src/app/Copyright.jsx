import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

import content from './commons/content';

import { preventImage } from '../css/baseStyles';

function Copyright() {
    const name = {
        textAlign: 'center',
        color: 'black',
        alignItems: 'center',
        fontFamily: "'Lato', serif",
        margin: '0.5rem auto 1rem auto'
    };
    const useStyles = makeStyles({
        root: {
            clear: 'left',
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
            marginTop: '3rem'
        },
        name,
        img: {
            ...preventImage,
            width: '1.5rem',
            height: 'auto',
            display: 'block',
            left: '50%',
            objectFit: 'cover',
            margin: '1.2rem auto 0 auto',
        },
        final: {
            ...name,
            paddingBottom: '1rem'
        }
     });
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <div>
                <CopyrightIcon className={classes.img}/>
                <Typography className={classes.name} variant={"h10"}>
                    {content.copyright}
                </Typography>
            </div>
            <Typography className={classes.final} variant={"h10"}>
                {content.copyrightLine2}
            </Typography>
        </div>
    );
}

export default Copyright;