// Packages
import React, { useMemo } from "react";
// material-ui
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Badge, Tooltip } from "@material-ui/core";
// Hooks
import { useStore } from '../../../store';

// Styles
import styles from "./Leaderboard.styles";

const getPlayersByScore = players => [...players].sort((a, b) => a.score - b.score);

const LeaderBoard = ({classes}) => {
  const {
    state: { game },
  }  = useStore();

  const sortedPlayers = useMemo(() => getPlayersByScore(game.players), [game.players]);

  return (
    <div className={classes.container}>
      {sortedPlayers.map((p, i) => (
        <div key={p._id} className={classes.player}>
          <Tooltip title={p.username}>
            <Badge
              className={`${classes.badge} ${classes.badgeGreen}`}
              fontSize="large"
              color="secondary"
              badgeContent={p.score}
              showZero
            >
              <Avatar
                className={classes.avatar}
                src={`http://placeimg.com/64/64/people/${p._id}`}
              />
            </Badge>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles, { name: "LeaderBoard" })(LeaderBoard);
