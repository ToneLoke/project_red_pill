// import external
import React, { useEffect, useState } from "react";
import { groupBy } from "lodash";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Paper } from "@material-ui/core";

// import internal
import { useStore } from "../../store";
import { Layout, Actions, ActionBtn, NavBar } from "../common/components";
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
        let publicGames = groupBy(allGames, "status");
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
    <Layout>
      <Paper className={classes.centered}>
        <CircularProgress color="secondary" />
      </Paper>
    </Layout>
  ) : Object.keys(games).length === 0 ? (
    <Layout
      header={
        <NavBar
          title={`${(page || "loading").toUpperCase()}`}
          path={path}
          fullPath={fullPath}
        />
      }
      footer={
        <Actions>
          <ActionBtn
            component={Link}
            to="/games/draft?type=settings"
            icon={<AddIcon />}
            text="ADD"
          />
        </Actions>
      }
    >
      <Paper className={classes.centered}>
          <Typography variant="body2" color="inherit">
            There are no sessions found.
        </Typography>
          <Typography variant="body2" color="inherit">
            Create one by pressing '+' below.
        </Typography>
      </Paper>
    </Layout>
  ) : (
        <Component {...passProps} />
      );
};

export default withStyles(styles)(Panel);
