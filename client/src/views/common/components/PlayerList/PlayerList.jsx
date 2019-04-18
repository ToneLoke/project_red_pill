// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { Fab, Badge } from '@material-ui/core';

// Styles
import styles from './PlayerList.styles';

// Make a List component that takes a component as a parameter 
// and then renders the children decorated.
// Value: Can be used for questions list and player list

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
              {' '}
            </Badge>
          </div>
        );
      })}
    </div>
  );
};


export default withStyles(styles, { name: 'PlayerList' })(PlayerList);
