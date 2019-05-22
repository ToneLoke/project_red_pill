// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { Fab, Badge } from '@material-ui/core';
// Components
import QuestionsOverview from './QuestionsOverview';
import LeaderBoardOverview from './LeaderBoardOverview';
import ScoreOverview from './ScoreOverview';
import PlayerList from '../../common/components/PlayerList';
import SessionHeader from '../SessionHeader';
// Styles
import styles from '../GameInfo.styles';

const Overview = ({ classes, handleChangePage }) => (
  <div className={classes.adminSession}>
    <LeaderBoardOverview
      count={12}
      classes={classes}
      handleChangePage={handleChangePage}
    />
    <PlayerList displayCount={3} />
    <QuestionsOverview
      count={12}
      classes={classes}
      handleChangePage={handleChangePage}
    />
    <ScoreOverview
      score={
         [
          {
            name: 'SCORE',
            pass: 2,
            fail: 3,
            queue: 7
          }
        ]
      }
      playerCount={12}
      visType={['bar']}
      classes={classes}
    />
  </div>
);

export default withStyles(styles, { name: 'Overview' })(Overview);
