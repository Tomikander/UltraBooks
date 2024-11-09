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
              return null;  // Игнорируем, если это не строка
            }
            return (
              <button
                key={wordObj.id}  // Используем id для ключа
                onClick={() => handleAnswer(wordObj.value)}  // Передаем value для проверки
                style={{ margin: '5px' }}
              >
                {wordObj.value} {/* Отображаем значение "value" (название животного) */}
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
