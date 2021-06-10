import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import '../css/Jumbotron.css';
import faceImg from '../assets/face-circle.png';

function Jumbotron() {
    const useStyles = makeStyles({
        root: {
            textAlign: 'center',
            fontFamily: "'Old Standard TT', serif",
        },
        name: {
            textAlign: 'left',
            backgroundColor: 'black',
            color: 'white',
            width: '25rem',
            height: '7rem',
            boxShadow: '1rem',
            fontFamily: "'Lato', serif"
        },
        content: {
            display: 'inline-block',
            float: 'left',
            zIndex: '700',
            margin: '15rem 0 0 0',
        },
        img: {
            float: 'left',
            width: '100vh',
            marginRight:'-8rem',
            marginTop: '5rem'
        },
        designations: {
            textAlign: 'left',
            fontFamily: "'Old Standard TT', serif"
        }
     });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.img} src={faceImg}></img>
            <div className={classes.content}>
                <Typography className={classes.name} variant={"h2"}>
                    <b> &nbsp; Harshini R. &nbsp; </b>
                </Typography>
                <Typography className={classes.designations} variant={"h6"}>
                    &emsp;&emsp; &emsp; &emsp; Software Engineer <br />
                    &emsp;&emsp; &emsp; &emsp; Writer <br />
                    &emsp;&emsp; &emsp; &emsp; Feminist <br />
                </Typography>
            </div>
        </div>
    );
}

export default Jumbotron;