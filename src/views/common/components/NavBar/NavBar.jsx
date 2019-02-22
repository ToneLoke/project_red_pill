import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import controls from "../../controls";

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing.unit * 2
  },
  link: {
    backgroundColor: "rgba(103,58,183,1)",
    marginRight: 20
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    position: "fixed",
    display: "flex",
    top: "auto",
    bottom: 0,
    height: 60,
    backgroundColor: "#673AB7",
    width: "100%",
    zIndex: 100,
    paddingLeft: 28,
    paddingRight: 28,
    background: `url("/images/header-pattern.png") repeat top left`
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    position: "relative",
    width: "100%",
    height: 56,
    marginTop: -28
  }
});

const BottomAppBar = ({ classes, history }) => {
  console.count("AppBar.jsx");
  //======================= Find the controls to display based off the current url =======================
  const actions = controls.nav[history.location.pathname] || null;
  const makeNavLinks = c => {
    return (
      <div key={c.key} className={classes.btn}>
        <Fab {...c} to={c.to} className={classes["link"]}>
          <c.icon />
          {c.text}
        </Fab>
      </div>
    );
  };

  return (
    <div position="fixed" className={classes.appBar}>
      <div className={classes.toolbar}>
        {actions && actions.map(makeNavLinks)}
      </div>
    </div>
  );
};

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
