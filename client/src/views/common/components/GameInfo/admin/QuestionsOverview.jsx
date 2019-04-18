// Packages
import React from 'react';
import { Typography, Badge } from '@material-ui/core';

const QuestionOverview = ({ count, classes, handleRouteChange }) => {
  return (
    <div onClick={() => handleRouteChange('questions')} className={classes.questionsOverview}>
      <Typography variant="h6" className={classes.rankNum}>
        QUESTIONS
      </Typography>
      <Badge
        className={classes.badge}
        fontSize="large"
        color="secondary"
        badgeContent={(count = '13/20')}
      >
        {' '}
      </Badge>
    </div>
  );
};

export default QuestionOverview;
