import React from 'react';

import { makeStyles } from '@material-ui/core';

import Links from './Links';
import content from './content';

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
        }
     });
    const classes = useStyles();
    return (
        <React.Fragment >
            <div className={classes.content}>
                <Links/>
            </div>
        </React.Fragment>
    );
}

export default Contact;