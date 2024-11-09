import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WordSelector from './components/WordSelector/WordSelector';  // Компонент для выбора основного слова
import WordSelectorWithFourWords from './components/WordSelectorWithFourWords/WordSelectorWithFourWords';  // Наш новый компонент
import { AnswerComponent } from './components/AnswerComponent/AnswerComponent';
import SoundEffect from './components/SoundEffect/SoundEffect';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';

const App = () => {
  const { t, i18n } = useTranslation();

  const [mainWord, setMainWord] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [showMainWord, setShowMainWord] = useState(false);
  const [showAdditionalWords, setShowAdditionalWords] = useState(false);
  const [randomWords, setRandomWords] = useState([]);
  const [feedback, setFeedback] = useState('');

  // Функция для сброса игры
  const resetGame = () => {
    setMainWord(null);
    setMainImage(null);
    setShowMainWord(false);
    setShowAdditionalWords(false);
    setRandomWords([]);
    setFeedback('');
  };

  return (
    <>
      <SoundEffect />
      <h1>{t('NOW_GAME')}</h1>

      {/* Используем компонент WordSelector */}
      <WordSelector
        setMainWord={setMainWord}
        setMainImage={setMainImage}
        setShowMainWord={setShowMainWord}
        setShowAdditionalWords={setShowAdditionalWords}
        setFeedback={setFeedback}
      />

      {/* Основное слово */}
      {showMainWord && (
        <div className="picture">
          <img src={mainImage} alt={mainWord} style={{ width: '118px', height: '118px' }} />
          <h2>{mainWord}</h2>
        </div>
      )}

      {/* Используем компонент WordSelectorWithFourWords */}
      <WordSelectorWithFourWords
        mainWord={mainWord}
        setRandomWords={setRandomWords}
        setShowAdditionalWords={setShowAdditionalWords}
      />

      {/* Компонент для отображения ответов */}
      {showAdditionalWords && (
        <AnswerComponent
          mainWord={mainWord}
          randomWords={randomWords}
          setFeedback={setFeedback}
          feedback={feedback}
          correctFeedback={t('CORRECT_FEEDBACK')}
          incorrectFeedback={t('INCORRECT_FEEDBACK')}
        />
      )}

      {feedback && <h1>{feedback}</h1>}

      <div className="Resetbloc">
        <button onClick={resetGame}>{t('RESET_BUTTON_TEXT')}</button>
      </div>

      {/* Переключение языков */}
      <LanguageSwitcher changeLanguage={i18n.changeLanguage} />
    </>
  );
};

export default App;
