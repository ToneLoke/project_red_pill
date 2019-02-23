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
  const fullPath = history.location.pathname + history.location.search
  //NOTE: helper to check if any field in the given state is empty
  const isEmpty = obj => Object.values(obj).some(x => (x === null || x === ''));
  //======================= Find the controls to display based off the current url =======================
  let links = controls.nav[history.location.pathname] || null;
  links = links.map( l => l.to === fullPath ? {...l, isActive: true} : { ...l, isActive: false})
  let actions = controls.actions[fullPath] || null;
  //NOTE: add an extra disabled field if any part of the given state is blank (hence don't fire actions)
  actions = actions.map( a => isEmpty(state[a.actionType.split('_')[0].toLowerCase()]) ? {...a, disabled: true} : { ...a, disabled: false})

  const handleDispatch = type => {
    const reducer = type.split('_')[0].toLowerCase()
    dispatch( { type, payload: state[reducer] })
  }
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
