// import external
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";

// import internal
import { Layout, NavBar } from "../common/components";

// import Local
import PrivateControls from "./PrivateControls";
import Groups from "./Groups";
import styles from "./Panel.styles";

// local constants
const _PRIVATE_STATUS_TITLES = {
  live: "IN-PROGRESS",
  draft: "DRAFTING",
  play: "RE-CONNECT",
  pause: "PAUSED",
  done: "COMPLETED"
};

const PrivateGames = ({
  classes,
  path,
  fullPath,
  game,
  games,
  handleGameClick
}) => {
  return (
    <Layout
      header={<NavBar title="PRIVATE GAMES" path={path} fullPath={fullPath} />}
      footer={<PrivateControls />}
    >
      <div className={classes.root}>
        <List subheader={<li />}>
          {Object.keys(games).map(status => (
            <Groups
              key={status}
              title={_PRIVATE_STATUS_TITLES[status]}
              classes={classes}
              handleClick={handleGameClick}
              games={games[status]}
              game={game}
            />
          ))}
        </List>
      </div>
    </Layout>
  );
};

export default withStyles(styles)(PrivateGames);
