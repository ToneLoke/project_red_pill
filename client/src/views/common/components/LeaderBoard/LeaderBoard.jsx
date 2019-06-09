// Packages
import React, { Fragment } from "react";
// material-ui
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { Typography, Fab, Badge } from "@material-ui/core";
// Hooks
import { useStore } from '../../../../store';
// Components


// Styles
import styles from "./LeaderBoard.styles";

const PlayerList = ({ classes }) => {
  const {
    state: { user, game },
    }  = useStore();
  return (
    <div className={classes.players}>
      {game.players.map((p, i) => {
        return (
          <div key={p._id} className={classes.player}>
            <div className={classes.rankNum}>{i + 1}</div>
            <Fab
              className={classes.avatarFab}
              size="small"
              disabled={user && p._id === user._id}
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

const LeaderBoard = ({classes}) => (
  <div className={classes.container}>
    <div className={classes.gameInfoList}>
      <PlayerList classes={classes} />
    </div>
  </div>
);

export default withStyles(styles, { name: "LeaderBoard" })(LeaderBoard);
