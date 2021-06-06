import React from 'react';

function Contact() {
    return (
        <List>
            <ListItem className={classes.listItem}>
                <Tooltip
                id="instagram-twitter"
                title="Follow us on twitter"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
                >
                <Button
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                >
                    <i className={classes.socialIcons + " fab fa-twitter"} />
                </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
            <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
            >
            <Button
                color="transparent"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                className={classes.navLink}
            >
                <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
            </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                id="instagram-tooltip"
                title="Follow us on instagram"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
                >
                <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    className={classes.navLink}
                >
                    <i className={classes.socialIcons + " fab fa-instagram"} />
                </Button>
                </Tooltip>
            </ListItem>
      </List>
    );
}

export default Contact;