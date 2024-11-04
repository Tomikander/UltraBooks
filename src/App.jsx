import React, { useState } from 'react';
import './index.css';
import './App.css';
import words from './words';
import images from './images';
import SoundEffect from './SoundEffect';
import zvuk1 from './zvuk1.mp3';
import zvuk2 from './zvuk2.mp3';

const App = () => {
    const [mainWord, setMainWord] = useState(null);
    const [randomWords, setRandomWords] = useState([]);
    const [showMainWord, setShowMainWord] = useState(false);
    const [showAdditionalWords, setShowAdditionalWords] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const winnerSound = new Audio(zvuk1);
    const lostSound = new Audio(zvuk2)

    const newChangeWord = () => {
        const index = Math.floor(Math.random() * words.length);
        setMainWord(words[index]);
        setMainImage(images[words[index]]);
        setShowMainWord(true);
        setShowAdditionalWords(false); 
        setFeedback('');
    };

    const fourWords = () => {
        if (mainWord) {
            const filteredWords = words.filter(word => word !== mainWord);
            const additionalWords = getRandomWords(filteredWords, 3); 
            const allWords = [mainWord, ...additionalWords];
            const shuffledWords = allWords.sort(() => 0.5 - Math.random());
            setRandomWords(shuffledWords);
            setShowAdditionalWords(true);
        }
    };

    const getRandomWords = (wordsArray, count = 4) => {
        const shuffled = [...wordsArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
 
   const handleAnswer = (word) => {
        setUserAnswer(word);
        if (word === mainWord) {
            setFeedback('Правильно!');
            winnerSound.play();
        } else {
           setFeedback('Неправильно, попробуйте ще раз.');
           lostSound.play();
        }
    };

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
            <h1>Зіграймо!</h1>
            <div className="container">
                <button onClick={newChangeWord}>тисни сюди!</button>
                {showMainWord && (
                    <div className='picture'>
                        <img src={mainImage} alt={mainWord} style={{ width: '118px', height: '118px' }} />
                        <h2>{mainWord}</h2>
                    </div>
                )}
                <div className='answer'>
                    <button onClick={fourWords} disabled={!showMainWord}>Це хто?</button>
                </div>
                {showAdditionalWords && (
                    <div>
                        {randomWords.map((word, index) => (
                            <button key={index} onClick={() => handleAnswer(word)} style={{ margin: '5px' }}>
                                {word}
                            </button>
                        ))}
                    </div>
                )}
                {feedback && <h1>{feedback}</h1>}
                <div className='Resetbloc'>
                  <button onClick={resetGame}>П</button>
                </div>
            </div>
        </>
    );
}

export default App;
