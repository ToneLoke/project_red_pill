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
      <Typography variant="h6" className={classes.rankNum}>
        SCORE
      </Typography>

      {visType.map((type) => {
        if (type === "bar") {
          return <BarStack key={`${type}-${score}`} classes={classes} score={score} />;
        }
        if (type === "pie") {
          return <Pie key={`${type}-${score}`} classes={classes} />;
        }
      })}
    </div>
  );
};

export default ScoreOverview;
