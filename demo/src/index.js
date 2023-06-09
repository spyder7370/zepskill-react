import React from 'react';
import ReactDOM from 'react-dom/client';

import Greeting from './components/greeting';
import List from './components/list';
import Counter from './components/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Greeting name="abcd" />
		<Greeting name="mno" />
		<Greeting name="xyz" />
		<List />
		<Counter>
			<h1>inside counter custom component</h1>
			<p>paragraph inside custom component</p>
		</Counter>
	</React.StrictMode>
);
