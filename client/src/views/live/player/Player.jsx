// eslint-disable-line default-case

import React, { useEffect } from 'react';
import { useStore } from '../../../store';
import { LeaderBoard, Questions } from '../../common/components';

const Player = ({ history }) => {
  const {
    state: { user, game, question },
    dispatch
  } = useStore();

  const { status } = game;
  const liveData = { game, user, question };

  function switchView(status) {
    switch (status) {
      case 'live':
        return (
          <div>PLEASE WAIT FOR GAME TO START...</div>
        );
      case 'play':
        return (
          <div>LOAD MAIN PLAYER COMPONENT</div>
        );
      case 'pause':
        return (
          <div>ADMIN HAS PAUSED GAME PLEASE WAIT...</div>
        );
      default:
        return (
          <div>GAME OVER</div>
        )
    }
  }

  return <div className="Player-Container">{switchView(status)}</div>;
};

export default Player;
