import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

import "../Timer.css";

const NonAnimatedCard = ({ cssDecorators, digit, unit }) => {
  return (
    <div className={`flipCard ${cssDecorators}`}>
      <Typography color="secondary" variant="display3">
        {digit}
      </Typography>
      {unit === "minutes" ? (
        <Fragment>
          <Typography color="secondary" variant="display3">
            m
          </Typography>
          <Typography color="secondary" variant="display3">
            :
          </Typography>
        </Fragment>
      ) : (
        <Typography color="secondary" variant="display3">
          s
        </Typography>
      )}
    </div>
  );
};

export default NonAnimatedCard;
