import React from 'react';
import ProjectsDetails from '../components/ProjectsDetails';
import ProjectsDetailsEven from '../components/ProjectsDetailsEven';
import '../styles/Pages/Projects.css';
import Orit from '../assets/orit.png';
import SuperCross from '../assets/supercross.png';
import NftMobile from '../assets/nft.png';
import Trakkker from '../assets/trakkker.png';

import Portfolio from '../assets/portfolio.jpg';

function Projects() {
	return (
		<div className='project'>
			<div className='project__section'>
				<div className='project__title'>
					<h3>01. Portfolio</h3>
					<div className='about__staight'></div>
				</div>
				<ProjectsDetails
					category='Web Development'
					desc='I built my portfolio using Reactjs. A major reason why I used it is to write basic TypeScript codes. Check out few of my previous projects.'
					tech1='SASS'
					tech2='Netify'
					tech3='Tailwind CSS'
					tech4='React'
					image={Portfolio}
					liveLink='https://kingjamesegun.netlify.app/'
					githubLink='https://github.com/kingjamesegun/My-Portfolio		'
				/>
			</div>

			<div className='project__section'>
				<div className='project__titleEven'>
					<h3>02. Supercross</h3>
					<div className='about__staight'></div>
				</div>
				<ProjectsDetailsEven
					category='UI/UX design'
					desc='Designed a bike racing app for a client who was sponsored MONSTER ENERGY. This design was used as a short presentation of what will be developed later this year.'
					tech1='Figma'
					tech2='Unsplash'
					tech3='Photoshop'
					tech4=''
					image={SuperCross}
					liveLink='https://www.figma.com/file/7ATYnOb2V7HtFySeIp3fqJ/Supercross-Motorbike?node-id=440%3A2'
				/>
			</div>

			<div className='project__section'>
				<div className='project__title'>
					<h3>03. Orit Quiz App</h3>
					<div className='about__staight'></div>
				</div>
				<ProjectsDetails
					category='Web Development'
					desc='This is a Quiz App that rate your IQ. I name it after a client name. It helped me to know more on TypeScript.'
					tech1='SASS'
					tech2='Netify'
					tech3='TypeScript'
					tech4='React'
					image={Orit}
					liveLink='https://61f4b0543fcef5000728203e--naughty-gates-8c831c.netlify.app/'
					githubLink='https://github.com/kingjamesegun/QuizApp'
				/>
			</div>

			<div className='project__section'>
				<div className='project__titleEven'>
					<h3>04. NFT Mobile Store</h3>
					<div className='about__staight'></div>
				</div>
				<ProjectsDetailsEven
					category='UI/UX design'
					desc='Desgined this after working with group of developers. This has been one of the simplest and nice design. What made it unique is the prototype.'
					tech1='Figma'
					tech2='Photoshop'
					tech3='Altdeck'
					tech4=''
					image={NftMobile}
					liveLink='https://www.figma.com/file/X80Kc5d6UBwkh7sXK0yxIc/NFT-Mobile-App?node-id=201%3A2'
				/>
			</div>

			
			<div className='project__section'>
				<div className='project__title'>
					<h3>05. Trakkker</h3>
					<div className='about__staight'></div>
				</div>
				<ProjectsDetails
					category='Web Development'
					desc='Best place to track the price of Jumia prices.Inspiration came from a friend😉(Olamidun) that built the backend using Python.'
					tech1='SASS'
					tech2='Netify'
					tech3='Tailwind CSS'
					tech4='React'
					image={Trakkker}
					liveLink='https://affectionate-goldwasser-b25532.netlify.app/'
					githubLink='https://github.com/kingjamesegun/Trakkkr.git'
				/>
			</div>

		</div>

		
	);
}

export default Projects;
