import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  container: {
    width: 74,
    height: 74,
    borderRadius: '50%',
    background: 'rgba(67,70,79,1)',
    position: 'relative'
  },
  progress: {
    color: 'rgba(100,202,50,1)'
  },
  content: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 12,
    left: 12,
    background: 'rgba(46,49,60,1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Timer = ({ totalSeconds, secondsLeft, classes }) => {
  const percent = secondsLeft / totalSeconds * 100;

  return <div className={classes.container}>
    <CircularProgress
      className={classes.progress}
      color="secondary"
      variant="static"
      value={percent}
      thickness={7}
      size={74}
    />
    <div className={classes.content}>
      <Typography align="center" variant="body1" color="secondary">
        {Math.ceil(secondsLeft)}
      </Typography>
    </div>
  </div>;
};

export default withStyles(styles)(Timer);
