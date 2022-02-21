import '../styles/Pages/Home.css';
import Cv from '../assets/cv.docx.pdf';
import { motion } from 'framer-motion';

function Home() {
	return (
		<motion.div exit={{opacity:0}} initial={{opacity: 0}} animate={{opacity: 1}} className='home'>
			<motion.div
				className='home__name'
				initial={{y: -60, opacity: 0}}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 1 }}
			>
				I'm James
			</motion.div>
			<div className='home__title'>I'm a React Developer & UI/UX Designer</div>

			<motion.button
				className='home__cv'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<a href={Cv} download='JamesOkunolaCV.pdf'>
					Download CV
				</a>
			</motion.button>
		</motion.div>
	);
}

export default Home;
