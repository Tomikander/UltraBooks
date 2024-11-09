import React from 'react';
import wordObjects from '../../data/wordObjects';  // Импортируем массив с данными
import { getRandomWords } from '../../utils/getRandomWords';  // Утилита для получения случайных слов

const WordSelectorWithFourWords = ({
  mainWord,
  setRandomWords,
  setShowAdditionalWords,
}) => {

  // Функция для показа дополнительных слов
  const showFourWords = () => {
    if (mainWord) {
      // Фильтруем слова, исключая основное слово
      const filteredWords = wordObjects.filter(wordObject => wordObject.value !== mainWord);
      
      // Выбираем случайные дополнительные слова
      const additionalWords = getRandomWords(filteredWords, 3); 
      
      // Собираем все слова в одном массиве (основное + дополнительные)
      const allWords = [mainWord, ...additionalWords];
      
      // Перемешиваем слова случайным образом
      const shuffledWords = allWords.sort(() => 0.5 - Math.random());
      
      // Обновляем состояния с новыми случайными словами
      setRandomWords(shuffledWords);
      setShowAdditionalWords(true);  // Показываем дополнительные слова
    }
  };

  return (
    <div className="answer">
      <button onClick={showFourWords} disabled={!mainWord}>Show Words</button>
    </div>
  );
};

export default WordSelectorWithFourWords;
