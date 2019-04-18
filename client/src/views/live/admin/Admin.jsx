// eslint-disable-line default-case

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useStore } from '../../../store';
import { GameInfo, LeaderBoard, Questions } from '../../common/components';
import styles from './Admin.styles';

const componentsList = {
  info: GameInfo,
  questions: Questions,
  leaderBoard: LeaderBoard
};
const Admin = ({ history, classes }) => {
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
            endUser={user}
            handleRouteChange={handleRouteChange}
          />
        );
      case 'leaderboard':
        return (
          <LeaderBoard
            {...liveData}
            timesUp={timesUp}
            endUser={user}
            handleRouteChange={handleRouteChange}
          />
        );
      case 'questions':
        return (
          <Questions
            {...liveData}
            timesUp={timesUp}
            endUser={user}
            handleRouteChange={handleRouteChange}
          />
        );
    }
  }

  return <div className={classes.container}>{switchView(page)}</div>;
};

export default withStyles(styles, {name: 'Admin'})(Admin);
