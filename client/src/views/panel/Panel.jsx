// import external
import React, { useEffect, useState } from "react";
import { groupBy } from "lodash";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Paper } from "@material-ui/core";

// import internal
import { useStore } from "../../store";
import { getParameterByName } from "../common/helpers";
import PrivateGames from "./PrivateGames";
import PublicGames from "./PublicGames";
import styles from "./Panel.styles";

const getComponent = page => (page === "public" ? PublicGames : PrivateGames);

const Panel = ({ classes, history }) => {
  const {
    state: { games: allGames, game, user },
    dispatch
  } = useStore();
  const fullPath = history.location.pathname + history.location.search;
  const path = history.location.pathname;
  const [games, setGames] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    dispatch({ type: "GAME_FETCH_ALL" }, true);
  }, []);

  useEffect(() => {
    if (user && allGames) {
      if (getParameterByName("type") === "public") {
        let publicGames = groupBy(allGames, "adminId.username");
        setPage("public");
        setGames(publicGames);
      } else {
        let privateGames = groupBy(user.games, "status");
        setPage("private");
        setGames(privateGames);
      }
    }
  }, [history.location.search, allGames, user]);

  const handleGameClick = selGame => {
    if (game && selGame._id === game._id) {
      dispatch({ type: "GAME_CLEAR", payload: null });
    } else {
      dispatch({ type: "GAME_SET", payload: selGame });
    }
  };

  const passProps = { game, games, fullPath, path, handleGameClick };
  const Component = getComponent(page);
  return !games ? (
    <Paper className={classes.centered}>
      <CircularProgress color="secondary" />
    </Paper>
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
    <Component {...passProps} />
  );
};

export default withStyles(styles)(Panel);
