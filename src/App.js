import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Historicsites from './pages/historicsites';
import Beaches from './components/Beaches';
 
import About from './pages/about';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/seabeaches' element={<Beaches />} />
				<Route path='/hills' element={<Home />} />
				<Route path='/historicsites' element={<Historicsites />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
