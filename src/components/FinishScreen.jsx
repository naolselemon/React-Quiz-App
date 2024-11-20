import React from 'react';
// import NextButton from './NextButton';

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = '🎉';
  } else if (percentage >= 80) {
    emoji = '🥳';
  } else if (percentage >= 60) {
    emoji = '🙂';
  } else {
    emoji = '😕';
  }

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        Your highest point is: {highscore} / {maxPossiblePoints}
      </p>
      {/* <NextButton /> */}
      <button
        onClick={() => dispatch({ type: 'restart' })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
