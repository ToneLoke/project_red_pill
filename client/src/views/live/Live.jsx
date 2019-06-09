import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
// Components
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStore } from '../../store';
import clientSocket from '../../store/clientSocket';
import { NavBar } from '../common/components';
import Player from './player';
import Admin from './admin';
// Styles
import styles from './Live.styles';

const Live = ({ classes, match, history }) => {
  const {
    state: { user, game },
    dispatch
  } = useStore();

  useEffect(() => {
    if (user && (!game || !game.socket)) {
      clientSocket({ id: match.params.id, user })(dispatch);
    }
    // TODO: player/admin disconnects from socket effect
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
    <div className={classes.layout}>
      <NavBar title={!game ? 'Loading data..' : `${game.title}`} path={path} fullPath={fullPath} />
      <div className={classes.main}>
        {!user || !game || !game.socket ? (
          <div className={classes.suspense}>
            <div className={classes.progress}>
              <CircularProgress color="secondary" />
            </div>
            <div className={classes.overlay} />
          </div>
        ) :  user.isAdmin ? (
          <Admin />
        ) : (
          <Player />
        )}
      </div>
    </div>
  );
};

export default withStyles(styles, { name: 'Live' })(Live);
