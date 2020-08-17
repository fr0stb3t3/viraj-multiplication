import React, { useState } from 'react';
import './Clock.css'

const Clock = (props) => {
	let [currTime, setCurrTime] = useState(15000);
	if (currTime > 0 && props.toStart) {
		setTimeout(() => {
			setCurrTime(currTime - 1)
		}, 1000)
	}
	else if (currTime <= 0 && props.toStart) {
		alert("Stop")
	}
	return (
		<div>
			<div className="clock clock-flex-center">
				<p>
					{currTime}
				</p>
			</div>
		</div>
	)
}

export default Clock;