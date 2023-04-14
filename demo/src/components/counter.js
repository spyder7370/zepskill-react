import React from 'react';

class Counter extends React.Component {
	i = 0;
	clickHandler = () => {
		this.i += 1;
	};
	render() {
		return (
			<React.Fragment>
				<div>pressed: {this.i} times</div>
				<button onClick={this.clickHandler}>click me</button>
			</React.Fragment>
		);
	}
}

export default Counter;
