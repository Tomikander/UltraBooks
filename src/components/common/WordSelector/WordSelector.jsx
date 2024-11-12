import wordObjects from '../../../data/wordObjects';  // Path to your data array

const WordSelector = ({ setMainWord, setMainImage, setShowMainWord, setShowAdditionalWords, setFeedback }) => {

  // Function for selecting a new word
  const showNewQuestionWord = () => {
    // Randomly select a word from the array
    const randomIndex = Math.floor(Math.random() * wordObjects.length);
    const selectedWord = wordObjects[randomIndex];

    // Update the state in the parent component
    setMainWord(selectedWord.value);
    setMainImage(selectedWord.src);
    setShowMainWord(true);  // Showing the main word
    setShowAdditionalWords(false);  // Showing the main word
    setFeedback('');  // Clearing feedback
  };

  return (
    <button onClick={showNewQuestionWord}>Start</button>
  );
};

export default WordSelector;
