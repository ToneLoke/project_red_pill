import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../store";
import styles from "./Panel.styles";
import { Typography, Fab } from "@material-ui/core";
import navStyles from "../common/components/Navs/Navs.styles";
import actStyles from "../common/components/Actions/Actions.styles";
//======================= MaterialUI Icons =======================
import AddIcon from "@material-ui/icons/Add";
import LaunchIcon from "@material-ui/icons/Launch";
import EditIcon from "@material-ui/icons/Edit";
import TrashIcon from "@material-ui/icons/Delete";
import CopyIcon from "@material-ui/icons/FileCopy";
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

const PanelControls = ({ classes }) => {
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
            {(() => {
              switch ((game || {}).status) {
                case "live":
                case "play":
                case "pause":
                  return (
                    <Fragment>
                      <Btn
                        component={Link}
                        icon={<LaunchIcon />}
                        to={`/games/live/${game._id}`}
                        text="RESUME"
                      />
                      <Btn
                        component={Link}
                        onClick={handleDispatch}
                        icon={<CopyIcon />}
                        to="/games/draft?type=settings"
                        text="COPY"
                      />
                    </Fragment>
                  );
                case "draft":
                  return (
                    <Fragment>
                      <Btn
                        icon={<EditIcon />}
                        to="/games/draft?type=settings"
                        text="EDIT"
                      />
                      <Btn
                        onClick={handleDispatch}
                        icon={<TrashIcon />}
                        text="DELETE"
                      />
                    </Fragment>
                  );
                case "done":
                  return (
                    <Fragment>
                      <Btn
                        onClick={handleDispatch}
                        icon={<TrashIcon />}
                        text="DELETE"
                      />
                      <Btn
                        dpHandler={handleDispatch}
                        icon={<CopyIcon />}
                        text="COPY"
                      />
                    </Fragment>
                  );
                default:
                  return (
                    <Btn
                      component={Link}
                      to="/games/draft?type=settings"
                      icon={<AddIcon />}
                      text="ADD"
                    />
                  );
              }
            })()}
          </Actions>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PanelControls);
