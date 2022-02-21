import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './components/Nav';
import Projects from './Pages/Projects';
import { AnimatePresence } from 'framer-motion';

function App() {
	return (
		<div className='App'>
			<AnimatePresence exitBeforeEnter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
