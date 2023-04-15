import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const App = () => {
	// const [ firstName, setFirstName ] = useState();
	// const [ lastName, setLastName ] = useState('');
	const [ fullName, setFullName ] = useState({
		firstName: '',
		lastName: ''
	});

	// const inputFirstNameHandler = (event) => {
	// 	setFirstName(event.target.value);
	// };
	// const inputLastNameHandler = (event) => {
	// 	setLastName(event.target.value);
	// };

	const inputFullNameHandler = (event) => {
		const className = event.target.className;
		const value = event.target.value;
		// if (className === 'firstName') {
		// 	setFullName({
		// 		firstName: value,
		// 		lastName: fullName.lastName
		// 	});
		// } else if (className === 'lastName') {
		// 	setFullName({
		// 		firstName: fullName.firstName,
		// 		lastName: value
		// 	});
		// }
		if (className === 'firstName') {
			setFullName({
				...fullName,
				firstName: value
			});
		} else if (className === 'lastName') {
			setFullName({
				...fullName,
				lastName: value
			});
		}
	};

	return (
		<React.Fragment>
			<div className="fs-1">
				hello, {fullName.firstName} {fullName.lastName}
			</div>
			<input className="firstName" onChange={inputFullNameHandler} />
			<input className="lastName" onChange={inputFullNameHandler} />
			<Button variant="info">submit</Button>
		</React.Fragment>
	);
};
export default App;
