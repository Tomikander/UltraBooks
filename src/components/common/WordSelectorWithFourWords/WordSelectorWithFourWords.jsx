import wordObjects from '../../../data/wordObjects';  // Importing an array with data
import { getRandomWords } from '../../../utils/getRandomWords';  // Utility for getting random words

const WordSelectorWithFourWords = ({
  mainWord,
  setRandomWords,
  setShowAdditionalWords,
}) => {

  // Function for displaying additional words
  const showFourWords = () => {
    if (mainWord) {
      // Filter words excluding the main word
      const filteredWords = wordObjects.filter(wordObject => wordObject.value !== mainWord);
      const mainWordObject = wordObjects.find(wordObject => wordObject.value === mainWord);

      // Selecting random additional words
      const additionalWords = getRandomWords(filteredWords, 3);

      // We collect all the words in one array (main + additional)
      const allWords = [mainWordObject, ...additionalWords];

      // Shuffle the words randomly
      const shuffledWords = allWords.sort(() => 0.5 - Math.random());

      // Update states with new random words
      setRandomWords(shuffledWords);
      setShowAdditionalWords(true);  // Showing additional words
    }
  };

  return (
    <div className="answer">
      <button onClick={showFourWords} disabled={!mainWord}>Show Words</button>
    </div>
  );
};

export default WordSelectorWithFourWords;
