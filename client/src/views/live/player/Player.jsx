// eslint-disable-line default-case

import React from 'react';
import { useStore } from '../../../store';
import { GameInfo, LeaderBoard, Questions } from '../../common/components';
const componentsList = {
  info: GameInfo,
  questions: Questions,
  leaderBoard: LeaderBoard
};
const Player = ({ history }) => {
  const {
    state: { user, game, question },
    dispatch
  } = useStore();

  const liveData = { game, user, question };

  const path = history.location.pathname;
  const fullPath = history.location.pathname + history.location.search;
  let page = history.location.search.split('=')[1] || 'info';

  const handleRouteChange = (pageName) => history.push(`${path}?type=${pageName}`);
  const handleAnswer = (answer) => (!answer ? 'CONNECT ME' : answer);

  const timesUp = () => console.log('TIME UP ACTION');

  console.log(`Player -> Render -> `, page);
  console.log(`Player -> Render -> `, user);

  function switchView(page) {
    switch (page) {
      case 'info':
        return (
          <GameInfo
            {...liveData}
            timesUp={timesUp}
            endUser={user}
            handleRouteChange={handleRouteChange}
            handleAnswer={handleAnswer}
          />
        );
    }
  }

  return <div className="Player-Container">{switchView(page)}</div>;
};

export default Player;
