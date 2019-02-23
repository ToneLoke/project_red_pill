import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Actions, Links } from "../index";
import controls from "../../controls";
import styles from './Controls.styles'
import { useStore } from '../../../../store';

const BottomAppBar = ({ classes, history }) => {
  const { state, dispatch } = useStore();
  console.count("AppBar.jsx");
  //======================= Find the controls to display based off the current url =======================
  const links = controls.nav[history.location.pathname] || null;
  const actions = controls.actions[history.location.pathname + history.location.search] || null;

  const handleDispatch = type => dispatch( { type, payload: state[type.split('_')[0]] })
  return (
    <div position="fixed" className={classes.appBar}>
      <div className={classes.toolbar}>
        <div className={classes.left} >
        <Links links={links} />
        </div>
        <div className={classes.right}>
        <Actions actions={actions} dpHandler={handleDispatch} />
        </div>
      </div>
    </div>
  );
};

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomAppBar);
