import './App.css';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './components/Nav';
import Loader from './assets/loaders.svg';

const MyComp = lazy(() => import('./Pages/Projects'));

function App() {
	return (
		<Suspense
			fallback={
				<div className='loader'>
					<img src={Loader} alt='Loader' className='loader__img' />
				</div>
			}
		>
			<div className='App'>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<MyComp />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
