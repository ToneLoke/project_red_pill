// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components

import AdminSession from './AdminSession';
import PlayerSession from './PlayerSession';

// Components
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import styles from './GameInfo.styles';

const GameInfo = ({ game, classes, timesUp, endUser, question, handleRouteChange, handleAnswer }) => (
  <div className={classes.container}>
    {!endUser || !game || !game.socket ? (
      <div className={classes.suspense}>
        <div className={classes.progress}>
          <CircularProgress color="primary" />
        </div>
        <div className={classes.overlay} />
      </div>
    ) : endUser.username !== game.adminId.username ? (
      <PlayerSession
        game={game}
        timesUp={timesUp}
        endUser={endUser}
        question={question}
        handleAnswer={handleAnswer}
      />
    ) : (
      <AdminSession
        game={game}
        timesUp={timesUp}
        endUser={endUser}
        question={question}
        handleRouteChange={handleRouteChange}
      />
    )}
  </div>
);

export default withStyles(styles, { name: 'GameInfo' })(GameInfo);
