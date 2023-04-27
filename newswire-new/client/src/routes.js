import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Contact from './components/Contact';
import NewNews from './components/NewNews';
import EditNews from './components/EditNews';
import ShowNews from './components/ShowNews';
import NavBar from './components/NavBar';

const AppRoute = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/news/new" element={<NewNews />} />
					<Route path="/news/:id" element={<ShowNews />} />
					<Route path="/news/:id/edit" element={<EditNews />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default AppRoute;
