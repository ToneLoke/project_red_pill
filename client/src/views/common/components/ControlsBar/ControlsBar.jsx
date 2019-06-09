import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Actions, Navs } from '../';
import controls from '../../controls';
import styles from './Controls.styles';
import { useStore } from '../../../../store';

const BottomAppBar = ({ classes, history }) => {
  const { state, dispatch } = useStore();
  const path = history.location.pathname;
  const fullPath = history.location.pathname + history.location.search;
  let page = history.location.search.split('=')[1] || "settings"
  //NOTE: helper to check if any field in the given state is empty
  const isEmpty = (state) => !state || Object.values(state).some((x) => x === null || x === '');
  let navs = controls.nav[path] || null;
  let actions = controls.actions[fullPath] || null;

  if (fullPath.indexOf('/live') > -1 && state.game && state.user) {
    if(state.user.username !== 'lobby') {
      actions =
        controls.actions[`/live/${state.user.isAdmin ? 'admin' : 'player'}`][
          state.game.status === 'live' ? 'pause' : 'play'
        ];
    }else{
      actions = [];
    }
  } else if(actions) {
      if ( actions.length > 1) {
        //NOTE: if state type is null or empty show action1 else show action2
        actions = isEmpty(state[actions[0].actionType.split('_')[0].toLowerCase()])
          ? [actions[0]]
          : [actions[1]];
      } else {
        // NOTE: add an extra disabled field if any part of the given state is blank (hence don't fire actions)
        actions = actions.map((a) =>
          isEmpty(state[a.actionType.split('_')[0].toLowerCase()])
            ? { ...a, disabled: true }
            : { ...a, disabled: false }
        );
      }
  }

  const handleDispatch = (type, isReq, data) => {
    const reducer = type.split('_')[0].toLowerCase();
    dispatch({ type, payload: { ...state[reducer], ...data } }, isReq);
  };

  return (
    <div position="fixed" className={classes.appBar}>
      <div className={classes.toolbar}>
        <div className={classes.left}>
          <Navs navs={navs} page={page}/>
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
