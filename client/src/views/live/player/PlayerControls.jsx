import isNil from 'lodash/isNil';
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
import CloseIcon from "@material-ui/icons/Close";

const PLAYER_ACTION = "LIVE_GAME_PLAYER_UPDATE";
const PlayerControls = ({ status, selected, player, isAnswered }) => {
  const {
    state: { game, user, question },
    dispatch
  } = useStore();

  const handleDispatch = payload => () => {
    dispatch({ type: PLAYER_ACTION, payload });
  };

  const handleReady = status => () => {
    dispatch({ type: PLAYER_ACTION, payload: { _id: user._id, status } });
  };

  return (
    <Actions>
      {(() => {
        switch ((game || {}).status) {
          case "play":
            return (
              <Fragment>
                <ActionBtn
                  onClick={handleDispatch({
                    status: "submit",
                    answers: [
                      ...player.answers,
                      { q_id: question._id, submission: [selected] }
                    ]
                  })}
                  icon={<CheckCircle />}
                  text="SUBMIT"
                  disabled={isNil(selected) || isAnswered}
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
                {status === "ready" ? (
                  <ActionBtn
                    onClick={handleReady("not ready")}
                    icon={<CloseIcon />}
                    text="NOT READY"
                  />
                ) : (
                    <ActionBtn
                      onClick={handleReady("ready")}
                      icon={<ReadyIcon />}
                      text="READY"
                    />
                  )}
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
