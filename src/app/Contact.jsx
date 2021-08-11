import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Links from './Links';

import content from './commons/content';

import { preventImage } from '../css/baseStyles';
import bottomPattern from '../assets/contact-design.png';

function Contact() {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
            margin: '10rem 0 0 0'
        },
        name: {
            color: 'black',
        },
        content: {
            textAlign: 'center',
            backgroundColor: 'black',
            alignContent: 'center',
            width: '35rem',
            height: '15rem',
            color: 'white',
            zIndex: '700',
            left: '100%',
            margin: '0.2rem auto 0 auto',
        },
        details: {
            fontFamily: "'Old Standard TT', serif",
        },
        img: {
            ...preventImage,
            width: '2.5rem',
            height: 'auto',
            display: 'block',
            left: '50%',
            objectFit: 'cover',
            margin: '1.2rem auto 0 auto',
        },
     });
    const classes = useStyles();
    return (
        <React.Fragment >
             <Typography className={classes.root} variant={"h2"}>
                    {content.contactTitle}
            </Typography>
            <div className={classes.content}>
                {/* TODO: remove the break lines */}
                <br />
                <br />
                <br />
                <Typography className={classes.details} variant={"h6"}>
                    {content.contactDetails}
                </Typography>
                <Links/>
            </div>
            <img className={classes.img} src={bottomPattern}></img>
        </React.Fragment>
    );
}

export default Contact;