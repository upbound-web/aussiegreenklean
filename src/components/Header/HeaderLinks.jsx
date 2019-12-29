/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaFacebook } from 'react-icons/fa';
import { MdLocalPhone } from "react-icons/md";


// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
        color="transparent"
        href="#aboutus"
        className={classes.navLink}
        >
          About us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
        color="transparent"
        href="#services"
        className={classes.navLink}
        >
          Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
        color="transparent"
        href="#contact"
        className={classes.navLink}
        >
          Contact
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
        color="transparent"
        href="https://book.servicem8.com/request_service_booking?strVendorUUID=f588290e-1fea-44d5-b231-2dfe4adc487b"
        outline
        className={classes.navLink}
        >
          Book
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/AussieGreenKlean"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook/> Facebook
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="call-garry"
          title="Call Garry"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="tel:+61408775286"
            className={classes.navLink}
          >
            <MdLocalPhone/> Call
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
