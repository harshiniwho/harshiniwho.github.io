import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavHashLink, HashLink } from 'react-router-hash-link';

import styles from '../../css/headerLinkStyles';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <HashLink smooth to='/#home' className={classes.dropdownLink}>
          <h3>
              home
          </h3>
        </HashLink>
      </ListItem>
      <ListItem className={classes.listItem}>
      <HashLink smooth to={'/#resume'} className={classes.dropdownLink}>
          <h3>
              experience
          </h3>
        </HashLink>
      </ListItem>
      <ListItem className={classes.listItem}>
      <NavHashLink smooth to={'/#writing'} className={classes.dropdownLink}>
          <h3>
              writing
          </h3>
        </NavHashLink>
      </ListItem>
      <ListItem className={classes.listItem}>
      <NavHashLink smooth to={'/#feminism'} className={classes.dropdownLink}>
          <h3>
              feminism
          </h3>
        </NavHashLink>
      </ListItem>
      <ListItem className={classes.listItem}>
      <NavHashLink smooth to={'/#contact'} className={classes.dropdownLink}>
          <h3>
              contact
          </h3>
        </NavHashLink>
      </ListItem>
    </List>
  );
}
