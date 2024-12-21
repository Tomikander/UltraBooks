import wordObjects from '../../../data/wordObjects';  

const WordSelector = ({ setMainWord, setMainImage, setShowMainWord, setShowAdditionalWords, setFeedback }) => {

  // Function for selecting a new word
  const showNewQuestionWord = () => {
    // Randomly select a word from the array
    const randomIndex = Math.floor(Math.random() * wordObjects.length);
    const selectedWord = wordObjects[randomIndex];

    // Update the state in the parent component
    setMainWord(selectedWord.value);
    setMainImage(selectedWord.src);
    setShowMainWord(true);  
    setShowAdditionalWords(false);  
    setFeedback(''); 
  };

  return (
    <button onClick={showNewQuestionWord}>Start</button>
  );
};

export default WordSelector;
