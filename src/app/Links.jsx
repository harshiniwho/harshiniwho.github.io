import React from "react";
import content from './commons/content';

import { Link, makeStyles } from '@material-ui/core';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';

function Links(props) {
    const useStyles = makeStyles({
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
     });
    const classes = useStyles();
    return (
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
    );
}

export default Links;