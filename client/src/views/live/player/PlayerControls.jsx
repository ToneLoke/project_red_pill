import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../../store";
import styles from "./Player.styles";
import { ActionBtn, Actions } from "../../common/components";
//======================= MaterialUI Icons =======================
import CheckCircle from "@material-ui/icons/Check";
import ReadyIcon from "@material-ui/icons/HowToReg";
import HandIcon from "@material-ui/icons/PanTool";
import HomeIcon from "@material-ui/icons/Home";

const PlayerControls = () => {
  const {
    state: { game },
    dispatch
  } = useStore();

  const handleDispatch = payload => () => {
    dispatch({ type: "LIVE_GAME_PLAYER_UPDATE", payload });
  };

  return (
    <Actions>
      {(() => {
        switch ((game || {}).status) {
          case "play":
            return (
              <Fragment>
                <ActionBtn
                  onClick={handleDispatch({ status: "submit" })}
                  icon={<CheckCircle />}
                  text="SUBMIT"
                />
                <ActionBtn
                  onClick={handleDispatch({ status: "help" })}
                  icon={<HandIcon />}
                  text="HELP"
                />
              </Fragment>
            );
          case "live":
          case "pause":
            return (
              <Fragment>
                <ActionBtn
                  onClick={handleDispatch({ status: "ready" })}
                  icon={<ReadyIcon />}
                  text="READY"
                />
              </Fragment>
            );
          default:
            return (
              <ActionBtn
                component={Link}
                to="/games"
                icon={<HomeIcon />}
                text="HOME"
              />
            );
        }
      })()}
    </Actions>
  );
};

export default withStyles(styles)(PlayerControls);
