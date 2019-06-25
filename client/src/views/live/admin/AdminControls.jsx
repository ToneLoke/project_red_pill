import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { useStore } from "../../../store";
import styles from "./Admin.styles";
import { ActionBtn, Actions } from "../../common/components";
//======================= MaterialUI Icons =======================
import PauseIcon from "@material-ui/icons/PauseCircleFilled";
import PlayIcon from "@material-ui/icons/PlayArrow";
import HomeIcon from "@material-ui/icons/Home";

import { logger } from "../../../utils";
const adminLog = logger("LIVE:GAME:ADMIN:CONTROLS");
const AdminControls = () => {
  const {
    state: { game, live },
    dispatch
  } = useStore();

  const [allReady, setAllReady] = useState(false);
  const [needsHelp, setNeedsHelp] = useState([]);

  useEffect(() => {
    let readyStatus = !live.players.some(p => p.status !== "ready");
    let grabNeededHelp = live.players.reduce(
      (acc, curr) => (curr.status === "help" ? acc.push(curr._id) : acc),
      []
    );
    let totalHelp = [...needsHelp, ...grabNeededHelp];
    adminLog("updated status", readyStatus, totalHelp);
    setNeedsHelp(totalHelp);
    setAllReady(readyStatus);
  }, [game, live]);

  const handleDispatch = payload => () => {
    dispatch({ type: "LIVE_GAME_UPDATE", payload });
  };

  return (
    <Actions>
      {(() => {
        switch ((game || {}).status) {
          case "play":
            return (
              <ActionBtn
                onClick={handleDispatch({ status: "pause" })}
                icon={<PauseIcon />}
                text="PAUSE"
              />
            );
          case "live":
          case "pause":
            return (
              <ActionBtn
                onClick={handleDispatch({ status: "play" })}
                icon={<PlayIcon />}
                text="PLAY"
                disabled={!allReady}
              />
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

export default withStyles(styles)(AdminControls);
