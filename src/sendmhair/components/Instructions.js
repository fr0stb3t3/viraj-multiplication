import React from 'react';
import "./instructions.css";

const Instructions = () => {
	return (
		<div className="instructions">
			<p> 30 random multiplication questions will be displayed on the screen, and a 150 second timer will start.
			<br /> Try to do as many questions as possible, for each correct answer, you get +2 points, for each negative answer, 1 point is removed from your total score.
			<br /> Your score is displayed on the upper right side of the screen</p>
			<p>The game will start when you press the start button</p>
		</div >
	)
}

export default Instructions