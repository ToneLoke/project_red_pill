import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Option from "./Option";
import Timer from "./Timer";

const styles = theme => ({
  container: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  top: {
    background:
      "radial-gradient(ellipse 118% 80% at 50% 25%, #3B55AB 0%, #3B55AB 80%, transparent 80%, transparent)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: -90,
    zIndex: 1
  },
  question: {
    padding: theme.spacing.unit * 3
  },
  options: {
    paddingTop: theme.spacing.unit * 2 + 90,
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingBottom: 30 + theme.spacing.unit * 3,
    overflow: "auto"
  }
});

const getStatus = (me, selected, answers, sent) => {
  if (sent && answers.includes(me)) return "correct";
  if (sent && selected === me) return "incorrect";
  if (me === selected) return "selected";
  return "idle";
};

const Question = ({
  classes,
  question,
  qNum,
  qTotal,
  answers,
  selected,
  onSelectedChange,
  isAnswered
}) => {
  // TODO: `sent` and `setSent` should come from the store, `sent` should be set
  // to true by the "Ready" button at the footer
  const [sent, setSent] = useState(false);

  const [secondsLeft, setSecondsLeft] = useState(question.maxTime);
  useEffect(() => {
    if (sent) return;

    const timer = setTimeout(() => {
      const next = Math.max(secondsLeft - 0.25, 0);
      setSecondsLeft(next);

      if (next === 0) {
        setSent(true);
        if (!isAnswered) {
          onSelectedChange(null);
        }
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.question}>
          <Typography align="center" variant="overline" color="secondary">
            Question {qNum + 1}/{qTotal}
          </Typography>
          <Typography align="center" variant="body1" color="secondary">
            {question.question}
          </Typography>
        </div>

        <Timer totalSeconds={question.maxTime} secondsLeft={secondsLeft} />
      </div>

      <div className={classes.options}>
        {question.choices.map((opt, key) => {
          return (
            <Option
              key={key}
              status={getStatus(key.toString(), selected, answers, sent)}
              onClick={
                sent || isAnswered
                  ?  null
                  : () => onSelectedChange(key.toString())
              }
            >
              {opt}
            </Option>
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(Question);
