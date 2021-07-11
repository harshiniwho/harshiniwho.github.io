import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { List, ListItem, makeStyles, Typography } from '@material-ui/core';

function WorkTile(props) {
    const useStyles = makeStyles({
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
        <VerticalTimelineElement>
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
        </VerticalTimelineElement>
    );
}

export default WorkTile;