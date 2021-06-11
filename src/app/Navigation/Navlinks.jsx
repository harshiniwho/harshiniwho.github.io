import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from '../../css/headerLinkStyles';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link to='/' className={classes.dropdownLink}>
          <h3>
              home
          </h3>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to='/resume' className={classes.dropdownLink}>
          <h3>
              experience
          </h3>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to='/writing' className={classes.dropdownLink}>
          <h3>
              writing
          </h3>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to='/feminism' className={classes.dropdownLink}>
          <h3>
              feminism
          </h3>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to='/contact' className={classes.dropdownLink}>
          <h3>
              contact
          </h3>
        </Link>
      </ListItem>
    </List>
  );
}
