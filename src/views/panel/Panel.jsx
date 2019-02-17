import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { Empty, AdminBar } from '../common/components';
import { useStore } from '../../store';
import controls from '../common/controls';

// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  container: {
    width: '100%',
    marginBottom: '18%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  btnWrapper: {
    width: '90%',
  },
  btn: {
    width: '100%',
  }
});

const Games = ({ classes, history }) => {
  const { state: { games }, dispatch } = useStore();
  const path = history.location.pathname + history.location.search
  console.log("/GAMES:", path)

  const renderActions = (a) => {
    return (
      <div key={a.key} className={classes.wrapper}>
        <Fab {...a.styles} onClick={()=> dispatch({type: 'GAME_NEW'})}>
          <a.icon />
          {a.text}
        </Fab>
      </div>
    )
  }
  return (
    <Fragment>
    <AdminBar title="Previous Sessions" />
    {
      games.length === 0 ?
      (
        <Paper className={classes.container}>
          <Typography variant="h6" color="inherit" >
            You have no saved games.
          </Typography>
          <Typography variant="h6" color="inherit" >
            Please press '+' below.
          </Typography>
        </Paper>
        )
        :(
          <Paper className={classes.container}>
              YOU HAVE NO CREATED GAMES
          {controls.actions[path] && controls.actions[path].map(renderActions)}
          </Paper>
        )
      }
    </Fragment>
  )
}


export default withStyles(styles)(Games);
