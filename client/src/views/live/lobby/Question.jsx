import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Option from './Option';
import Timer from './Timer';

const styles = theme => ({
  container: {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%'
  },
  top: {
    background: 'radial-gradient(ellipse 118% 80% at 50% 25%, #3B55AB 0%, #3B55AB 80%, transparent 80%, transparent)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    overflow: 'auto',
  },
  badge: {
    display: 'block'
  }
});

const getStatus = (me, answers, sent) => {
  if (sent && answers.includes(me)) return 'correct';
  return 'idle';
}

const Question = ({ classes, question, qNum, qTotal, answers, answersCount = {} }) => {
  // TODO: `sent` and `setSent` should come from the store, `sent` should be set
  // to true by the "Ready" button at the footer
  const [sent, setSent] = useState(false);

  const [secondsLeft, setSecondsLeft] = useState(question.maxTime);
  useEffect(() => {
    if (sent) return;

    const timer = setTimeout(() => {
      const next = Math.max(secondsLeft - .25, 0);
      setSecondsLeft(next);

      if (next === 0) {
        setSent(true);
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  });

  return <div className={classes.container}>
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
      {question.choices.map((opt, key) => (
        <Badge
          key={key}
          max={1000}
          color="primary"
          component="div"
          badgeContent={answersCount[opt] || 0}
          className={classes.badge}
          invisible={!sent}
          showZero
        >
          <Option status={getStatus(key, answers, sent)}>{opt}</Option>
        </Badge>
      ))}
    </div>
  </div>
};

export default withStyles(styles)(Question);
