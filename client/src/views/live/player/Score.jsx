// Packages
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Paper, Typography, Badge } from "@material-ui/core";
import RoundIcon from './RoundIcon';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const green = '#ca9f30';
const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2,
    background: green,
    height: '100%'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit *7}px ${theme.spacing.unit *5}px`
  },
  avatarContainer: {
    borderRadius: '50%',
    background: 'white',
    width: theme.spacing.unit * 13,
    height: theme.spacing.unit * 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 ${theme.spacing.unit}px ${green}`
  },
  avatar: {
    width: theme.spacing.unit * 11,
    height: theme.spacing.unit * 11
  },
  score: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  successScore: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing.unit
  },
  failureScore: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing.unit
  },
  scoreText: {
    marginLeft: theme.spacing.unit
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: `${theme.spacing.unit * 2}px 0`
  },
});

const Rank = withStyles(theme => ({
  badge: {
    height: theme.spacing.unit * 4,
    width: theme.spacing.unit * 4,
    backgroundColor: '#ffbc40',
    borderRadius: '50%',
    top: '10%',
    right: '10%',
  },
}))(Badge);

const ScoreOverview = ({ classes }) => {
  return <div className={classes.container}>
    <Paper className={classes.content}>
      <div className={classes.avatarContainer}>
        <Rank badgeContent={1}>
          <Avatar
            src="http://placehold.it/88x88"
            alt="YOU!"
            className={classes.avatar}
          />
        </Rank>
      </div>
      <div className={classes.text}>
        <Typography variant="h6">CONGRATS!</Typography>
        <Typography variant="body1">You have earned 312 points!</Typography>
      </div>
      <div className={classes.score}>
        <div className={classes.successScore}>
          <RoundIcon Icon={DoneIcon} backgroundColor='#68d562' />
          <Typography className={classes.scoreText} variant="body1">10 correct</Typography>
        </div>
        <div className={classes.failureScore}>
          <RoundIcon Icon={CloseIcon} backgroundColor='#d56262' />
          <Typography className={classes.scoreText} variant="body1">10 correct</Typography>
        </div>
      </div>
    </Paper>
  </div>;
};

export default withStyles(styles)(ScoreOverview);
