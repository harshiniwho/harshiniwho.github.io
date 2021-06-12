import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import content from './commons/content';

import faceImg from '../assets/face-circle.png';

function Jumbotron() {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
        },
        name: {
            textAlign: 'left',
            color: 'black',
            width: '30rem',
            height: '7rem',
            boxShadow: '1rem',
            fontFamily: "'Lato', serif"
        },
        content: {
            display: 'inline-block',
            zIndex: '700',
            margin: '12rem 0 0rem 0',
        },
        img: {
            float: 'left',
            left: '2%',
            position: 'relative',
            width: '100vh',
            marginTop: '5rem',
            objectFit: 'cover'
        },
        designations: {
            textAlign: 'left',
            fontFamily: "'Old Standard TT', serif"
        }
     });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.img} src={faceImg}></img>
            <div className={classes.content}>
                <Typography className={classes.name} variant={"h2"}>
                    {content.opening}
                </Typography>
                <Typography className={classes.name} variant={"h6"}>
                    {content.about}
                </Typography>
            </div>
        </div>
    );
}

export default Jumbotron;