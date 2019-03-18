import React, {useState, useEffect} from 'react';
import useTimer from './timerHook';

import './Timer.css';

const AnimatedCard = ({ animation, digit }) => {
  return(
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return(
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({ digit, shuffle, unit }) => {

  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // to prevent a negative value
  previousDigit = previousDigit === -1
    ? 59
    : previousDigit;

  // add zero
  if ( currentDigit < 10 ) {
    currentDigit = `0${currentDigit}`;
  }
  if ( previousDigit < 10 ) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle
    ? previousDigit
    : currentDigit;
  const digit2 = !shuffle
    ? previousDigit
    : currentDigit;

  // shuffle animations
  const animation1 = shuffle
    ? 'fold'
    : 'unfold';
  const animation2 = !shuffle
    ? 'fold'
    : 'unfold';

  return(
    <div className={'flipUnitContainer'}>
      <StaticCard
        position={'upperCard'}
        digit={currentDigit}
        />
      <StaticCard
        position={'lowerCard'}
        digit={previousDigit}
        />
      <AnimatedCard
        digit={digit1}
        animation={animation1}
        />
      <AnimatedCard
        digit={digit2}
        animation={animation2}
        />
    </div>
  );
};

// functional component
const FlipTimer = ({maxTime, status, onExpire}) => {
  const { seconds, minutes, start, pause, resume } = useTimer({maxTime, onExpire})
  const [flip, setFlip] = useState(true);
  let minutesShuffle, secondsShuffle;

  useEffect(() => {
    console.log("timer update", seconds, minutes, status)
    switch (status) {
      case 'play':
        start()
        break;
      case 'pause':
        pause()
        break;
      default:
        break;
    }

    return () => {
    console.log("timer unmount")
    }
  },
    [status, seconds, minutes]
  )


return(
  <div className={'flipClock'}>
				<FlipUnitContainer
					unit={'minutes'}
					digit={minutes}
					shuffle={minutesShuffle}
          />
        <div className={'colon'}>:</div>
				<FlipUnitContainer
					unit={'seconds'}
					digit={seconds}
					shuffle={secondsShuffle}
					/>
			</div>
		);
}

export default FlipTimer;
