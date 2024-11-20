import React from 'react';

const Progress = ({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer != null)} />
      <p>
        Question: {index + 1} / {numQuestions}
      </p>
      <p>
        Points: {points} / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
