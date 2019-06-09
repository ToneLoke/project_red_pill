// Packages
import React from 'react';
import { Typography, Badge } from '@material-ui/core';

const LeaderBoardOverview = ({ count, classes, handleChangePage }) => {
  return (
    <div onClick={() => handleChangePage('leaderboard')} className={classes.questionsOverview}>
      <Typography variant="h6" className={classes.rankNum}>
        LEADERBOARD
      </Typography>
      <Badge className={classes.badge} fontSize="large" color="secondary" badgeContent={count} />
    </div>
  );
};

export default LeaderBoardOverview;
