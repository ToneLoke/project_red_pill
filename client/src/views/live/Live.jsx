import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
// Components
import { useStore } from '../../store';
import clientSocket from '../../store/clientSocket';
import { NavBar } from '../common/components';
import Loader from './Loader';
import Player from './player';
import Admin from './admin';
import Lobby from './lobby';
// Styles
import styles from './Live.styles';
// Utils
import { logger } from '../../utils';
const liveLog = logger('LIVE')

const getComponent = (game, user) => {
  if (!user || !game || !game.socket) {
    return Loader;
  }

  if (user.username === 'lobby') {
    return Lobby;
  }

  if (user.isAdmin) {
    return Admin;
  }

  return Player;
}

const Live = ({ classes, match, history }) => {
  const {
    state: { user, game },
    dispatch
  } = useStore();

  useEffect(() => {
    //NOTE: must have a user to connect
    if (user && (!game || !game.socket)) {
      liveLog('socket-connecting')
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
  const title = !game ? 'Loading data..' : `${game.title}`;
  const header = <NavBar title={title} path={path} fullPath={fullPath} />;

  const Component = getComponent(game, user);
  return <Component header={header} />
};

export default withStyles(styles, { name: 'Live' })(Live);
