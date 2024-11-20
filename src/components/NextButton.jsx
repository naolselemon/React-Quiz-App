import React from 'react';

const NextButton = ({ dispatch, answer, numQuestion, index, status }) => {
  if (answer === null) return null;

  if (index < numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'newQuestion' })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  }

  if (index === numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch({ type: 'finish' })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
  }

  if (status === 'hasfinished') {
    return (
      <button
        onClick={() => dispatch({ type: 'restart' })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    );
  }
};

export default NextButton;
