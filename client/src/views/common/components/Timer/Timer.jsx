import React, { Fragment, useState, useEffect } from "react";
import useTimer from "./timerHook";
import { useStore } from '../../store';
// Components
import FlipUnitContainer from './components/FlipUnitContainer';
// Styles
import "./Timer.css";
const Timer = () => {
  const {
    state: { game: { status }, question: { maxTime } },
    dispatch
  } = useStore();
  const onExpire = () => console.log("TIME IS UP")
  const [flip, setFlip] = useState(true);
  const { seconds, minutes, start, pause, resume } = useTimer({ maxTime, onExpire });
  let minutesShuffle, secondsShuffle;

  useEffect(() => {
    console.log("timer update", seconds, minutes, status);
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
      console.log("timer unmount");
    };
  }, [status, seconds, minutes]);

  return (
    <div className={"flipClock darkBackground alignCenter"}>
      <FlipUnitContainer unit={"minutes"} digit={minutes} shuffle={minutesShuffle} />
      <FlipUnitContainer unit={"seconds"} digit={seconds} shuffle={secondsShuffle} />
    </div>
  );
};

export default Timer;
