import Button from './Button';
import AnswerComponent from './AnswerComponent';

const GameBoard = ({ 
  mainImage, 
  mainWord, 
  randomWords, 
  showMainWord, 
  showAdditionalWords, 
  feedback, 
  resetGame, 
  showNewQuestionWord, 
  showFourWords 
}) => {
  return (
    <div className="container">
      <Button onClick={showNewQuestionWord}>Start</Button>
      {showMainWord && (
        <div className="picture">
          <img src={mainImage} alt={mainWord} style={{ width: '118px', height: '118px' }} />
          <h2>{mainWord}</h2>
        </div>
      )}
      <Button onClick={showFourWords} disabled={!showMainWord}>Show Answers</Button>

      {showAdditionalWords && (
        <AnswerComponent 
          mainWord={mainWord}
          randomWords={randomWords}
          setFeedback={setFeedback}
          feedback={feedback}
          correctFeedback="Correct!"
          incorrectFeedback="Try Again!"
        />
      )}

      {feedback && <h1>{feedback}</h1>}

      <div className="Resetbloc">
        <Button onClick={resetGame}>Reset Game</Button>
      </div>
    </div>
  );
};

export default GameBoard;
