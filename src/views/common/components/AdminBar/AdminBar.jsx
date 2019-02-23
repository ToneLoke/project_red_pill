import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";


const styles = {
  root: {
    // flexGrow: 1,
    backgroundColor: "rgba(93,60,173,1)",
    width: "100%"
  },
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    // marginLeft: -12,
    // marginRight: 20,
  },
  toolbar: {
    height: 64,
    background: `url("/images/header-pattern.png") repeat top left`
  }
};

function TopBar(props) {
  const { classes, title } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={props.handleClick}
          >
            {props.icon && <props.icon />}
          </IconButton>
          <Typography variant="headline" color="inherit" className={classes.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopBar);
