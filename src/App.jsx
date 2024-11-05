import React, { useState } from 'react';
import './index.css';
import './App.css';
import words from './words';
import images from './images';
import SoundEffect from './SoundEffect';
import AnswerComponent from './components/AnswerComponent';  // Importing a new component
import { getRandomWords } from './components/utilita';
import { CORRECT_FEEDBACK, INCORRECT_FEEDBACK, BUTTON_TEXT, RESET_BUTTON_TEXT, NOW_GAME, BUTTON_START } from './components/twoWords.js';

const App = () => {
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
            <h1>{ NOW_GAME }</h1>
            <div className="container">
                <button onClick={showNewQuestionWord}>{BUTTON_START}</button>
                {showMainWord && (
                    <div className="picture">
                        <img src={mainImage} alt={mainWord} style={{ width: '118px', height: '118px' }} />
                        <h2>{mainWord}</h2>
                    </div>
                )}
                <div className="answer">
                    <button onClick={showFourWords} disabled={!showMainWord}>{BUTTON_TEXT}</button>
                </div>

                {/* Let's integrate AnswerComponent */}
                {showAdditionalWords && (
                    <AnswerComponent 
                        mainWord={mainWord} 
                        randomWords={randomWords} 
                        setFeedback={setFeedback} 
                        feedback={feedback}
                        correctFeedback={CORRECT_FEEDBACK} 
                        incorrectFeedback={INCORRECT_FEEDBACK}
                    />
                )}
                {feedback && <h1>{feedback}</h1>}
                <div className="Resetbloc">
                    <button onClick={resetGame}>{RESET_BUTTON_TEXT}</button>
                </div>
            </div>
        </>
    );
};


export default App;
