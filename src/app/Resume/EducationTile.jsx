import React from 'react';
import { List, ListItem, makeStyles, Typography } from '@material-ui/core';

function EducationTiles(props) {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
        },
        name: {
            textAlign: 'left',
            color: 'black',
            boxShadow: '1rem',
            fontFamily: "'Lato', serif"
        },
        content: {
            display: 'inline-block',
            zIndex: '700',
            margin: '12rem 0 0rem 0',
        },
        designations: {
            textAlign: 'left',
            fontFamily: "'Old Standard TT', serif"
        }
     });
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.name} variant={"h5"}>
                {props.school}
            </Typography>
            <Typography className={classes.name} variant={"h5"}>
                {props.degree}
            </Typography>
            <Typography className={classes.name} variant={"h6"}>
                    <i>{props.degreeSub}</i>
            </Typography>   
            <List>
                {props.details.map((detail) => {
                    return (<ListItem>
                        {detail}
                    </ListItem>)
                })}
            </List>
        </div>
    );
}

export default EducationTiles;