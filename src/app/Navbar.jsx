import React from 'react';
import { Toolbar, makeStyles, Grid, Typography } from '@material-ui/core';
import { MailOutline, LinkedIn, GitHub } from '@material-ui/icons';

function Navbar() {
    const useStyles = makeStyles({
        toolbar: {
          color: 'white',
          backgroundColor: 'black',
          boxShadow: '1rem'
        },
        grid: {
            margin: 'auto auto auto 0',
            display: 'grid',
            textAlign: 'right',
            gridTemplateColumns: 'repeat(3, 10rem)'
        }
     });
     const classes = useStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <Grid className={classes.grid} container spacing={3} >
                <Typography variant={"h6"}>
                    HOME
                </Typography>
                <Typography variant={"h6"}>
                    ABOUT
                </Typography>
                <Typography variant={"h6"}>
                    WRITING
                </Typography>
            </Grid>
            <MailOutline />
            <LinkedIn />
            <GitHub />
        </Toolbar>
    );
};

export default Navbar;