// import external
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { groupBy } from "lodash";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import AlbumIcon from "@material-ui/icons/FiberManualRecord";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  ListItemSecondaryAction,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

// import internal
import { Layout, NavBar } from "../common/components";
import { useStore } from "../../store";
import { getParameterByName } from "../common/helpers";

// import Local
import PanelControls from "./PanelControls";
import styles from "./Panel.styles";

// local constants
const _PRIVATE_STATUS_TITLES = {
  live: "IN PROGRESS",
  draft: "DRAFTING",
  play: "IN PROGRESS",
  pause: "PAUSED",
  done: "COMPLETED"
};

const Groups = ({ name, games, classes, handleClick }) => {
  return (
    <li key={`section-${name}`} className={classes.listSection}>
      <ul className={classes.ul}>
        <ListSubheader> {name.toUpperCase()} </ListSubheader>
        {games.map(g => {
          return (
            <ListItem
              key={g._id}
              button
              className={classes.listItemClass}
              onClick={() => handleClick(g)}
              selected={game && g._id === game._id}
            >
              <ListItemText
                primary={`${g.title}`}
                secondary={`updated: ${moment(g.updatedAt).format(
                  "MM/DD/YY @ hh:mm a"
                )}`}
              />
              <ListItemSecondaryAction>
                <AlbumIcon fontSize="small" className={classes[g.status]} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </ul>
    </li>
  );
};

const Games = ({ classes, history }) => {
  const {
    state: { games: allGames, game, user },
    dispatch
  } = useStore();

  const fullPath = history.location.pathname + history.location.search;
  const path = history.location.pathname;
  const [games, setGames] = useState(null);

  useEffect(() => {
    dispatch({ type: "GAME_FETCH_ALL" }, true);
  }, []);

  useEffect(() => {
    //NOTE: based off of the url we decide to load public games vs user's games
    if (user && allGames) {
      if (getParameterByName("type") === "public") {
        let publicGames = groupBy(allGames, "adminId.username");
        setGames(publicGames);
      } else {
        let privateGames = groupBy(user.games, "status");
        setGames(privateGames);
      }
    }
  }, [history.location.search, allGames, user]);

  const handleGameClick = selGame => {
    if (game && selGame._id === game._id) {
      dispatch({ type: "GAME_CLEAR", payload: null });
    } else {
      dispatch({ type: "GAME_SET", payload: selGame });
      if (selGame.status === "live") history.push(`/live/${selGame._id}`);
    }
  };

  //TODO: fix empty state for filtered games as well
  return (
    <Layout
      header={
        <NavBar title="Games" icon={MenuIcon} path={path} fullPath={fullPath} />
      }
      footer={
        <Route
          key="/panel-control-bar"
          path="/games"
          component={PanelControls}
        />
      }
    >
      {!games ? (
        <div className={classes.centered}>
          <CircularProgress color="secondary" />
        </div>
      ) : Object.keys(games).length === 0 ? (
        <Paper className={classes.centered}>
          <Typography variant="body2" color="inherit">
            There are no games found.
          </Typography>
          <Typography variant="body2" color="inherit">
            Create one by pressing '+' below.
          </Typography>
        </Paper>
      ) : (
        <div className={classes.root}>
          <List subheader={<li />}>
            {Object.keys(games).map(name => (
              <Groups
                title={name}
                classes={classes}
                handleClick={handleGameClick}
                games={games}
              />
            ))}
          </List>
        </div>
      )}
    </Layout>
  );
};

export default withStyles(styles)(Games);
