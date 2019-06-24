import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../store";
import styles from "./Panel.styles";
import { Typography, Fab } from "@material-ui/core";
import navStyles from "../common/components/Navs/Navs.styles";
import actStyles from "../common/components/Actions/Actions.styles";
//======================= MaterialUI Icons =======================
import JoinIcon from "@material-ui/icons/GroupAdd";

// import { log } from "util";

const StyledBtn = props => {
  const { classes, text, icon, ...other } = props;
  return (
    <div className={classes.btnWrapper}>
      <Fab color="secondary" className={classes.nav} {...other}>
        {icon}
      </Fab>
      <Typography
        variant="caption"
        color="secondary"
        className={classes.btnText}
      >
        {text}
      </Typography>
    </div>
  );
};

const Btn = withStyles(navStyles)(StyledBtn);

const StyledActions = props => {
  const { children, classes } = props;
  return <div className={classes.container}>{children}</div>;
};

const Actions = withStyles(actStyles)(StyledActions);

const PublicControls = ({ classes }) => {
  const {
    state: { game },
    dispatch
  } = useStore();

  const handleDispatch = (type, isReq, data) => {
    const reducer = type.split("_")[0].toLowerCase();
    // dispatch({ type, payload: { ...state[reducer], ...data } }, isReq);
  };

  return (
    <div className={classes.appBar}>
      <div className={classes.toolbar}>
        <div className={classes.right}>
          <Actions>
            <Btn
              component={Link}
              to={`/live/${(game || {})._id}`}
              icon={<JoinIcon />}
              text="JOIN"
              disabled={game ? false : true}
            />
          </Actions>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PublicControls);
