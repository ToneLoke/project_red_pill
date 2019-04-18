// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { Fab, Badge } from '@material-ui/core';

// Components
import QuestionsOverview from './admin/QuestionsOverview';
import LeaderBoardOverview from './admin/LeaderBoardOverview';
import ScoreOverview from './admin/ScoreOverview';
import PlayerList from '../PlayerList';
import SessionHeader from './SessionHeader';

// Styles
import styles from './GameInfo.styles';

const AdminSession = ({ game, classes, timesUp, endUser, question, handleRouteChange }) => (
  <div className={classes.adminSession}>
    <SessionHeader game={game} timesUp={timesUp} endUser={endUser} question={question} />
    <LeaderBoardOverview
      count={game.players.length || 0}
      classes={classes}
      handleRouteChange={handleRouteChange}
    />
    <PlayerList players={game.players} endUser={endUser} classes={classes} />
    <QuestionsOverview
      count={game.questions.count}
      classes={classes}
      handleRouteChange={handleRouteChange}
    />
    <ScoreOverview
      score={
        (game.score = [
          {
            name: 'SCORE',
            pass: 2,
            fail: 3,
            queue: 7
          }
        ])
      }
      playerCount={game.players.length || 0}
      visType={['bar']}
      classes={classes}
    />
  </div>
);

export default withStyles(styles, { name: 'AdminSession' })(AdminSession);
