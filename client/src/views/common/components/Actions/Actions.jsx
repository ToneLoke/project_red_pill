import React from "react";
import { Fab } from "@material-ui/core";
import styles from "./Actions.styles";
import { useStyles } from "../../useStyles";

export const ActionBtn = ({ icon, text, ...other }) => {
  const classes = useStyles(styles);
  return (
    <div className={classes.btnWrapper}>
      <Fab color="secondary" size="large" className={classes.action} {...other}>
        {icon}
      </Fab>
    </div>
  );
};

export const Actions = ({ children }) => {
  const classes = useStyles(styles);
  return <div className={classes.container}>{children}</div>;
};
