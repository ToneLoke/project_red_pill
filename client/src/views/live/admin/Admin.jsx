import React from 'react';
import { useStore } from '../../../store';
import { GameInfo, LeaderBoard } from '../../common/components';
import Questions from './components/Questions';
const componentsList = {
  info: GameInfo,
  questions: Questions,
  leaderBoard: LeaderBoard
};
const Admin = ({ history }) => {
  const {
    state: { user, game, question },
    dispatch
  } = useStore();
  const liveData = { game, user, question };

  const path = history.location.pathname;
  const fullPath = history.location.pathname + history.location.search;
  let page = history.location.search.split('=')[1] || 'info';
  const handleRouteChange = (pageName) => history.push(`${path}?type=${pageName}`);

  const timesUp = () => console.log('TIME UP ACTION');
  function switchView(page) {
    switch (page) {
      case 'info':
        return (
          <GameInfo
            {...liveData}
            timesUp={timesUp}
            selPlayer={user}
            handleRouteChange={handleRouteChange}
          />
        );
      case 'leaderboard':
        return (
          <LeaderBoard
            {...liveData}
            timesUp={timesUp}
            selPlayer={user}
            handleRouteChange={handleRouteChange}
          />
        );
      case 'questions':
        return (
          <Questions
            {...liveData}
            timesUp={timesUp}
            selPlayer={user}
            handleRouteChange={handleRouteChange}
          />
        );
    }
  }

  return <div className="Admin-Container">{switchView(page)}</div>;
};

export default Admin;
