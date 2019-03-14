import React, { Fragment, useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import AlbumIcon from "@material-ui/icons/FiberManualRecord";
import CircularProgress from '@material-ui/core/CircularProgress';
import { AdminBar } from "../common/components";
import { useStore } from "../../store";
import {
  ListItemSecondaryAction,
  Paper,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  container: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  progress: {
    margin: 12,
    flexGrow: 1,
  },
  live: {
    color: 'green',
  },
  draft: {
    color: 'orange'
  },
  done: {
    color: 'gray'
  },
  btnWrapper: {
    width: "90%"
  },
  btn: {
    width: "100%"
  },
  listItem: {
    borderBottom: "1px solid #dddddd",
    paddingBottom: 20
  }
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const Games = ({ classes, history }) => {
  const {
    state: { games: allGames, game, user },
    dispatch
  } = useStore();

  const [selGames, setSelGames] = useState()

  useEffect(() => {
    if (!allGames && user) {
      dispatch({ type: "GAME_FETCH_ALL" }, true);
    }
    if(user && allGames){
      if( getParameterByName("type") === 'live' ) {
        setSelGames(allGames)
      }else{
        setSelGames(user.games)
      }
    }
  });

  const handleClick = (selGame) => {
    if (game && (selGame._id === game._id)) {
      dispatch({ type: 'GAME_CLEAR', payload: null })
    } else {
      dispatch({ type: 'GAME_SET', payload: selGame })
      if (selGame.status === 'live') history.push(`/live/${selGame._id}`)
    }
  }

  //TODO: fix empty state for filtered games as well
  return (
    <Fragment>
      <AdminBar title="Sessions" icon={MenuIcon} handleClick={() => { }} />
      {!selGames ? (
        <div><CircularProgress className={classes.progress} color="primary" /></div>
      ) : selGames.length === 0 ? (
        <Paper className={classes.container}>
          <Typography variant="body2" color="inherit">
            There are no games found.
          </Typography>
          <Typography variant="body2" color="inherit">
            Create one by pressing '+' below.
          </Typography>
        </Paper>
      ) : <List>
            {selGames.map(g => {
              return (
                <ListItem key={g._id} button className={classes.listItemClass} onClick={() => handleClick(g)} selected={game && g._id === game._id}>
                  <ListItemText primary={`${g.title}`} secondary={`updated: ${moment(g.updatedAt).format('MM/DD/YY @ hh:mm a')}`} />
                  <ListItemSecondaryAction>
                    <AlbumIcon fontSize="small" className={classes[g.status]} />
                    <Typography variant="overline">{g.status === "live" && "live"}</Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
      }
    </Fragment>
  );
};

export default withStyles(styles)(Games);
