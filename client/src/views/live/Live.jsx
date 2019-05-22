import React, { Fragment, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
// Components
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStore } from '../../store';
import clientSocket from './clientSocket';
import { NavBar } from '../common/components';
import Player from './player';
import Admin from './admin';
// Styles
import styles from './Live.styles';

const Live = ({ classes, match, history }) => {
  const {
    state: { user, game, question },
    dispatch
  } = useStore();

  useEffect(() => {
    if (user && (!game || !game.socket)) {
      clientSocket({ id: match.params.id, user })(dispatch);
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if(game && game.socket) {
        console.log("SOCKET DISCONNECT")
        // game.socket.disconnect();
      }
    };
  }, [user, game]);

  const path = history.location.pathname;
  const fullPath = history.location.pathname + history.location.search;

  return (
    <div className={classes.liveBackground}>
      <NavBar title={!game ? 'Loading data..' : `${game.title}`} path={path} fullPath={fullPath} />
      {!user || !game || !game.socket ? (
        <div className={classes.suspense}>
          <div className={classes.progress}>
            <CircularProgress color="primary" />
          </div>
          <div className={classes.overlay} />
        </div>
      ) : user.username === game.adminId.username ? (
        <Admin />
      ) : (
        <Player />
      )}
    </div>
  );
};

export default withStyles(styles, { name: 'Live' })(Live);
