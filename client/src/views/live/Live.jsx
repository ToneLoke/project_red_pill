import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
// Components
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStore } from '../../store';
import clientSocket from '../../store/clientSocket';
import { Layout, NavBar } from '../common/components';
import Player from './player';
import Admin from './admin';
import Lobby from './lobby';
// Styles
import styles from './Live.styles';
// Utils
import { logger } from '../../utils';
const liveLog = logger('LIVE')

const Live = ({ classes, match, history }) => {
  const {
    state: { user, game },
    dispatch
  } = useStore();

  useEffect(() => {
    //NOTE: must have a user to connect
    if (user && (!game || !game.socket)) {
      clientSocket({ id: match.params.id, user })(dispatch);
    }
    // TODO: player/admin disconnects from socket
    return function cleanup() {
      if(game && game.socket) {
        liveLog('socket-disconnect');
        // game.socket.disconnect();
      }
    };
  }, [user, game]);

  const path = history.location.pathname;
  const fullPath = history.location.pathname + history.location.search;

  return (
    <Layout
      header={<NavBar title={!game ? 'Loading data..' : `${game.title}`} path={path} fullPath={fullPath} />}
    >
      <div className={classes.main}>
        {!user || !game || !game.socket ?
          (
            <div className={classes.suspense}>
              <div className={classes.progress}>
                <CircularProgress color="secondary" />
              </div>
              <div className={classes.overlay} />
            </div>
          ) : user.username === 'lobby'
            //NOTE: leave the navbar just remove the bottom actions
            ? (<Lobby />)
            :  user.isAdmin
            ? (<Admin />)
            : (<Player />)
        }
      </div>
    </Layout>
  );
};

export default withStyles(styles, { name: 'Live' })(Live);
