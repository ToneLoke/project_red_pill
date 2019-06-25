import React, { useState, useEffect } from "react";
import useTimer from "./timerHook";
import { logger } from "../../../../utils";
import { useStore } from "../../../../store";
// Components
import FlipUnitContainer from "./components/FlipUnitContainer";
// Styles
import "./Timer.css";

const timerLog = logger("TIMER-HOOK");

const Timer = () => {
  const {
    state: {
      game: { status },
      question: { maxTime }
    },
    dispatch
  } = useStore();
  const onExpire = () => timerLog("timeup");
  const [flip, setFlip] = useState(true);
  const { seconds, minutes, start, pause, resume } = useTimer({
    maxTime,
    onExpire
  });
  let minutesShuffle, secondsShuffle;

  useEffect(() => {
    timerLog("update", seconds, minutes, status);
    switch (status) {
      case "play":
        start();
        break;
      case "pause":
        pause();
        break;
      default:
        break;
    }

    return () => {
      timerLog("unmount");
    };
  }, [status, seconds, minutes]);

  return (
    <div className={"flipClock darkBackground alignCenter"}>
      {!!minutes && (
        <FlipUnitContainer
          unit={"minutes"}
          digit={minutes}
          shuffle={minutesShuffle}
        />
      )}
      <FlipUnitContainer
        unit={"seconds"}
        digit={seconds}
        shuffle={secondsShuffle}
      />
    </div>
  );
};

export default Timer;
