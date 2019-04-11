// Packages
import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { Typography, Fab, Badge } from "@material-ui/core";

// Components
import Timer from "../Timer";
import QuestionsOverview from "./components/QuestionsOverview";
import ScoreOverview from "./components/ScoreOverview";

// Styles
import styles from "./GameInfo.styles";

const PlayerList = ({ players, selPlayer, classes }) => {
  return (
    <div className={classes.players}>
      {players.map((p, i) => {
        return (
          <div key={p._id} className={classes.player}>
            <div className={classes.rankNum}>{i + 1}</div>
            <Fab
              className={classes.avatarFab}
              size="small"
              disabled={selPlayer && p._id === selPlayer._id}
            >
              <PersonIcon />
            </Fab>
            <div className={classes.user}>{p.username}</div>
            <Badge className={classes.badge} fontSize="large" color="secondary" badgeContent={10}>
              {" "}
            </Badge>
          </div>
        );
      })}
    </div>
  );
};

const GameInfo = ({ game, classes, timesUp, user, question }) => (
  <div className={classes.container}>
    <div className={classes.lobbyAdminHeader}>
      <div className={classes.title}>
        <Typography variant="subtitle1" color="secondary">
          Next question In:
        </Typography>
      </div>
      <Timer maxTime={question.maxTime || 0} onExpire={timesUp} status={game.status} />
    </div>
    <div className={classes.gameInfoFold}>
      <PlayerList players={game.players} selPlayer={user} classes={classes} />
      <QuestionsOverview count={game.questions.count} classes={classes} />
      <ScoreOverview
        score={
          (game.score = [
            {
              name: "SCORE",
              pass: 2,
              fail: 3,
              queue: 7
            }
          ])
        }
        visType={["bar"]}
        classes={classes}
      />
    </div>
  </div>
);

export default withStyles(styles, { name: "GameInfo" })(GameInfo);
