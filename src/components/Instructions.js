import React from 'react';
import "./instructions.css";

const Instructions = (props) => {
	const dropInstructionCanvas = () => {
		props.passedStartTimer();
		let element = document.querySelector("#InstructionCanvas");

		// element.style.transform = "skewY(40deg)"
		// element.style.transform = "skewX(90deg) skewY(90deg)"
		// element.style.transform = "rotateZ(90deg)"
		element.style.transform = "rotateZ(90deg) translateX(100%)"
		// element.style.transform = "translateY(600px)"
	}
	return (
		<div id="InstructionCanvas">
			<div className="InstructionParentContainer">
				<div className="Instructions">
					<p> Random multiplication questions will be displayed on the screen, and a 150 second timer will start.
					<br /> Try to do as many questions as possible, for each correct answer, you get +2 points, for each negative answer, 1 point is removed from your total score.
					<br /> Your score is displayed on the upper right side of the screen</p>
					<p>The game will start when you press the start button</p>
				</div >
			</div>
			<div className="StartGame-flex">
				<div className="StartGame" onClick={dropInstructionCanvas}><p><strong>Start Game</strong></p></div>
			</div>
		</div >
	)
}

export default Instructions