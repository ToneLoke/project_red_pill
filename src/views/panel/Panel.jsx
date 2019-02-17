import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { Empty } from '../common/components';
import { useStore } from '../../store';
import controls from '../common/controls';

// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  container: {
    width: '100%',
    height: '90vh',
    marginBottom: '18%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
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
      {
        games.length === 0 ?
        (
          <Paper className={classes.container}><div>You have no saved games. Please press '+' below.</div></Paper>
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
