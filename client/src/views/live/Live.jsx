import React, { Fragment, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import CircularProgress from '@material-ui/core/CircularProgress';

// import Avatar from '@material-ui/core/Avatar';
import { useStore } from '../../store';
import clientSocket from './clientSocket';
import { NavBar, GameInfo } from '../common/components';

import Public from './public/Public';
import Admin from './admin/Admin';
import Player from './player/Player';

// Styles
import styles from './Live.styles';

const Live = ({ classes, match, history }) => {
  const {
    state: { user, game, question },
    dispatch
  } = useStore();

  // check url
  const fullPath = history.location.pathname + history.location.search;

  const path = history.location.pathname;

  useEffect(() => {
    // Set view for user

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

  //TODO: socket logic
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
        <Admin history={history} />
      ) : (
        <Player history={history} />
      )}
    </div>
  );
};

export default withStyles(styles, { name: 'Live' })(Live);
