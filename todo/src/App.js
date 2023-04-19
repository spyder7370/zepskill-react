import React, { useState } from 'react';
import ListItem from './components/ListItem';

function App() {
	const [ list, setList ] = useState([]);
	const [ input, setInput ] = useState('');

	const inputChangeHandler = (event) => {
		const newInputVal = event.target.value;
		setInput(newInputVal);
	};

	const addItemToList = () => {
		setList((prevList) => {
			return [ ...list, input ];
		});
		setInput('');
	};

	const deleteItemFromList = (id) => {
		const newArr = list.filter((item, idx) => {
			return idx !== id;
		});
		setList(newArr);
	};
	return (
		<React.Fragment>
			<div className="container">
				<div className="heading">
					<h1>TO-DO List</h1>
				</div>
				<div className="form">
					<input type="text" onChange={inputChangeHandler} value={input} />
					<button onClick={addItemToList}>
						<span>Add</span>
					</button>
				</div>
				<div>
					<ul>
						{list.map((item, idx) => {
							return <ListItem value={item} uniqueId={idx} key={idx} deleteItem={deleteItemFromList} />;
						})}
						{/* {for(let item of list){
								return <div>{item}</div>
							}} */}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
