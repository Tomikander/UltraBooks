import wordObjects from '../../../data/wordObjects';  // Путь к вашему массиву с данными

const WordSelector = ({ setMainWord, setMainImage, setShowMainWord, setShowAdditionalWords, setFeedback }) => {

  // Функция для выбора нового слова
  const showNewQuestionWord = () => {
    // Случайным образом выбираем слово из массива
    const randomIndex = Math.floor(Math.random() * wordObjects.length);
    const selectedWord = wordObjects[randomIndex];

    // Обновляем состояние в родительском компоненте
    setMainWord(selectedWord.value);
    setMainImage(selectedWord.src);
    setShowMainWord(true);  // Показываем основное слово
    setShowAdditionalWords(false);  // Скрываем дополнительные слова
    setFeedback('');  // Очищаем обратную связь
  };

  return (
    <button onClick={showNewQuestionWord}>Start</button>
  );
};

export default WordSelector;
