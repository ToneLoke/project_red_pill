// Packages
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Components
import CircularProgress from '@material-ui/core/CircularProgress';
import Timer from '../Timer';
import Title from './Title';

// Styles
import styles from './GameInfo.styles';

const Question = ({ game, classes, timesUp, endUser, question, handleRouteChange }) => (
  <Fragment>
    <Title game={game} text="Question 1/12" />
    <Typography variant="headline">{question.question}</Typography>
    <Timer maxTime={question.maxTime || 0} onExpire={timesUp} status={game.status} />
  </Fragment>
);

const SessionHeader = ({ game, classes, timesUp, endUser, question, handleRouteChange }) => (
  <div className={classes.lobbyHeader}>
    {!endUser || !game || !game.socket ? (
      <div className={classes.suspense}>
        <div className={classes.progress}>
          <CircularProgress color="primary" />
        </div>
        <div className={classes.overlay} />
      </div>
    ) : endUser.username !== game.adminId.username ? (
      <Question game={game} question={question} classes={classes} />
    ) : (
      <Timer maxTime={question.maxTime || 0} onExpire={timesUp} status={game.status} />
    )}
  </div>
);

export default withStyles(styles, { name: 'SessionHeader' })(SessionHeader);
