import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../store";
import styles from "./Panel.styles";
import { ActionBtn, Actions } from "../common/components";
//======================= MaterialUI Icons =======================
import JoinIcon from "@material-ui/icons/GroupAdd";

const PublicControls = ({ classes }) => {
  const {
    state: { game }
  } = useStore();

  return (
    <div className={classes.appBar}>
      <div className={classes.toolbar}>
        <div className={classes.right}>
          <Actions>
            <ActionBtn
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
