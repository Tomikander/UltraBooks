import React, { useState } from 'react';
import './index.css';
import './App.css';
import words from './words';
import images from './images';
import SoundEffect from './SoundEffect';
import AnswerComponent from './components/AnswerComponent';  // Importing a new component
import { getRandomWords } from './components/utilita';
import { useTranslation } from 'react-i18next';  // Imported hook for working with translations
import './i18n'; // Importing i18n settings

const App = () => {
  const { t, i18n } = useTranslation(); // We get the t() function for translation and the i18n object

  const [mainWord, setMainWord] = useState(null);
  const [randomWords, setRandomWords] = useState([]);
  const [showMainWord, setShowMainWord] = useState(false);
  const [showAdditionalWords, setShowAdditionalWords] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [mainImage, setMainImage] = useState(null);

  // Function for changing words
  const showNewQuestionWord = () => {
      const index = Math.floor(Math.random() * words.length);
      setMainWord(words[index]);
      setMainImage(images[words[index]]);
      setShowMainWord(true);
      setShowAdditionalWords(false); 
      setFeedback('');
  };

  // Function to generate additional words
  const showFourWords = () => {
      if (mainWord) {
          const filteredWords = words.filter(word => word !== mainWord);
          const additionalWords = getRandomWords(filteredWords, 3); 
          const allWords = [mainWord, ...additionalWords];
          const shuffledWords = allWords.sort(() => 0.5 - Math.random());
          setRandomWords(shuffledWords);
          setShowAdditionalWords(true);
      }
  };
  
  // Game reset function
  const resetGame = () => {
      setMainWord(null);
      setRandomWords([]);
      setShowMainWord(false);
      setShowAdditionalWords(false);
      setUserAnswer('');
      setFeedback('');
      setMainImage(null);
  };

  return (
      <>
          <SoundEffect />
          <h1>{t('NOW_GAME')}</h1>
          <div className="container">
              <button onClick={showNewQuestionWord}>{t('BUTTON_START')}</button>
              {showMainWord && (
                  <div className="picture">
                      <img src={mainImage} alt={mainWord} style={{ width: '118px', height: '118px' }} />
                      <h2>{mainWord}</h2>
                  </div>
              )}
              <div className="answer">
                  <button onClick={showFourWords} disabled={!showMainWord}>{t('BUTTON_TEXT')}</button>
              </div>

              {/* Let's integrate AnswerComponent */}
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
          </div>

          {/* Buttons to change language */}
          <div>
              <button onClick={() => i18n.changeLanguage('en')}>English</button>
              <button onClick={() => i18n.changeLanguage('ru')}>Русский</button>
              <button onClick={() => i18n.changeLanguage('uk')}>Українська</button>
          </div>
      </>
  );
};

export default App;
