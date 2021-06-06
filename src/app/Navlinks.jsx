import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from '@material-ui/core/Typography';

import { Apps } from "@material-ui/icons";

import CustomDropdown from './CustomDropdown';
import Button from "./Button";

import styles from '../css/headerLinkStyles';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
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
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
        <Typography variant={"h6"}>
            home.
        </Typography>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant={"h6"}>
            about.
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant={"h6"}>
            work.
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant={"h6"}>
            writing.
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant={"h6"}>
            feminism.
        </Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant={"h6"}>
            contact.
        </Typography>
      </ListItem>
    </List>
  );
}
