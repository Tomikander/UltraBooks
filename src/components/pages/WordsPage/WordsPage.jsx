import { useState } from "react";
import { useTranslation } from "react-i18next";
import WordSelector from "../../common/WordSelector/WordSelector";
import WordSelectorWithFourWords from "../../common/WordSelectorWithFourWords/WordSelectorWithFourWords";
import { AnswerComponent } from "../../common/AnswerComponent/AnswerComponent";
import {SoundEffect} from "../../common/SoundEffect/SoundEffect";
import  LanguageSwitcher from "../../common/LanguageSwitcher/LanguageSwitcher";


export const WordsPage = () => {
    const { t, i18n } = useTranslation();

    const [mainWord, setMainWord] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [showMainWord, setShowMainWord] = useState(false);
    const [showAdditionalWords, setShowAdditionalWords] = useState(false);
    const [randomWords, setRandomWords] = useState([]);
    const [feedback, setFeedback] = useState('');

    // Function to reset the game
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

        {/* Using the WordSelector component */}
        <WordSelector
          setMainWord={setMainWord}
          setMainImage={setMainImage}
          setShowMainWord={setShowMainWord}
          setShowAdditionalWords={setShowAdditionalWords}
          setFeedback={setFeedback}
        />

        {/* Basic word */}
        {showMainWord && (
          <div className="picture">
            <img src={mainImage} alt={mainWord} style={{ width: '118px', height: '118px' }} />
            <h2>{mainWord}</h2>
          </div>
        )}

        {/* Using the WordSelectorWithFourWords component */}
        <WordSelectorWithFourWords
          mainWord={mainWord}
          setRandomWords={setRandomWords}
          setShowAdditionalWords={setShowAdditionalWords}
        />

        {/* Component for displaying responses */}
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

        {/* Switch languages */}
        <LanguageSwitcher changeLanguage={i18n.changeLanguage} />
      </>
    );
  };
