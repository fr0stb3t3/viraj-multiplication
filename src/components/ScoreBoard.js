import React from 'react'
import './ScoreBoard.css';

const ScoreBoard = (props) => {
	console.log(props.userScore)
	// [score, setScore] = useState(0)
	return (
		<div>
			<div className="scoreboard"><h2>SCORE : {props.userScore}</h2></div>
		</div>
	)
}

export default ScoreBoard;