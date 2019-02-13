import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { useStore } from '../../../../store';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  appFrame: {
    width: 360,
    height: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
  fabMoveUp: {
    transform: 'translate3d(0, -46px, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  fabMoveDown: {
    transform: 'translate3d(0, 0, 0)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  snackbar: {
    position: 'absolute',
  },
  snackbarContent: {
    width: '100%',
  },
});

const Notification = ({classes}) => {
  const { state, dispatch } = useStore();
  console.log("NOTIFICATION:", state.error);
  const handleClose = () => dispatch({type: 'ERROR_CLEAR'})
  return (
    <Snackbar
      open={!!state.error}
      ContentProps={{
        'aria-describedby': 'snackbar-fab-message-id',
        className: classes.snackbarContent,
      }}
      message={<span id="snackbar-fab-message-id">{`${state.error && state.error.message}`}</span>}
      action={
        <Button color="inherit" size="small" onClick={handleClose}>
          Undo
      </Button>
      }
      className={classes.snackbar}
    />)
};

export default withStyles(styles)(Notification);
