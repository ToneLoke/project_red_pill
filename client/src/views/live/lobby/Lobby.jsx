import React, { useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useStore } from '../../../store';
import Question from './Question';
import Leaderboard from './Leaderboard';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    height: '100%'
  },
  timer: {
    flex: '1 0 100%'
  },
  leaderboardContainer: {
    width: '50%',
    height: '100%',
    overflow: 'auto'
  }
}

const Lobby = ({ classes }) => {
  const { state: { game, question } } = useStore();

  const answersCount = useMemo(
    () => game.players.reduce((acc, player) => {
      acc[player.answers[game.qNum]] = acc[player.answers[game.qNum]] || 0 + 1
      return acc;
    }, {}),
    [game.players, game.qNum]
  )

  return (
    <div className={classes.container}>
      <Question
        question={question}
        answers={game.questions[game.qNum].answers}
        qNum={game.qNum}
        qTotal={game.questions.length}
        answersCount={answersCount}
      />
      <div className={classes.leaderboardContainer}>
        <Leaderboard />
      </div>
    </div>
  );
};

 export default withStyles(styles, { name: 'Lobby' })(Lobby);
