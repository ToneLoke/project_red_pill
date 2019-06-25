import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../store";
import styles from "./Panel.styles";
import { ActionBtn, Actions } from '../common/components';
//======================= MaterialUI Icons =======================
import AddIcon from "@material-ui/icons/Add";
import LaunchIcon from "@material-ui/icons/Launch";
import EditIcon from "@material-ui/icons/Edit";
import TrashIcon from "@material-ui/icons/Delete";
import CopyIcon from "@material-ui/icons/FileCopy";

const PanelControls = ({ classes }) => {
  const {
    state: { game },
    dispatch
  } = useStore();

  const handleDispatch = (type, isReq, data) => {
    //TODO: create actions for delete and copy
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
                      <ActionBtn
                        component={Link}
                        icon={<LaunchIcon />}
                        to={`/live/${game._id}`}
                        text="RESUME"
                      />
                      <ActionBtn
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
                      <ActionBtn
                        component={Link}
                        icon={<EditIcon />}
                        to="/games/draft?type=settings"
                        text="EDIT"
                      />
                      <ActionBtn
                        onClick={handleDispatch}
                        icon={<TrashIcon />}
                        text="DELETE"
                      />
                    </Fragment>
                  );
                case "done":
                  return (
                    <Fragment>
                      <ActionBtn
                        onClick={handleDispatch}
                        icon={<TrashIcon />}
                        text="DELETE"
                      />
                      <ActionBtn
                        dpHandler={handleDispatch}
                        icon={<CopyIcon />}
                        text="COPY"
                      />
                    </Fragment>
                  );
                default:
                  return (
                    <ActionBtn
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
