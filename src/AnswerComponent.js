import React, { useEffect } from 'react';
import zvuk1 from './zvuk1.mp3';
import zvuk2 from './zvuk2.mp3';

const AnswerComponent = ({ mainWord, randomWords, setFeedback }) => {
  const winnerSound = new Audio(zvuk1);
  const lostSound = new Audio(zvuk2);

  useEffect(() => {
    return () => {
      winnerSound.pause();
      lostSound.pause();
    };
  }, [winnerSound, lostSound]);

  const handleAnswer = (word) => {
    if (word === mainWord) {
      setFeedback('Правильно!');
      winnerSound.play();
    } else {
      setFeedback('Неправильно, спробуйте ще раз.');
      lostSound.play();
    }
  };

  return (
    <>
      {randomWords && randomWords.length > 0 ? (
        <div>
          {randomWords.map((wordObj) => {
            if (typeof wordObj.value !== 'string') {
              console.warn(`Ожидалась строка, но получен объект:`, wordObj);
              return null;  // Ignore if it's not a string
            }
            return (
              <button
                key={wordObj.id}  // Use id for the key
                onClick={() => handleAnswer(wordObj.value)}  // Passing value for verification
                style={{ margin: '5px' }}
              >
                {wordObj.value} {/*Display the value "value" (name of the animal) */}
              </button>
            );
          })}
        </div>
      ) : (
        <p>Нет доступных слов для ответа.</p>
      )}
    </>
  );
};

export default AnswerComponent;
