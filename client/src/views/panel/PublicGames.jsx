// import external
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

// import internal
import { Layout, NavBar } from "../common/components";

// import Local
import PublicControls from "./PublicControls";
import Groups from "./Groups";
import styles from "./Panel.styles";

// local constants
const _PUBLIC_STATUS_TITLES = {
  live: "JOINABLE",
  play: "RE-CONNECT",
  pause: "PAUSED",
  done: "COMPLETED"
};

const PublicGames = ({
  classes,
  path,
  fullPath,
  game,
  games,
  handleGameClick
}) => {
  return (
    <Layout
      header={<NavBar title="PUBLIC GAMES" path={path} fullPath={fullPath} />}
      footer={<PublicControls />}
    >
      <div className={classes.root}>
        <List subheader={<li />}>
          {Object.keys(games).map(status => (
            <Groups
              key={status}
              title={_PUBLIC_STATUS_TITLES[status]}
              classes={classes}
              handleClick={handleGameClick}
              games={games[status]}
              game={game}
              isPublic={true}
            />
          ))}
        </List>
      </div>
    </Layout>
  );
};

export default withStyles(styles)(PublicGames);
