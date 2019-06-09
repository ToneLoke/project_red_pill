// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { Fab, Badge } from '@material-ui/core';
import { useStore } from '../../../../store';
// Styles
import styles from './PlayerList.styles';
const PlayerList = ({ classes, displayCount }) => {
  const {
    state: { user, game: { players: allPlayers } },
  } = useStore();
  const players = allPlayers.slice(0, displayCount );
  return (
    <div className={classes.players}>
      {players.map((p, i) => {
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
            { " " }
            </Badge>
          </div>
        );
      })}
    </div>
  );
};


export default withStyles(styles, { name: 'PlayerList' })(PlayerList);
