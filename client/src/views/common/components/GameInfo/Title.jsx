// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { Typography, Fab, Badge } from '@material-ui/core';

// Components
// Note: Needs to react to propChange === DReactComponentParent === 'title'

// import LeaderBoardOverview from './LeaderBoardOverview';
// import QuestionsOverview from './QuestionsOverview';
// import ScoreOverview from './ScoreOverview';
import Timer from '../Timer';

// Styles
import styles from './GameInfo.styles';

const Title = ({ game, classes, text, timesUp, user, question, handleRouteChange }) => {
  return (
    <div className={classes.title}>
      <Typography variant="subtitle1" color="secondary">
        {text}
      </Typography>
    </div>
  );
};

Title.propTypes = {};

export default withStyles(styles, { name: 'Title' })(Title);
