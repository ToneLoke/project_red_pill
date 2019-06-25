import React from "react";
import { withStyles } from "@material-ui/core/styles";
// Components
import QuestionsOverview from "./QuestionsOverview";
import LeaderBoardOverview from "./LeaderBoardOverview";
import ScoreOverview from "./ScoreOverview";
import PlayerList from "../../common/components/PlayerList";
import { useStore } from "../../../store";
// Styles
import styles from "../GameInfo.styles";

const Overview = ({ classes, handleChangePage }) => {
  const {
    state: { game, live, question }
  } = useStore();
  const playerCount = live.players.length;
  return (
    <div className={classes.adminSession}>
      <LeaderBoardOverview
        count={playerCount}
        classes={classes}
        handleChangePage={handleChangePage}
      />
      <PlayerList displayCount={5} />
      <QuestionsOverview
        count={`1/${game.questions.length}`}
        classes={classes}
        handleChangePage={handleChangePage}
      />
      <ScoreOverview
        score={[
          {
            name: "SCORE",
            pass: 1,
            fail: 1,
            queue: 1
          }
        ]}
        playerCount={playerCount}
        visType={["bar"]}
        classes={classes}
      />
    </div>
  );
};

export default withStyles(styles, { name: "Overview" })(Overview);
