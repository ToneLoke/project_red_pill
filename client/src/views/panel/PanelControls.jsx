import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../store";
import { isEmpty } from "../common/helpers";
import controls from "./Panel.config";
import styles from "./Panel.styles";
import { Typography, Fab } from "@material-ui/core";
import navStyles from "../common/components/Navs/Navs.styles";
import actStyles from "../common/components/Actions/Actions.styles";
//======================= MaterialUI Icons =======================
import AddIcon from "@material-ui/icons/Add";
import LaunchIcon from "@material-ui/icons/Launch";
import PublicIcon from "@material-ui/icons/Public";
import EditIcon from "@material-ui/icons/Edit";
import JoinIcon from "@material-ui/icons/GroupAdd";
import ViewIcon from "@material-ui/icons/Visibility";
import PrivateIcon from "@material-ui/icons/VpnLock";
import TrashIcon from "@material-ui/icons/Delete";
import CopyIcon from "@material-ui/icons/FileCopy";

const StyledFabAction = props => {
  const { classes, icon, text, actionType, dpHandler } = props;
  const handleClick = () => dpHandler(actionType);
  return (
    <div className={classes.btnWrapper}>
      {
        <Fragment>
          <Fab onClick={handleClick} className={classes.action}>
            {icon}
          </Fab>
          <Typography
            variant="caption"
            color="secondary"
            className={classes.btnText}
          >
            {text}
          </Typography>
        </Fragment>
      }
    </div>
  );
};
const ActionBtn = withStyles(actStyles)(StyledFabAction);

const StyledNavFab = props => {
  const { classes, color, to, text, icon, disabled } = props;
  return (
    <div className={classes.btnWrapper}>
      <Link to={to} className={classes.link}>
        <Fab color={color} className={classes.nav} disabled={disabled}>
          {icon}
        </Fab>
        <Typography variant="caption" color={color} className={classes.btnText}>
          {text}
        </Typography>
      </Link>
    </div>
  );
};

const CreateFabNav = withStyles(navStyles)(StyledNavFab);

const styledNavs = ({ classes, children }) => {
  return <div className={classes.container}>{children}</div>;
};

const Navs = withStyles(navStyles)(styledNavs);

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
  let page = "private";

  const handleDispatch = (type, isReq, data) => {
    const reducer = type.split("_")[0].toLowerCase();
    // dispatch({ type, payload: { ...state[reducer], ...data } }, isReq);
  };
  return (
    <div className={classes.appBar}>
      <div className={classes.toolbar}>
        <div className={classes.left}>
          <Navs>
            <CreateFabNav
              color="primary"
              to="/games?type=private"
              disabled={page === "private"}
              text="PRIVATE"
              icon={<PrivateIcon />}
            />
            <CreateFabNav
              color="secondary"
              to="/games?type=public"
              text="PUBLIC"
              icon={<PublicIcon />}
              disabled={page === "public"}
            />
          </Navs>
        </div>
        <div className={classes.right}>
          <Actions>
            {(() => {
              switch ((game || {}).status) {
                case "live":
                case "play":
                case "paused":
                  return (
                    <Fragment>
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<LaunchIcon />}
                        text="RESUME"
                        actionType="GAME"
                      />
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<CopyIcon />}
                        text="COPY"
                        actionType="GAME"
                      />
                    </Fragment>
                  );
                case "draft":
                  return (
                    <Fragment>
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<EditIcon />}
                        text="EDIT"
                        actionType="GAME"
                      />
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<TrashIcon />}
                        text="DELETE"
                        actionType="GAME"
                      />
                    </Fragment>
                  );
                case "done":
                  return (
                    <Fragment>
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<TrashIcon />}
                        text="DELETE"
                        actionType="GAME"
                      />
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<CopyIcon />}
                        text="COPY"
                        actionType="GAME"
                      />
                    </Fragment>
                  );
                default:
                  return (
                    <ActionBtn
                      dpHandler={handleDispatch}
                      icon={<AddIcon />}
                      text="ADD"
                      actionType="GAME"
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
