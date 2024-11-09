const answerComponent = ({
  mainWord,
  randomWords,
	setFeedback,
	feedback,
	correctFeedback,
	incorrectFeedback
})	=> {
	const handleAnswer = (word) =>{
		if(word === mainWord)	{
			setFeedback(correctFeedback);
		}	else {
			setFeedback(incorrectFeedback);
		}
	};

	return (
		<div>
			{randomWords.map((word, index)	=>	(
				<button key={index} onClick={() => handleAnswer(word)}>
					{word}
				</button>
			))}
		</div>
	);
};

export default answerComponent
