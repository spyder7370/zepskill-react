import React from 'react';
import '../stylesheets/app.css';

const Greeting = (props) => {
	// console.log(props);
	// const clickHandler = () => {
	// 	alert('you have clicked the greeting');
	// };
	return (
		<React.Fragment>
			<h3 className="heading">hello {props.name}</h3>
			<h3>bye {props.name}</h3>
		</React.Fragment>
	);
};

// const styleObj = {
// 	color: 'red',
// 	border: '2px solid black',
// 	backgroundColor: 'yellow'
// };
// const name = 'john';
// class Greeting extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<h3 className="heading">hello {name}</h3>
// 				<h3>bye {name}</h3>
// 			</React.Fragment>
// 		);
// 	}
// }

export default Greeting;
