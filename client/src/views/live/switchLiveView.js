import React from 'react';
import { GameInfo, LeaderBoard, Questions } from '../common/components';

export default function switchLiveView(page, props) {
  switch (page) {
    case 'info':
      return <GameInfo {...props} />;
    case 'leaderboard':
      return <LeaderBoard {...props} />;
    case 'questions':
      return <Questions {...props} />;
  }
}
