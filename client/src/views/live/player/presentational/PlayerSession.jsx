// Packages
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import Answers from './player/Answers';

// Styles
import styles from './GameInfo.styles';

const PlayerSession = (props) => {
  const { game, classes, question, handleAnswer } = props;
  return (
    <div className={classes.playerSession}>
      <Answers
        question={question}
        classes={classes}
        game={game}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default withStyles(styles, { name: 'ClassroomPlayer' })(PlayerSession);
