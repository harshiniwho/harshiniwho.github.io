import React from 'react';
import classNames from "classnames";

import styles from '../../css/headerStyles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core';
import { preventImage } from '../../css/baseStyles';

import brandImage from '../../assets/brand-harshini-resized.gif';

function Navbar(props) {
    const useStyles = makeStyles(styles);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    const { color, rightLinks, leftLinks, fixed, absolute } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed,
    });
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const useStyles2 = makeStyles({
        gif: {
            ...preventImage,
            width: '15rem',
            height: '4.5rem',
            objectFit: 'cover'
        }
     });
     const localClasses = useStyles2();
     const brandComponent = <img className={localClasses.gif} src={brandImage} alt="loading..." />;
    return (
        <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
            {leftLinks !== undefined ? brandComponent : null}
            <div className={classes.flex}>
            {leftLinks !== undefined ? (
                <Hidden smDown implementation="css">
                {leftLinks}
                </Hidden>
            ) : (
                brandComponent
            )}
            </div>
            <Hidden smDown implementation="css">
            {rightLinks}
            </Hidden>
            <Hidden mdUp>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
            >
                <Menu />
            </IconButton>
            </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="js">
            <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
            >
            <div className={classes.appResponsive}>
                {leftLinks}
                {rightLinks}
            </div>
            </Drawer>
        </Hidden>
    </AppBar>
    );
}

export default Navbar;