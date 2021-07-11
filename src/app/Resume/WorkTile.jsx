import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
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
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}>
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