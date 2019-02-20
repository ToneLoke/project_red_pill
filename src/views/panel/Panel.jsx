import React, { Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { AdminBar } from '../common/components';
import { useStore } from '../../store';
import controls from '../common/controls';
import { ListItemSecondaryAction, Checkbox, Paper, List, ListItem, ListItemText } from '@material-ui/core';

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
  console.count("Panel.jsx")

  useEffect(()=>{
    console.log("DID MOUNT", games)
    if(!games){
      dispatch({type: "GAME_FETCH_ALL"})
    }
  });

  const renderActions = (a) => {
    //TODO: make actions dynamic
    return (
      <div key={a.key} className={classes.wrapper}>
        <Fab {...a.styles} onClick={()=> dispatch({type: 'GAME_NEW'})}>
        {!!a.text && a.text}
        { a.icon && <a.icon /> }
        </Fab>
      </div>
    )
  }

  const renderGames = () => {
    return(
      <List>
        {games.map( g => {
          return(
            <ListItem key={g._id} button>
              <ListItemText primary={`${g.title}`} secondary={`${g.status}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={()=>{}}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    )
  }
  return (
    <Fragment>
    <AdminBar title="Sessions" />
    {
      !games ? "Loading.." :
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
             {renderGames()}
          {controls.actions[path] && controls.actions[path].map(renderActions)}
          </Paper>
        )
      }
    </Fragment>
  )
}


export default withStyles(styles)(Games);
