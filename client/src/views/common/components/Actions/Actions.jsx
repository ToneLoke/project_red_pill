import React from "react";
import { Typography, Fab } from "@material-ui/core";
import styles from "./Actions.styles";
import { useStyles } from "../../useStyles";

export const ActionBtn = ({ icon, text, ...other }) => {
  const classes = useStyles(styles);
  return (
    <div className={classes.btnWrapper}>
      <Fab color="secondary" className={classes.action} {...other}>
        {icon}
      </Fab>
      <Typography
        variant="caption"
        color="secondary"
        className={classes.secondary}
      >
        {text}
      </Typography>
    </div>
  );
};

export const Actions = ({ children }) => {
  const classes = useStyles(styles);
  return <div className={classes.container}>{children}</div>;
};
