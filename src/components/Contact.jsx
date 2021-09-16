import React from 'react';

import { makeStyles } from '@material-ui/core';

import Links from './Links';

function Contact() {
    const useStyles = makeStyles({
        content: {
            textAlign: 'center',
            alignContent: 'center',
            color: 'white',
            margin: '0.2rem auto 0 auto',
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