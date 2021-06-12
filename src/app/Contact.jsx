import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';

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
        link: {
            alignItems: 'flex-end',
            color: 'inherit',
            margin: '3rem 1rem auto 0',
            textDecoration: "none",
            "&:hover,&:focus": {
                color: "inherit",
                textDecoration: 'none'
            }
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
                <br />
                <br />
                <br />
                <Typography className={classes.details} variant={"h6"}>
                    {content.contactDetails}
                </Typography>
                <div>
                    <Link
                    className={classes.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={content.linkedin}>
                         <LinkedIn /> 
                    </Link>
                    <Link
                    className={classes.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={content.github}>
                        <GitHub />
                    </Link>
                    <Link
                    className={classes.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={content.twitter}>
                         <Twitter />
                    </Link>
                </div>
            </div>
            <img className={classes.img} src={bottomPattern}></img>
        </React.Fragment>
    );
}

export default Contact;