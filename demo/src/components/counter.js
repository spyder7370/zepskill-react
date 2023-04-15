import React, { useState } from 'react';

// class Counter extends React.PureComponent {
// 	state = {
// 		name: 'john'
// 	};
// 	clickHandler = () => {
// 		this.setState({
// 			name: 'abcd'
// 		});
// 	};
// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	if (this.state.name === nextState.name) {
// 	// 		return false;
// 	// 	}
// 	// 	return true;
// 	// }
// 	render() {
// 		console.log('rendering the page');
// 		return (
// 			<React.Fragment>
// 				<div>name is: {this.state.name}</div>
// 				<button onClick={this.clickHandler}>click me to change name</button>
// 			</React.Fragment>
// 		);
// 	}
// }

const Counter = (props) => {
	const [ cnt, setCnt ] = useState(props.initialValue);
	const clickHandler = () => {
		setCnt(cnt + 1);
	};
	return (
		<React.Fragment>
			<div>pressed: {cnt} times</div>
			<button onClick={clickHandler}>click me</button>
			{props.children}
		</React.Fragment>
	);
};

export default Counter;
