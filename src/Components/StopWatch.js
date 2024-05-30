// src/StopWatch.js

import React, { useState, useEffect } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {interval = setInterval(() => { setTime(prevTime => prevTime + 1);}, 1000);} 
    else if (!isRunning && time !== 0) { clearInterval(interval); }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
      <div className='StopWatch'>
      <h1>StopWatch</h1>
      <p>{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
