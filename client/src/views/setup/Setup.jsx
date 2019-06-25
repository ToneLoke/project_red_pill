import React, { useEffect } from "react";
import PublishIcon from "@material-ui/icons/PresentToAll";
import AddIcon from "@material-ui/icons/Add";
import { useStore } from "../../store";
import {
  Layout,
  NavBar,
  Questions,
  Actions,
  ActionBtn
} from "../common/components";

import Settings from "./Settings";

const BLOCKED_STATUSES = ["live", "play", "pause", "done"];

const ActionBar = ({ isQuestions, publishGame, game }) => {
  return (
    <Actions>
      {isQuestions ? (
        <ActionBtn disabled={true} text="Create New" icon={<AddIcon />} />
      ) : (
        <ActionBtn
          disabled={game && game.questions.length > 0 ? false : true}
          text="PUBLISH"
          onClick={publishGame}
          icon={<PublishIcon />}
        />
      )}
    </Actions>
  );
};

const Setup = ({ history }) => {
  //======================= Connect to store using hooks =======================
  const {
    state: { game },
    dispatch
  } = useStore();

  const path = history.location.pathname;
  const fullPath = history.location.pathname + history.location.search;
  const page = history.location.search.split("=")[1] || "settings";
  const isQuestions = page === "questions";

  const handlePublishGame = () => {
    dispatch(
      {
        type: "GAME_CREATE_UPDATE",
        payload: {
          ...game,
          status: "live"
        }
      },
      true
    );
  };

  useEffect(() => {
    if (page === "questions" && !game) {
      dispatch({
        type: "ALERT_ERROR",
        payload: {
          alert: { message: "Title cannot be blank" }
        }
      });
      history.push("/games/draft?type=settings");
    }
    if (game && BLOCKED_STATUSES.includes(game.status)) {
      history.push("/games?type=private");
    }
  });

  return (
    <Layout
      header={
        <NavBar
          title={`${game ? game.title : "New Session"} - ${page.toUpperCase()}`}
          path={path}
          fullPath={fullPath}
        />
      }
      footer={
        <ActionBar
          game={game}
          isQuestions={isQuestions}
          publishGame={handlePublishGame}
        />
      }
    >
      {isQuestions ? <Questions /> : <Settings />}
    </Layout>
  );
};

export default Setup;
