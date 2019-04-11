// Packages
import React from "react";
import { Typography, Badge } from "@material-ui/core";

// Charts
import BarStack from "./BarStack";
import Pie from "./Pie";

const ScoreOverview = ({ score, classes, visType }) => {
  const { pass, fail, queue } = score;
  return (
    <div className={`${classes.scoreOverview} ${classes.bgWhite}`}>
      <Typography variant="title" className={classes.rankNum}>
        SCORE
      </Typography>

      {visType.map((type) => {
        if (type === "bar") {
          return <BarStack classes={classes} score={score} />;
        }
        if (type === "pie") {
          return <Pie classes={classes} />;
        }
      })}
    </div>
  );
};

export default ScoreOverview;
