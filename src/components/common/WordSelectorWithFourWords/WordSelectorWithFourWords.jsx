import wordObjects from '../../../data/wordObjects'; 
import { getRandomWords } from '../../../utils/getRandomWords';  

const WordSelectorWithFourWords = ({
  mainWord,
  setRandomWords,
  setShowAdditionalWords,
}) => {

  // Function for displaying additional words
  const showFourWords = () => {
    if (mainWord) {
      
      const filteredWords = wordObjects.filter(wordObject => wordObject.value !== mainWord);
      const mainWordObject = wordObjects.find(wordObject => wordObject.value === mainWord);

     
      const additionalWords = getRandomWords(filteredWords, 3);

      
      const allWords = [mainWordObject, ...additionalWords];

      
      const shuffledWords = allWords.sort(() => 0.5 - Math.random());

      
      setRandomWords(shuffledWords);
      setShowAdditionalWords(true);  
    }
  };

  return (
    <div className="answer">
      <button onClick={showFourWords} disabled={!mainWord}>Show Words</button>
    </div>
  );
};

export default WordSelectorWithFourWords;
