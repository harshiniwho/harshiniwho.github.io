import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import '../css/Jumbotron.css';
import faceImg from '../assets/face-circle.png';

function Jumbotron() {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
        },
        name: {
            backgroundColor: 'black',
            color: 'white',
            width: '25rem',
            height: '7rem',
            boxShadow: '1rem',
        },
        content: {
            float: 'left',
            zIndex: '700',
            margin: '15rem 0 0 0',
        },
        img: {
            float: 'left',
            width: '100vh',
            margin: '2rem 30rem 0 0',
            marginRight:'-8rem'
        },
        designations: {
            textAlign: 'left',
        }
     });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.img} src={faceImg}></img>
            <div className={classes.content}>
                <Typography className={classes.name} variant={"h2"}>
                    <b><i> &nbsp; Harshini R &nbsp;  </i></b>
                </Typography>
                <Typography className={classes.designations} variant={"h6"}>
                    &emsp;&emsp; &emsp; &emsp;Software Engineer <br />
                    &emsp;&emsp; &emsp; &emsp; Writer <br />
                    &emsp;&emsp; &emsp; &emsp; Feminist <br />
                </Typography>
            </div>
        </div>
    );
}

export default Jumbotron;