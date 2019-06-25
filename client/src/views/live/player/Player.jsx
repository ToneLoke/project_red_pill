import React from "react";
import { Route } from "react-router-dom";
import { useStore } from "../../../store";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Layout, ControlsBar } from "../../common/components";
import styles from "./Player.styles";
import Question from "./Question";
import PlayerControls from "./PlayerControls";
import Score from "./Score";

const Player = ({ history, classes, header }) => {
  const {
    state: { game, question }
  } = useStore();

  const { status } = game;

  function switchView(status) {
    switch (status) {
      case "live":
        return (
          <div className={classes.wait}>
            <Typography color="secondary" variant="body1" align="center">
              Quizz session will start when host is ready!
            </Typography>
          </div>
        );
      case "play":
        return (
          <Question
            question={question}
            answers={game.questions[game.qNum].answers}
            qNum={game.qNum}
            qTotal={game.questions.length}
          />
        );
      case "pause":
        return (
          <div className={classes.wait}>
            <Typography color="secondary" variant="body1" align="center">
              Quizz session is paused it will return shortly!
            </Typography>
          </div>
        );
      default:
        return <Score />;
    }
  }

  return (
    <Layout
      header={header}
      footer={<PlayerControls />}
    >
      {switchView(status)}
    </Layout>
  );
};

export default withStyles(styles)(Player);
