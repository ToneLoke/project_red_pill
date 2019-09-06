import React from "react";
import { Fab } from "@material-ui/core";
import styles from "./Actions.styles";
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(styles.actionBtn);
export const ActionBtn = ({ icon, text, ...other }) => {
  const classes = useStyles();
  return (
    <Fab color="secondary" className={classes.root} {...other}>
    {icon}
    </Fab>
    );
  };

const useContainerStyles = makeStyles(styles.container);
export const Actions = ({ children }) => {
  const classes = useContainerStyles();
  return <div className={classes.root}>{children}</div>;
};
