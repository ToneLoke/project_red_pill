import React from 'react';
import useTimer  from '../../../../utils/timerHook';

export default function Timer({ maxTime, classes }) {
  let expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + maxTime);

  const {
    seconds,
    minutes,
    start,
    pause,
    resume
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div>
      <div>
        <span>{minutes || '0'}</span>:<span>{seconds || '00'}</span>
      </div>
    </div>
  );
}
