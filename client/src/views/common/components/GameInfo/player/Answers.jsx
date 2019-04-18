// Packages
import React from 'react';
import { Typography } from '@material-ui/core';

const Answers = ({ classes, handleAnswer, question }) =>
  question.choices.map((choice) => {
    return (
      <div onClick={() => handleAnswer('questions')} className={classes.questionsOverview}>
        <Typography variant="h6" className={classes.rankNum}>
          {choice}
        </Typography>
      </div>
    );
  });

export default Answers;
