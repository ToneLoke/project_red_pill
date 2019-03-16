import { useState, useEffect, useRef } from 'react';

export default function useTimer(settings) {
  const { maxTime, onExpire } = settings || {};
  let expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + maxTime);

  const [seconds, setSeconds] = useState(0);
  function subtractSecond() {
    setSeconds(prevSeconds => {
      if(prevSeconds === 0) {
        subtractMinute();
        return 59;
      } else if(prevSeconds > 0) {
        return prevSeconds - 1;
      }
      return 0;
    });
  }

  const [minutes, setMinutes] = useState(0);
  function subtractMinute() {
    setMinutes(prevMinutes => {
      if (prevMinutes === 0) {
        return 59;
      } else if(prevMinutes > 0) {
        return prevMinutes - 1;
      }
      return 0;
    });
  }

  const intervalRef = useRef();

  function start() {
    if(isValidExpiryTimestamp(expiryTimestamp) && !intervalRef.current) {
      calculateExpiryDate();
      intervalRef.current = setInterval(() => calculateExpiryDate(), 1000);
    }
  }

  function pause() {
    if(intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  function reset() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
    setSeconds(0);
    setMinutes(0);
  }

  function resume() {
    if(isValidExpiryTimestamp(expiryTimestamp) && !intervalRef.current) {
      intervalRef.current = setInterval(() => subtractSecond(), 1000);
    }
  }

  // Timer expiry date calculation
  function calculateExpiryDate() {
    var now = new Date().getTime();
    var distance = expiryTimestamp - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(seconds < 0) {
      reset();
      isValidOnExpire(onExpire) && onExpire();
    } else {
      setSeconds(seconds);
      setMinutes(minutes);
    }
  }

  // didMount effect
  useEffect(() => {
    return reset;
  },[]);

  // Validate expiryTimestamp
  function isValidExpiryTimestamp(expiryTimestamp) {
    const isValid = (new Date(expiryTimestamp)).getTime() > 0;
    if(!isValid) {
      console.warn('Invalid expiryTimestamp settings', expiryTimestamp);
    }
    return isValid;
  }

  // Validate onExpire
  function isValidOnExpire(onExpire) {
    const isValid = onExpire && typeof onExpire === 'function';
    if(onExpire && !isValid) {
      console.warn('Invalid onExpire settings function', onExpire);
    }
    return isValid;
  }

  return { seconds, minutes, start, pause, resume };
}
