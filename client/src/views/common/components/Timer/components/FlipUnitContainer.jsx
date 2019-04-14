import React from "react";

// Components
import NonAnimatedCard from "./NonAnimatedCard";

// Styles
import "../Timer.css";

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  previousDigit = previousDigit === -1 ? 59 : previousDigit;

  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  // const digit2 = !shuffle ? previousDigit : currentDigit;

  // // shuffle animations
  // const animation1 = shuffle ? "fold" : "unfold";
  // const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className={"flipUnitContainer lightForeground"}>
      <NonAnimatedCard digit={digit1} alignment="alignCenter" unit={unit} />
    </div>
  );
};

export default FlipUnitContainer;
