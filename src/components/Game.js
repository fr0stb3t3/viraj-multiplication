import React, { useState } from 'react';
import './Game.css'
import ScoreBoard from './ScoreBoard';


const Game = (props) => {

	if (props.sendALert) {
		console.log('alert')
		alert(`The game has finished, your score is ${score}`);
	}

	const scoreSubmitHandler = () => {
		let cardElement = document.querySelector("#Card");
		let textboxElement = document.querySelector("#textBox")
		textboxElement.value = '';
		setUserAns(textValue)
		if (parseInt(textValue) === (num1 * num2)) {
			cardElement.className += " correctAns_flip"
			setTimeout(function () {
				cardElement.classList.remove("correctAns_flip");
			}, 500);

			setScore(score + 2);
			setNewQuesFlag(true);
		}
		else {
			cardElement.className += " wrongAns_shake"
			setTimeout(function () {
				cardElement.classList.remove("wrongAns_shake");
			}, 500);

			setScore(score - 1);
			setNewQuesFlag(false);
			setVals([num1, num2]);
		}
	}
	let [vals, setVals] = useState([null, null]);
	let [score, setScore] = useState(0);
	let [newQues_Flag, setNewQuesFlag] = useState(true);
	let [userAns, setUserAns] = useState(null);

	let [num1, num2] = [null, null];
	if (newQues_Flag) {
		num1 = Math.floor(((Math.random() * 100) % 4) + 2);
		num2 = Math.floor(((Math.random() * 100) % 9) + 2);
		newQues_Flag = false

	}
	else {
		num1 = vals[0];
		num2 = vals[1];

	}

	console.log("render 12");
	let textValue = userAns === null ? -1 : userAns;


	return (
		< div >
			<ScoreBoard userScore={score} />
			<div className="GameContentContainer">
				<div className="CalculationContainer">
					<div className="CalculationCard" id="Card">
						<div className="question">
							{num1} X {num2}
						</div>
						<div className="answerbox">
							<input id="textBox" type="text" onChange={(event) => textValue = event.target.value}></input>
						</div>
					</div>
					<div>
						<div className="submitAnsButton" onClick={scoreSubmitHandler}>Submit</div>
					</div>
				</div>
			</div >
		</div >
	)
}

export default Game