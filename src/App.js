import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Hills from './pages/hills';
import Seabeaches from './pages/seabeaches';
import Historicsites from './pages/historicsites';
import About from './pages/about';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/home' exact component={Home} />
				<Route path='/hills' component={Hills} />
				<Route path='/seabeaches' component={Seabeaches} />
				<Route path='/historicsites' component={Historicsites} />
				<Route path='/about' component={About} />
			</Routes>
		</Router>
	);
}

export default App;
