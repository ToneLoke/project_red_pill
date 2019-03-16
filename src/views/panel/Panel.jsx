import React, { Fragment, useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { groupBy } from "lodash";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import AlbumIcon from "@material-ui/icons/FiberManualRecord";
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavBar } from "../common/components";
import { useStore } from "../../store";
import {
  ListItemSecondaryAction,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  container: {
    width: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    paddingTop: "20vh"
  },
  progress: {
    margin: 12,
    flexGrow: 1,
  },
  live: {
    color: 'green',
    marginRight: theme.spacing.unit * 2,
  },
  draft: {
    color: 'orange',
    marginRight: theme.spacing.unit * 2,
  },
  done: {
    color: 'gray',
    marginRight: theme.spacing.unit * 2,
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
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'overlay',
    maxHeight: 'calc(100vh - 50px)',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
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
  const fullPath =  history.location.pathname + history.location.search
  const path = history.location.pathname
  const [selGames, setSelGames] = useState()

  useEffect(() => {
      dispatch({ type: "GAME_FETCH_ALL" }, true);
  }, []);

  useEffect(()=> {
    if(user && allGames){
      if( getParameterByName("type") === 'live' ) {
        let grouped = groupBy(allGames, 'adminId.username')
        setSelGames(grouped)
      }else{
        let grouped = groupBy(user.games, 'status')
        setSelGames(grouped)
      }
    }
  },[history.location.search, allGames, user])

  const handleClick = (selGame) => {
    if (game && (selGame._id === game._id)) {
      dispatch({ type: 'GAME_CLEAR', payload: null })
    } else {
      dispatch({ type: 'GAME_SET', payload: selGame })
      if (selGame.status === 'live') history.push(`/live/${selGame._id}`)
    }
  }

  //TODO: fix empty state for filtered games as well
  console.log("SELECTED GAMES", selGames)
  return (
    <Fragment>
      <NavBar title="Sessions" icon={MenuIcon} path={path} fullPath={fullPath}/>
      {!selGames ? (
        <div><CircularProgress className={classes.progress} color="primary" /></div>
      ) : Object.keys(selGames).length === 0 ? (
        <Paper className={classes.container}>
          <Typography variant="body2" color="inherit">
            There are no games found.
          </Typography>
          <Typography variant="body2" color="inherit">
            Create one by pressing '+' below.
          </Typography>
        </Paper>
      ) : <List className={classes.root} subheader={<li />}>
          {Object.keys(selGames).map( name => (
            <li key={`section-${name}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader> {name.toUpperCase()} </ListSubheader>
                {selGames[name].map(g => {
                  return (
                    <ListItem key={g._id} button className={classes.listItemClass} onClick={() => handleClick(g)} selected={game && g._id === game._id}>
                      <ListItemText primary={`${g.title}`} secondary={`updated: ${moment(g.updatedAt).format('MM/DD/YY @ hh:mm a')}`} />
                      <ListItemSecondaryAction>
                        <AlbumIcon fontSize="small" className={classes[g.status]} />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
              </ul>
            </li>
          ))}
          </List>
      }
    </Fragment>
  );
};

export default withStyles(styles)(Games);
