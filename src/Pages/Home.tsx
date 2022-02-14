import '../styles/Pages/Home.css';
import Cv from '../assets/cv.docx.pdf';

function Home() {
	return (
		<div className='home'>
			<div className='home__name'>I'm James</div>
			<div className='home__title'>I'm a React Developer & UI/UX Designer</div>

			<button className='home__cv'>
				<a href={Cv} download='JamesOkunolaCV.pdf'>
					Download CV
				</a>
			</button>
		</div>
	);
}

export default Home;
