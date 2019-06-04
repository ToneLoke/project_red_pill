// eslint-disable-line default-case

import React, { useEffect } from 'react';
import { useStore } from '../../../store';
import { LeaderBoard, Questions } from '../../common/components';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styles from './Player.styles';
import Question from './Question';

const Player = ({ history, classes }) => {
  const {
    state: { user, game, question },
    dispatch
  } = useStore();

  const { status } = game;
  const liveData = { game, user, question };

  function switchView(status) {
    switch (status) {
      case 'live':
        return (
          <div className={classes.wait}>
            <Typography color="secondary" variant="body1" align="center">
              Quizz session will start when host is ready!
            </Typography>
          </div>
        );
      case 'play':
        return (
          <Question question={question} />
        );
      case 'pause':
        return (
          <div>ADMIN HAS PAUSED GAME PLEASE WAIT...</div>
        );
      default:
        return (
          <div>GAME OVER</div>
        )
    }
  }

  return <div className={classes.container}>{switchView(status)}</div>;
};

export default withStyles(styles)(Player);
