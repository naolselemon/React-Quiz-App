import React, { useEffect } from 'react';

const Timer = ({ dispatch, secondRemaining }) => {
  const min = Math.floor(secondRemaining / 60);
  const seconds = Math.floor(secondRemaining % 60);

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: 'timer' });
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && 0}
      {min}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
};

export default Timer;
