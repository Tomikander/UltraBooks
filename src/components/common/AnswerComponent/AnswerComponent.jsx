export const AnswerComponent = ({
  	mainWord,
  	randomWords,
	setFeedback,
	correctFeedback,
	incorrectFeedback
})	=> {
	const handleAnswer = (wordObject) =>{
		if(wordObject.value === mainWord)	{
			setFeedback(correctFeedback);
		}	else {
			setFeedback(incorrectFeedback);
		}
	};

	return (
		<div>
			{randomWords.map((wordObject, index)	=>	(
				<button key={index} onClick={() => handleAnswer(wordObject)}>
					{wordObject.value}
				</button>
			))}
		</div>
	);
};
