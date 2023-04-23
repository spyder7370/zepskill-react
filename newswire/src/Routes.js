import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Post from './components/Post';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/posts/:id" element={<Post />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
};

export default AppRoutes;
