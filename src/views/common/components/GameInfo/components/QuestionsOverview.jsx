// Packages
import React from "react";
import { Typography, Badge } from "@material-ui/core";

const QuestionOverview = ({ count, classes }) => {
  return (
    <div className={classes.questionsOverview}>
      <Typography variant="title" className={classes.rankNum}>
        QUESTIONS
      </Typography>
      <Badge
        className={classes.questionsBadge}
        fontSize="large"
        color="secondary"
        badgeContent="13/20"
      />
    </div>
  );
};

export default QuestionOverview;
