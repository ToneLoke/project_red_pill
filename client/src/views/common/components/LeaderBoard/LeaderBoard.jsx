// Packages
import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { Typography, Fab, Badge } from "@material-ui/core";

// Components


// Styles
import styles from "./LeaderBoard.styles";

const PlayerList = ({ players, endUser, classes }) => {
  return (
    <div className={classes.players}>
      {players.map((p, i) => {
        return (
          <div key={p._id} className={classes.player}>
            <div className={classes.rankNum}>{i + 1}</div>
            <Fab
              className={classes.avatarFab}
              size="small"
              disabled={endUser && p._id === endUser._id}
            >
              <PersonIcon />
            </Fab>
            <div className={classes.user}>{p.username}</div>
            <Badge
              className={`${classes.badge} ${classes.badgeGreen}`}
              fontSize="large"
              color="secondary"
              badgeContent="10/20"
            >
              {" "}
            </Badge>
          </div>
        );
      })}
    </div>
  );
};

const LeaderBoard = ({ game, classes, timesUp, user, question }) => (
  <div className={classes.container}>
    <div className={classes.gameInfoList}>
      <PlayerList players={game.players} endUser={user} classes={classes} />
    </div>
  </div>
);

export default withStyles(styles, { name: "LeaderBoard" })(LeaderBoard);
