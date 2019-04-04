import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { Typography, Fab, Badge } from "@material-ui/core";
import styles from "./GameInfo.styles";
import Timer from "../Timer";

const PlayerList = ({ players, selPlayer, classes }) => {
  return (
    <div className={classes.players}>
      {players.map((p) => {
        return (
          <Fragment>
            <Fab key={p._id} disabled={selPlayer && p._id === selPlayer._id}>
              <PersonIcon />
              <Badge fontSize="large" color="secondary" badgeContent={10} />
            </Fab>
            <div>{p.username}</div>
          </Fragment>
        );
      })}
    </div>
  );
};

const GameInfo = ({ game, classes, timesUp, user, question }) => (
  <div className={classes.container}>
    <div className={classes.lobbyAdminHeader}>
      <div className={classes.title}>
        <div>Host: {game.adminId.username}</div>
        <div>Max Score: {game.totalPoints}</div>
        <div>Players: {game.players.length}</div>
        <div>
          Question: {game.qNum + 1}/{game.questions.length}{" "}
        </div>
      </div>
      <Timer maxTime={question.maxTime || 0} onExpire={timesUp} status={game.status} />
    </div>
    <PlayerList players={game.players} selPlayer={user} classes={classes} />
  </div>
);

export default withStyles(styles, { name: "GameInfo" })(GameInfo);
