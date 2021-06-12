import React from 'react';
import { List, ListItem, makeStyles, Typography } from '@material-ui/core';

function WorkTile(props) {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
        },
        name: {
            textAlign: 'left',
            color: 'black',
            fontFamily: "'Lato', serif"
        },
        listItem: {
            listStyleType: 'circle'
        }
     });
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.name} variant={"h5"}>
                {props.company}
            </Typography>
            <Typography className={classes.name} variant={"h5"}>
                {props.title}
            </Typography>
            <Typography className={classes.name} variant={"h6"}>
                    <i>{props.duration}</i>
            </Typography>   
            <List>
                {props.details.map((detail) => {
                    return (<ListItem className={classes.listItem}>
                        {detail}
                    </ListItem>)
                })}
            </List>
        </div>
    );
}

export default WorkTile;