import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Links from './Links';

import content from './commons/content';

import { preventImage } from '../css/baseStyles';
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
            ...preventImage,
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
    // to attribute if i use <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by rawpixel.com - www.freepik.com</a>
    return (
        <div className={classes.root}>
            <div className="row banner">
                <div className="banner-text">
                <h1 className="responsive-headline">I'm Jonathan Doe.</h1>
                <h3>
                    I'm a Manila based <span>graphic designer</span>,
                    <span>illustrator</span> and <span>webdesigner</span> creating awesome
                    and effective visual identities for companies of all sizes around the
                    globe. Let's
                    <a className="smoothscroll" href="#about">
                    {" "}
                    start scrolling
                    </a>{" "}
                    and learn more
                    <a className="smoothscroll" href="#about">
                    {" "}
                    about me
                    </a>.
                </h3>
                <hr />
                <Links />
                </div>
            </div>
            <img alt="Harshini's face in a circle" className={classes.img} src={faceImg}></img>
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