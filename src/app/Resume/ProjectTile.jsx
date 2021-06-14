import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';


function ProjectTile(props) {
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
        <div>
            <Typography className={classes.name} variant={"h5"}>
                {props.projectTitle}
            </Typography>
            <Link to={props.link}>
                <LinkIcon />
            </Link>
            <Typography className={classes.name} variant={"h6"}>
                    <i>{props.description}</i>
            </Typography>   
            {/* <List>
                {props.details.map((detail) => {
                    return (<ListItem className={classes.listItem}>
                        {detail}
                    </ListItem>)
                })}
            </List> */}
        </div>
    );
}

export default ProjectTile;