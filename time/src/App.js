import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const App = () => {
	const [ time, setTime ] = useState(new Date().toLocaleTimeString());

	const timeClickHandler = () => {
		setTime(new Date().toLocaleTimeString());
	};
	setInterval(timeClickHandler, 1000);

	return (
		<React.Fragment>
			<div className="title fs-1">Clock</div>
			<div className="time fs-1">{time}</div>
			<Button variant="success" onClick={timeClickHandler}>
				click me to update time
			</Button>
		</React.Fragment>
	);
};

export default App;
