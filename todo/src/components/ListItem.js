import React, { useState } from 'react';

const ListItem = (props) => {
	// const [ isDone, setDone ] = useState(false);
	// const cssObj = {
	// 	textDecoration: 'line-through'
	// };

	// const strikeThroughListItem = () => {
	// 	if (isDone) {
	// 		setDone(false);
	// 	} else {
	// 		setDone(true);
	// 	}
	// };

	const deleteListItem = () => {
		const id = props.uniqueId;
		props.deleteItem(id);
	};

	return (
		<React.Fragment>
			{/* <div onClick={strikeThroughListItem} style={isDone ? cssObj : null}>
				{props.value}
			</div> */}
			<div onClick={deleteListItem}>
				<li>{props.value}</li>
			</div>
		</React.Fragment>
	);
};

export default ListItem;
