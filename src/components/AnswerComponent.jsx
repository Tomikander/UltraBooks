import React from 'react';
import zvuk1 from './zvuk1.mp3';
import zvuk2 from './zvuk2.mp3';

const AnswerComponent = ({ mainWord, randomWords, setFeedback }) => {
  const winnerSound = new Audio(zvuk1);
  const lostSound = new Audio(zvuk2);

  const handleAnswer = (word) => {
    if (word === mainWord) {
      setFeedback('Правильно!');
      winnerSound.play();
    } else {
      setFeedback('Неправильно, попробуйте ещё раз.');
      lostSound.play();
    }
  };

  return (
    <>
      {randomWords && randomWords.length > 0 && (
        <div>
          {randomWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(word)}
              style={{ margin: '5px' }}
            >
              {word}
            </button>
          ))}
        </div>
      )}
      
    </>
  );
};

export default AnswerComponent;
