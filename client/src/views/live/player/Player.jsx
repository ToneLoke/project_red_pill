import React, { useState } from "react";
import { useStore } from "../../../store";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Layout } from "../../common/components";
import styles from "./Player.styles";
import Question from "./Question";
import PlayerControls from "./PlayerControls";
import Score from "./presentational/Score";

const Player = ({ history, classes, header }) => {
  const {
    state: { game, live, user, question }
  } = useStore();
  const [selected, setSelected] = useState();
  const { status } = game;

  const getPlayer = () => live.players.find(p => p._id === user._id);
  const getIsAnswered = () => !!getPlayer().answers.find(a => a.q_id === question._id);

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
            selected={selected}
            onSelectedChange={setSelected}
            isAnswered={getIsAnswered()}
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
      footer={
        <PlayerControls
          selected={selected}
          status={status}
          player={getPlayer()}
          isAnswered={getIsAnswered()}
        />
      }
    >
      {switchView(status)}
    </Layout>
  );
};

export default withStyles(styles)(Player);
